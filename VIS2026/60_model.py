"""
Pipeline: load preprocessed .npy by microenvironment -> create 16x16x12 subgraphs -> train GAT -> extract positions -> save JSON.
Dimension convention everywhere: (channel, z, y, x) = (C, Z, Y, X). Preprocessed file shape (C, Z, Y, X).
Supports Dataset 1 and Dataset 2.
"""

from __future__ import annotations

import json
import logging
import os
import random
from collections import defaultdict
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import numpy as np
import torch
import torch.nn as nn
from tqdm import tqdm
import torch.nn.functional as F
from torch_geometric.data import Batch, Data
from torch_geometric.nn import GATConv, global_add_pool, global_max_pool, global_mean_pool

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def _json_convert(obj: Any) -> Any:
    """Convert numpy/torch types to native Python for JSON serialization."""
    if isinstance(obj, (np.floating, np.float32, np.float64)):
        return float(obj)
    if isinstance(obj, (np.integer, np.int32, np.int64)):
        return int(obj)
    if isinstance(obj, np.ndarray):
        return obj.tolist()
    if isinstance(obj, dict):
        return {k: _json_convert(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [_json_convert(v) for v in obj]
    return obj
SELECTED_DATASET = 2  # Set to 1 or 2 to run pipeline on that dataset

# ---------------------------------------------------------------------------
# Dataset configuration (aligned with 55_preprocess.py, 40_normalizedChannel.py)
# ---------------------------------------------------------------------------
DATASETS = {
    1: {"name": "Dataset 1"},
    2: {"name": "Dataset 2"},
}

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent
BASE_DATA_DIR = BASE_DIR / "data"
BASE_OUTPUT_DIR = BASE_DIR / "output"
BASE_OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


def get_channels_dir(dataset_id: Optional[int] = None) -> Path:
    """Return channels directory: data/channels_dataset1 or data/channels_dataset2."""
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    return BASE_DATA_DIR / f"channels_dataset{did}"


def get_normalized_dir(dataset_id: Optional[int] = None) -> Path:
    """Return normalized directory: data/NormalizedChannel_dataset1 or NormalizedChannel_dataset2."""
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    return BASE_DATA_DIR / f"NormalizedChannel_dataset{did}"


def get_preprocessed_dir(dataset_id: Optional[int] = None) -> Path:
    """Return preprocessed directory: data/preprocessed_dataset1 or preprocessed_dataset2."""
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    return BASE_DATA_DIR / f"preprocessed_dataset{did}"


def get_output_dir(dataset_id: Optional[int] = None) -> Path:
    """Return output directory: output/dataset1 or output/dataset2."""
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    out = BASE_OUTPUT_DIR / f"dataset{did}"
    out.mkdir(parents=True, exist_ok=True)
    return out


def get_subgraphs_dir(dataset_id: Optional[int] = None) -> Path:
    """Return subgraphs directory: data/subgraphs_dataset1 or subgraphs_dataset2."""
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    return BASE_DATA_DIR / f"subgraphs_dataset{did}"

# ---------------------------------------------------------------------------
# Microenvironments: name (used for output filename) + channels to use
# ---------------------------------------------------------------------------
MICROENVIRONMENTS: List[Dict[str, Any]] = [
    {"name": "Inflammation", "channels": ["MART1", "MX1", "IRF1", "CD11c"]},
    {"name": "Immune cells", "channels": ["CD8a", "CD4", "CD15", "CD11c", "CD11b", "CD103", "CD20"]},
    {"name": "B-cell", "channels": ["CD31", "CD20", "CD11b", "CD11c", "CD4"]},
]
# Which microenvironment to run when using default (index into MICROENVIRONMENTS)
SELECTED_MICROENVIRONMENT_INDEX = 0

CHANNEL_NAMES: List[str] = MICROENVIRONMENTS[SELECTED_MICROENVIRONMENT_INDEX]["channels"]
MICROENVIRONMENT_NAME: str = MICROENVIRONMENTS[SELECTED_MICROENVIRONMENT_INDEX]["name"]

# Subgraph: composite voxel = n×n×n block. Patch size z=12, x=16, y=16. Each composite voxel = one node.
PATCH_Z = 12
PATCH_Y = 16
PATCH_X = 16
# Ibar: sum of normalized voxel values > INTENSITY_THRESHOLD over all channels in each composite voxel.
# avg_term = Ibar / count_pos where count_pos = number of voxels > threshold.
INTENSITY_THRESHOLD = 0.05
# ROI: 8 neighbors in (x,y) plane; ROI centers step by ROI_STEP and must be 1 away from border.
ROI_STEP = 3

# Training
EPOCHS = 10
BATCH_SIZE = 32
LR = 0.01
HIDDEN = 32
PROJ_DIM = 16
HEADS = 4
DROPOUT = 0.1
TOP_K_POSITIONS = 2000
# Node-level score: Score_r^(k)(i) = max{ i_ij^(k) }; optionally take top p% of voxels (paper default 5%).
TOP_PERCENT = 100.0  # top p% by Score_r^(k)(i); used if > 0 to limit output size


def microenvironment_to_filename(name: str) -> str:
    """Short filename: e.g. 'Melanocytic tumor identity' -> 'Melanocytic'."""
    s = name.strip().split()[0] if name.strip() else "preprocessed"
    return "".join(c for c in s if c.isalnum() or c in "._-") or "preprocessed"


def load_preprocessed(microenvironment_name: str, preprocessed_dir: Path) -> np.ndarray:
    """
    Load preprocessed .npy. File is (N, 5) with columns [channel, value, z, y, x].
    Rebuild volume (C, Z, Y, X) so that volume[c, z, y, x] = value from row (c, value, z, y, x).
    Returns (C, Z, Y, X) float32 for pipeline.
    """
    fname = microenvironment_to_filename(microenvironment_name) + ".npy"
    path = preprocessed_dir / fname
    if not path.exists():
        raise FileNotFoundError(f"Preprocessed file not found: {path}. Run preprocess first.")
    data = np.load(path).astype(np.float32)
    if data.ndim == 2 and data.shape[1] == 5:
        # Table format: columns [channel, value, z, y, x]
        c_col, v_col, z_col, y_col, x_col = 0, 1, 2, 3, 4
        C = int(data[:, c_col].max()) + 1
        Z = int(data[:, z_col].max()) + 1
        Y = int(data[:, y_col].max()) + 1
        X = int(data[:, x_col].max()) + 1
        volume = np.zeros((C, Z, Y, X), dtype=np.float32)
        volume[data[:, c_col].astype(np.int32), data[:, z_col].astype(np.int32), data[:, y_col].astype(np.int32), data[:, x_col].astype(np.int32)] = data[:, v_col]
        return volume
    if data.ndim == 5:
        return data[:, 0, :, :, :].astype(np.float32)  # legacy (C, 1, Z, Y, X)
    if data.ndim == 4:
        return data.astype(np.float32)  # (C, Z, Y, X)
    raise ValueError(f"Unexpected preprocessed shape: {data.shape}")


def get_channel_indices(channel_names: List[str], channel_set_path: Path) -> List[int]:
    """Resolve channel names to indices using channel_set.json."""
    if not channel_set_path.exists():
        raise FileNotFoundError(f"Channel set not found: {channel_set_path}")
    with open(channel_set_path) as f:
        channel_set = json.load(f)
    name_to_index = {rec["name"]: rec["channel_index"] for rec in channel_set}
    indices = []
    for name in channel_names:
        if name not in name_to_index:
            raise ValueError(f"Channel name '{name}' not found in channel_set.json")
        indices.append(name_to_index[name])
    return indices


def load_normalized_channels(channel_indices: List[int], normalized_dir: Path) -> np.ndarray:
    """Load normalized .npy for each channel index; return (channel, z, y, x) = (C, Z, Y, X)."""
    channels = []
    for i in channel_indices:
        path = normalized_dir / f"{i}.npy"
        if not path.exists():
            raise FileNotFoundError(f"Normalized channel not found: {path}")
        arr = np.load(path)
        channels.append(arr)
    return np.stack(channels, axis=0).astype(np.float32)


def _grid_3d_edges_zyx(nz: int, ny: int, nx: int) -> Tuple[np.ndarray, np.ndarray]:
    """6-neighbor edges for grid with dimension order (z, y, x). Node index = z*ny*nx + y*nx + x."""
    def idx(z: int, y: int, x: int) -> int:
        return z * ny * nx + y * nx + x
    src, dst = [], []
    for z in range(nz):
        for y in range(ny):
            for x in range(nx):
                i = idx(z, y, x)
                if z + 1 < nz:
                    src.append(i); dst.append(idx(z + 1, y, x))
                if y + 1 < ny:
                    src.append(i); dst.append(idx(z, y + 1, x))
                if x + 1 < nx:
                    src.append(i); dst.append(idx(z, y, x + 1))
    return np.array(src, dtype=np.int64), np.array(dst, dtype=np.int64)


def create_subgraphs_3d(
    volume: np.ndarray,
    patch_z: int = PATCH_Z,
    patch_y: int = PATCH_Y,
    patch_x: int = PATCH_X,
    save_dir: Optional[Path] = None,
) -> Tuple[List[Data], List[Path]]:
    """
    Build one graph per non-overlapping patch. Volume shape (channel, z, y, x) = (C, Z, Y, X).
    Patch size z=12, y=16, x=16. Each patch has all channel values and local coords (0..11, 0..15, 0..15).
    If save_dir is set, each subgraph is saved as a small .npz with:
      - "patch": (C, PATCH_Z, PATCH_Y, PATCH_X) float32 — values for all channels in that patch
      - "origin": (3,) int (iz, iy, ix) — coordinates of patch in the full volume
    Returns (list of Data for training, list of saved .npz paths).
    """
    C, Z, Y, X = volume.shape
    edge_src, edge_dst = _grid_3d_edges_zyx(patch_z, patch_y, patch_x)
    edge_index = np.stack([np.concatenate([edge_src, edge_dst]), np.concatenate([edge_dst, edge_src])], axis=0)
    edge_attr = np.ones(edge_index.shape[1], dtype=np.float32)

    graphs = []
    saved_paths: List[Path] = []
    index_list: List[Dict[str, Any]] = []
    if save_dir is not None:
        save_dir = Path(save_dir)
        save_dir.mkdir(parents=True, exist_ok=True)

    patch_coords = [(iz, iy, ix) for iz in range(0, Z, patch_z) for iy in range(0, Y, patch_y) for ix in range(0, X, patch_x)]
    for iz, iy, ix in tqdm(patch_coords, desc="Create subgraphs", unit="patch"):
                patch = volume[:, iz:iz + patch_z, iy:iy + patch_y, ix:ix + patch_x].copy()
                if patch.shape[1] < patch_z or patch.shape[2] < patch_y or patch.shape[3] < patch_x:
                    pad = np.zeros((C, patch_z, patch_y, patch_x), dtype=volume.dtype)
                    pad[:, :patch.shape[1], :patch.shape[2], :patch.shape[3]] = patch
                    patch = pad
                origin = np.array([iz, iy, ix], dtype=np.int32)
                if save_dir is not None:
                    npz_path = save_dir / f"subgraph_iz{iz}_iy{iy}_ix{ix}.npz"
                    np.savez_compressed(npz_path, patch=patch.astype(np.float32), origin=origin)
                    saved_paths.append(npz_path)
                    index_list.append({"file": npz_path.name, "origin": [int(iz), int(iy), int(ix)]})
                # (C, PZ, PY, PX) -> (PZ*PY*PX, C) for GAT
                nodes = patch.reshape(C, -1).T
                x_t = torch.tensor(nodes, dtype=torch.float32)
                center = (iz, iy, ix)
                graphs.append(Data(
                    x=x_t,
                    edge_index=torch.tensor(edge_index, dtype=torch.long),
                    edge_attr=torch.tensor(edge_attr, dtype=torch.float32),
                    center=center,
                ))
    if save_dir is not None and index_list:
        with open(save_dir / "index.json", "w") as f:
            json.dump({"patch_shape": [patch_z, patch_y, patch_x], "subgraphs": index_list}, f, indent=2)
    return graphs, saved_paths


def load_subgraph_npz(npz_path: Path) -> Tuple[np.ndarray, Tuple[int, int, int]]:
    """
    Load one subgraph .npz. Returns (patch, origin).
    patch shape (C, PATCH_Z, PATCH_Y, PATCH_X); value at channel c, local (z,y,x) = patch[c,z,y,x].
    origin = (iz, iy, ix); global coords = (iz+z, iy+y, ix+x).
    """
    data = np.load(npz_path)
    patch = data["patch"]
    origin = tuple(int(data["origin"][i]) for i in range(3))
    return patch, origin


# ---------------------------------------------------------------------------
# Composite-voxel graph: Ibar = sum of voxel values > 0.05 over channels; 8-neighbor ROI.
# ---------------------------------------------------------------------------
# 8-neighbor offsets in (iy, ix) plane (same iz): (dy, dx)
_EIGHT_NEIGHBORS = [
    (1, 0), (-1, 0), (0, 1), (0, -1),
    (1, 1), (1, -1), (-1, -1), (-1, 1),
]


def build_composite_voxel_graph(
    volume: np.ndarray,
    patch_z: int = PATCH_Z,
    patch_y: int = PATCH_Y,
    patch_x: int = PATCH_X,
) -> Tuple[Data, np.ndarray, np.ndarray, np.ndarray, Tuple[int, int, int]]:
    """
    Ibar_i = sum over all channels of (sum of v for v in composite(i) where v > INTENSITY_THRESHOLD).
    count_pos_i = number of voxels > threshold in composite i. avg_term_i = Ibar_i / count_pos_i (for scoring).
    Graph: 8-neighbor connectivity in (iy, ix) plane (same iz). w_ij = 1.0.
    Returns: (full_graph, centers (M,3), Ibar (M,), count_pos (M,), grid_shape (nz, ny, nx)).
    """
    C, Z, Y, X = volume.shape
    th = INTENSITY_THRESHOLD
    centers = []
    ibar_list = []
    count_pos_list = []
    for iz in range(0, Z, patch_z):
        for iy in range(0, Y, patch_y):
            for ix in range(0, X, patch_x):
                patch = volume[:, iz:iz + patch_z, iy:iy + patch_y, ix:ix + patch_x]
                if patch.size == 0:
                    continue
                cz = iz + min(patch_z, patch.shape[1]) // 2
                cy = iy + min(patch_y, patch.shape[2]) // 2
                cx = ix + min(patch_x, patch.shape[3]) // 2
                centers.append([cz, cy, cx])
                # Ibar = sum of all voxel values > th (all channels); count_pos = number of such voxels
                mask = patch > th
                ibar_list.append(float(np.sum(patch * mask)))
                count_pos_list.append(int(np.sum(mask)))
    centers = np.array(centers, dtype=np.float32)
    Ibar = np.array(ibar_list, dtype=np.float32)
    count_pos = np.array(count_pos_list, dtype=np.float32)
    count_pos = np.maximum(count_pos, 1e-12)
    M = centers.shape[0]
    nz = len(range(0, Z, patch_z))
    ny = len(range(0, Y, patch_y))
    nx = len(range(0, X, patch_x))
    grid_shape = (nz, ny, nx)

    # Node features: normalized centroid (3) + Ibar and count_pos as channel-like (e.g. 2) for GAT
    x_norm = centers.copy()
    x_norm[:, 0] = x_norm[:, 0] / max(Z, 1)
    x_norm[:, 1] = x_norm[:, 1] / max(Y, 1)
    x_norm[:, 2] = x_norm[:, 2] / max(X, 1)
    feat_extra = np.stack([Ibar, Ibar / count_pos], axis=1).astype(np.float32)  # (M, 2)
    node_features = np.concatenate([x_norm, feat_extra], axis=1).astype(np.float32)  # (M, 5)

    # Linear index: (g_iz, g_iy, g_ix) -> g_iz * (ny*nx) + g_iy * nx + g_ix
    def grid_to_idx(gi: int, gj: int, gk: int) -> int:
        return gi * (ny * nx) + gj * nx + gk

    # Edges: 8 neighbors in (iy, ix) plane only
    edge_src, edge_dst, edge_w = [], [], []
    for gi in range(nz):
        for gj in range(ny):
            for gk in range(nx):
                i = grid_to_idx(gi, gj, gk)
                if i >= M:
                    continue
                for dy, dx in _EIGHT_NEIGHBORS:
                    nj, nk = gj + dy, gk + dx
                    if 0 <= nj < ny and 0 <= nk < nx:
                        j = grid_to_idx(gi, nj, nk)
                        if j < M:
                            edge_src.append(i)
                            edge_dst.append(j)
                            edge_w.append(1.0)
    edge_index = np.stack([np.array(edge_src), np.array(edge_dst)], axis=0)
    edge_attr = np.array(edge_w, dtype=np.float32)

    full_graph = Data(
        x=torch.tensor(node_features, dtype=torch.float32),
        edge_index=torch.tensor(edge_index, dtype=torch.long),
        edge_attr=torch.tensor(edge_attr, dtype=torch.float32),
    )
    full_graph.centers = centers
    full_graph.mean_scalar = Ibar
    return full_graph, centers, Ibar, count_pos, grid_shape


def extract_ego_subgraphs(
    full_graph: Data,
    centers: np.ndarray,
) -> List[Data]:
    """
    For each node i, extract subgraph: node i + all j with (i,j) in E (neighbors within radius).
    Each training instance = one center node + neighbors. Returns list of Data for training.
    """
    edge_index = full_graph.edge_index.numpy()
    num_nodes = full_graph.x.shape[0]
    adj = defaultdict(set)
    for t in range(edge_index.shape[1]):
        i, j = int(edge_index[0, t]), int(edge_index[1, t])
        adj[i].add(j)
    subgraphs = []
    for center_idx in tqdm(range(num_nodes), desc="Ego subgraphs", unit="node"):
        neighbors = list(adj[center_idx])
        if len(neighbors) == 0:
            continue
        node_set = {center_idx} | set(neighbors)
        node_list = sorted(node_set)
        local_to_global = {g: l for l, g in enumerate(node_list)}
        n_local = len(node_list)
        x_local = full_graph.x[node_list]
        edge_src, edge_dst, edge_w = [], [], []
        for gi in node_list:
            for gj in adj[gi]:
                if gj not in node_set:
                    continue
                li, lj = local_to_global[gi], local_to_global[gj]
                edge_src.append(li)
                edge_dst.append(lj)
                # Look up edge weight from full graph
                ei, ea = full_graph.edge_index, full_graph.edge_attr
                mask = (ei[0] == gi) & (ei[1] == gj)
                w = float(ea[mask][0]) if mask.any() and ea is not None else 1.0
                edge_w.append(w)
        if len(edge_src) < 1:
            continue
        edge_index_local = torch.tensor([edge_src, edge_dst], dtype=torch.long)
        edge_attr_local = torch.tensor(edge_w, dtype=torch.float32)
        g = Data(x=x_local, edge_index=edge_index_local, edge_attr=edge_attr_local, center_idx=center_idx, center=tuple(centers[center_idx]))
        subgraphs.append(g)
    return subgraphs


def prepare_graph(g: Data, target_channels: int) -> Data:
    """Pad or trim node features to target_channels."""
    x = g.x.clone()
    if x.shape[1] < target_channels:
        x = torch.cat([x, torch.zeros(x.shape[0], target_channels - x.shape[1])], dim=1)
    elif x.shape[1] > target_channels:
        x = x[:, :target_channels]
    return Data(x=x, edge_index=g.edge_index.clone(), edge_attr=g.edge_attr.clone() if g.edge_attr is not None else None, center=g.center)


def augment_graph(g: Data, target_channels: int, mask_ratio: float = 0.1, edge_drop: float = 0.1) -> Data:
    """Node feature masking and optional edge dropping for contrastive learning (paper: Augment)."""
    g = prepare_graph(g, target_channels)
    n = g.x.shape[0]
    k = max(1, int(n * mask_ratio))
    idx = torch.randperm(n)[:k]
    g.x[idx] = 0.0
    if edge_drop > 0 and g.edge_index.numel() > 0:
        e = g.edge_index.shape[1]
        keep = torch.rand(e, device=g.edge_index.device) > edge_drop
        g.edge_index = g.edge_index[:, keep]
        if g.edge_attr is not None:
            g.edge_attr = g.edge_attr[keep]
    return g


class ConGAT(nn.Module):
    """
    Graph attention over composite-voxel spatial graph. Node feature f_i = (x_i_norm, I_i) in R^(3+C).
    Initial edge weight w_ij = 1/(||x_i-x_j||+1); incorporated in attention in a learnable manner (paper:
    learnable bias / data-driven). Updated edge weight is used in GAT and in scoring.
    Output: node embeddings z_i and saliency s_i = sigmoid(w_k^T z_i).
    """
    def __init__(self, in_channels: int, hidden: int = 32, proj_dim: int = 16, heads: int = 4, dropout: float = 0.1, edge_dim: Optional[int] = 1):
        super().__init__()
        self.edge_dim = edge_dim
        kw = dict(dropout=dropout)
        if edge_dim is not None:
            kw["edge_dim"] = edge_dim
        # Learnable edge weight update: raw w_ij -> updated w_ij (paper: "learnable manner" / "learnable bias term")
        self.edge_refine = nn.Sequential(nn.Linear(1, 1))
        self.gat1 = GATConv(in_channels, hidden, heads=heads, concat=True, **kw)
        self.gat2 = GATConv(hidden * heads, hidden, heads=heads, concat=True, **kw)
        self.gat3 = GATConv(hidden * heads, hidden, heads=1, concat=False, **kw)
        self.norm1 = nn.LayerNorm(hidden * heads)
        self.norm2 = nn.LayerNorm(hidden * heads)
        self.dropout = nn.Dropout(dropout)
        # Graph-level projection for contrastive (pool then project)
        self.projection = nn.Sequential(
            nn.Linear(hidden * 3, hidden), nn.ReLU(), nn.Dropout(dropout), nn.Linear(hidden, proj_dim)
        )
        # Per-node saliency for category k: s_i = sigmoid(w_k^T z_i)
        self.saliency_head = nn.Linear(hidden, 1)

    def _updated_edge_attr(self, edge_attr: Optional[torch.Tensor]) -> Optional[torch.Tensor]:
        """Transform raw w_ij into updated (learnable) edge weight; kept positive via softplus."""
        if edge_attr is None:
            return None
        out = self.edge_refine(edge_attr.unsqueeze(-1)).squeeze(-1)
        return F.softplus(out)

    def forward(self, x, edge_index, edge_attr=None, batch=None, return_node_emb: bool = False):
        ea = self._updated_edge_attr(edge_attr) if self.edge_dim and edge_attr is not None else None
        x = F.elu(self.dropout(self.norm1(self.gat1(x, edge_index, ea))))
        x = F.elu(self.dropout(self.norm2(self.gat2(x, edge_index, ea))))
        z = F.elu(self.gat3(x, edge_index, ea))  # (N, hidden) node embeddings
        if batch is None:
            batch = torch.zeros(z.size(0), dtype=torch.long, device=z.device)
        emb = torch.cat([global_mean_pool(z, batch), global_max_pool(z, batch), global_add_pool(z, batch)], dim=1)
        proj = F.normalize(self.projection(emb), dim=1)
        saliency = torch.sigmoid(self.saliency_head(z))  # (N, 1) per-node saliency
        if return_node_emb:
            return proj, saliency, z
        return proj, saliency


class ContrastiveGAT(nn.Module):
    """Legacy: voxel-level GAT. Kept for compatibility; prefer ConGAT for composite-voxel graph."""
    def __init__(self, in_channels: int, hidden: int = 32, proj_dim: int = 16, heads: int = 4, dropout: float = 0.1, edge_dim: Optional[int] = 1):
        super().__init__()
        self.edge_dim = edge_dim
        kw = dict(dropout=dropout)
        if edge_dim is not None:
            kw["edge_dim"] = edge_dim
        self.gat1 = GATConv(in_channels, hidden, heads=heads, concat=True, **kw)
        self.gat2 = GATConv(hidden * heads, hidden, heads=heads, concat=True, **kw)
        self.gat3 = GATConv(hidden * heads, hidden, heads=1, concat=False, **kw)
        self.norm1 = nn.LayerNorm(hidden * heads)
        self.norm2 = nn.LayerNorm(hidden * heads)
        self.dropout = nn.Dropout(dropout)
        self.projection = nn.Sequential(
            nn.Linear(hidden * 3, hidden), nn.ReLU(), nn.Dropout(dropout), nn.Linear(hidden, proj_dim)
        )
        self.score_head = nn.Sequential(
            nn.Linear(hidden * 3, hidden), nn.ReLU(), nn.Dropout(dropout),
            nn.Linear(hidden, hidden // 2), nn.ReLU(), nn.Dropout(dropout), nn.Linear(hidden // 2, 1)
        )

    def forward(self, x, edge_index, edge_attr=None, batch=None):
        ea = edge_attr if self.edge_dim and edge_attr is not None else None
        x = F.elu(self.dropout(self.norm1(self.gat1(x, edge_index, ea))))
        x = F.elu(self.dropout(self.norm2(self.gat2(x, edge_index, ea))))
        x = F.elu(self.gat3(x, edge_index, ea))
        if batch is None:
            batch = torch.zeros(x.size(0), dtype=torch.long, device=x.device)
        emb = torch.cat([global_mean_pool(x, batch), global_max_pool(x, batch), global_add_pool(x, batch)], dim=1)
        proj = F.normalize(self.projection(emb), dim=1)
        score = self.score_head(emb)
        return proj, score


def contrastive_loss(z1: torch.Tensor, z2: torch.Tensor, temperature: float = 0.1) -> torch.Tensor:
    z1, z2 = F.normalize(z1, dim=1), F.normalize(z2, dim=1)
    sim = torch.matmul(z1, z2.T) / temperature
    n = z1.size(0)
    labels = torch.arange(n, device=z1.device)
    return (F.cross_entropy(sim, labels) + F.cross_entropy(sim.T, labels)) / 2.0


def train_model(
    model: nn.Module,
    graphs: List[Data],
    device: torch.device,
    epochs: int = EPOCHS,
    batch_size: int = BATCH_SIZE,
    lr: float = LR,
) -> nn.Module:
    """Train ConGAT (or ContrastiveGAT) with contrastive loss on graph-level projections."""
    model.train()
    optimizer = torch.optim.Adam(model.parameters(), lr=lr, weight_decay=1e-5)
    target_ch = max(g.x.shape[1] for g in graphs)
    for epoch in tqdm(range(epochs), desc="Training", unit="epoch"):
        random.shuffle(graphs)
        total_loss = 0.0
        n_batches = 0
        for i in range(0, len(graphs), batch_size):
            batch_g = graphs[i : i + batch_size]
            aug1 = [augment_graph(g, target_ch) for g in batch_g]
            aug2 = [augment_graph(g, target_ch) for g in batch_g]
            for g in aug1 + aug2:
                g.x = g.x.to(device)
                g.edge_index = g.edge_index.to(device)
                if g.edge_attr is not None:
                    g.edge_attr = g.edge_attr.to(device)
            try:
                b1 = Batch.from_data_list(aug1)
                b2 = Batch.from_data_list(aug2)
            except Exception:
                continue
            out1 = model(b1.x, b1.edge_index, getattr(b1, "edge_attr", None), b1.batch)
            out2 = model(b2.x, b2.edge_index, getattr(b2, "edge_attr", None), b2.batch)
            z1 = out1[0]
            z2 = out2[0]
            loss = contrastive_loss(z1, z2)
            optimizer.zero_grad()
            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
            optimizer.step()
            total_loss += loss.item()
            n_batches += 1
        avg = total_loss / n_batches if n_batches else 0.0
        logger.info("Epoch %d/%d loss: %.4f", epoch + 1, epochs, avg)
    return model


def compute_interaction_scores(
    model: ConGAT,
    full_graph: Data,
    centers: np.ndarray,
    Ibar: np.ndarray,
    count_pos: np.ndarray,
    grid_shape: Tuple[int, int, int],
    device: torch.device,
    top_k: Optional[int] = None,
    top_p_percent: float = TOP_PERCENT,
) -> List[Dict[str, Any]]:
    """
    ROI scoring:
      Ibar_i = sum of voxel values > 0.05 over all channels in composite i.
      avg_term_i = Ibar_i / count_pos_i (count_pos = number of voxels > 0.05).
      s_i = Ibar_i (used in pairwise score).
      i_ij = (s_i * s_j) * (avg_term_i * avg_term_j) * w_ij; return neighbor j coords with each i_ij.
      S_ROI(i) = Ibar_i + sum(Ibar_j for j in 8 neighbors).
    ROI centers: step by ROI_STEP in (iy, ix), valid when 1 <= iy <= ny-2, 1 <= ix <= nx-2.
    """
    nz, ny, nx = grid_shape
    M = centers.shape[0]
    step = ROI_STEP

    def idx_to_grid(idx: int) -> Tuple[int, int, int]:
        gi = idx // (ny * nx)
        rest = idx % (ny * nx)
        gj = rest // nx
        gk = rest % nx
        return gi, gj, gk

    # ROI center indices: (g_iy, g_ix) in [1, ny-2] and [1, nx-2], step 3; all g_iz
    roi_center_indices = []
    for gi in range(nz):
        for gj in range(1, ny - 1):
            if (gj - 1) % step != 0:
                continue
            for gk in range(1, nx - 1):
                if (gk - 1) % step != 0:
                    continue
                idx = gi * (ny * nx) + gj * nx + gk
                if idx < M:
                    roi_center_indices.append(idx)

    # Build neighbor list from edges
    model.eval()
    ei = full_graph.edge_index.cpu().numpy()
    edge_attr = full_graph.edge_attr
    ew = np.ones(ei.shape[1], dtype=np.float32)
    if edge_attr is not None:
        ew = edge_attr.numpy().copy()
        if hasattr(model, "_updated_edge_attr"):
            with torch.no_grad():
                ew_t = model._updated_edge_attr(edge_attr.to(device))
                if ew_t is not None:
                    ew = ew_t.cpu().numpy()
    neighbors = defaultdict(list)
    for t in range(ei.shape[1]):
        i, j = int(ei[0, t]), int(ei[1, t])
        if i != j:
            neighbors[i].append((j, float(ew[t])))

    s = Ibar.copy()
    avg_term = np.maximum(Ibar / count_pos, 1e-12)

    # Optional: GAT saliency per node for roi_avg_saliency (average saliency in whole ROI)
    saliency_per_node = None
    try:
        x = full_graph.x.to(device)
        edge_index = full_graph.edge_index.to(device)
        edge_attr = full_graph.edge_attr.to(device) if full_graph.edge_attr is not None else None
        batch = torch.zeros(x.size(0), dtype=torch.long, device=device)
        with torch.no_grad():
            _, saliency, _ = model(x, edge_index, edge_attr, batch=batch, return_node_emb=True)
        saliency_per_node = saliency.squeeze(1).cpu().numpy()
    except Exception:
        pass
    if saliency_per_node is None:
        saliency_per_node = Ibar.copy()

    coord_scale = 16
    results = []
    roi_scores = []
    for idx in tqdm(roi_center_indices, desc="ROI scoring", unit="roi"):
        s_i = s[idx]
        a_i = avg_term[idx]
        roi_sum = Ibar[idx]
        saliency_sum = float(saliency_per_node[idx])
        neighbor_list = []
        best_i_ij = 0.0
        for j, w_ij in neighbors[idx]:
            s_j = s[j]
            a_j = avg_term[j]
            roi_sum += Ibar[j]
            saliency_sum += saliency_per_node[j]
            i_ij = (s_i * s_j) * (a_i * a_j) * w_ij
            if i_ij > best_i_ij:
                best_i_ij = i_ij
            iz_j, iy_j, ix_j = int(centers[j, 0]), int(centers[j, 1]), int(centers[j, 2])
            neighbor_list.append({
                "x": int(ix_j * coord_scale),
                "y": int(iy_j * coord_scale),
                "z": int(iz_j * coord_scale),
                "i_ij": round(float(i_ij), 6),
            })
        n_roi = 1 + len(neighbor_list)
        roi_avg_intensity = roi_sum / n_roi
        roi_avg_saliency = saliency_sum / n_roi
        roi_scores.append((best_i_ij, idx, roi_sum, neighbor_list, roi_avg_intensity, roi_avg_saliency))

    roi_scores.sort(key=lambda t: -t[0])
    # Normalize to [0, 1] by max over all ROIs (3 decimal places)
    max_roi_intensity = max((t[4] for t in roi_scores), default=1e-12)
    max_roi_saliency = max((t[5] for t in roi_scores), default=1e-12)
    max_score = max((t[0] for t in roi_scores), default=1e-12)
    max_roi_intensity = max(max_roi_intensity, 1e-12)
    max_roi_saliency = max(max_roi_saliency, 1e-12)
    max_score = max(max_score, 1e-12)

    n_take = len(roi_scores)
    if top_p_percent > 0:
        n_take = max(1, int(np.ceil(n_take * top_p_percent / 100.0)))
    if top_k is not None and top_k > 0:
        n_take = min(n_take, top_k)
    roi_scores = roi_scores[:n_take]

    for rank, (score_val, idx, _roi_sum, _neighbor_list, roi_avg_intensity, roi_avg_saliency) in enumerate(roi_scores, start=1):
        iz, iy, ix = int(centers[idx, 0]), int(centers[idx, 1]), int(centers[idx, 2])
        intensity_average_norm = round(min(1.0, float(roi_avg_intensity) / max_roi_intensity), 3)
        saliency_average_norm = round(min(1.0, float(roi_avg_saliency) / max_roi_saliency), 3)
        score_norm = round(min(1.0, float(score_val) / max_score), 3)
        results.append({
            "id": rank,
            "x": int(ix * coord_scale),
            "y": int(iy * coord_scale),
            "z": int(iz * coord_scale),
            "intensity_average_norm": intensity_average_norm,
            "saliency_average_norm": saliency_average_norm,
            "score_norm": score_norm,
        })
    return results


def run_pipeline(
    dataset_id: Optional[int] = None,
    channel_names: Optional[List[str]] = None,
    microenvironment_name: Optional[str] = None,
    output_dir: Optional[Path] = None,
    preprocessed_dir: Optional[Path] = None,
) -> str:
    """
    Full pipeline (paper ConGAT): load preprocessed -> composite-voxel spatial graph (nodes = composite voxels,
    edges within radius r, w_ij=1/(dist+1)) -> train ConGAT on ego subgraphs -> interaction scoring -> save JSON.
    """
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    microenvironment_name = microenvironment_name or MICROENVIRONMENT_NAME
    channel_names = channel_names or CHANNEL_NAMES
    preprocessed_dir = preprocessed_dir or get_preprocessed_dir(did)
    output_dir = output_dir or get_output_dir(did)
    subgraphs_base = get_subgraphs_dir(did)

    logger.info("Dataset %d: Microenvironment: %s", did, microenvironment_name)
    steps = ["Load volume", "Create subgraphs", "Build graph", "Ego subgraphs", "Training", "Scoring", "Save JSON"]
    with tqdm(total=len(steps), desc="Pipeline", unit="step", position=0) as pbar:
        pbar.set_description("1/7 Load volume")
        volume = load_preprocessed(microenvironment_name, preprocessed_dir)
        logger.info("Preprocessed volume shape (C, Z, Y, X): %s", volume.shape)
        pbar.update(1)

        pbar.set_description("2/7 Create subgraphs")
        C, Z, Y, X = volume.shape
        subgraphs_save_dir = subgraphs_base / microenvironment_to_filename(microenvironment_name)
        _, _ = create_subgraphs_3d(
            volume, patch_z=PATCH_Z, patch_y=PATCH_Y, patch_x=PATCH_X, save_dir=subgraphs_save_dir
        )
        pbar.update(1)

        pbar.set_description("3/7 Build graph")
        full_graph, centers, Ibar, count_pos, grid_shape = build_composite_voxel_graph(volume)
        M = full_graph.x.shape[0]
        logger.info("Composite-voxel graph: %d nodes, %d edges (8-neighbor), grid %s", M, full_graph.edge_index.shape[1], grid_shape)
        pbar.update(1)

        pbar.set_description("4/7 Ego subgraphs")
        ego_subgraphs = extract_ego_subgraphs(full_graph, centers)
        logger.info("Ego subgraphs for training: %d", len(ego_subgraphs))
        if len(ego_subgraphs) < 2:
            raise RuntimeError("Too few ego subgraphs for training.")
        pbar.update(1)

        pbar.set_description("5/7 Training")
        device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        in_ch = int(full_graph.x.shape[1])  # 3 (centroid) + 2 (Ibar, avg)
        model = ConGAT(
            in_channels=in_ch,
            hidden=HIDDEN,
            proj_dim=PROJ_DIM,
            heads=HEADS,
            dropout=DROPOUT,
            edge_dim=1,
        ).to(device)
        train_model(model, ego_subgraphs, device, epochs=EPOCHS, batch_size=BATCH_SIZE, lr=LR)
        pbar.update(1)

        pbar.set_description("6/7 Scoring")
        positions = compute_interaction_scores(
            model, full_graph, centers, Ibar, count_pos, grid_shape, device,
            top_k=TOP_K_POSITIONS, top_p_percent=TOP_PERCENT,
        )
        pbar.update(1)

        pbar.set_description("7/7 Save JSON")
    out_data = {
        "microenvironment": microenvironment_name,
        "channel_names": channel_names,
        "volume_shape": [int(C), int(Z), int(Y), int(X)],
        "patch_shape": [PATCH_Z, PATCH_Y, PATCH_X],
        "intensity_threshold": INTENSITY_THRESHOLD,
        "roi_step": ROI_STEP,
        "subgraphs_dir": str(subgraphs_save_dir),
        "num_composite_voxels": M,
        "score_definition": "Ibar_i = sum of voxel values > 0.05 over channels; avg_term_i = Ibar_i/count_pos_i; i_ij = (s_i*s_j)*(avg_term_i*avg_term_j)*w_ij; S_ROI(i) = Ibar_i + sum(Ibar_j); 8-neighbor ROI, step 3",
        "top_p_percent": TOP_PERCENT,
        "positions": positions,
    }
    safe_name = microenvironment_name.replace(" ", "_").replace("/", "_")[:64]
    out_path = Path(output_dir) / f"positions_{safe_name}.json"
    with open(out_path, "w") as f:
        json.dump(_json_convert(out_data), f, indent=2)
    logger.info("Saved %d positions to %s", len(positions), out_path)
    return str(out_path)


if __name__ == "__main__":
    dataset_id = SELECTED_DATASET
    dataset_name = DATASETS.get(dataset_id, {}).get("name", f"Dataset {dataset_id}")
    results: List[str] = []
    for i, env in enumerate(MICROENVIRONMENTS):
        name = env["name"]
        channels = env["channels"]
        logger.info("=== Microenvironment %d/%d: %s ===", i + 1, len(MICROENVIRONMENTS), name)
        try:
            out_path = run_pipeline(
                dataset_id=dataset_id,
                microenvironment_name=name,
                channel_names=channels,
            )
            results.append(out_path)
        except FileNotFoundError as e:
            logger.warning("Skipping %s: %s. Run 50_preprocess.py for this microenvironment first.", name, e)
    print(f"\n{dataset_name}: Pipeline complete for {len(results)}/{len(MICROENVIRONMENTS)} microenvironments.")
    for p in results:
        print(f"  {p}")

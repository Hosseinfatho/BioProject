"""
Load per-channel 3D volumes from Zarr (S3), save as one numpy file per channel.
Channel set: channel name + microenvironment. Data shape (Z, Y, X); value v at (x,y,z).
"""

from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import numpy as np
import s3fs
import zarr
SELECTED_DATASET = 2  # Set to 1 or 2 to load that dataset

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Resolution level "4" -> shape (1, 70, 194, 344, 681)
RESOLUTION_LEVEL = "4"

# Dataset configuration (aligned with 00_data.py, 11_download_data.py, metadata.py)
DATASETS = {
    1: {
        "name": "Dataset 1",
        "s3_url": "s3://lsp-public-data/biomedvis-challenge-2025/Dataset1-LSP13626-melanoma-in-situ/0",
        "metadata_url": "https://lsp-public-data.s3.amazonaws.com/biomedvis-challenge-2025/Dataset1-LSP13626-melanoma-in-situ/OME/METADATA.ome.xml",
    },
    2: {
        "name": "Dataset 2",
        "s3_url": "s3://lsp-public-data/biomedvis-challenge-2025/Dataset1-LSP13626-invasive-margin/0",
        "metadata_url": "https://lsp-public-data.s3.amazonaws.com/biomedvis-challenge-2025/Dataset1-LSP13626-invasive-margin/OME/METADATA.ome.xml",
    },
}

BASE_DATA_DIR = Path(__file__).resolve().parent / "data"


def get_output_dir(dataset_id: int = None) -> Path:
    """Return output directory for the given dataset: data/channels_dataset1 or data/channels_dataset2."""
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    return BASE_DATA_DIR / f"channels_dataset{did}"

# Channel names (index 0..69) from OME; microenvironment for each (edit as needed).
CHANNEL_NAMES = [
    "Hoechst", "5'hmC", "MX1", "MART1", "Hoechst", "CD3E (do not use)", "MHC-I", "SOX10", "Hoechst", "S100B",
    "MITF", "GranzymeB (do not use)", "Hoechst", "pan-cytokeratin", "lamin-ABC", "PDL1", "Hoechst", "PD1 (do not use)",
    "S100A", "CD31", "Hoechst", "CD206", "pMLC2", "CD11b (do not use)", "Hoechst", "CD4", "LAG3", "CD20", "Hoechst",
    "PRAME", "CD163", "IRF1", "Hoechst", "B-catenin", "CD3E", "CD8a", "Hoechst", "CD11b", "FOXP3", "PD1", "Hoechst",
    "Ki67", "CD11c", "COX-IV", "Hoechst", "LysozymeC", "SOX9", "PMEL", "CD103", "Hoechst", "CyclinD1", "BAF1", "Hoechst",
    "B-actin", "Mast cell tryptase", "CD15", "Podoplanin", "Hoechst", "B-tubulin", "Catalase", "y-H2AX", "Hoechst",
    "E-cadherin", "Vimentin", "Neurofilament L (do not use)", "GranzymeB", "Hoechst", "MHC-II", "H3K27me3", "Collagen (SHG)",
]

def _microenvironment_for(name: str) -> str:
    """Assign microenvironment from channel name (edit for your taxonomy)."""
    n = name.lower()
    if "hoechst" in n:
        return "nuclear"
    if any(n.startswith(c) for c in ("cd3", "cd4", "cd8", "cd20", "cd31", "cd11b", "cd11c", "cd103", "cd163", "cd206", "cd15", "foxp3", "pd1", "lag3", "granzyme", "mhc-", "ki67")):
        return "immune"
    if any(x in n for x in ("mart1", "sox10", "mitf", "s100", "pmel", "prame", "sox9")):
        return "melanoma"
    if any(x in n for x in ("cytokeratin", "e-cadherin", "vimentin", "lamin", "b-catenin", "b-actin", "b-tubulin")):
        return "epithelium_cytoskeleton"
    if "collagen" in n or "shg" in n:
        return "stroma"
    if any(x in n for x in ("podoplanin", "pd-l1", "pd1")):
        return "immune_checkpoint"
    return "other"


def get_channel_names(metadata_url: Optional[str] = None) -> List[str]:
    """Channel names from OME if available, else CHANNEL_NAMES."""
    try:
        from metadata import get_all_channel_names
        names = get_all_channel_names(metadata_url=metadata_url)
        if names:
            return names
    except Exception:
        pass
    return CHANNEL_NAMES


def get_channel_set(metadata_url: Optional[str] = None) -> List[Dict[str, Any]]:
    """Channel set: list of {channel_index, name, microenvironment}."""
    names = get_channel_names(metadata_url=metadata_url)
    return [
        {"channel_index": i, "name": name, "microenvironment": _microenvironment_for(name)}
        for i, name in enumerate(names)
    ]


def _open_zarr_root(dataset_url: str, fs: Optional[s3fs.S3FileSystem]) -> zarr.Group:
    if hasattr(zarr, "Group"):
        _ZarrGroup = zarr.Group
    else:
        _ZarrGroup = getattr(zarr.hierarchy, "Group", type(None))
    if dataset_url.startswith("s3://"):
        _fs = fs or s3fs.S3FileSystem(anon=True)
        store = s3fs.S3Map(root=dataset_url, s3=_fs)
        root = zarr.open(store, mode="r")
    else:
        root = zarr.open(dataset_url, mode="r")
    if not isinstance(root, _ZarrGroup):
        raise RuntimeError("Zarr root is not a group")
    return root


def load_channel_volume(
    dataset_url: str,
    resolution_level: str,
    channel_index: int,
    fs: Optional[s3fs.S3FileSystem] = None,
) -> np.ndarray:
    """
    Load one channel as 3D array shape (Z, Y, X). Value at (x,y,z) is volume[z, y, x].
    """
    root = _open_zarr_root(dataset_url, fs)
    arr = root[resolution_level]
    # arr.shape = (1, 70, 194, 344, 681) -> (t, c, z, y, x)
    if arr.ndim == 5:
        vol = np.asarray(arr[0, channel_index, :, :, :])
    else:
        vol = np.asarray(arr[channel_index, :, :, :])
    return vol


def save_channel_as_npy(
    volume: np.ndarray,
    channel_index: int,
    channel_name: str,
    out_dir: Path,
    name_by_number: bool = True,
) -> Path:
    """
    Save 3D volume as .npy. Shape (Z, Y, X); value v at coordinates (x, y, z) is volume[z, y, x].
    If name_by_number: save as {channel_index}.npy (e.g. 0.npy, 1.npy).
    """
    out_dir.mkdir(parents=True, exist_ok=True)
    if name_by_number:
        path = out_dir / f"{channel_index}.npy"
    else:
        safe_name = channel_name.replace("/", "_").replace("'", "")[:64]
        path = out_dir / f"channel_{channel_index:02d}_{safe_name}.npy"
    np.save(path, volume)
    return path


def download_all_channels(
    dataset_id: Optional[int] = None,
    dataset_url: Optional[str] = None,
    resolution_level: str = RESOLUTION_LEVEL,
    channel_indices: Optional[List[int]] = None,
    out_dir: Optional[Path] = None,
    fs: Optional[s3fs.S3FileSystem] = None,
    name_by_number: bool = True,
) -> Tuple[List[Path], List[Dict[str, Any]]]:
    """
    Load each channel from Zarr and save as one .npy per channel.
    If name_by_number: files are 0.npy, 1.npy, ... by channel index.
    Returns (list of saved .npy paths, channel_set with name + microenvironment).
    """
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    if did not in DATASETS:
        raise ValueError(f"dataset_id must be 1 or 2, got: {did}")
    cfg = DATASETS[did]
    url = dataset_url or cfg["s3_url"]
    metadata_url = cfg.get("metadata_url")
    output_dir = out_dir if out_dir is not None else get_output_dir(did)

    channel_set = get_channel_set(metadata_url=metadata_url)
    if channel_indices is not None:
        channel_set = [c for c in channel_set if c["channel_index"] in channel_indices]
    output_dir.mkdir(parents=True, exist_ok=True)
    saved_paths: List[Path] = []
    for rec in channel_set:
        c = rec["channel_index"]
        name = rec["name"]
        logger.info("Loading channel %d: %s", c, name)
        vol = load_channel_volume(url, resolution_level, c, fs)
        # vol shape (Z, Y, X); coords 0..Z-1, 0..Y-1, 0..X-1; value v = vol[z,y,x]
        path = save_channel_as_npy(vol, c, name, output_dir, name_by_number=name_by_number)
        saved_paths.append(path)
        rec["shape"] = list(vol.shape)
        rec["npy_path"] = str(path)
    # Save channel set (name + microenvironment + paths)
    set_path = output_dir / "channel_set.json"
    with open(set_path, "w") as f:
        json.dump(channel_set, f, indent=2)
    logger.info("Saved channel_set to %s", set_path)
    return saved_paths, channel_set


if __name__ == "__main__":
    import sys
    dataset_id = SELECTED_DATASET
    out = get_output_dir(dataset_id)
    if len(sys.argv) > 1:
        out = Path(sys.argv[1])
    paths, channel_set = download_all_channels(dataset_id=dataset_id, out_dir=out)
    dataset_name = DATASETS.get(dataset_id, {}).get("name", f"Dataset {dataset_id}")
    print(f"{dataset_name}: Saved {len(paths)} channel .npy files to {out}")
    print("Channel set (name, microenvironment):")
    for c in channel_set[:5]:
        print(f"  {c['channel_index']}: {c['name']} -> {c['microenvironment']}")
    print("  ...")
    print(f"  Full list in {out / 'channel_set.json'}")

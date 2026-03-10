"""
Tile_gat.py – Single pipeline for 128×128×194 tile.
Configurable: channel names & count, center (x,y), microenvironment name.
Downloads 128×128×194 window from Zarr (or crops from existing data), then:
investigate → normalize → preprocess → ConGAT → positions JSON with per-ROI
average intensity per channel + average saliency.
All outputs saved under this folder (Hi_res_128_128_194).
"""
from __future__ import annotations

import json
import logging
import sys
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import numpy as np

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# =============================================================================
# DEFAULTS – update these to change channels, center, and microenvironment
# =============================================================================
# Microenvironment name (used for preprocessed file name and pipeline)
MICROENVIRONMENT_NAME = "Inflammation"

# Channel names (order = channel index 0, 1, 2, ...). Length sets number of channels.
# Must match names in OME metadata when using download; Dataset1 examples: MART1, MX1, IRF1, CD11c, Hoechst, ...
CHANNEL_NAMES = ["MART1", "MX1", "IRF1", "CD11c"]

# Center (x, y) for the 128×128 window in full-volume coordinates
CENTER_X = 2688
CENTER_Y = 3456

# Window: 128×128 in (x,y), full depth 194
WINDOW_X = 128
WINDOW_Y = 128
WINDOW_Z = 194

# Download source (Dataset1 LSP – override for other datasets)
DATASET_URL = "https://lsp-public-data.s3.amazonaws.com/biomedvis-challenge-2025/Dataset1-LSP13626-melanoma-in-situ/0"
METADATA_URL = "https://lsp-public-data.s3.amazonaws.com/biomedvis-challenge-2025/Dataset1-LSP13626-melanoma-in-situ/OME/METADATA.ome.xml"
FULL_X = 10908
FULL_Y = 5508
FULL_Z = 194
COMPONENT = 0

# If True, download from S3. If False, load from SOURCE_DATASET_DIR and crop to 128×128 (must contain window around center).
USE_DOWNLOAD = True
SOURCE_DATASET_DIR = Path(r"D:\VIS2026\Hossein\BioProject\VIS2026\Hi_res\Hi_res_dataset")

# =============================================================================
# Paths and constants (derived)
# =============================================================================
SCRIPT_DIR = Path(__file__).resolve().parent
BASE_DIR = SCRIPT_DIR
VIS2026_DIR = BASE_DIR.parent

NUM_CHANNELS = len(CHANNEL_NAMES)
PREFIX = "Tile_gat_128_128_194"
# Subgraph (patch) size
PATCH_X, PATCH_Y, PATCH_Z = 16, 16, 16
Z_AGGREGATE = 1

DATASET_DIR = BASE_DIR / "dataset"
NORMALIZED_DIR = BASE_DIR / f"NormalizedChannel_{PREFIX}"
PREPROCESSED_DIR = BASE_DIR / f"preprocessed_{PREFIX}"
SUBGRAPHS_DIR = BASE_DIR / f"subgraphs_{PREFIX}"
INVESTIGATION_PATH = BASE_DIR / f"channel_investigation_{PREFIX}.json"
MIN_MAX_PATH = BASE_DIR / f"channel_min_max_{PREFIX}.json"
POSITIONS_FILENAME = f"positions_{PREFIX}.json"
FINAL_POSITIONS_FILENAME = f"positions_{PREFIX}_with_channels.json"

PERCENTILE_LOW = 5
PERCENTILE_HIGH = 90
NOISE_THRESHOLD = 0.05
# When intensity is below this, saliency is forced to 0 (so low-signal ROIs don't show high saliency)
INTENSITY_SALIENCY_THRESHOLD = 0.01


def microenvironment_to_filename(name: str) -> str:
    """Match 60_model: short filename for preprocessed .npy."""
    s = name.strip().split()[0] if name.strip() else "preprocessed"
    return "".join(c for c in s if c.isalnum() or c in "._-") or "preprocessed"


def get_channel_names_from_ome(metadata_url: str) -> List[str]:
    """Fetch ordered channel names from OME-XML."""
    try:
        import requests
        resp = requests.get(metadata_url, timeout=30)
        resp.raise_for_status()
        data = resp.text.replace("Â", "")
        try:
            import ome_types
            ome_xml = ome_types.from_xml(data)
            return [c.name for c in ome_xml.images[0].pixels.channels]
        except ImportError:
            pass
        import xml.etree.ElementTree as ET
        root = ET.fromstring(data)
        ns = {"ome": "http://www.openmicroscopy.org/Schemas/OME/2016-06"}
        channels = root.findall(".//ome:Channel", ns) or root.findall(".//{http://www.openmicroscopy.org/Schemas/OME/2016-06}Channel")
        names = []
        for ch in channels:
            name = ch.get("Name")
            if name is None:
                el = ch.find("ome:Name", ns) or ch.find("{http://www.openmicroscopy.org/Schemas/OME/2016-06}Name") or ch.find("Name")
                name = el.text if el is not None else None
            names.append(name or f"channel_{len(names)}")
        return names
    except Exception as e:
        logger.warning("Could not get channel names from OME: %s", e)
        return []


def resolve_channel_names_to_indices(channel_names: List[str], metadata_url: str) -> List[int]:
    """Resolve channel names to 0-based indices using OME metadata. Raises if a name is not found."""
    all_names = get_channel_names_from_ome(metadata_url)
    if not all_names:
        raise ValueError("Could not load OME metadata; cannot resolve channel names to indices.")
    name_to_index = {n: i for i, n in enumerate(all_names)}
    indices = []
    for name in channel_names:
        if name not in name_to_index:
            raise ValueError(f"Channel name '{name}' not found in OME metadata. Known: {list(name_to_index.keys())[:20]}...")
        indices.append(name_to_index[name])
    return indices


def _zarr_url_to_s3(zarr_url: str) -> str:
    if zarr_url.startswith("s3://"):
        return zarr_url
    if zarr_url.startswith("https://"):
        after = zarr_url.split("//", 1)[-1]
        path = after.split("/", 1)[1] if "/" in after else ""
        bucket = after.split("/")[0].split(".")[0]
        return f"s3://{bucket}/{path}"
    return zarr_url


def compute_window_slice(center_xy: Tuple[int, int], size_xy: Tuple[int, int], full_xy: Tuple[int, int]) -> Tuple[slice, slice]:
    cx, cy = center_xy
    sx, sy = size_xy
    fx, fy = full_xy
    half_x, half_y = sx // 2, sy // 2
    x_start = max(0, cx - half_x)
    y_start = max(0, cy - half_y)
    x_end = min(fx, x_start + sx)
    y_end = min(fy, y_start + sy)
    x_start = max(0, x_end - sx)
    y_start = max(0, y_end - sy)
    return slice(y_start, y_end), slice(x_start, x_end)


# ========== Step 1a: Download 128×128×194 from Zarr ==========
def download_volume() -> Tuple[np.ndarray, List[str]]:
    """Download WINDOW_X×WINDOW_Y×WINDOW_Z window centered at (CENTER_X, CENTER_Y) for CHANNEL_NAMES; save to DATASET_DIR."""
    channel_indices = resolve_channel_names_to_indices(CHANNEL_NAMES, METADATA_URL)
    all_names = get_channel_names_from_ome(METADATA_URL)
    channel_names = [all_names[i] if i < len(all_names) else f"channel_{i}" for i in channel_indices]
    logger.info("Channels: %s -> indices %s", CHANNEL_NAMES, channel_indices)

    y_slice, x_slice = compute_window_slice(
        (CENTER_X, CENTER_Y), (WINDOW_X, WINDOW_Y), (FULL_X, FULL_Y)
    )
    z_slice = slice(0, WINDOW_Z)

    try:
        import dask.array as da
        from dask.diagnostics import ProgressBar
    except ImportError:
        raise ImportError("Install dask and s3fs for download: pip install dask s3fs")

    s3_path = _zarr_url_to_s3(DATASET_URL)
    arr = da.from_zarr(s3_path, component=str(COMPONENT), storage_options={"anon": True})
    ndim = arr.ndim
    if ndim == 5:
        cropped = arr[0, channel_indices, z_slice, y_slice, x_slice]
    elif ndim == 4:
        cropped = arr[channel_indices, z_slice, y_slice, x_slice]
    else:
        raise ValueError(f"Unexpected array ndim {ndim}")
    with ProgressBar():
        data = cropped.compute()
    data = np.asarray(data).astype(np.float32)
    logger.info("Downloaded shape (C,Z,Y,X)=%s", data.shape)

    DATASET_DIR.mkdir(parents=True, exist_ok=True)
    np.save(DATASET_DIR / "data.npy", data)
    meta = {
        "microenvironment": MICROENVIRONMENT_NAME,
        "channel_names": channel_names,
        "channel_indices": channel_indices,
        "shape": list(data.shape),
        "window": {"x_center": CENTER_X, "y_center": CENTER_Y, "x": [x_slice.start, x_slice.stop], "y": [y_slice.start, y_slice.stop], "z": [0, WINDOW_Z]},
    }
    with open(DATASET_DIR / "metadata.json", "w") as f:
        json.dump(meta, f, indent=2)
    return data, channel_names


# ========== Step 1b: Load and crop from existing dataset ==========
def load_and_crop_volume() -> Tuple[np.ndarray, List[str]]:
    """Load from SOURCE_DATASET_DIR and crop 128×128 centered at (CENTER_X, CENTER_Y) in source coords (or center of array)."""
    npy_path = Path(SOURCE_DATASET_DIR) / "data.npy"
    meta_path = Path(SOURCE_DATASET_DIR) / "metadata.json"
    if not npy_path.exists():
        raise FileNotFoundError(f"Source data not found: {npy_path}. Set USE_DOWNLOAD=True or provide 512×512×194 data.")
    data = np.load(npy_path).astype(np.float32)
    if data.ndim != 4:
        raise ValueError(f"Expected 4D (C,Z,Y,X), got {data.shape}")
    C, Z, Y, X = data.shape
    if Z != WINDOW_Z:
        raise ValueError(f"Source Z must be {WINDOW_Z}; got {Z}")
    # Crop center 128×128 (or crop around CENTER_X, CENTER_Y if source has same coords as full volume)
    # If source is already a window (e.g. 512×512), use center crop
    if X >= WINDOW_X and Y >= WINDOW_Y:
        x0 = (X - WINDOW_X) // 2
        y0 = (Y - WINDOW_Y) // 2
        cropped = data[:, :, y0 : y0 + WINDOW_Y, x0 : x0 + WINDOW_X]
    else:
        cropped = data
    logger.info("Cropped to (C,Z,Y,X)=%s", cropped.shape)

    channel_names = CHANNEL_NAMES
    if meta_path.exists():
        with open(meta_path) as f:
            meta = json.load(f)
        channel_names = meta.get("channel_names", CHANNEL_NAMES)[: cropped.shape[0]]
    DATASET_DIR.mkdir(parents=True, exist_ok=True)
    np.save(DATASET_DIR / "data.npy", cropped)
    with open(DATASET_DIR / "metadata.json", "w") as f:
        json.dump({"shape": list(cropped.shape), "channel_names": channel_names, "microenvironment": MICROENVIRONMENT_NAME}, f, indent=2)
    return cropped, channel_names


# ========== Step 1: Get volume 128×128×194 ==========
def step1_get_volume() -> Tuple[np.ndarray, List[str]]:
    if USE_DOWNLOAD:
        return download_volume()
    return load_and_crop_volume()


# ========== Step 2: Investigate ==========
def step_investigate(data: np.ndarray, channel_names: List[str]) -> List[Dict[str, Any]]:
    C = data.shape[0]
    results = []
    for c in range(C):
        vol = data[c, :, :, :]
        name = channel_names[c] if c < len(channel_names) else f"channel_{c}"
        results.append({
            "channel_index": c, "name": name, "dimension": list(vol.shape),
            "min": float(np.min(vol)), "max": float(np.max(vol)), "mean": float(np.mean(vol)),
            "dtype": str(vol.dtype),
        })
    BASE_DIR.mkdir(parents=True, exist_ok=True)
    with open(INVESTIGATION_PATH, "w") as f:
        json.dump(results, f, indent=2)
    min_max_list = [{"name": r["name"], "dimension": r["dimension"], "min": r["min"], "max": r["max"], "mean": r["mean"]} for r in results]
    with open(MIN_MAX_PATH, "w") as f:
        json.dump(min_max_list, f, indent=2)
    logger.info("Saved %s, %s", INVESTIGATION_PATH.name, MIN_MAX_PATH.name)
    return results


# ========== Step 3: Normalize ==========
def normalize_channel_percentile(arr: np.ndarray, p_low: float = PERCENTILE_LOW, p_high: float = PERCENTILE_HIGH, noise_threshold: float = NOISE_THRESHOLD) -> np.ndarray:
    arr = np.asarray(arr, dtype=np.float64)
    pl, ph = float(np.percentile(arr, p_low)), float(np.percentile(arr, p_high))
    if ph <= pl:
        return np.zeros_like(arr, dtype=np.float32)
    out = np.clip((arr - pl) / (ph - pl), 0.0, 1.0)
    out[out < noise_threshold] = 0.0
    return np.round(out, 2).astype(np.float32)


def step_normalize(data: np.ndarray, channel_names: List[str]) -> Path:
    C = data.shape[0]
    NORMALIZED_DIR.mkdir(parents=True, exist_ok=True)
    for i in range(C):
        arr_norm = normalize_channel_percentile(data[i, :, :, :])
        np.save(NORMALIZED_DIR / f"{i}.npy", arr_norm)
    logger.info("Saved %d channels to %s", C, NORMALIZED_DIR)
    return NORMALIZED_DIR


# ========== Step 4: Preprocess – table (N,5), save as microenvironment name ==========
def step_preprocess() -> Path:
    C = NUM_CHANNELS
    volume = np.stack([np.load(NORMALIZED_DIR / f"{i}.npy").astype(np.float32) for i in range(C)], axis=0)
    Z, Y, X = volume.shape[1], volume.shape[2], volume.shape[3]
    shp = (C, Z, Y, X)
    channel_col = np.broadcast_to(np.arange(C, dtype=np.float32).reshape(C, 1, 1, 1), shp).ravel()
    value_col = volume.ravel()
    z_col = np.broadcast_to(np.arange(Z, dtype=np.float32).reshape(1, Z, 1, 1), shp).ravel()
    y_col = np.broadcast_to(np.arange(Y, dtype=np.float32).reshape(1, 1, Y, 1), shp).ravel()
    x_col = np.broadcast_to(np.arange(X, dtype=np.float32).reshape(1, 1, 1, X), shp).ravel()
    out = np.stack([channel_col, value_col, z_col, y_col, x_col], axis=1)
    PREPROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    fname = microenvironment_to_filename(MICROENVIRONMENT_NAME) + ".npy"
    out_path = PREPROCESSED_DIR / fname
    np.save(out_path, out)
    logger.info("Saved %s shape (N, 5); N=%d", out_path.name, out.shape[0])
    return out_path


# ========== Step 5: Run ConGAT (60_model) ==========
def step_run_model() -> str:
    import importlib.util
    spec = importlib.util.spec_from_file_location("model60", VIS2026_DIR / "60_model.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    run_pipeline = mod.run_pipeline
    out_path = run_pipeline(
        channel_names=CHANNEL_NAMES,
        microenvironment_name=MICROENVIRONMENT_NAME,
        output_dir=BASE_DIR,
        preprocessed_dir=PREPROCESSED_DIR,
        subgraphs_dir=SUBGRAPHS_DIR,
        positions_filename=POSITIONS_FILENAME,
        coord_scale=1,
        patch_z=PATCH_Z,
        patch_y=PATCH_Y,
        patch_x=PATCH_X,
    )
    logger.info("Model output: %s", out_path)
    return out_path


# ========== Step 6: Add average intensity per channel + average saliency to JSON ==========
def _load_volume_from_preprocessed() -> np.ndarray:
    fname = microenvironment_to_filename(MICROENVIRONMENT_NAME) + ".npy"
    path = PREPROCESSED_DIR / fname
    data = np.load(path).astype(np.float32)
    if data.ndim != 2 or data.shape[1] != 5:
        raise ValueError(f"Expected (N,5), got {data.shape}")
    c_col, v_col, z_col, y_col, x_col = 0, 1, 2, 3, 4
    C = int(data[:, c_col].max()) + 1
    Z = int(data[:, z_col].max()) + 1
    Y = int(data[:, y_col].max()) + 1
    X = int(data[:, x_col].max()) + 1
    volume = np.zeros((C, Z, Y, X), dtype=np.float32)
    volume[data[:, c_col].astype(np.int32), data[:, z_col].astype(np.int32), data[:, y_col].astype(np.int32), data[:, x_col].astype(np.int32)] = data[:, v_col]
    return volume


def step_add_channel_intensity_and_saliency(positions_path: str) -> str:
    with open(positions_path) as f:
        out_data = json.load(f)
    positions = out_data.get("positions", [])
    if not positions:
        logger.warning("No positions in %s", positions_path)
        return positions_path

    volume = _load_volume_from_preprocessed()
    C = volume.shape[0]
    pz, py, px = PATCH_Z, PATCH_Y, PATCH_X

    n_zeroed = 0
    for pos in positions:
        x, y, z = int(pos.get("x", 0)), int(pos.get("y", 0)), int(pos.get("z", 0))
        iz0 = max(0, z - pz // 2)
        iy0 = max(0, y - py // 2)
        ix0 = max(0, x - px // 2)
        patch = volume[:, iz0 : iz0 + pz, iy0 : iy0 + py, ix0 : ix0 + px]
        if patch.size == 0:
            pos["average_intensity_per_channel"] = [0.0] * C
        else:
            pos["average_intensity_per_channel"] = [round(float(np.mean(patch[c])), 6) for c in range(C)]
        if "saliency_average_norm" in pos:
            pos["average_saliency"] = pos["saliency_average_norm"]
        # When intensity is zero or very low, set saliency to 0 so it matches the data
        intensity_norm = float(pos.get("intensity_average_norm", 0))
        if intensity_norm < INTENSITY_SALIENCY_THRESHOLD:
            pos["saliency_average_norm"] = 0.0
            pos["average_saliency"] = 0.0
            n_zeroed += 1

    if n_zeroed:
        logger.info("Set saliency to 0 for %d ROIs with intensity_average_norm < %s", n_zeroed, INTENSITY_SALIENCY_THRESHOLD)

    final_path = BASE_DIR / FINAL_POSITIONS_FILENAME
    with open(final_path, "w") as f:
        json.dump(out_data, f, indent=2)
    logger.info("Saved final JSON to %s", final_path)
    return str(final_path)


# ========== Main ==========
def main() -> bool:
    logger.info(
        "Tile_gat: %s, center=(%s,%s), channels=%s, microenvironment=%s, output=%s",
        f"{WINDOW_X}×{WINDOW_Y}×{WINDOW_Z}",
        CENTER_X, CENTER_Y,
        CHANNEL_NAMES,
        MICROENVIRONMENT_NAME,
        BASE_DIR,
    )
    BASE_DIR.mkdir(parents=True, exist_ok=True)
    try:
        data, channel_names = step1_get_volume()
        step_investigate(data, channel_names)
        step_normalize(data, channel_names)
        step_preprocess()
        positions_path = step_run_model()
        step_add_channel_intensity_and_saliency(positions_path)
        logger.info("Done. Final positions: %s/%s", BASE_DIR, FINAL_POSITIONS_FILENAME)
        return True
    except Exception as e:
        logger.exception("%s", e)
        return False


if __name__ == "__main__":
    ok = main()
    sys.exit(0 if ok else 1)

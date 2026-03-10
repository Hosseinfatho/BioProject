"""
Step 40 for Hi-res: normalize channels to [0,1] from Hi_res_dataset (data.npy), save to NormalizedChannel_.
Input: Hi_res_dataset/data.npy + channel_min_max_Hi_res_infal_2688_3456.json – no Hi_res_20 needed.
Output: VIS2026/Hi_res/NormalizedChannel_Hi_res_infal_2688_3456/ (0.npy, 1.npy, 2.npy, 3.npy).
"""
from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import List, Optional, Tuple

import numpy as np
import zarr

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

_SCRIPT_DIR = Path(__file__).resolve().parent
HI_RES_DIR = _SCRIPT_DIR.parent / "Hi_res" if _SCRIPT_DIR.name != "Hi_res" else _SCRIPT_DIR
HI_RES_DATASET_DIR = HI_RES_DIR / "Hi_res_dataset"
PREFIX = "Hi_res_infal_2688_3456"
MIN_MAX_PATH = HI_RES_DIR / f"channel_min_max_{PREFIX}.json"
NORMALIZED_DIR = HI_RES_DIR / f"NormalizedChannel_{PREFIX}"

PERCENTILE_LOW = 5
PERCENTILE_HIGH = 90
NOISE_THRESHOLD = 0.05


def load_hi_res_volume():
    """Load (C, Z, Y, X) from Hi_res_dataset."""
    npy_path = HI_RES_DATASET_DIR / "data.npy"
    zarr_path = HI_RES_DATASET_DIR / "data.zarr"
    if npy_path.exists():
        return np.load(npy_path)
    if zarr_path.exists():
        root = zarr.open(str(zarr_path), mode="r")
        return np.asarray(root["data"][:])
    raise FileNotFoundError(f"No data.npy or data.zarr in {HI_RES_DATASET_DIR}")


def load_channel_metadata(min_max_path: Path) -> List[Tuple[Optional[float], Optional[float], str]]:
    if not min_max_path.exists():
        return []
    with open(min_max_path) as f:
        data = json.load(f)
    out = []
    for rec in data:
        mn, mx = rec.get("min"), rec.get("max")
        name = rec.get("name", "unknown")
        if mn is not None:
            mn = float(mn)
        if mx is not None:
            mx = float(mx)
        out.append((mn, mx, name))
    return out


def normalize_channel_percentile(
    arr: np.ndarray,
    p_low: float = PERCENTILE_LOW,
    p_high: float = PERCENTILE_HIGH,
    noise_threshold: float = NOISE_THRESHOLD,
) -> np.ndarray:
    arr = np.asarray(arr, dtype=np.float64)
    pl = float(np.percentile(arr, p_low))
    ph = float(np.percentile(arr, p_high))
    if ph <= pl:
        return np.zeros_like(arr, dtype=np.float32)
    out = (arr - pl) / (ph - pl)
    out = np.clip(out, 0.0, 1.0)
    out[out < noise_threshold] = 0.0
    return np.round(out, 2).astype(np.float32)


def run() -> List[Path]:
    if not MIN_MAX_PATH.exists():
        raise FileNotFoundError(f"{MIN_MAX_PATH} not found. Run Hi_res_30_investigate.py first.")

    meta = load_channel_metadata(MIN_MAX_PATH)
    data = load_hi_res_volume()
    C = data.shape[0]

    NORMALIZED_DIR.mkdir(parents=True, exist_ok=True)
    saved = []
    for i in range(C):
        name = meta[i][2] if i < len(meta) else f"channel_{i}"
        vol = data[i, :, :, :]
        arr_norm = normalize_channel_percentile(vol)
        out_path = NORMALIZED_DIR / f"{i}.npy"
        np.save(out_path, arr_norm)
        saved.append(out_path)
        logger.info("Normalized channel %d %s -> %s", i, name, out_path)
    logger.info("Saved %d normalized channels to %s", len(saved), NORMALIZED_DIR)
    return saved


if __name__ == "__main__":
    run()
    print(f"Hi_res step 40 done. Output: {NORMALIZED_DIR}")

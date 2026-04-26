"""
Step 30 for Hi-res: compute min/max/mean per channel from Hi_res_dataset (data.npy), save JSONs.
Input: VIS2026/Hi_res/Hi_res_dataset (data.npy, metadata.json) – no Hi_res_20 needed.
Output: Hi_res/channel_investigation_Hi_res_infal_2688_3456.json, channel_min_max_Hi_res_infal_2688_3456.json.
"""
from __future__ import annotations

import json
import logging
from pathlib import Path

import numpy as np
import zarr

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

_SCRIPT_DIR = Path(__file__).resolve().parent
HI_RES_DIR = _SCRIPT_DIR.parent / "Hi_res" if _SCRIPT_DIR.name != "Hi_res" else _SCRIPT_DIR
HI_RES_DATASET_DIR = HI_RES_DIR / "Hi_res_dataset"
PREFIX = "Hi_res_infal_2688_3456"
INVESTIGATION_PATH = HI_RES_DIR / f"channel_investigation_{PREFIX}.json"
MIN_MAX_PATH = HI_RES_DIR / f"channel_min_max_{PREFIX}.json"


def load_hi_res_volume():
    """Load (C, Z, Y, X) from Hi_res_dataset."""
    meta_path = HI_RES_DATASET_DIR / "metadata.json"
    if not meta_path.exists():
        raise FileNotFoundError(f"Metadata not found: {meta_path}. Run Hi_res_10_download_data.py first.")
    with open(meta_path) as f:
        meta = json.load(f)
    channel_names = meta.get("channel_names") or [f"channel_{i}" for i in range(4)]

    npy_path = HI_RES_DATASET_DIR / "data.npy"
    zarr_path = HI_RES_DATASET_DIR / "data.zarr"
    if npy_path.exists():
        data = np.load(npy_path)
    elif zarr_path.exists():
        root = zarr.open(str(zarr_path), mode="r")
        data = np.asarray(root["data"][:])
    else:
        raise FileNotFoundError(f"No data.npy or data.zarr in {HI_RES_DATASET_DIR}")

    if data.ndim != 4:
        raise ValueError(f"Expected 4D (C,Z,Y,X), got shape {data.shape}")
    return data, channel_names


def run() -> list:
    data, channel_names = load_hi_res_volume()
    C = data.shape[0]
    results = []
    for c in range(C):
        vol = data[c, :, :, :]
        name = channel_names[c] if c < len(channel_names) else f"channel_{c}"
        logger.info("Channel %d: %s", c, name)
        results.append({
            "channel_index": c,
            "name": name,
            "dimension": list(vol.shape),
            "min": float(np.min(vol)),
            "max": float(np.max(vol)),
            "mean": float(np.mean(vol)),
            "dtype": str(vol.dtype),
        })

    HI_RES_DIR.mkdir(parents=True, exist_ok=True)
    with open(INVESTIGATION_PATH, "w") as f:
        json.dump(results, f, indent=2)
    logger.info("Saved %s", INVESTIGATION_PATH)

    min_max_list = [
        {"name": r["name"], "dimension": r["dimension"], "min": r["min"], "max": r["max"], "mean": r["mean"]}
        for r in results
    ]
    with open(MIN_MAX_PATH, "w") as f:
        json.dump(min_max_list, f, indent=2)
    logger.info("Saved %s", MIN_MAX_PATH)
    return results


if __name__ == "__main__":
    run()
    print(f"Hi_res step 30 done. channel_min_max: {MIN_MAX_PATH}")

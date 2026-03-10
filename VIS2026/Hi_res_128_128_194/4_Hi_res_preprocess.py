"""
Step 50 for Hi-res: load normalized channels, save table (N, 5) for Inflammation (no z aggregation; Z=194).
Input: NormalizedChannel_Hi_res_infal_2688_3456/*.npy (4 channels).
Output: VIS2026/Hi_res/preprocessed_Hi_res_infal_2688_3456/Inflammation.npy (volume 512×512×194 in z).
"""
from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import List

import numpy as np

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

_SCRIPT_DIR = Path(__file__).resolve().parent
HI_RES_DIR = _SCRIPT_DIR.parent / "Hi_res" if _SCRIPT_DIR.name != "Hi_res" else _SCRIPT_DIR
PREFIX = "Hi_res_infal_2688_3456"
NORMALIZED_DIR = HI_RES_DIR / f"NormalizedChannel_{PREFIX}"
PREPROCESSED_DIR = HI_RES_DIR / f"preprocessed_{PREFIX}"
MICROENVIRONMENT_NAME = "Inflammation"
# No z aggregation: keep all 194 slices. Step 60 uses patch_z=12 → 194//12 = 16 patches along z.
Z_AGGREGATE = 1


def load_normalized_channels(normalized_dir: Path, num_channels: int = 4) -> np.ndarray:
    channels = []
    for i in range(num_channels):
        path = normalized_dir / f"{i}.npy"
        if not path.exists():
            raise FileNotFoundError(f"Normalized channel not found: {path}")
        channels.append(np.load(path).astype(np.float32))
    return np.stack(channels, axis=0)


def aggregate_z(volume: np.ndarray, z_bin: int) -> np.ndarray:
    C, Z, Y, X = volume.shape
    n_bins = Z // z_bin
    out = np.zeros((C, n_bins, Y, X), dtype=np.float32)
    for i in range(n_bins):
        start = i * z_bin
        end = min((i + 1) * z_bin, Z)
        out[:, i, :, :] = volume[:, start:end, :, :].mean(axis=1)
    return out


def run() -> Path:
    if not NORMALIZED_DIR.exists():
        raise FileNotFoundError(f"{NORMALIZED_DIR} not found. Run Hi_res_40_normalizedChannel.py first.")

    volume = load_normalized_channels(NORMALIZED_DIR)
    C, Z, Y, X = volume.shape
    logger.info("Loaded normalized shape (C,Z,Y,X): %s", volume.shape)

    aggregated = aggregate_z(volume, z_bin=Z_AGGREGATE)
    Z_agg, Y, X = aggregated.shape[1], aggregated.shape[2], aggregated.shape[3]
    aggregated = np.round(aggregated.astype(np.float32), 2)

    # Build (N, 5) table with columns [c, value, z, y, x] using vectorized ops (no 200M Python loop)
    shp = (C, Z_agg, Y, X)
    channel_col = np.broadcast_to(np.arange(C, dtype=np.float32).reshape(C, 1, 1, 1), shp).ravel()
    value_col = aggregated.ravel()
    z_col = np.broadcast_to(np.arange(Z_agg, dtype=np.float32).reshape(1, Z_agg, 1, 1), shp).ravel()
    y_col = np.broadcast_to(np.arange(Y, dtype=np.float32).reshape(1, 1, Y, 1), shp).ravel()
    x_col = np.broadcast_to(np.arange(X, dtype=np.float32).reshape(1, 1, 1, X), shp).ravel()
    out = np.stack([channel_col, value_col, z_col, y_col, x_col], axis=1)

    PREPROCESSED_DIR.mkdir(parents=True, exist_ok=True)
    out_path = PREPROCESSED_DIR / "Inflammation.npy"
    np.save(out_path, out)
    logger.info("Saved %s shape (N, 5); N=%d", out_path, out.shape[0])
    return out_path


if __name__ == "__main__":
    run()
    print(f"Hi_res step 50 done. Output: {PREPROCESSED_DIR / 'Inflammation.npy'}")

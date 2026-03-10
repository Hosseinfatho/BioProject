"""
Step 60 for Hi-res: run ConGAT pipeline on preprocessed Hi-res (Inflammation), save positions JSON.

Volume: 512×512×194. Subgraph size: x=16, y=16, z=12.
Number of subgraphs: (512/16)×(512/16)×(194/12) = 32×32×16 = 16,384.

Input:
  - VIS2026/Hi_res/preprocessed_Hi_res_infal_2688_3456/Inflammation.npy
    (shape C, 194, 512, 512; no z aggregation in step 50)

Output:
  - VIS2026/Hi_res/positions_Hi_res_infal_2688_3456.json
    (positions in voxel coords: x,y in [0,511], z in [0,15]; coord_scale=1)
  - VIS2026/Hi_res/subgraphs_Hi_res_infal_2688_3456/Inflammation/
    (one .npz per subgraph; 16,384 files + index.json)
"""
from __future__ import annotations

from pathlib import Path

import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

_SCRIPT_DIR = Path(__file__).resolve().parent
HI_RES_DIR = _SCRIPT_DIR.parent / "Hi_res" if _SCRIPT_DIR.name != "Hi_res" else _SCRIPT_DIR
VIS2026 = _SCRIPT_DIR.parent if _SCRIPT_DIR.name == "Hi_res" else _SCRIPT_DIR

PREFIX = "Hi_res_infal_2688_3456"
PREPROCESSED_DIR = HI_RES_DIR / f"preprocessed_{PREFIX}"
SUBGRAPHS_DIR = HI_RES_DIR / f"subgraphs_{PREFIX}"
OUTPUT_DIR = HI_RES_DIR
POSITIONS_FILENAME = f"positions_{PREFIX}.json"
CHANNEL_NAMES = ["MART1", "MX1", "IRF1", "CD11c"]

# Subgraph (patch) size: x=16, y=16, z=12 → 16,384 subgraphs for 512×512×194
PATCH_X, PATCH_Y, PATCH_Z = 16, 16, 12
NUM_SUBGRAPHS_EXPECTED = (512 // PATCH_X) * (512 // PATCH_Y) * (194 // PATCH_Z)  # 16384


def run() -> str:
    logger.info("Hi-res 60: volume 512×512×194, subgraph %d×%d×%d → %d subgraphs",
                PATCH_X, PATCH_Y, PATCH_Z, NUM_SUBGRAPHS_EXPECTED)
    import importlib.util
    spec = importlib.util.spec_from_file_location("model60", VIS2026 / "60_model.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    run_pipeline = mod.run_pipeline
    out_path = run_pipeline(
        channel_names=CHANNEL_NAMES,
        microenvironment_name="Inflammation",
        output_dir=OUTPUT_DIR,
        preprocessed_dir=PREPROCESSED_DIR,
        subgraphs_dir=SUBGRAPHS_DIR,
        positions_filename=POSITIONS_FILENAME,
        coord_scale=1,
        patch_z=PATCH_Z,
        patch_y=PATCH_Y,
        patch_x=PATCH_X,
    )
    return out_path


def _check_preprocessed_z() -> None:
    """Ensure preprocessed table has Z=194 so we get 16,384 subgraphs. Otherwise raise with clear message."""
    import numpy as np
    path = PREPROCESSED_DIR / "Inflammation.npy"
    if not path.exists():
        raise FileNotFoundError(f"{path} not found. Run Hi_res_50_preprocess.py first.")
    data = np.load(path, mmap_mode="r")
    if data.ndim != 2 or data.shape[1] != 5:
        return
    z_max = int(np.max(data[:, 2]))
    Z = z_max + 1
    n_subgraphs = (512 // PATCH_X) * (512 // PATCH_Y) * (Z // PATCH_Z)
    if n_subgraphs < NUM_SUBGRAPHS_EXPECTED:
        raise ValueError(
            f"Preprocessed volume has Z={Z} → only {n_subgraphs} subgraphs (expected {NUM_SUBGRAPHS_EXPECTED}). "
            "Re-run Hi_res_50_preprocess.py with Z_AGGREGATE=1 to keep all 194 z-slices, then run this again."
        )


if __name__ == "__main__":
    if not PREPROCESSED_DIR.exists():
        raise FileNotFoundError(f"{PREPROCESSED_DIR} not found. Run Hi_res_50_preprocess.py first.")
    _check_preprocessed_z()
    path = run()
    print(f"Hi-res step 60 done. Positions: {path}")

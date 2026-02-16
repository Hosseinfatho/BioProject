"""
Hi_res.py – Download a 512×512×194 window (4 channels only) from Dataset 1 at highest resolution.

Dataset name: Inflammation
Channels: selected by index (see CHANNEL_INDICES). Dataset1 list: 0=Hoechst, 2=MX1, 3=MART1, 31=IRF1, 42=CD11c, ...
Window: 512 × 512 × 194 centered at (x=2688, y=3456), full z (0:194).
Full volume: x=10908, y=5508, z=194, 70 channels (~2 TB total). This script downloads only
the requested window and 4 channels to keep size small.

Data format (source):
  - Zarr multiscale on S3; component "0" = highest resolution.
  - Array shape at comp 0: (1, 70, 194, 5508, 10908) → (T, C, Z, Y, X).
  - We slice [0, channel_indices, 0:194, y_slice, x_slice] and save as Zarr + metadata.

Output: D:\\VIS2026\\Hossein\\BioProject\\VIS2026\\Hi_res\\Hi_res_dataset
  - data.zarr (or .npy): shape (4, 194, 512, 512) = (C, Z, Y, X).
  - metadata.json: dataset name, channels, window bounds, shape, dtype.
"""

from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import List, Tuple

import dask.array as da
from dask.diagnostics import ProgressBar
import numpy as np

try:
    from tqdm.dask import TqdmCallback
    HAS_TQDM_CALLBACK = True
except ImportError:
    TqdmCallback = None
    HAS_TQDM_CALLBACK = False
import requests
import s3fs
import zarr

try:
    import ome_types
except ImportError:
    ome_types = None

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Config (aligned with 10_download_data.py)
# ---------------------------------------------------------------------------
DATASET_URL = "https://lsp-public-data.s3.amazonaws.com/biomedvis-challenge-2025/Dataset1-LSP13626-melanoma-in-situ/0"
# OME metadata is at dataset root (no /0)
METADATA_URL = "https://lsp-public-data.s3.amazonaws.com/biomedvis-challenge-2025/Dataset1-LSP13626-melanoma-in-situ/OME/METADATA.ome.xml"
COMPONENT = 0  # highest resolution

DATASET_NAME = "Inflammation"
# Channel selection by 0-based index (no OME name lookup). Dataset1: 2=MX1, 3=MART1, 31=IRF1, 42=CD11c
CHANNEL_INDICES = [3, 2, 31, 42]  # MART1, MX1, IRF1, CD11c

# Window: 512 × 512 in (x,y), full z=194. Center (x,y) = (2688, 3456).
WINDOW_X = 1024
WINDOW_Y = 1024
WINDOW_Z = 194
CENTER_X = 2688
CENTER_Y = 3456
# Full volume dimensions (for bounds check)
FULL_X = 10908
FULL_Y = 5508
FULL_Z = 194

OUTPUT_DIR = Path(r"D:\VIS2026\Hossein\BioProject\VIS2026\Hi_res\Hi_res_dataset")


def _zarr_url_to_s3(zarr_url: str) -> str:
    """Convert HTTPS S3 URL to s3:// for s3fs."""
    if zarr_url.startswith("s3://"):
        return zarr_url
    if zarr_url.startswith("https://"):
        after = zarr_url.split("//", 1)[-1]
        host = after.split("/", 1)[0]
        path = after.split("/", 1)[1] if "/" in after else ""
        bucket = host.split(".")[0]
        return f"s3://{bucket}/{path}"
    return zarr_url


def get_channel_names_from_ome(metadata_url: str) -> List[str]:
    """Fetch channel names from OME-XML (same logic as 00_data)."""
    try:
        resp = requests.get(metadata_url, timeout=30)
        resp.raise_for_status()
        data = resp.text.replace("Â", "")
        if ome_types is not None:
            ome_xml = ome_types.from_xml(data)
            return [c.name for c in ome_xml.images[0].pixels.channels]
        import xml.etree.ElementTree as ET
        root = ET.fromstring(data)
        ns = {"ome": "http://www.openmicroscopy.org/Schemas/OME/2016-06"}
        channels = root.findall(".//ome:Channel", ns) or root.findall(".//{http://www.openmicroscopy.org/Schemas/OME/2016-06}Channel")
        names = []
        for i, ch in enumerate(channels):
            name = ch.get("Name")
            if name is None:
                el = ch.find("ome:Name", ns) or ch.find("{http://www.openmicroscopy.org/Schemas/OME/2016-06}Name") or ch.find("Name")
                name = el.text if el is not None else None
            names.append(name or f"channel_{i}")
        return names
    except Exception as e:
        logger.warning("Could not get channel names from OME: %s", e)
        return []


def compute_window_slice(center_xy: Tuple[int, int], size_xy: Tuple[int, int], full_xy: Tuple[int, int]) -> Tuple[slice, slice]:
    """Return (y_slice, x_slice) for a centered window, clamped to [0, full)."""
    cx, cy = center_xy
    sx, sy = size_xy
    fx, fy = full_xy
    half_x = sx // 2
    half_y = sy // 2
    x_start = max(0, cx - half_x)
    y_start = max(0, cy - half_y)
    x_end = min(fx, x_start + sx)
    y_end = min(fy, y_start + sy)
    x_start = max(0, x_end - sx)
    y_start = max(0, y_end - sy)
    return slice(y_start, y_end), slice(x_start, x_end)


def download_hi_res_window() -> bool:
    """
    Download only the 1024*1024*194 window for channels MART1, MX1, IRF1, CD11c
    at highest resolution (component 0) and save to Hi_res_dataset.
    """
    s3_path = _zarr_url_to_s3(DATASET_URL)
    logger.info("S3 path: %s, component: %s", s3_path, COMPONENT)

    # Use channel indices directly (no name lookup)
    channel_indices = list(CHANNEL_INDICES)
    channel_names = [f"channel_{i}" for i in channel_indices]
    all_names = get_channel_names_from_ome(METADATA_URL)
    if all_names:
        channel_names = [all_names[i] if i < len(all_names) else f"channel_{i}" for i in channel_indices]
    logger.info("Channels by index %s -> %s", channel_indices, channel_names)

    # Window slices (y, x) for 512×512 centered at (2688, 3456)
    y_slice, x_slice = compute_window_slice(
        (CENTER_X, CENTER_Y),
        (WINDOW_X, WINDOW_Y),
        (FULL_X, FULL_Y),
    )
    z_slice = slice(0, WINDOW_Z)  # 0:194
    logger.info("Window: x=%s, y=%s, z=%s", x_slice, y_slice, z_slice)

    # Load Zarr via dask (only the slice we need)
    fs = s3fs.S3FileSystem(anon=True)
    group_url = s3_path
    comp = str(COMPONENT)

    logger.info("Opening Zarr component %s (highest resolution)...", comp)
    arr = da.from_zarr(group_url, component=comp, storage_options={"anon": True})
    logger.info("Full array shape: %s", arr.shape)

    # Assume (T, C, Z, Y, X) or (C, Z, Y, X)
    ndim = arr.ndim
    if ndim == 5:
        # (t, c, z, y, x) -> slice t=0, channels, z, y, x
        cropped = arr[0, channel_indices, z_slice, y_slice, x_slice]
    elif ndim == 4:
        cropped = arr[channel_indices, z_slice, y_slice, x_slice]
    else:
        logger.error("Unexpected array ndim %s", ndim)
        return False

    logger.info("Cropped shape (C, Z, Y, X): %s", cropped.shape)

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    # Compute to numpy (triggers download of only the needed chunks)
    if HAS_TQDM_CALLBACK:
        with TqdmCallback(desc="Downloading", unit=" chunk"):
            data = cropped.compute()
    else:
        with ProgressBar():
            data = cropped.compute()

    # Save as .npy (simple) and Zarr (optional)
    np.save(OUTPUT_DIR / "data.npy", data.astype(np.float32))
    logger.info("Saved %s", OUTPUT_DIR / "data.npy")

    # Zarr copy for consistency with rest of pipeline (zarr v3: create_array with shape)
    zarr_path = OUTPUT_DIR / "data.zarr"
    root = zarr.open(str(zarr_path), mode="w")
    arr_f32 = data.astype(np.float32)
    arr = root.create_array(name="data", shape=arr_f32.shape, chunks=(1, 64, 256, 256), dtype=arr_f32.dtype)
    arr[:] = arr_f32
    root.attrs["channel_names"] = channel_names
    root.attrs["channel_indices"] = channel_indices
    root.attrs["axes"] = ["c", "z", "y", "x"]
    logger.info("Saved %s", zarr_path)

    # Metadata
    meta = {
        "dataset_name": DATASET_NAME,
        "channel_indices": channel_indices,
        "channel_names": channel_names,
        "shape": list(data.shape),
        "dtype": str(data.dtype),
        "window": {
            "x_center": CENTER_X,
            "y_center": CENTER_Y,
            "x_slice": [x_slice.start, x_slice.stop],
            "y_slice": [y_slice.start, y_slice.stop],
            "z_slice": [0, WINDOW_Z],
            "full_volume": {"x": FULL_X, "y": FULL_Y, "z": FULL_Z},
        },
        "source_url": DATASET_URL,
        "component": COMPONENT,
    }
    with open(OUTPUT_DIR / "metadata.json", "w") as f:
        json.dump(meta, f, indent=2)
    logger.info("Saved %s", OUTPUT_DIR / "metadata.json")

    return True


if __name__ == "__main__":
    logger.info("Hi-res window download: %s, channel indices %s", DATASET_NAME, CHANNEL_INDICES)
    ok = download_hi_res_window()
    if ok:
        logger.info("Done. Output: %s", OUTPUT_DIR)
    else:
        logger.error("Download failed.")

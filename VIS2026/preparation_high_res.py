"""
preparation_high_res.py – Convert Hi_res_dataset to visualization-ready channel files.

Reads the high-res window from Hi_res/Hi_res_dataset (data.npy or data.zarr),
normalizes each channel to uint8, and writes per-channel .raw + metadata JSON
in the same style as helper code/export_zarr_channels.py so the React/Three.js
viewer can load them.

Input:  VIS2026/Hi_res/Hi_res_dataset/
          - data.npy or data.zarr (shape C, Z, Y, X e.g. 4, 194, 512, 512)
          - metadata.json (channel_names, etc.)
Output: VIS2026/Hi_res/HI_res_channel/
          - channel_0_data.raw, channel_1_data.raw, ...
          - channel_0_metadata.json, channel_1_metadata.json, ...
          - channels_index.json (optional: list of channel names and shapes)
"""
from __future__ import annotations

import json
import logging
from pathlib import Path

import numpy as np
import zarr

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------
HI_RES_DATASET_DIR = Path(__file__).resolve().parent / "Hi_res" / "Hi_res_dataset"
OUTPUT_DIR = Path(r"D:\VIS2026\Hossein\BioProject\VIS2026\Hi_res\HI_res_channel")

# Optional: downsample factor 1 = full res; 2 = half in z,y,x
DOWNSAMPLE = 1


def normalize_to_uint8(data: np.ndarray) -> tuple[np.ndarray, float, float]:
    """Scale channel to [0, 255] uint8; return (uint8_array, data_min, data_max)."""
    data_min = float(np.min(data))
    data_max = float(np.max(data))
    if data_max == data_min:
        raise ValueError("Channel has constant value; cannot normalize")
    scaled = ((data.astype(np.float64) - data_min) / (data_max - data_min) * 255).astype(np.uint8)
    return scaled, data_min, data_max


def load_hi_res_data(source_dir: Path) -> tuple[np.ndarray, dict]:
    """Load volume from Hi_res_dataset (data.npy or data.zarr) and metadata.json."""
    source_dir = Path(source_dir).resolve()
    meta_path = source_dir / "metadata.json"
    if not meta_path.exists():
        raise FileNotFoundError(f"Metadata not found: {meta_path}")

    with open(meta_path, encoding="utf-8") as f:
        meta = json.load(f)

    npy_path = source_dir / "data.npy"
    zarr_path = source_dir / "data.zarr"

    if npy_path.exists():
        data = np.load(npy_path)
        logger.info("Loaded %s, shape %s", npy_path.name, data.shape)
    elif zarr_path.exists():
        root = zarr.open(str(zarr_path), mode="r")
        if "data" in root:
            arr = root["data"]
            data = np.asarray(arr[:])
        else:
            raise KeyError(f"No 'data' array in {zarr_path}")
        logger.info("Loaded data.zarr/data, shape %s", data.shape)
    else:
        raise FileNotFoundError(f"No data.npy or data.zarr in {source_dir}")

    # Expect (C, Z, Y, X)
    if data.ndim != 4:
        raise ValueError(f"Expected 4D (C,Z,Y,X), got shape {data.shape}")
    return data, meta


def extract_channels(
    data: np.ndarray,
    meta: dict,
    output_dir: Path,
    downsample: int,
) -> None:
    """Export each channel as .raw + metadata.json for visualization."""
    output_dir = Path(output_dir).resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    channel_names = meta.get("channel_names") or [f"channel_{i}" for i in range(data.shape[0])]
    n_channels = data.shape[0]

    index_meta = {"channels": [], "shape_zyx": list(data.shape[1:]), "downsample": downsample}

    for c in range(n_channels):
        name = channel_names[c] if c < len(channel_names) else f"channel_{c}"
        logger.info("Processing channel %d (%s) ...", c, name)

        try:
            vol = data[c, :, :, :]
        except Exception as e:
            logger.warning("  Failed to load channel %d: %s", c, e)
            continue

        if downsample > 1:
            vol = vol[::downsample, ::downsample, ::downsample]

        shape = vol.shape
        try:
            data_uint8, data_min, data_max = normalize_to_uint8(vol)
        except ValueError as e:
            logger.warning("  Skipping channel %d: %s", c, e)
            continue

        channel_meta = {
            "shape": list(shape),
            "dataRange": [data_min, data_max],
            "downsampleFactor": downsample,
            "channel": c,
            "channelName": name,
            "source": str(HI_RES_DATASET_DIR),
        }

        meta_path = output_dir / f"channel_{c}_metadata.json"
        raw_path = output_dir / f"channel_{c}_data.raw"
        data_uint8.tofile(raw_path)

        with open(meta_path, "w", encoding="utf-8") as f:
            json.dump(channel_meta, f, indent=2)

        index_meta["channels"].append({"index": c, "name": name, "shape": shape})

        logger.info(
            "  Wrote %s, %s (%.2f MB), range [%s, %s]",
            meta_path.name,
            raw_path.name,
            data_uint8.nbytes / (1024**2),
            data_min,
            data_max,
        )

    index_path = output_dir / "channels_index.json"
    with open(index_path, "w", encoding="utf-8") as f:
        json.dump(index_meta, f, indent=2)
    logger.info("Wrote %s", index_path.name)


def main() -> bool:
    if not HI_RES_DATASET_DIR.exists():
        logger.error("Hi_res dataset dir not found: %s", HI_RES_DATASET_DIR)
        return False
    try:
        data, meta = load_hi_res_data(HI_RES_DATASET_DIR)
    except Exception as e:
        logger.error("Failed to load Hi_res data: %s", e, exc_info=True)
        return False
    extract_channels(data, meta, OUTPUT_DIR, DOWNSAMPLE)
    logger.info("Done. Output: %s", OUTPUT_DIR)
    return True


if __name__ == "__main__":
    ok = main()
    raise SystemExit(0 if ok else 1)

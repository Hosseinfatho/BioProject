"""
Read channel .npy files from data/channels_dataset1 or channels_dataset2; compute name, dimension, min, max, mean; write to JSON.
Use this to fill channel_min_max.json from local .npy files (not from remote Zarr).
Supports Dataset 1 and Dataset 2.
"""

from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional

import numpy as np

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
SELECTED_DATASET = 2  # Set to 1 or 2 to investigate that dataset

# Dataset configuration (aligned with 20_load_channels.py)
DATASETS = {
    1: {"name": "Dataset 1"},
    2: {"name": "Dataset 2"},
}

BASE_DATA_DIR = Path(__file__).resolve().parent / "data"


def get_channels_dir(dataset_id: Optional[int] = None) -> Path:
    """Return channels directory for the given dataset: data/channels_dataset1 or data/channels_dataset2."""
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    return BASE_DATA_DIR / f"channels_dataset{did}"


def load_channel_set(channel_set_path: Path) -> List[Dict[str, Any]]:
    """Load channel names and paths from channel_set.json."""
    if not channel_set_path.exists():
        return []
    with open(channel_set_path) as f:
        return json.load(f)


def investigate_channel(npy_path: Path) -> Dict[str, Any]:
    """Load one .npy, return dimension (shape), min, max, mean."""
    arr = np.load(npy_path)
    arr = np.asarray(arr)
    return {
        "dimension": list(arr.shape),
        "min": float(np.min(arr)),
        "max": float(np.max(arr)),
        "mean": float(np.mean(arr)),
        "dtype": str(arr.dtype),
    }


def investigate_all(
    dataset_id: Optional[int] = None,
    channels_dir: Optional[Path] = None,
    channel_set_path: Optional[Path] = None,
    output_investigation: Optional[Path] = None,
    output_min_max: Optional[Path] = None,
) -> List[Dict[str, Any]]:
    """
    Read each channel .npy from channels_dir one by one; compute name, dimension, min, max, mean; save to JSON.
    Writes: channel_investigation.json (full) and channel_min_max.json (name, dimension, min, max, mean).
    """
    did = dataset_id if dataset_id is not None else SELECTED_DATASET
    channels_dir = channels_dir or get_channels_dir(did)
    channel_set_path = channel_set_path or (channels_dir / "channel_set.json")
    output_investigation = output_investigation or (channels_dir / "channel_investigation.json")
    output_min_max = output_min_max or (Path(__file__).resolve().parent / "output" / f"dataset{did}" / "channel_min_max.json")
    channel_set = load_channel_set(channel_set_path)
    if not channel_set:
        # Fallback: find 0.npy, 1.npy, ... and use index as name
        results = []
        for i in range(70):
            p = channels_dir / f"{i}.npy"
            if not p.exists():
                continue
            logger.info("Reading %s", p.name)
            info = investigate_channel(p)
            results.append({
                "channel_index": i,
                "name": str(i),
                "dimension": info["dimension"],
                "min": info["min"],
                "max": info["max"],
                "mean": info["mean"],
                "dtype": info["dtype"],
            })
    else:
        results = []
        for rec in channel_set:
            c = rec["channel_index"]
            name = rec["name"]
            npy_path = Path(rec.get("npy_path", channels_dir / f"{c}.npy"))
            if not npy_path.is_absolute():
                npy_path = channels_dir / npy_path.name
            if not npy_path.exists():
                npy_path = channels_dir / f"{c}.npy"
            if not npy_path.exists():
                logger.warning("Skip channel %d (%s): file not found", c, name)
                results.append({
                    "channel_index": c,
                    "name": name,
                    "dimension": rec.get("shape", []),
                    "min": None,
                    "max": None,
                    "mean": None,
                    "dtype": None,
                })
                continue
            logger.info("Reading channel %d: %s", c, name)
            info = investigate_channel(npy_path)
            results.append({
                "channel_index": c,
                "name": name,
                "dimension": info["dimension"],
                "min": info["min"],
                "max": info["max"],
                "mean": info["mean"],
                "dtype": info["dtype"],
            })

    output_investigation.parent.mkdir(parents=True, exist_ok=True)
    with open(output_investigation, "w") as f:
        json.dump(results, f, indent=2)
    logger.info("Saved %d channels to %s", len(results), output_investigation)

    # Also write output/channel_min_max.json (name, dimension, min, max, mean)
    output_min_max.parent.mkdir(parents=True, exist_ok=True)
    min_max_list = [
        {"name": r["name"], "dimension": r["dimension"], "min": r["min"], "max": r["max"], "mean": r["mean"]}
        for r in results
    ]
    with open(output_min_max, "w") as f:
        json.dump(min_max_list, f, indent=2)
    logger.info("Saved %s", output_min_max)

    return results


if __name__ == "__main__":
    dataset_id = SELECTED_DATASET
    channels_dir = get_channels_dir(dataset_id)
    results = investigate_all(dataset_id=dataset_id)
    dataset_name = DATASETS.get(dataset_id, {}).get("name", f"Dataset {dataset_id}")
    out_inv = channels_dir / "channel_investigation.json"
    out_mm = Path(__file__).resolve().parent / "output" / f"dataset{dataset_id}" / "channel_min_max.json"
    print(f"{dataset_name}: Wrote {out_inv} and {out_mm}")
    for r in results[:5]:
        mean_str = f"{r['mean']:.2f}" if r.get('mean') is not None else "N/A"
        print(f"  {r['channel_index']}: {r['name']} dim={r['dimension']} min={r['min']} max={r['max']} mean={mean_str}")
    print("  ...")

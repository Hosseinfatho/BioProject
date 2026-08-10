"""
Export all channels from the public BiomedVis OME-Zarr (S3) into visualization_data/
as channel_{i}_data.raw + channel_{i}_metadata.json for the React viewer.

Examples:
  # High-res default folder (component 4)
  python export_channels_from_s3.py --component 4

  # Low-res for manually added channels
  python export_channels_from_s3.py --component 5 --output visualization_data_lo
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

import dask.array as da
import numpy as np

S3_URL = "s3://lsp-public-data/biomedvis-challenge-2025/Dataset1-LSP13626-melanoma-in-situ/0"
DEFAULT_OUTPUT = Path(__file__).resolve().parent / "visualization_data"


def normalize_to_uint8(data: np.ndarray) -> tuple[np.ndarray, int, int]:
    data_min = int(np.min(data))
    data_max = int(np.max(data))
    if data_max == data_min:
        raise ValueError(f"constant value {data_min}")
    scaled = ((data.astype(np.float64) - data_min) / (data_max - data_min) * 255).astype(np.uint8)
    return scaled, data_min, data_max


def export_channels(
    component: str,
    output_dir: Path,
    start_channel: int,
    end_channel: int,
    downsample: int,
    skip_existing: bool = True,
) -> tuple[list[int], list[tuple[int, str]]]:
    output_dir.mkdir(parents=True, exist_ok=True)

    print(f"Loading S3 zarr component={component} ...", flush=True)
    arr = da.from_zarr(S3_URL, component=str(component), storage_options={"anon": True})
    print(f"Remote shape: {arr.shape}, dtype={arr.dtype}, chunks={arr.chunksize}", flush=True)

    if arr.ndim != 5:
        raise ValueError(f"Expected 5D (t,c,z,y,x), got {arr.ndim}D")

    n_channels = int(arr.shape[1])
    end_channel = min(end_channel, n_channels - 1)

    successful: list[int] = []
    failed: list[tuple[int, str]] = []
    skipped: list[int] = []

    for channel_idx in range(start_channel, end_channel + 1):
        raw_path = output_dir / f"channel_{channel_idx}_data.raw"
        meta_path = output_dir / f"channel_{channel_idx}_metadata.json"
        meta_alias = output_dir / f"channel_{channel_idx}_data.json"

        if skip_existing and raw_path.exists() and meta_path.exists() and raw_path.stat().st_size > 0:
            print(f"[{channel_idx}/{end_channel}] skip existing {raw_path.name}", flush=True)
            skipped.append(channel_idx)
            successful.append(channel_idx)
            continue

        print(f"\n[{channel_idx}/{end_channel}] Channel {channel_idx}...", flush=True)
        try:
            vol = arr[0, channel_idx, ::downsample, ::downsample, ::downsample].compute()
            print(f"  shape={vol.shape}", flush=True)
            data_u8, data_min, data_max = normalize_to_uint8(vol)

            metadata = {
                "shape": list(data_u8.shape),
                "dataRange": [data_min, data_max],
                "downsampleFactor": downsample,
                "channel": channel_idx,
                "source": {"url": S3_URL, "component": str(component)},
            }

            data_u8.tofile(raw_path)
            text = json.dumps(metadata, indent=2)
            meta_path.write_text(text, encoding="utf-8")
            meta_alias.write_text(text, encoding="utf-8")

            print(
                f"  wrote {raw_path.name} ({data_u8.nbytes / 1024**2:.1f} MB), "
                f"range [{data_min}, {data_max}]",
                flush=True,
            )
            successful.append(channel_idx)
        except Exception as exc:  # noqa: BLE001
            print(f"  FAILED: {exc}", flush=True)
            failed.append((channel_idx, str(exc)))

    print(
        f"\nDone. ok={len(successful)} skipped={len(skipped)} failed={len(failed)} -> {output_dir}",
        flush=True,
    )
    return successful, failed


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--component", default="4", help="Pyramid level (0=full, 4=high, 5=low)")
    parser.add_argument("--output", default=str(DEFAULT_OUTPUT))
    parser.add_argument("--start-channel", type=int, default=0)
    parser.add_argument("--end-channel", type=int, default=69)
    parser.add_argument("--downsample", type=int, default=1)
    parser.add_argument(
        "--clean",
        action="store_true",
        help="Delete existing channel_* files in output before export",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Re-download even if channel files already exist",
    )
    args = parser.parse_args()

    output_dir = Path(args.output)
    if not output_dir.is_absolute():
        output_dir = Path(__file__).resolve().parent / output_dir

    if args.clean and output_dir.exists():
        for path in output_dir.glob("channel_*"):
            path.unlink()
        print(f"Cleaned {output_dir}", flush=True)

    successful, failed = export_channels(
        component=args.component,
        output_dir=output_dir,
        start_channel=args.start_channel,
        end_channel=args.end_channel,
        downsample=args.downsample,
        skip_existing=not args.force,
    )
    return 0 if not failed else 1


if __name__ == "__main__":
    raise SystemExit(main())

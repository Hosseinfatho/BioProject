"""
Create visualization data files for channels 0-69.

Direct usage:
    python create_all_channels.py
    python create_all_channels.py --downsample-factor 2
    python create_all_channels.py --start-channel 0 --end-channel 10

Notebook usage after loading daskArray:
    exec(open('create_all_channels.py').read())
    create_all_channels_data(daskArray, downsample_factor=1)
"""
import argparse
import json
from pathlib import Path
import numpy as np

SCRIPT_DIR = Path(__file__).resolve().parent
DEFAULT_INPUT_PATH = SCRIPT_DIR / "downloadData" / "biomedvis-high-res" / "0" / "2"
DEFAULT_OUTPUT_DIR = SCRIPT_DIR / "visualization_data"


def load_local_dask_array(input_path=DEFAULT_INPUT_PATH):
    """Load the local Zarr dataset downloaded into downloadData/biomedvis-high-res."""
    try:
        import dask.array as da
    except ImportError as exc:
        raise ImportError(
            "dask[array] is required. Install dependencies with: pip install -r requirements.txt"
        ) from exc

    input_path = Path(input_path)
    if not input_path.exists():
        raise FileNotFoundError(
            f"Zarr data folder not found: {input_path}\n"
            "Expected downloaded data at downloadData/biomedvis-high-res/0/2."
        )

    return da.from_zarr(str(input_path))


def _load_channel_data(daskArray, channel_idx, downsample_factor):
    """Return one channel as a computed NumPy array from a 5D or 4D Dask array."""
    if downsample_factor < 1:
        raise ValueError("downsample_factor must be >= 1")

    if daskArray.ndim == 5:
        # Expected source shape: (T, C, Z, Y, X)
        return daskArray[
            0,
            channel_idx,
            ::downsample_factor,
            ::downsample_factor,
            ::downsample_factor,
        ].compute()

    if daskArray.ndim == 4:
        # Already channel-first: (C, Z, Y, X)
        return daskArray[
            channel_idx,
            ::downsample_factor,
            ::downsample_factor,
            ::downsample_factor,
        ].compute()

    raise ValueError(f"Expected a 5D or 4D Dask array, got {daskArray.ndim}D")


def create_all_channels_data(
    daskArray,
    downsample_factor=1,
    start_channel=0,
    end_channel=69,
    output_dir=DEFAULT_OUTPUT_DIR,
):
    """
    Create data files for all channels from start_channel to end_channel
    
    Args:
        daskArray: The dask array loaded from zarr (should be available in notebook)
        downsample_factor: Downsampling factor (1 = no downsampling, higher = more downsampling)
        start_channel: First channel index (default: 0)
        end_channel: Last channel index (default: 69)
        output_dir: Folder where .raw and metadata .json files will be saved
    """
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    successful = []
    failed = []
    
    print(f"\n{'='*70}")
    print(f"Creating data files for channels {start_channel} to {end_channel}")
    print(f"Downsample factor: {downsample_factor}")
    print(f"{'='*70}\n")
    
    for channel_idx in range(start_channel, end_channel + 1):
        print(f"\n[{channel_idx}/{end_channel}] Processing Channel {channel_idx}...")
        
        try:
            # Load and downsample
            channel_data = _load_channel_data(daskArray, channel_idx, downsample_factor)
            print(f"  Shape: {channel_data.shape}")
            
            # Normalize to 0-255
            data_min, data_max = channel_data.min(), channel_data.max()
            
            if data_max == data_min:
                print(f"  WARNING: Channel {channel_idx}: All values are the same ({data_min}), skipping")
                failed.append((channel_idx, "All values are the same"))
                continue
            
            channel_data_norm = ((channel_data - data_min) / (data_max - data_min) * 255).astype(np.uint8)
            
            # Save metadata
            metadata = {
                'shape': list(channel_data.shape),
                'dataRange': [int(data_min), int(data_max)],
                'downsampleFactor': downsample_factor,
                'channel': channel_idx
            }
            
            # Save metadata next to the raw file using the viewer's expected name.
            metadata_file = output_dir / f"channel_{channel_idx}_data.json"
            with open(metadata_file, 'w') as f:
                json.dump(metadata, f, indent=2)
            
            # Save data as binary
            data_file = output_dir / f"channel_{channel_idx}_data.raw"
            channel_data_norm.tofile(data_file)
            
            file_size_mb = channel_data_norm.nbytes / (1024**2)
            print(f"  Successfully created:")
            print(f"     - {metadata_file.name}")
            print(f"     - {data_file.name}")
            print(f"     - Data size: {file_size_mb:.2f} MB")
            print(f"     - Data range: [{int(data_min):,}, {int(data_max):,}]")
            
            successful.append(channel_idx)
            
        except Exception as e:
            print(f"  Error creating channel {channel_idx}: {str(e)}")
            failed.append((channel_idx, str(e)))
            continue
    
    # Summary
    print(f"\n{'='*70}")
    print(f"FINISHED!")
    print(f"{'='*70}")
    print(f"Successfully created: {len(successful)}/{end_channel - start_channel + 1} channels")
    print(f"Failed: {len(failed)} channels")
    
    if successful:
        print(f"\nSuccessful channels: {successful[:10]}{'...' if len(successful) > 10 else ''}")
    
    if failed:
        print(f"\nFailed channels:")
        for channel_idx, error in failed[:10]:
            print(f"   Channel {channel_idx}: {error}")
        if len(failed) > 10:
            print(f"   ... and {len(failed) - 10} more")
    
    print(f"\n{'='*70}\n")
    
    return successful, failed

# Alternative: Create data files for specific channels only
def create_specific_channels_data(
    daskArray,
    channel_indices,
    downsample_factor=1,
    output_dir=DEFAULT_OUTPUT_DIR,
):
    """
    Create data files for specific channels only
    
    Args:
        daskArray: The dask array loaded from zarr
        channel_indices: List of channel indices to create (e.g., [27, 37, 25, 40, 59])
        downsample_factor: Downsampling factor (1 = no downsampling)
        output_dir: Folder where .raw and metadata .json files will be saved
    """
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    
    successful = []
    failed = []
    
    print(f"\n{'='*70}")
    print(f"Creating data files for channels: {channel_indices}")
    print(f"Downsample factor: {downsample_factor}")
    print(f"{'='*70}\n")
    
    for channel_idx in channel_indices:
        print(f"\nProcessing Channel {channel_idx}...")
        
        try:
            # Load and downsample
            channel_data = _load_channel_data(daskArray, channel_idx, downsample_factor)
            print(f"  Shape: {channel_data.shape}")
            
            # Normalize to 0-255
            data_min, data_max = channel_data.min(), channel_data.max()
            
            if data_max == data_min:
                print(f"  WARNING: Channel {channel_idx}: All values are the same ({data_min}), skipping")
                failed.append((channel_idx, "All values are the same"))
                continue
            
            channel_data_norm = ((channel_data - data_min) / (data_max - data_min) * 255).astype(np.uint8)
            
            # Save metadata
            metadata = {
                'shape': list(channel_data.shape),
                'dataRange': [int(data_min), int(data_max)],
                'downsampleFactor': downsample_factor,
                'channel': channel_idx
            }
            
            # Save metadata next to the raw file using the viewer's expected name.
            metadata_file = output_dir / f"channel_{channel_idx}_data.json"
            with open(metadata_file, 'w') as f:
                json.dump(metadata, f, indent=2)
            
            # Save data as binary
            data_file = output_dir / f"channel_{channel_idx}_data.raw"
            channel_data_norm.tofile(data_file)
            
            file_size_mb = channel_data_norm.nbytes / (1024**2)
            print(f"  Successfully created:")
            print(f"     - {metadata_file.name}")
            print(f"     - {data_file.name}")
            print(f"     - Data size: {file_size_mb:.2f} MB")
            print(f"     - Data range: [{int(data_min):,}, {int(data_max):,}]")
            
            successful.append(channel_idx)
            
        except Exception as e:
            print(f"  Error creating channel {channel_idx}: {str(e)}")
            failed.append((channel_idx, str(e)))
            continue
    
    # Summary
    print(f"\n{'='*70}")
    print(f"FINISHED!")
    print(f"{'='*70}")
    print(f"Successfully created: {len(successful)}/{len(channel_indices)} channels")
    print(f"Failed: {len(failed)} channels")
    
    if successful:
        print(f"\nSuccessful channels: {successful}")
    
    if failed:
        print(f"\nFailed channels:")
        for channel_idx, error in failed:
            print(f"   Channel {channel_idx}: {error}")
    
    print(f"\n{'='*70}\n")
    
    return successful, failed


def parse_args():
    parser = argparse.ArgumentParser(
        description="Create .raw and metadata .json files from the downloaded local Zarr data."
    )
    parser.add_argument(
        "--input",
        default=str(DEFAULT_INPUT_PATH),
        help=f"Path to local Zarr array. Default: {DEFAULT_INPUT_PATH}",
    )
    parser.add_argument(
        "--output",
        default=str(DEFAULT_OUTPUT_DIR),
        help=f"Output folder for .raw and .json files. Default: {DEFAULT_OUTPUT_DIR}",
    )
    parser.add_argument(
        "--downsample-factor",
        type=int,
        default=1,
        help="Downsampling factor. 1 means no downsampling.",
    )
    parser.add_argument(
        "--start-channel",
        type=int,
        default=0,
        help="First channel index to export.",
    )
    parser.add_argument(
        "--end-channel",
        type=int,
        default=69,
        help="Last channel index to export.",
    )
    parser.add_argument(
        "--channels",
        nargs="+",
        type=int,
        help="Optional explicit channel list, for example: --channels 27 37 25",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    daskArray = load_local_dask_array(args.input)

    print(f"Loaded Zarr data from: {Path(args.input).resolve()}")
    print(f"Array shape: {daskArray.shape}")
    print(f"Output folder: {Path(args.output).resolve()}")

    if args.channels:
        return create_specific_channels_data(
            daskArray,
            args.channels,
            downsample_factor=args.downsample_factor,
            output_dir=args.output,
        )

    return create_all_channels_data(
        daskArray,
        downsample_factor=args.downsample_factor,
        start_channel=args.start_channel,
        end_channel=args.end_channel,
        output_dir=args.output,
    )


if __name__ == "__main__":
    main()




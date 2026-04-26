"""
Check a .raw file and save one slice as PNG to verify it's not all black.
Run from this folder: python check_raw_and_save_slice.py
"""
from pathlib import Path
import json

try:
    import numpy as np
except ImportError:
    print("Install numpy: pip install numpy")
    raise

def main():
    here = Path(__file__).resolve().parent
    raw_path = here / "channel_0_data.raw"
    meta_path = here / "channel_0_metadata.json"
    if not raw_path.exists():
        print(f"File not found: {raw_path}")
        print("Run preparation_high_res.py first to create the .raw files.")
        return
    if not meta_path.exists():
        print(f"Metadata not found: {meta_path}")
        return

    with open(meta_path) as f:
        meta = json.load(f)
    shape = tuple(meta["shape"])  # (Z, Y, X) = (194, 512, 512)
    expected_size = 1
    for d in shape:
        expected_size *= d
    actual_size = raw_path.stat().st_size
    if actual_size != expected_size:
        print(f"WARNING: file size {actual_size} != expected {expected_size} (shape {shape})")
        print("Fiji will show wrong image if dimensions are incorrect.")
    else:
        print(f"File size OK: {actual_size} bytes = {shape[0]} x {shape[1]} x {shape[2]}")

    data = np.fromfile(raw_path, dtype=np.uint8).reshape(shape)
    print(f"Channel 0 stats: min={data.min()}, max={data.max()}, mean={data.mean():.2f}")

    if data.max() == 0:
        print("All zeros - image will be black. Check preparation_high_res.py input data.")
        return

    # Save middle z-slice as PNG so you can open in any viewer
    mid_z = shape[0] // 2
    slice_2d = data[mid_z, :, :]  # (Y, X) = (512, 512)
    out_png = here / "channel_0_slice_middle.png"
    try:
        from PIL import Image
        Image.fromarray(slice_2d).save(out_png)
        print(f"Saved middle slice (z={mid_z}) to {out_png} - open it to verify the data.")
    except ImportError:
        print("Install Pillow (pip install Pillow) to save PNG.")
        print(f"Middle slice z={mid_z}: min={slice_2d.min()}, max={slice_2d.max()}")

if __name__ == "__main__":
    main()

# Opening Hi-res channel .raw files in Fiji (ImageJ)

Each file is **8-bit** raw volume: **Width=512, Height=512, Slices=194** (Z, Y, X). No header.

**Important:** Use the files **in this folder** (`VIS2026/Hi_res/HI_res_channel/`). Do **not** use `visualization_data/channel_*_data.raw` — those have different dimensions and will look black or wrong in Fiji.

## Steps in Fiji

1. **File → Import → Raw...**
2. Select a file from **this folder**, e.g. `channel_0_data.raw`.
3. Set:
   - **Image type:** `8-bit unsigned`
   - **Width:** `512`
   - **Height:** `512`
   - **Number of images:** `194`
   - **Offset:** `0`
   - **Gap between images:** `0`
   - **Byte order:** `Little-endian` (default)
4. Click **OK**.
5. If the stack looks **all black**: **Image → Adjust → Brightness/Contrast** and click **Auto** (or set Min/Max manually). Then click **Apply**.

Result: a stack of 194 slices (512×512 each). Slice 1 = first Z, slice 194 = last Z.

## If you still see all black

1. **Check file size**  
   Each `.raw` must be exactly **50,724,352** bytes (194×512×512).  
   If the size is different, the file is from another dataset or corrupted.

2. **Run the check script** (in this folder):
   ```bash
   python check_raw_and_save_slice.py
   ```
   It prints min/max/mean and saves `channel_0_slice_middle.png`. If the PNG is black, the raw data is dark or zeros; if the PNG has content, the raw is OK and the issue is Fiji settings (try **Brightness/Contrast → Auto**).

3. **Confirm you are not using `visualization_data`**  
   Files in `visualization_data/` have different dimensions. Use only the `.raw` files in **VIS2026/Hi_res/HI_res_channel/**.

## Files in this folder

| File | Channel |
|------|---------|
| channel_0_data.raw | MART1 |
| channel_1_data.raw | MX1 |
| channel_2_data.raw | IRF1 |
| channel_3_data.raw | CD11c |

Metadata: `channel_N_metadata.json`, `channels_index.json`.

# Hi-res window download (Inflammation, 4 channels)

## What this does

- **Script:** `Hi_res.py` (in parent folder `VIS2026/`)
- **Dataset:** Dataset 1 (LSP13626 melanoma in situ), same source as `10_download_data.py` (link and metadata).
- **Resolution:** `component=0` = highest resolution (comp=0).
- **Dataset name:** Inflammation  
- **Channels:** MART1, MX1, IRF1, CD11c (4 channels only).
- **Window:** 512 × 512 in (x,y), full z (194 slices). Center (x,y) = (2688, 3456).
- **Output dir:** `D:\VIS2026\Hossein\BioProject\VIS2026\Hi_res\Hi_res_dataset`

So we download only this spatial/channel subset instead of the full ~2 TB (70 channels, full volume).

---

## Data format (source)

- **Storage:** Zarr on S3 (public). Base URL:  
  `https://lsp-public-data.s3.amazonaws.com/biomedvis-challenge-2025/Dataset1-LSP13626-melanoma-in-situ/0`
- **Multiscale:** The path `.../0` is the **group**; inside it, resolution levels are stored as arrays named `"0"`, `"1"`, … (e.g. `0` = highest resolution).
- **Component 0 (highest resolution):**
  - Shape: `(1, 70, 194, 5508, 10908)` → **(T, C, Z, Y, X)**
  - T=1, C=70 channels, Z=194, Y=5508, X=10908.
- **Metadata:** Channel names come from OME-XML at:  
  `.../Dataset1-LSP13626-melanoma-in-situ/OME/METADATA.ome.xml`  
  (dataset root, not under `/0`).
- **Why download only a range:** Full volume × 70 channels is ~2 TB. Downloading a 512×512×194 window and 4 channels keeps data small and fast.

---

## How we download only this part

1. **Open Zarr with Dask**  
   We use `dask.array.from_zarr(..., component="0")` so only the highest-resolution array is used; we never load the full array into memory.

2. **Slice before computing**  
   We request only:
   - **Channels:** indices for MART1, MX1, IRF1, CD11c (from OME-XML).
   - **X:** center 2688, half-width 256 → `x_start=2432`, `x_stop=2944` (512 pixels).
   - **Y:** center 3456, half-width 256 → `y_start=3200`, `y_stop=3712` (512 pixels).
   - **Z:** `0:194` (all slices).

   So we do:  
   `arr[0, channel_indices, 0:194, 3200:3712, 2432:2944]`  
   for a `(1, 70, 194, 5508, 10908)` array.

3. **Only requested chunks are downloaded**  
   Zarr/dask will request only the chunks that intersect this slice from S3, so only a small fraction of the full 2 TB is transferred.

4. **Save**  
   The result has shape **(4, 194, 512, 512)** (C, Z, Y, X). It is saved as:
   - `Hi_res_dataset/data.npy`
   - `Hi_res_dataset/data.zarr`
   - `Hi_res_dataset/metadata.json` (dataset name, channels, window bounds, shape, dtype).

---

## How to run

From the repo root or `VIS2026/`:

```bash
python Hi_res.py
```

Requires: `dask`, `zarr`, `s3fs`, `numpy`, `requests`. Optional: `ome_types` for robust OME-XML parsing (otherwise a simple XML fallback is used).

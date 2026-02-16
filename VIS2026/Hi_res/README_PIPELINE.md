# Hi-res pipeline (prefix: Hi_res_infal_2688_3456)

Pipeline for the high-resolution 4-channel window. All files are under **`D:\VIS2026\Hossein\BioProject\VIS2026\Hi_res`**.  
**No separate “load channels” step:** 30 and 40 read directly from **Hi_res_dataset** (output of Hi_res_10_download_data.py).

## Prerequisite

- **Hi_res_10_download_data.py** (or Hi_res.py) already run → **Hi_res_dataset/** contains `data.npy` (or `data.zarr`) and `metadata.json` (shape 4×194×512×512, channels MART1, MX1, IRF1, CD11c).

## Run order (from VIS2026 or VIS2026/Hi_res)

```bash
cd D:\VIS2026\Hossein\BioProject\VIS2026\Hi_res
python Hi_res_30_investigate.py
python Hi_res_40_normalizedChannel.py
python Hi_res_50_preprocess.py
python Hi_res_60_model.py
```

## Output layout (all under Hi_res/)

| Step | Path / files |
|------|----------------|
| 10   | **Hi_res_dataset/** — `data.npy`, `data.zarr`, `metadata.json` (from Hi_res_10_download_data.py) |
| 30   | **channel_investigation_Hi_res_infal_2688_3456.json**, **channel_min_max_Hi_res_infal_2688_3456.json** |
| 40   | **NormalizedChannel_Hi_res_infal_2688_3456/** — `0.npy`, `1.npy`, `2.npy`, `3.npy` |
| 50   | **preprocessed_Hi_res_infal_2688_3456/Inflammation.npy** |
| 60   | **positions_Hi_res_infal_2688_3456.json**, **subgraphs_Hi_res_infal_2688_3456/Inflammation/** (index.json + .npz) |

Scripts live in **VIS2026/Hi_res/** (e.g. `Hi_res_30_investigate.py`).

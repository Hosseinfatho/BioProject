# Tile_gat – 128×128×194 pipeline

Single script: **Tile_gat.py**

## Configurable defaults (edit at top of Tile_gat.py)

- **MICROENVIRONMENT_NAME** – e.g. `"Inflammation"`. Used for preprocessed file name and pipeline.
- **CHANNEL_NAMES** – list of channel names; order = channel index 0,1,2,…; length = number of channels. Must match OME metadata when using download (e.g. `["MART1", "MX1", "IRF1", "CD11c"]`).
- **CENTER_X**, **CENTER_Y** – center (x, y) in full-volume coordinates for the 128×128 window.
- **USE_DOWNLOAD** – if `True`, download 128×128×194 from Zarr (DATASET_URL) for the given center and channels. If `False`, load from **SOURCE_DATASET_DIR** and center-crop to 128×128.

Window is always **128×128** in (x,y) and **194** in z (full depth).

## Output (all under this folder)

- `dataset/` – data.npy + metadata.json (128×128×194, channel names, center)
- `channel_investigation_*.json`, `channel_min_max_*.json`
- `NormalizedChannel_*/`
- `preprocessed_*/{Microenvironment}.npy` (e.g. Inflammation.npy)
- `subgraphs_*/`
- `positions_Tile_gat_128_128_194.json`
- **`positions_Tile_gat_128_128_194_with_channels.json`** – per-ROI: `average_intensity_per_channel`, `average_saliency`, plus existing fields.

## Run

```bash
python VIS2026/Hi_res_128_128_194/Tile_gat.py
```

**With download:** needs `requests`, `dask`, `s3fs` (and optionally `ome_types`). **Without download:** needs existing data in SOURCE_DATASET_DIR. Pipeline also needs `numpy`, `torch`, `torch_geometric`, `tqdm`.

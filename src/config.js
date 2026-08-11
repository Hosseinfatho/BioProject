export const CONFIG = {
    /**
     * High Res toggle: denser pyramid (S3 component 3 ≈ 194×688×1363, ~182 MB/ch).
     */
    VISUALIZATION_DATA_DIR: 'visualization_data',
    /**
     * Low Res toggle (default): lighter pyramid (S3 component 5 ≈ 194×172×340, ~11 MB/ch).
     */
    LOW_RES_CHANNEL_DIR: 'visualization_data_low',
    /**
     * Very High Res toggle: S3 component 1 ≈ 194×2754×5454 (~2.9 GB/ch).
     * ≈ 16× High Res voxels.
     */
    VERY_HIGH_RES_CHANNEL_DIR: 'visualization_data_very_high',
    /** Optional window crop from preparation_high_res.py (future higher-res step) */
    HI_RES_CHANNEL_DIR: 'VIS2026/Hi_res/HI_res_channel',
    DATA_DIR: 'Data',
    // ROI positions: path to output folder (relative to BASE_URL)
    POSITIONS_BASE: 'VIS2026/output',
    // Microenvironments: must match 60_model.py MICROENVIRONMENTS; getFilename returns positions file name
    MICROENVIRONMENTS: [
        { id: 'inflammation', label: 'Inflammation', getFilename: () => 'positions_Inflammation.json' },
        { id: 'immune-cells', label: 'Immune cells', getFilename: () => 'positions_Immune_cells.json' },
        { id: 'b-cell', label: 'B-cell', getFilename: () => 'positions_B-cell.json' }
    ],
    DATASET_OPTIONS: [
        { id: 1, label: 'Dataset 1' },
        { id: 2, label: 'Dataset 2' }
    ]
};

export const CONFIG = {
    /**
     * High Res toggle: denser pyramid (S3 component 3 ≈ 194×688×1363).
     * Use on server / when you need maximum detail.
     */
    VISUALIZATION_DATA_DIR: 'visualization_data',
    /**
     * Low Res toggle (default): lighter pyramid (S3 component 5 ≈ 194×172×340).
     * Folder name: visualization_data_low
     */
    LOW_RES_CHANNEL_DIR: 'visualization_data_low',
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

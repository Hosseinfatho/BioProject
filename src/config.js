export const CONFIG = {
    /** Default / region presets: higher-res pyramid (S3 component 3 ≈ 194×688×1363) */
    VISUALIZATION_DATA_DIR: 'visualization_data',
    /** Manually added channels via "+ Add Channel": lower-res pyramid (S3 component 5) */
    LOW_RES_CHANNEL_DIR: 'visualization_data_lo',
    /** Optional window crop from preparation_high_res.py */
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

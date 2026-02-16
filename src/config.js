export const CONFIG = {
    VISUALIZATION_DATA_DIR: 'visualization_data',
    /** Channel .raw + metadata from preparation_high_res.py (VIS2026/Hi_res/HI_res_channel) */
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

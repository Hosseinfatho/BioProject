export const CONFIG = {
    VISUALIZATION_DATA_DIR: 'visualization_data',
    DATA_DIR: 'Data',
    // ROI positions: path to output folder (relative to BASE_URL)
    POSITIONS_BASE: 'VIS2026/output',
    // Microenvironments: { id, label, getFilename(datasetId) }
    MICROENVIRONMENTS: [
        { id: 'melanocytic', label: 'Melanocytic', getFilename: (datasetId) => datasetId === 1 ? 'positions_Melanocytic_tumor_identity.json' : 'positions_dataset2.json' }
    ],
    DATASET_OPTIONS: [
        { id: 1, label: 'Dataset 1' },
        { id: 2, label: 'Dataset 2' }
    ]
};

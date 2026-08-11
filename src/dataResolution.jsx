import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { CONFIG } from './config.js';

/**
 * Pyramid levels (S3 component → one-channel voxels):
 *   Low  = component 5 → ~11 MB    (194×172×340)
 *   High = component 3 → ~182 MB   (194×688×1363)
 *   Very = component 1 → ~2.9 GB   (194×2754×5454) ≈ 16× High
 */
export const RESOLUTION_MODES = {
  low: {
    id: 'low',
    label: 'Low Res',
    shortLabel: 'Low',
    dir: CONFIG.LOW_RES_CHANNEL_DIR || 'visualization_data_low'
  },
  high: {
    id: 'high',
    label: 'High Res',
    shortLabel: 'High',
    dir: CONFIG.VISUALIZATION_DATA_DIR || 'visualization_data'
  },
  very: {
    id: 'very',
    label: 'Very High Res',
    shortLabel: 'Very High',
    dir: CONFIG.VERY_HIGH_RES_CHANNEL_DIR || 'visualization_data_very_high'
  }
};

const RESOLUTION_ORDER = ['low', 'high', 'very'];

const DataResolutionContext = createContext({
  resolution: 'low',
  isLowRes: true,
  isHighRes: false,
  isVeryHighRes: false,
  channelDataDir: RESOLUTION_MODES.low.dir,
  setResolution: () => {},
  cycleResolution: () => {}
});

export function DataResolutionProvider({ children }) {
  // Product default is always Low Res (laptop / online friendly).
  const [resolution, setResolutionState] = useState('low');

  const setResolution = useCallback((next) => {
    if (RESOLUTION_MODES[next]) {
      setResolutionState(next);
    }
  }, []);

  const cycleResolution = useCallback(() => {
    setResolutionState((prev) => {
      const idx = RESOLUTION_ORDER.indexOf(prev);
      return RESOLUTION_ORDER[(idx + 1) % RESOLUTION_ORDER.length];
    });
  }, []);

  const value = useMemo(() => {
    const mode = RESOLUTION_MODES[resolution] || RESOLUTION_MODES.low;
    return {
      resolution: mode.id,
      isLowRes: mode.id === 'low',
      isHighRes: mode.id === 'high',
      isVeryHighRes: mode.id === 'very',
      channelDataDir: mode.dir,
      setResolution,
      cycleResolution,
      // Kept for older call sites
      toggleResolution: cycleResolution
    };
  }, [resolution, setResolution, cycleResolution]);

  return (
    <DataResolutionContext.Provider value={value}>
      {children}
    </DataResolutionContext.Provider>
  );
}

export function useDataResolution() {
  return useContext(DataResolutionContext);
}

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { CONFIG } from './config.js';

/** Low Res = laptop-friendly (visualization_data_low). High Res = denser pyramid (visualization_data). */
export const RESOLUTION_MODES = {
  low: {
    id: 'low',
    label: 'Low Res',
    dir: CONFIG.LOW_RES_CHANNEL_DIR || 'visualization_data_low'
  },
  high: {
    id: 'high',
    label: 'High Res',
    dir: CONFIG.VISUALIZATION_DATA_DIR || 'visualization_data'
  }
};

const DataResolutionContext = createContext({
  resolution: 'low',
  isLowRes: true,
  isHighRes: false,
  channelDataDir: RESOLUTION_MODES.low.dir,
  setResolution: () => {},
  toggleResolution: () => {}
});

export function DataResolutionProvider({ children }) {
  // Product default is always Low Res (laptop-friendly). High Res is opt-in per session.
  const [resolution, setResolutionState] = useState('low');

  const setResolution = useCallback((next) => {
    setResolutionState(next === 'high' ? 'high' : 'low');
  }, []);

  const toggleResolution = useCallback(() => {
    setResolutionState((prev) => (prev === 'low' ? 'high' : 'low'));
  }, []);

  const value = useMemo(() => {
    const mode = RESOLUTION_MODES[resolution] || RESOLUTION_MODES.low;
    return {
      resolution: mode.id,
      isLowRes: mode.id === 'low',
      isHighRes: mode.id === 'high',
      channelDataDir: mode.dir,
      setResolution,
      toggleResolution
    };
  }, [resolution, setResolution, toggleResolution]);

  return (
    <DataResolutionContext.Provider value={value}>
      {children}
    </DataResolutionContext.Provider>
  );
}

export function useDataResolution() {
  return useContext(DataResolutionContext);
}

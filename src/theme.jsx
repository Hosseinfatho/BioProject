import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

export const THEMES = {
  dark: {
    id: 'dark',
    appBg: '#000000',
    panelBg: '#000000',
    headerBg: '#333333',
    surfaceBg: '#1a1a1a',
    surfaceAlt: '#0f1016',
    inputBg: '#222222',
    text: '#ffffff',
    textMuted: '#b9bed0',
    border: '#444444',
    borderStrong: '#5a5f73',
    canvasBg: '#000000',
    modalOverlay: 'rgba(0, 0, 0, 0.7)',
    legendBg: 'rgba(0, 0, 0, 0.8)'
  },
  light: {
    id: 'light',
    appBg: '#ffffff',
    panelBg: '#ffffff',
    headerBg: '#e8e8e8',
    surfaceBg: '#f5f5f5',
    surfaceAlt: '#eeeeee',
    inputBg: '#ffffff',
    text: '#000000',
    textMuted: '#444444',
    border: '#cccccc',
    borderStrong: '#999999',
    canvasBg: '#ffffff',
    modalOverlay: 'rgba(0, 0, 0, 0.45)',
    legendBg: 'rgba(255, 255, 255, 0.9)'
  }
};

const ThemeContext = createContext({
  theme: 'dark',
  colors: THEMES.dark,
  toggleTheme: () => {},
  setTheme: () => {}
});

function applyCssVars(colors) {
  const root = document.documentElement;
  root.style.setProperty('--app-bg', colors.appBg);
  root.style.setProperty('--panel-bg', colors.panelBg);
  root.style.setProperty('--header-bg', colors.headerBg);
  root.style.setProperty('--surface-bg', colors.surfaceBg);
  root.style.setProperty('--surface-alt', colors.surfaceAlt);
  root.style.setProperty('--input-bg', colors.inputBg);
  root.style.setProperty('--text-color', colors.text);
  root.style.setProperty('--text-muted', colors.textMuted);
  root.style.setProperty('--border-color', colors.border);
  root.style.setProperty('--border-strong', colors.borderStrong);
  root.style.setProperty('--canvas-bg', colors.canvasBg);
  root.style.setProperty('--modal-overlay', colors.modalOverlay);
  root.style.setProperty('--legend-bg', colors.legendBg);
  root.dataset.theme = colors.id;
  document.body.style.backgroundColor = colors.appBg;
  document.body.style.color = colors.text;
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('dark'); // default = current dark UI

  useEffect(() => {
    applyCssVars(THEMES[theme] || THEMES.dark);
  }, [theme]);

  const setTheme = useCallback((next) => {
    setThemeState(next === 'light' ? 'light' : 'dark');
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      colors: THEMES[theme] || THEMES.dark,
      toggleTheme,
      setTheme,
      isDark: theme === 'dark',
      isLight: theme === 'light'
    }),
    [theme, toggleTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

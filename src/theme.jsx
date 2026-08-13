import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

/** UI chrome is intentionally glassy so Main View channels show through. */
export const THEMES = {
  dark: {
    id: 'dark',
    appBg: '#000000',
    panelBg: 'rgba(8, 8, 10, 0.28)',
    headerBg: 'rgba(20, 20, 24, 0.35)',
    surfaceBg: 'rgba(18, 18, 22, 0.32)',
    surfaceAlt: 'rgba(12, 12, 16, 0.28)',
    inputBg: 'rgba(24, 24, 30, 0.45)',
    text: '#ffffff',
    textMuted: '#d0d4e0',
    border: 'rgba(255, 255, 255, 0.22)',
    borderStrong: 'rgba(255, 255, 255, 0.32)',
    canvasBg: '#000000',
    modalOverlay: 'rgba(0, 0, 0, 0.55)',
    legendBg: 'rgba(0, 0, 0, 0.45)',
    headerControlBg: 'rgba(0, 0, 0, 0.2)',
    rowBg: 'rgba(20, 20, 24, 0.32)',
    rowAltBg: 'rgba(32, 32, 38, 0.4)',
    overlayTint: 'rgba(0, 0, 0, 0.08)'
  },
  light: {
    id: 'light',
    appBg: '#eef1f4',
    panelBg: 'rgba(255, 255, 255, 0.55)',
    headerBg: 'rgba(255, 255, 255, 0.72)',
    surfaceBg: 'rgba(248, 250, 252, 0.6)',
    surfaceAlt: 'rgba(240, 242, 245, 0.55)',
    inputBg: 'rgba(255, 255, 255, 0.75)',
    text: '#111111',
    textMuted: '#444444',
    border: 'rgba(0, 0, 0, 0.16)',
    borderStrong: 'rgba(0, 0, 0, 0.28)',
    canvasBg: '#f4f6f8',
    modalOverlay: 'rgba(0, 0, 0, 0.4)',
    legendBg: 'rgba(255, 255, 255, 0.7)',
    headerControlBg: 'rgba(0, 0, 0, 0.06)',
    rowBg: 'rgba(255, 255, 255, 0.55)',
    rowAltBg: 'rgba(255, 255, 255, 0.7)',
    overlayTint: 'rgba(255, 255, 255, 0.22)'
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
  root.style.setProperty('--header-control-bg', colors.headerControlBg || 'rgba(0,0,0,0.25)');
  root.style.setProperty('--row-bg', colors.rowBg || colors.surfaceBg);
  root.style.setProperty('--row-alt-bg', colors.rowAltBg || colors.inputBg);
  root.style.setProperty('--overlay-tint', colors.overlayTint || 'rgba(0,0,0,0.08)');
  root.dataset.theme = colors.id;
  document.body.style.backgroundColor = colors.appBg;
  document.body.style.color = colors.text;
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('dark');

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

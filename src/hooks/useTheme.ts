import { useState, useEffect, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import { colors, darkColors } from '../theme/colors';

type ThemeMode = 'light' | 'dark' | 'system';

interface UseThemeReturn {
  theme: typeof colors | typeof darkColors;
  themeMode: ThemeMode;
  isDark: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeReturn => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');

  const isDark =
    themeMode === 'dark' ||
    (themeMode === 'system' && systemColorScheme === 'dark');

  const theme = isDark ? darkColors : colors;

  useEffect(() => {
    // TODO: Load theme preference from AsyncStorage
  }, []);

  const setThemeMode = useCallback((mode: ThemeMode) => {
    setThemeModeState(mode);
    // TODO: Save theme preference to AsyncStorage
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeMode(isDark ? 'light' : 'dark');
  }, [isDark, setThemeMode]);

  return {
    theme,
    themeMode,
    isDark,
    setThemeMode,
    toggleTheme,
  };
};


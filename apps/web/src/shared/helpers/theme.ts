import { ColorScheme, DefaultTheme, Theme, ThemeMap } from '../constants/theme';
import { getCookie } from './cookies';

export const getTheme = (): { resolvedTheme?: ColorScheme; theme: Theme } => {
  const defaultTheme: DefaultTheme = 'system';

  const theme = getCookie('Theme') ?? defaultTheme;
  const resolvedTheme = getCookie('ResolvedTheme');

  return { resolvedTheme, theme };
};

export const resolveTheme = (theme: Theme): ColorScheme => {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark').matches
      ? ThemeMap.Dark
      : ThemeMap.Light;
  }
  return theme;
};

export type ColorScheme = 'dark' | 'light';
export type DefaultTheme = 'system';
export type Theme = ColorScheme | DefaultTheme;
export type ThemeKeys = Capitalize<Theme>;
export type ColorSchemeKeys = Capitalize<ColorScheme>;

export const ColorSchemeMap = {
  Dark: 'dark',
  Light: 'light',
} as const satisfies Record<ColorSchemeKeys, ColorScheme>;

export const ThemeMap = {
  ...ColorSchemeMap,
  System: 'system',
} as const satisfies Record<ThemeKeys, Theme>;

export const ColorSchemeValues = Object.values(ColorSchemeMap);
export const ThemeValues = Object.values(ThemeMap);

export type ThemeItem<V extends Theme> = {
  label: string;
  value: V;
};

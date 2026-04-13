export type SystemTheme = 'system';

type ColorSchemeMapType = {
  Dark: 'dark';
  Light: 'light';
};

type ThemeMapType = ColorSchemeMapType & {
  System: SystemTheme;
};

export type ColorScheme = ColorSchemeMapType[keyof ColorSchemeMapType];
export type Theme = ColorScheme | SystemTheme;
export type ThemeKeys = Capitalize<Theme>;
export type ColorSchemeKeys = Capitalize<ColorScheme>;

export const ColorSchemeMap: ColorSchemeMapType = {
  Dark: 'dark',
  Light: 'light',
} as const;

export const ThemeMap: ThemeMapType = {
  ...ColorSchemeMap,
  System: 'system',
} as const;

export const ColorSchemeValues = Object.values(ColorSchemeMap);
export const ThemeValues = Object.values(ThemeMap);

export type ThemeItem<V extends Theme> = {
  label: string;
  value: V;
};

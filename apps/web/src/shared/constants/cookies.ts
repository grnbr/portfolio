import { ColorSchemeValues, ThemeValues } from '../types/theme';

export type CookieNames = 'resolvedTheme' | 'theme';
export type CookieKeys = Capitalize<CookieNames>;
type KeyValue<K extends CookieNames> = {
  key: K;
  values: readonly string[];
};

export const CookieKeysMap = {
  ResolvedTheme: {
    key: 'resolvedTheme',
    values: ColorSchemeValues,
  },
  Theme: {
    key: 'theme',
    values: ThemeValues,
  },
} as const satisfies Record<CookieKeys, KeyValue<CookieNames>>;

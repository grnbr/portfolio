export const Locales = {
  English: 'en',
  Russian: 'ru',
} as const;

export type Locale = (typeof Locales)[keyof typeof Locales];

type I18n = {
  defaultLocale: Locale;
  locales: Locale[];
};

export const i18n: I18n = {
  defaultLocale: Locales.English,
  locales: [Locales.English, Locales.Russian],
} as const;

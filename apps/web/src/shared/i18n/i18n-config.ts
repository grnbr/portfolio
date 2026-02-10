export enum Languages {
  English = 'en',
  Russian = 'ru',
}

export type Locale = Languages;

type I18n = {
  defaultLocale: Languages;
  locales: Languages[];
};

export const i18n: I18n = {
  defaultLocale: Languages.English,
  locales: [Languages.English, Languages.Russian],
} as const;

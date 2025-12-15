export enum Languages {
  English = 'en',
  Russian = 'ru',
}

export type LanguageType = Languages.English | Languages.Russian;

export type Locale = (typeof i18n)['locales'][number];

type I18n = {
  defaultLocale: LanguageType;
  locales: LanguageType[];
};

export const i18n: I18n = {
  defaultLocale: Languages.English,
  locales: [Languages.English, Languages.Russian],
} as const;

import type { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('../dictionaries/en.ts').then((module) => module.dictionary),
  ru: () => import('../dictionaries/ru.ts').then((module) => module.dictionary),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

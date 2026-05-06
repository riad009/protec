import 'server-only';

export type Locale = 'fr' | 'en';

const dictionaries = {
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const loader = dictionaries[locale] || dictionaries['fr'];
  return loader();
};

export const locales: Locale[] = ['fr', 'en'];
export const defaultLocale: Locale = 'fr';

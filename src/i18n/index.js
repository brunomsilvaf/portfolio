import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enGbTranslations from './locales/en_GB.json';
import ptPtTranslations from './locales/pt_PT.json';

import ENFlag from '../assets/flags/united_kingdom-flag.png';
import PTFlag from '../assets/flags/portugal-flag.png';

export const languages = [
  {
    language: 'pt',
    locale: 'pt-PT',
    img: PTFlag,
    translation: ptPtTranslations
  },
  {
    language: 'en',
    locale: 'en-GB',
    img: ENFlag,
    translation: enGbTranslations
  }
];

const resources = languages.reduce(
  (acc, { language, locale, translation }) => ({
    ...acc,
    [language]: translation,
    [locale]: translation
  }),
  {}
);

// Every supported language plus its locale variant (e.g. 'en' and 'en-GB').
const supportedLngs = languages.flatMap(({ language, locale }) => [
  language,
  locale
]);

const i18nConfig = {
  resources,
  supportedLngs,
  // Accept region variants (e.g. 'en-US' -> 'en', 'pt-BR' -> 'pt').
  nonExplicitSupportedLngs: true,
  // Anything that isn't Portuguese or English defaults to English.
  fallbackLng: 'en-GB',
  defaultNS: 'translations', // default namespace
  detection: {
    // Use a previously chosen language, otherwise detect from the browser.
    order: ['localStorage', 'navigator'],
    caches: ['localStorage']
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { enTranslation } from './translation/en';
import { esTranslation } from './translation/es';
import { tokTranslation } from "./translation/tok";
import { tokSpTranslation } from "./translation/toksp";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'es', 'tok', 'toksp'],
    resources: {
      en: enTranslation,
      es: esTranslation,
      tok: tokTranslation,
      toksp: tokSpTranslation
    },
    fallbackLng: 'en',

    interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
  });
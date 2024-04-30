'use client';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
// utils
import { localStorageGetItem } from 'src/utils/storage-available';
//
import { defaultSettings } from 'src/sections/layouts/settings/context/settings-provider';
import { defaultLang, fallbackLng, resources } from './config-lang';
//
import { langLocalStorageKey } from './use-locales';

// ----------------------------------------------------------------------

const lng = localStorageGetItem(langLocalStorageKey, defaultLang.value) || defaultSettings.lang;
const instance = i18n.createInstance();

export default (params?: { lang?: string }) => {
  instance
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      lng: params?.lang || lng,
      fallbackLng,
      debug: false,
      ns: ['translations'],
      defaultNS: 'translations',
      lowerCaseLng: true,
      interpolation: {
        escapeValue: false,
      },
    });
  return instance;
};

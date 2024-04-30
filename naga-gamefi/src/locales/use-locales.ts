'use client';

import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
// utils
import { localStorageGetItem } from 'src/utils/storage-available';
// components
import { SettingKeys, useSettingsContext } from 'src/sections/layouts/settings';
//
import { usePathname } from 'src/routes/hooks';
import { matchUrlLang } from 'src/utils/current-lang';
import { allLangs, defaultLang } from './config-lang';

// ----------------------------------------------------------------------
export const langLocalStorageKey = 'i18nextLng';
export default function useLocales() {
  const { i18n, t } = useTranslation();

  const { onUpdate } = useSettingsContext();

  const langStorage = localStorageGetItem(langLocalStorageKey);

  const currentLang = allLangs.find((lang) => lang.value === langStorage) || defaultLang;

  const pathname = usePathname();
  const onChangeLang = useCallback(
    (newlang: string) => {
      const urlLang = matchUrlLang(pathname);
      if (pathname && urlLang && urlLang !== newlang) {
        window.location.replace(pathname.replace(`/${urlLang}`, `/${newlang}`));
      }

      i18n.changeLanguage(newlang);
      onUpdate(SettingKeys.LANG, newlang);
    },
    [i18n, onUpdate, pathname]
  );

  return {
    allLangs,
    t,
    currentLang,
    onChangeLang,
  };
}

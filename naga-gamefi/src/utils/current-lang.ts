import Cookies from 'js-cookie';
import { LangVals, SettingKeys } from 'src/sections/layouts/settings';
import { fallbackLng } from 'src/locales';
import { defaultSettings } from 'src/sections/layouts/settings/context/settings-provider';
import { canUseDom } from './can-use-dom';

export const matchUrlLang = (pathname?: string | null) => {
  if (!pathname) return null;
  const urlLangArr = pathname.match(/\/([^/]+)/);
  const urlLang = urlLangArr ? urlLangArr[1] : null;
  const isSupported = urlLang && fallbackLng.includes(urlLang as LangVals);
  return isSupported ? urlLang : null;
};

export const navigatorLang = () => {
  const clientLang = canUseDom
    ? (navigator.language || navigator.languages[0])?.toLowerCase()
    : undefined;
  const isClientLangSurported = clientLang && fallbackLng.includes(clientLang as LangVals);
  return isClientLangSurported ? clientLang : null;
};

export const currentLang = () => {
  const urlLang = canUseDom ? matchUrlLang(window.location.pathname) : null;

  const cookieLang = Cookies.get(SettingKeys.LANG);

  const clientLang = navigatorLang();

  return (
    canUseDom ? urlLang || cookieLang || clientLang || defaultSettings.lang : defaultSettings.lang
  ) as LangVals;
};

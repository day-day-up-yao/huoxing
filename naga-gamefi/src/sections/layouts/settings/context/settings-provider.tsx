'use client';

// import isEqual from 'lodash/isEqual';
import { useMemo, useCallback, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { useLocalStorage } from 'src/utils/hooks/use-local-storage';
import { currentLang } from 'src/utils/current-lang';
import { axiosInstanceInitialize } from 'src/utils/axios';
import { cookiesName } from 'src/utils/public';
import { useSoloThemePageConfig } from 'src/utils/hooks/solo-theme-page-config';
import { forbidBodyThemeColor } from 'src/utils/solo-theme-page-config';
import { LangVals, ModeVals, SettingKeys, SettingsValueProps } from '../types';
import { SettingsContext } from './settings-context';

type SettingsProviderProps = {
  children: React.ReactNode;
  params?: SettingsValueProps;
};

export const defaultSettings = {
  mode: ModeVals.DARK,
  lang: LangVals.ENUS,
};

export const bodyThemeSetter = (mode: ModeVals) => {
  document.body.className = `rs-theme-${mode}`;

  const styleTag = document.getElementById('forbidBodyTheme');
  if (!styleTag) return;
  styleTag.innerHTML = forbidBodyThemeColor(mode);
};

// cookie同步一份，方便服务端获取; 2023.7.27目前cokies与localstorage设置基本一致[lang, mode]，保留localstorage为后边扩展方便
type PickedSettings = Extract<SettingKeys, SettingKeys.LANG | SettingKeys.MODE>;
const syncCookieSettings: PickedSettings[] = [SettingKeys.LANG, SettingKeys.MODE];

const settingsLocalStorageKey = 'settings';

export function SettingsProvider({ children, params }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage<SettingsValueProps>(settingsLocalStorageKey, {
    ...defaultSettings,
    ...params,
  });

  const onUpdate = useCallback(
    (name: SettingKeys, value: LangVals | ModeVals, params?: { forbidSetCookie?: boolean }) => {
      if (!params?.forbidSetCookie && syncCookieSettings.includes(name as PickedSettings)) {
        Cookies.set(name, value);
      }

      setSettings((prevState: SettingsValueProps) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setSettings]
  );

  // 判断是否soloPage
  const soloPage = useSoloThemePageConfig();
  useEffect(() => {
    if (!soloPage) {
      const modeVal = (Cookies.get(SettingKeys.MODE) as ModeVals) || defaultSettings.mode;
      onUpdate(SettingKeys.MODE, modeVal);
      bodyThemeSetter(modeVal);
      return;
    }

    // soloPage设置时不设置cookie，利用cookie保留用户设置以便后续同步
    onUpdate(SettingKeys.MODE, soloPage.theme as ModeVals, { forbidSetCookie: true });
    bodyThemeSetter(soloPage.theme as ModeVals);
  }, [onUpdate, soloPage]);

  // 页面刷新默认同步一次语言设置
  const onUpdateRef = useRef(onUpdate);
  useEffect(() => {
    onUpdateRef.current = onUpdate;
  }, [onUpdate]);
  useEffect(() => {
    const lang = currentLang();
    axiosInstanceInitialize({ lang, token: Cookies.get(cookiesName.auToken) });
    onUpdateRef.current(SettingKeys.LANG, lang);
  }, []);

  const onReset = useCallback(() => {
    syncCookieSettings.forEach((name) => {
      // Cookies.remove(name);
      Cookies.set(name, defaultSettings[name]);
    });
    setSettings(defaultSettings);
  }, [setSettings]);

  // const canReset = !isEqual(settings, defaultSettings);

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      onUpdate,
      // canReset,
      onReset,
    }),
    [onReset, onUpdate, settings]
  );

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>;
}

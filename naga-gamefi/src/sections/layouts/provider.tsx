import { ReactNode } from 'react';
import Cookies from 'js-cookie';
import { ToastContainer } from 'react-toastify';
// import { ReCaptchaProvider } from 'src/utils/next-recaptcha-v3';
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import i18nInstance from 'src/locales/i18n';
import { LocalizationProvider } from 'src/locales';
import ThemeProvider from 'src/theme';
import { SettingsProvider, ModeVals, LangVals, SettingKeys } from 'src/sections/layouts/settings';
import { defaultSettings } from 'src/sections/layouts/settings/context/settings-provider';
import LayoutMain from 'src/sections/layouts/main';
import { currentLang } from 'src/utils/current-lang';
import { canUseDom } from 'src/utils/can-use-dom';
import { soloThemePageConfig } from 'src/utils/solo-theme-page-config';
import { usePathname } from 'src/routes/hooks';
import WalletProvier from './wallet-provider';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-quill/dist/quill.snow.css';
import 'src/assets/scss/app-route.scss';
import 'src/assets/scss/toastify.scss';
import 'src/assets/scss/nprogress.scss';

export type LayoutProviderProps = {
  children?: ReactNode;
  lang?: LangVals;
  mode?: ModeVals;
};

const i18n = i18nInstance();
if (canUseDom) {
  i18n.changeLanguage(currentLang());
}

const LayoutProvider = ({ children, lang: langProp, mode: modeProp }: LayoutProviderProps) => {
  const pathname = usePathname() as string | undefined;
  const soloConfig = soloThemePageConfig(pathname);

  const lang = langProp || currentLang();
  const mode = (soloConfig?.theme ||
    modeProp ||
    Cookies.get(SettingKeys.MODE) ||
    defaultSettings.mode) as ModeVals;

  if (!canUseDom) {
    i18n.changeLanguage(lang);
  }

  return (
    <LocalizationProvider>
      <SettingsProvider params={{ mode, lang }}>
        <ThemeProvider>
          <WalletProvier>
            <ReCaptchaProvider useEnterprise useRecaptchaNet>
              <LayoutMain>{children}</LayoutMain>
            </ReCaptchaProvider>
          </WalletProvier>
          <ToastContainer />
        </ThemeProvider>
      </SettingsProvider>
    </LocalizationProvider>
  );
};

export default LayoutProvider;

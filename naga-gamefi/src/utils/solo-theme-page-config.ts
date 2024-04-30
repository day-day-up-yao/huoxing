import { soloThemePages } from 'src/config-global';
import { ModeVals } from 'src/sections/layouts/settings';
import { GREY, GREY_SHALLOW } from 'src/theme/palette-step-colors';

export const soloThemePageConfig = (pathname?: string) =>
  soloThemePages.find((item) => item.path === pathname || pathname?.includes(item.path));

export const forbidBodyThemeColorStyleIdName = 'forbidBodyTheme';
export const forbidBodyThemeColor = (mode?: ModeVals) => {
  const themeBgDefaultColor = mode === ModeVals.LIGHT ? GREY[0] : GREY[900];
  const themeTextDefaultColor = mode === ModeVals.LIGHT ? GREY_SHALLOW[800] : GREY[0];
  const headStyle = `
          html {
            --rs-body: ${themeBgDefaultColor} !important;
            --naga-body: ${themeBgDefaultColor} !important;
            background: var(--rs-body) !important;
            --rs-text-primary: ${themeTextDefaultColor} !important;
            color: var(--rs-text-primary) !important;
          }
          body {
            --rs-body: ${themeBgDefaultColor} !important;
            --naga-body: ${themeBgDefaultColor} !important;
            background: var(--rs-body) !important;
            --rs-text-primary: ${themeTextDefaultColor} !important;
            color: var(--rs-text-primary) !important;
          }
        `;

  return headStyle;
};

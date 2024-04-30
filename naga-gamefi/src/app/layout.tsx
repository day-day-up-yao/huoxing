import { headers } from 'next/headers';
import { routePathnameKey } from 'src/fetchs/store-keys';
import { primaryFont } from 'src/theme/typography';
import { appDirCookies } from 'src/sections/layouts/app-dir-cookies';
import {
  BaiduAnalytics,
  ErudaDev,
  GoogleAnalytics,
  MetaTDKFixed,
  ThridJsLib,
  defaultMetadata,
} from 'src/sections/layouts/head-content';
import { SWRProvider } from 'src/sections/layouts/swr-provider';
import {
  forbidBodyThemeColor,
  forbidBodyThemeColorStyleIdName,
  soloThemePageConfig,
} from 'src/utils/solo-theme-page-config';
import { ModeVals } from 'src/sections/layouts/settings';
import AppProvier from './_appProvier';
import 'src/assets/scss/colors/index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata = defaultMetadata;

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children, ...rest }: Props) {
  const { lang, mode } = appDirCookies();
  const headersList = headers();
  const pathname = headersList.get('x-pathname')?.replace(`/${lang}/`, '/') as string | undefined;
  const soloConfig = soloThemePageConfig(pathname);

  const lastMode = (soloConfig?.theme || mode) as ModeVals | undefined;
  const headStyle = forbidBodyThemeColor(lastMode);

  return (
    <html lang="en" className={primaryFont.className}>
      <head>
        <style id={forbidBodyThemeColorStyleIdName}>{headStyle}</style>
        <MetaTDKFixed />
      </head>
      <body className={`rs-theme-${lastMode}`}>
        <SWRProvider fallback={{ [routePathnameKey]: pathname }}>
          <AppProvier lang={lang} mode={mode}>
            {children}
          </AppProvier>
        </SWRProvider>
        <ThridJsLib />
        {/* <BaiduAnalytics /> */}
        <GoogleAnalytics />
        <ErudaDev />
      </body>
    </html>
  );
}

import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { AppType } from 'next/app';
import { primaryFont } from 'src/theme/typography';
import createEmotionCache from 'src/sections/layouts/pages-dir-create-emotion-cache';
import { BaiduAnalytics, GoogleAnalytics, ThridJsLib } from 'src/sections/layouts/head-content';
import { defaultSettings } from 'src/sections/layouts/settings/context/settings-provider';
import {
  forbidBodyThemeColor,
  forbidBodyThemeColorStyleIdName,
  soloThemePageConfig,
} from 'src/utils/solo-theme-page-config';
import { MyAppProps } from './_app';

interface MyDocumentProps extends DocumentProps {
  emotionStyleTags: JSX.Element[];
}

export default function MyDocument(ctx: MyDocumentProps) {
  const { emotionStyleTags, __NEXT_DATA__ } = ctx;
  const { pageCookies, pagePathname, initialReduxState } = __NEXT_DATA__.props;
  const soloConfig = soloThemePageConfig(pagePathname);

  // ------------------------------ 页面刷新强制更正主题模式，否则会出现刷新白屏，因为sass等样式是前端生成插入到头部 ------------------------------
  const bodyClassName = `rs-theme-${
    soloConfig?.theme || pageCookies?.mode || defaultSettings.mode
  }`;
  const headStyle = forbidBodyThemeColor(pageCookies?.mode);

  return (
    <Html lang="en" className={primaryFont.className}>
      <Head>
        <style id={forbidBodyThemeColorStyleIdName}>{headStyle}</style>
        {emotionStyleTags}
      </Head>
      <body className={bodyClassName}>
        <Main />

        <ThridJsLib />
        <NextScript />
        {/* <BaiduAnalytics /> */}
        <GoogleAnalytics />
      </body>
    </Html>
  );
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (
        App: React.ComponentType<
          React.ComponentProps<AppType> & Pick<MyAppProps, 'emotionCache' | 'pageProps'>
        >
      ) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

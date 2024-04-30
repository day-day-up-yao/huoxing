import { Provider } from 'react-redux';
import { NextComponentType, NextPageContext } from 'next';
import { CacheProvider, EmotionCache } from '@emotion/react';
import LayoutProvider from 'src/sections/layouts/provider';
import withRematch, {
  WithRematchProps,
} from 'src/sections/layouts/pages-dir-with-rematch-and-cookies';
import createEmotionCache from 'src/sections/layouts/pages-dir-create-emotion-cache';
import { canUseDom } from 'src/utils/can-use-dom';
import { routePathnameKey } from 'src/fetchs/store-keys';
import { HeadPagesDir, MetaTDKFixed } from 'src/sections/layouts/head-content';
import { SWRProvider } from 'src/sections/layouts/swr-provider';
import 'src/assets/scss/colors/index.scss';
import 'src/assets/less/index.less';

// pages页面渲染流程
// 1: page中的getStatcProps等函数(context[req,...]) --->
// 2: _document.tsx(getInitialProps的props继承自[1]的返回值，返回值可传值给其render[html])
// 3: _app.tsx(getInitialProps的props也继承自[1]的返回值，返回值可传值给其render[component])
// 4: pagesDirWithRematchAndCookies中getInitialProps返回值给到_document.tsx的__NEXT_DATA__.props，
// 5: pagesDirWithRematchAndCookies给的render[Comp]属性，给到_app.tsx的MyApp的props

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends WithRematchProps {
  Component: NextComponentType<NextPageContext, any, {}>;
  pageProps: any;
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  // ------当前页面getServerSideProps等服务端请求方法传过来的
  pageProps,
  // ------_document.tsx getInitialProps传过来的
  emotionCache = clientSideEmotionCache,
  // ------withRematch传过来的
  pathname,
  cookies,
  reduxStore,
}: MyAppProps) => {
  if (canUseDom) window.reduxStore = reduxStore;
  return (
    <CacheProvider value={emotionCache}>
      <HeadPagesDir>
        <MetaTDKFixed />
      </HeadPagesDir>
      <Provider store={reduxStore}>
        <SWRProvider fallback={{ ...pageProps?.fallback, [routePathnameKey]: pathname }}>
          <LayoutProvider {...cookies}>
            <Component {...pageProps} cookies={cookies} />
          </LayoutProvider>
        </SWRProvider>
      </Provider>
    </CacheProvider>
  );
};

export default withRematch(MyApp);

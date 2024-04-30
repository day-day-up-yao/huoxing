import React from 'react';
import { AppContext } from 'next/app';
import { isEqual } from 'lodash';
import { PagesNextRequest, pagesDirCookies } from 'src/sections/layouts/pages-dir-cookies';
import { LayoutProviderProps } from 'src/sections/layouts/provider';
import { RootState, initializeStore } from '../../models/store';
import { RootModel } from '../../models/root';

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';
const checkServer = () => typeof window === 'undefined';

function getOrCreateStore(initialState?: RootState) {
  if (checkServer()) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  // @ts-ignore
  if (!window[__NEXT_REDUX_STORE__]) {
    // @ts-ignore
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  // @ts-ignore
  return window[__NEXT_REDUX_STORE__];
}

export type Store = ReturnType<typeof getOrCreateStore>;
export type WithRematchProps = {
  // _document.tsx
  initialReduxState?: RootModel;
  pageCookies?: LayoutProviderProps;
  pagePathname?: string;

  // _app.tsx
  reduxStore: Store;
  cookies: LayoutProviderProps;
  pathname: string;
};

declare module 'next' {
  export interface NextPageContext {
    reduxStore: {};
  }
}

const pagesDirWithRematchAndCookies = (Comp: (props: any) => JSX.Element) =>
  class AppWithRematch extends React.Component<WithRematchProps> {
    reduxStore: any;

    cookies: any;

    pagePathname: string;

    static async getInitialProps(appContext: AppContext) {
      // ---------------pathname---------------
      const pagePathname = appContext.ctx.pathname?.replace('/[lang]/', '/');

      // ---------------cookies---------------
      const pageCookies = pagesDirCookies({ req: appContext.ctx.req as PagesNextRequest });

      // ---------------redusState---------------
      const reduxStore = getOrCreateStore();

      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if ((Comp as any).getInitialProps) {
        appProps = await (Comp as any).getInitialProps(appContext);
      }

      return {
        ...appProps,
        pageCookies,
        pagePathname,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props: any) {
      super(props);
      this.cookies = props.pageCookies;
      this.pagePathname = props.pagePathname;

      // eslint-disable-next-line react/prop-types
      const pageState = props?.pageProps?.reduxState;
      const pagesPropsStateKeys = pageState && Object.keys(pageState);
      const thisPropsStateKeys = Object.keys(props.initialReduxState);

      const initialState = isEqual(pagesPropsStateKeys, thisPropsStateKeys)
        ? pageState
        : props.initialReduxState;

      this.reduxStore = getOrCreateStore(initialState);
    }

    render() {
      return (
        <Comp
          {...this.props}
          reduxStore={this.reduxStore}
          cookies={this.cookies}
          pathname={this.pagePathname}
        />
      );
    }
  };
export default pagesDirWithRematchAndCookies;

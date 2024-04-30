```Javascript
// TODO: 任务创建，可拖拽顺序
// TODO: 任务创建，Google验证
// TODO: sitemap 转发，https://naga-api.mars-block.com/api/gamefi/sitemap.xml
// TODO: 任务新改动
// TODO: 钱包断开连接后，首次连接会调试什么版本错误

// todo: ErrorBoundary错误处理， fetcher throw error或者说useCallback错误捕获自定义
// todo: getInitialProps, getServerSideProps, getStaticProps, getStaticPaths; 页面使用如何getInitialProps实现之前架构功能, 前端跳转也能获取到1
// todo: MuiLocalizationProvider 打包时报错  Dynamic Code Evaluation (e. g. 'eval', 'new Function', 'WebAssembly.compile') not allowed in Edge Runtime
// todo: mui textField组件，彻底禁止自动填充，autoComplete, 可参考rsuite的做法

// todo: app怎么获取当前请求的url + 从当前url获取语言
// https://github.com/vercel/next.js/issues/46618#issuecomment-1450416633 这个解决方案测试不行，可以再测试

// todo: react18 有 useClient的 hooks吗？有跟nextis use client 有什么区别，react use函数有什么用
// todo: 整站跳转链接，判断如果第三方链接新窗口打开，naga链接当前窗口打开
// TODO: 黑白模式===>可以配置某些页面强制黑模式或者亮色模式
// TODO: 之前swr服务端数据请求，有个问题什么问题？
// TODO: SVG图标使用方式
// TODO: 网站所有图片跟element一样，使用oss图片

// TODO: 首页加阴影
// TODO: 登录注册重构


// TODO: 所有window.ethereum都改成wagmi，特别个人中心
// TODO: wagmi配置重新搞，重新配置，现在是手动删选的
// TODO: WalletConnect修复
// TODO: 看看有没有像ethers签名方法，不用去监听data，isPengding什么的，现在useEffect的开发方式有点麻烦
```

### NextJs环境变量

```typescript
.env: 默认的环境变量，为所有环境提供基本的默认值。
.env.local: 本地覆盖。无论是开发环境还是生产环境，都会覆盖上面的.env文件。
.env.development 或 .env.production: 根据你处于的模式（开发或生产）来加载，并且会覆盖上面的.env和.env.local文件。
.env.development.local 或 .env.production.local: 根据你处于的模式（开发或生产）来加载，并且它们的优先级最高，会覆盖上述的所有文件。
所以，从高到低的优先级为：

.env.development.local 或 .env.production.local
.env.development 或 .env.production
.env.local
.env
```

### 老项目迁移文档

https://con.marslib.com/pages/viewpage.action?pageId=49415599

### SvgIcon使用方式

```Javascript
// 1:代码方式
// 在assets/icons 或 assets/illustrations中新建svg icon组件，把svg代码拷贝到组建中

// 2: 文件方式
// svg文件拷贝到public/images/svg，把svg代码中的fill或stroke替换成currentColor，根据主题变色
import SvgIcon from 'src/components/svg-icon';
<SvgIcon name={iconName} isWhite />
```

### Swr使用方式，项目强咨询类，暂时没引入Zustand类似的全局状态管理，暂用Swr作为状态管理

```Javascript
// -----------------作为全局或夸组件状态使用-----------------
export const useUserPopup = (props?: { initialStore?: UserPopup }) => {
  const cacheKey = 'userPopup';

  const { data } = useSWR(cacheKey, { fallbackData: props?.initialStore || {} });

  const mutateUserPopup = useCallback(
    (params: MutateUserPopupParams) => {
      // 兼容以前参数，在此处做一次转换
      const popupShow = 'bool' in params ? { popupShow: params.bool } : {};
      const showType = 'type' in params ? { showType: params.type } : {};
      const pageflage = 'ispage' in params ? { pageflage: params.ispage } : {};
      mutate(cacheKey, { ...data, ...popupShow, ...showType, ...pageflage }, false);
    },
    [data]
  );

  return { data, mutate: mutateUserPopup };
};


// ----------------/src/fetchs/[type].ts 定义api请求数据---------------
// 需要服务端请求时，以下定义需按这个格式来，需要组合使用
// getTopCoinList类似这种请求函数，当然也可单独使用
export async function getTopCoinList() {
  const res = await fetcher<TopCoinListRes>({
    type: 'get',
    url: gamefi.getTopCoinList,
  });
  return res.data;
}
export const topCoinListKey = 'topCoinList';
export const useGetTopCoinList = () => {
  const result = useSWRMutation(topCoinListKey, async () => {
    const res = await getTopCoinList();
    return res;
  });
  return result;
};

// ----------------------fetchs/store SWRConfigFallback----------------------
export type SWRConfigFallback = {
  [topCoinListKey]?: TopCoinListRes;
  // ...其它ssr请求key
};


// -----------------pages路由系统-----------------
// SSR服务端请求数据
export const getServerSideProps: GetServerSideProps = async (context) => {
  const topCoinList = await getTopCoinList();
  const fallback = { [topCoinListKey]: topCoinList };

  return { props: { fallback } };
};

// 如果只需要服务端请求一次，不再变化则可以直接获取
const { data: topCoinList } = useSWR(topCoinListKey);

// 获取有参数变化，或重新请求数据
const { trigger, data } = useGetTopCoinList();


// -----------------app路由系统-----------------
// TODO: 待总结
```

### 强制某个页面使用单一主题SoloThemePage

```Javascript
// config-global.ts配置
export const soloThemePages = [
  {
    path: '/[lang]/event/Top25Game',
    theme: 'dark',
  },
];
```

### pages下redux数据服务端请求: 仅Pages路由系统有效，app路由系统已移除redux

```Javascript
// ---------------redux rematch定义 /src/models/[type].ts---------------
import { createModel } from '@rematch/core';
import { fetcher } from 'src/utils/axios';
import { notice as noticeApis } from '../apis';
import { RootModel } from '../root';

export const element = createModel<RootModel>()({
  state: {
    homeinfo: {
      bannerList: [],
      strategyList: [],
      adviseList: [],
      articleFlashList: [],
      articleList: [],
      recentAdviseGames: [],
    },
  },
  reducers: {
    setHomeinfo: (state, payload) => {
      state.homeinfo = payload;
      return state;
    },
  },
  effects: (dispatch) => ({
    async getWebhomev2(payload) {
      const res = await fetcher({
        type: 'get',
        url: gamefi.webhomev2,
        ...payload,
      });
      if (res.code === 0) {
        dispatch.common.setHomeinfo(res.data);
      }
      return res;
    },
  }),
});


// ---------------ssr服务端请求---------------
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { dispatch, getState } = reduxStore();
  const cookies = pagesDirCookies({ req: context.req });

  await Promise.all([
    dispatch.common.getWebhomev2({
      headers: { lang: cookies?.lang, auToken: cookies?.token },
    })
  ]);

  return { props: { reduxState: getState() } };
};
```

### 异步加载组件，禁止SSR

```Javascript
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ThemeSwitch = dynamic(() => import('./theme-switch'), { ssr: false });

export const ThemeSwitchDynamic = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? <ThemeSwitch /> : null;
};

```

### SoloPage实现步骤与原理

```Javascript
/** @desc 页面强制单一主题，path填写完整路由路径 */

/** @desc 配置规则去掉参数: /[lang]/game/[gameId] ===> /game/
 * 判断逻辑时pathname等于或包含solo.path配置
 * 不管是/[lang]/game/[gameId]原始路由信息
 * 还是/en-us/game/4569真实路由值都是适配的
 */

/** @desc 以下是具体流程
 * 目的: 方便配置和后期维护，达到不管刷新切换还是前端切换页面，soloPage页面强制其主题，非soloPage页面还原用户设置主题或默认Dark主题
 * 问题: 为了方便配置，不再需要额外运行其它代码，在pages路由和app路由，配置不同
 *
 ** ------------app文件夹路由[包含pages路由]
 * 1: ====>pages路由在withRematch中获取pathname只能获取到[lang]/game/[gameId]原始路由信息，
 * 在getServerSideProps等ssr函数能获取到真正的值，但是需要额外在这里运行代码，把值通过retuan返回给withRematch，得不偿失
 * 2: ====>app文件夹通过middleware把真实pathname传给layout
 * 3: ====>最后把都传给SWRProvider, solo-theme-page-config, 这里获取值判断是否是soloPage,
 * 不能直接用useRouter否则，layout.tsx服务端组合键会报错，useRouter不能在服务端运行
 * 4: ====>前端通过纯客户端组件ThemeSwith，监听路由变化，实时更改soloPagePathname配置
 *
 ** ------------pages文件夹路由
 * pages-dir-with-rematch-and-cookies getInitialProps获取到pathname，
 * 定义pagePathname变量传递给_document.tsx ===> soloThemePageConfig函数获取配置，把theme值赋给body rs-theme-[soloTheme]
 * 定义pathname传递给_app.tsx ===> soloThemePageConfig获取配置，把theme传递给LayoutProvider ===> SettingsProvider
 * ThemeSwitch组件，通过soloThemePageConfig判断是否是soloPage，隐藏主题切换按钮
 * SettingProvider浏览器端===>cookie保存用户主题选择，在路由切换这里也就是soloPage变化时，非soloPage自动还原主题或默认Dark, 是soloPage则强制设置
 *
 ** ------------涉及到的文件
 * /src/fetchs/store.ts ===> useRoutePathname
 * /src/fetchs/store-keys.ts ===> routePathnameKey
 * /src/utils/solo-theme-page-config.ts ===> soloThemePageConfig
 * /src/utils/hooks/solo-theme-page-config.ts ===> useSoloThemePageConfig
 *
 * @desc next/navigation usePathname app路由与page路由都能用，获取当前pathname 判断是否是soloPage
 * /src/sections/layouts/settings/settings-provider.tsx //
 *
 * @desc 前端页面切换时还原用户主题与设置soloPage主题
 * /src/sections/layouts/settings/settings-provider.tsx //
 *
 * @desc 根据配置是否隐藏主题切换按钮
 * /src/sections/layouts/main/header/theme-switch.tsx
 *
 * @desc pages路由ssr初始判断
 * ------pages获取pathname【[lang]/gamelibrary】
 * /src/sections/layouts/pages-dir-with-rematch-and-cookies.tsx
 * ------pages路由SSR时判断是否是soloPage设置body rs-thme-[type]
 * /src/pages/_document.tsx
 *
 * @desc app路由ssr初始判断
 * ----把当前路由pathname通过header方式传递给app layout.tsx
 * /src/middleware.ts
 * ----app路由SSR时判断是否是soloPage设置body rs-thme-[type]
 * /src/app/layout.tsx
 */
```

import axios, { AxiosHeaders, AxiosRequestConfig, Method } from 'axios';
import NProgress from 'nprogress';
import Cookies from 'js-cookie';
import queryString from 'query-string';
import { toast } from 'src/components/toast';
import { HOST_API } from 'src/config-global';
import { LangServerVals, LangVals } from 'src/sections/layouts/settings';
import { quest as questApis } from 'src/models/apis';
import { canUseDom } from './can-use-dom';
import { currentLang } from './current-lang';
import { cookiesName, ajaxSignature } from './public';
import { loginOut } from './public/login-out';

export const inviteCodeQuery = () => {
  if (!canUseDom) return {};
  const { inviteCode } = queryString.parse(window.location.search);
  if (!inviteCode) return {};
  return { inviteCode: inviteCode as string };
};

NProgress.configure({
  showSpinner: false,
  minimum: 0.2,
  easing: 'swing',
  speed: 1000,
  // trickleRate: 0.2,
});

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || error.message || 'Something went wrong'
    )
);

// 切换语言 + 登录完成后刷新页面，所以在/settings-provider.tsx中页面刷新默认初始化就够
// 服务端则由于这是全局对象，针对每个用于都不一样，全局初始化会导致混乱。用每次请求重新传入相应的值
// 保险起见，前端fetcher中每次也初始化
export const axiosInstanceInitialize = (params?: {
  lang?: string | LangVals | null;
  token?: string | null;
}) => {
  const serverLang = params?.lang ? LangServerVals[params?.lang as LangVals] : params?.lang;

  axiosInstance.interceptors.request.use((config) => {
    config.headers['Accept-Language'] = serverLang;
    config.headers.auToken = params?.token;
    return config;
  });
};

const loadingStart = () => {
  if (!canUseDom) return;
  NProgress.start();
};
const loadingDone = () => {
  if (!canUseDom) return;
  NProgress.done();
};
export const fetcher = async <T = any>(
  args: AxiosRequestConfig & {
    type?: Method | string;
    disableLoading?: boolean;
    serverException?: boolean; // 自定义服务端异常返回处理
  }
): Promise<T> => {
  const method = args.method || args.type || 'get';
  const params = method === 'post' ? { data: args.params } : { params: args.params };
  delete args.params;

  if (canUseDom) {
    const lang = currentLang();
    const token = Cookies.get(cookiesName.auToken);

    axiosInstanceInitialize({ lang, token });
  }

  const headers = { ...args.headers } as AxiosHeaders;
  if (headers?.lang) {
    const serverLang = LangServerVals[headers?.lang as LangVals];
    headers['Accept-Language'] = serverLang;
  }

  headers['Sign-Param'] = ajaxSignature();

  headers['Sign-Param'] = ajaxSignature();

  if (!args?.disableLoading) loadingStart();

  const res = await axiosInstance({
    ...args,
    ...params,
    method,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
      ...headers,
    },
  }).catch((error) => {
    loadingDone();
    throw error;
  });
  loadingDone();

  const baseConditions =
    !args.baseURL &&
    args.baseURL !== '' &&
    args.url !== questApis.downlaodwinnerlist &&
    args.url !== questApis.downloadsubmitlist;

  // 自定义服务端异常返回
  if (baseConditions && res.data.code !== 0 && args.serverException) {
    throw res.data;
  }

  // naga接口正确返回code为0，其它为错误返回，特殊接口排除
  if (
    baseConditions &&
    res.data.code >= 200
    // res.data.code !== -401 &&
    // res.data.code !== -402
  ) {
    if (res.data.code === 30000) {
      // 统一处理 Token 异常
      loginOut({ reload: true });
    } else {
      const errMsg = `${args.url} ${res.data.msg || 'api res code is not correct'}`;
      console.log('fetcher error:', errMsg);
      if (canUseDom && res.data.msg) {
        toast.error(res.data.msg);
      }
      throw new Error(errMsg);
    }
  }

  return res.data;
};

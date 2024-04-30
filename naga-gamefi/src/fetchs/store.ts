import { useCallback } from 'react';
import useSWR, { mutate } from 'swr';
import { searchMultiKey } from './common';
import { routePathnameKey } from './store-keys';

// ----------------------UserPopup----------------------
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

// ----------------------route pathname----------------------
export const useRoutePathname = () => {
  const result = useSWR(routePathnameKey);
  return result;
};

// ----------------------SWRConfigFallback----------------------
export type SWRConfigFallback = {
  [searchMultiKey]?: SearchMultiRes;
  [routePathnameKey]?: string;
};

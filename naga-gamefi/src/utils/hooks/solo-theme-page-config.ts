import { useEffect, useMemo } from 'react';
import { useRoutePathname } from 'src/fetchs/store';
import { usePathname } from 'src/routes/hooks';
import { soloThemePageConfig } from '../solo-theme-page-config';

export const useSoloThemePageConfig = () => {
  const pathname = usePathname();

  return useMemo(() => soloThemePageConfig(pathname as string | undefined), [pathname]);
};

// ---------------------前端同步swr中de的route pathname信息---------------------
/** @desc 已由routes/usePathname替代，暂时没用，可作为swr全局状态模版代码 */
export const useBrowserSyncSwrRoutePathname = () => {
  const { mutate } = useRoutePathname();
  const pathname = usePathname();
  useEffect(() => {
    mutate(pathname);
  }, [mutate, pathname]);
};

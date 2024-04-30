import { usePathname as usePathnameNext } from 'next/navigation';
import { useSettingsContext } from 'src/sections/layouts/settings';
import { matchUrlLang } from 'src/utils/current-lang';

type UsePathnameProps = {
  pure?: boolean; // 获取到的 pathname 是否去除语言前缀
};
export const usePathname = (props?: UsePathnameProps) => {
  const pathname = usePathnameNext();
  const { lang: curLang } = useSettingsContext();
  const urlLang = matchUrlLang(pathname);
  return props?.pure
    ? urlLang && pathname
      ? pathname.split(`/${curLang}`)[1]
      : pathname
    : pathname;
};

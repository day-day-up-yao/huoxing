import { useCallback } from 'react';
import NextLink from 'next/link';
import { isString } from 'lodash';
import { useRouter } from 'next/navigation';
import { useSettingsContext } from 'src/sections/layouts/settings';
import { paths } from 'src/routes/paths';

type LinkProps = React.ComponentProps<typeof NextLink> & {
  client?: boolean; // 是否使用客户端跳转
};
export const Link = ({ href, children, client, ...rest }: LinkProps) => {
  const { lang } = useSettingsContext();
  const isHome = !href || href === '/' || href === '';
  const isWebsite = isString(href) && href?.startsWith('http');
  const hrefResult = isHome ? paths.home : isWebsite ? href : `/${lang}${href}`;
  return client ? (
    <NextLink {...rest} href={hrefResult}>
      {children}
    </NextLink>
  ) : (
    <a {...rest} href={hrefResult}>
      {children}
    </a>
  );
};

// params?.client 前端跳转router.push
export const useLink = () => {
  const { lang } = useSettingsContext();
  const { push } = useRouter();
  const linkTo = useCallback(
    (pathname: string, params?: { client?: boolean }) => {
      if (!pathname || pathname === '/' || pathname === '') {
        window.location.href = paths.home;
        return;
      }
      const isExternalSite =
        isString(pathname) && pathname?.startsWith('http') && !pathname?.includes('naga.io');
      if (isExternalSite) {
        window.location.href = pathname;
        return;
      }

      if (params?.client) {
        push(`/${lang}${pathname}`);
        return;
      }
      window.location.href = `/${lang}${pathname}`;
    },
    [lang, push]
  );
  return { linkTo };
};

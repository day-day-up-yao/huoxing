import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { defaultLang, fallbackLng } from './locales';
import { SettingKeys } from './sections/layouts/settings';
import { matchUrlLang } from './utils/current-lang';

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value: string, key: string) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(fallbackLng);

  const locale = matchLocale(languages, fallbackLng, defaultLang.value);

  return locale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 如果pathname为空或者为/，直接返回，不做处理
  if (pathname === '/' || pathname === '') {
    return NextResponse.next();
  }

  const urlLang = matchUrlLang(pathname);
  const cookieLang = request.cookies.get(SettingKeys.LANG)?.value;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = fallbackLng.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${cookieLang || locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    );
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', request.nextUrl.pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (urlLang && cookieLang && urlLang !== cookieLang) {
    response.cookies.set(SettingKeys.LANG, urlLang);
  }
  return response;
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, `/favicon/`, `/assets/`, `/fonts/`, `/images/`, `/twitter/`, `/discord/`, `/node_modules/`, `/manifest.json/`, `/apis/`
  matcher: [
    '/((?!api|_next/static|_next/image|favicon|favicon.ico|assets|fonts|images|twitter|discord|node_modules|manifest.json|apis|.well-known|sitemap.txt).*)',
  ],
};

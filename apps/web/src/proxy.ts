import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

import { i18n, Locale } from '@/shared/i18n/i18n-config';

import {
  ColorScheme,
  ColorSchemeValues,
  SystemTheme,
  Theme,
  ThemeMap,
  ThemeValues,
} from './shared/types/theme';

const handleLocale = (request: NextRequest, response: NextResponse) => {
  const { pathname } = request.nextUrl;

  const hasPathnameLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (hasPathnameLocale) {
    const localeFromPath = pathname.split('/')[1] as Locale;

    response.cookies.set('locale', localeFromPath, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    });

    return response;
  }

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products

  return NextResponse.redirect(request.nextUrl);
};

function getLocale(request: NextRequest): string | undefined {
  const cookieLocale = request.cookies.get('locale')?.value as Locale;

  if (i18n.locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  const acceptLanguage = request.headers.get('accept-language');
  const { defaultLocale, locales } = i18n;

  const languages = new Negotiator({
    headers: { 'accept-language': acceptLanguage ?? '' },
  }).languages();

  return match(languages, locales, defaultLocale);
}

const handleTheme = (request: NextRequest, response: NextResponse) => {
  const theme = request.cookies.get('theme')?.value as Theme | undefined;
  const resolvedTheme = request.cookies.get('resolvedTheme')?.value as
    | ColorScheme
    | undefined;

  const isValidTheme =
    theme !== undefined && (ThemeValues as readonly string[]).includes(theme);
  const isValidColorScheme =
    resolvedTheme !== undefined &&
    (ColorSchemeValues as readonly string[]).includes(resolvedTheme);

  if (!isValidTheme) {
    const defaulttheme: SystemTheme = 'system';
    response.cookies.set('theme', defaulttheme, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
    });
  }

  response.headers.set(
    'x-resolved-theme',
    isValidColorScheme ? resolvedTheme : ThemeMap.Light,
  );
};

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const localeResponse = handleLocale(request, response);

  if (localeResponse === response) {
    handleTheme(request, response);
  }

  return localeResponse;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'],
};

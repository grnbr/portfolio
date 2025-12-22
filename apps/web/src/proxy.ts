import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

import { i18n } from '@/shared/i18n/i18n-config';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasPathnameLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (hasPathnameLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'],
};

function getLocale(request: NextRequest): string | undefined {
  const acceptLanguage = request.headers.get('accept-language');
  const { defaultLocale, locales } = i18n;

  const languages = new Negotiator({
    headers: { 'accept-language': acceptLanguage ?? '' },
  }).languages();

  return match(languages, locales, defaultLocale);
}

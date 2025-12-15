import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

import { i18n } from '@/i18n-config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasPathnameLocale = i18n.locales.every(
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

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};

  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const { locales } = i18n;

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return match(languages, locales, i18n.defaultLocale);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'],
};

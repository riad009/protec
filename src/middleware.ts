import { NextRequest, NextResponse } from 'next/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';
const LOCALE_COOKIE = 'PROTECSYS_LOCALE';

function getPreferredLocale(request: NextRequest): string {
  // 1. Check if user has a saved preference cookie
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Detect from browser's Accept-Language header
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Parse Accept-Language header properly (e.g., "fr-CH,fr;q=0.9,en-US;q=0.8,en;q=0.7")
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, qValue] = lang.trim().split(';q=');
      return {
        code: code.trim().split('-')[0].toLowerCase(), // "fr-CH" -> "fr"
        quality: qValue ? parseFloat(qValue) : 1.0,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find the first matching locale
  for (const lang of languages) {
    if (locales.includes(lang.code)) {
      return lang.code;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Extract locale from path and set cookie for future visits
    const currentLocale = pathname.split('/')[1];
    const response = NextResponse.next();
    response.cookies.set(LOCALE_COOKIE, currentLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: '/',
      sameSite: 'lax',
    });
    return response;
  }

  // Skip API routes, static files, etc.
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/icons') ||
    pathname.includes('.') 
  ) {
    return NextResponse.next();
  }

  // Redirect to the locale-prefixed URL based on detection
  const locale = getPreferredLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  const response = NextResponse.redirect(request.nextUrl);
  
  // Save detected preference
  response.cookies.set(LOCALE_COOKIE, locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
    sameSite: 'lax',
  });
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)'],
};

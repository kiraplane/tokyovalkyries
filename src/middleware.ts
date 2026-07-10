import { betterFetch } from '@better-fetch/fetch';
import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_COOKIE_NAME,
  routing,
} from './i18n/routing';
import type { Session } from './lib/auth-types';
import { getBaseUrl } from './lib/urls/urls';
import {
  DEFAULT_LOGIN_REDIRECT,
  protectedRoutes,
  routesNotAllowedByLoggedInUsers,
} from './routes';

const intlMiddleware = createMiddleware(routing);
const hasSingleLocale = LOCALES.length === 1;
const defaultLocalePrefix = `/${DEFAULT_LOCALE}`;
const authRelatedRoutes = [
  ...protectedRoutes,
  ...routesNotAllowedByLoggedInUsers,
];

const retiredPublicRouteRedirects: Array<{
  pattern: RegExp;
  target: string;
}> = [
  { pattern: /^\/pricing\/?$/, target: '/' },
  { pattern: /^\/ai(?:\/.*)?$/, target: '/' },
  { pattern: /^\/ai-prompts(?:\/.*)?$/, target: '/' },
  { pattern: /^\/blog(?:\/.*)?$/, target: '/guides' },
  { pattern: /^\/docs(?:\/.*)?$/, target: '/' },
  { pattern: /^\/about\/?$/, target: '/' },
  { pattern: /^\/contact\/?$/, target: '/' },
  { pattern: /^\/auth(?:\/.*)?$/, target: '/' },
  { pattern: /^\/dashboard(?:\/.*)?$/, target: '/' },
  { pattern: /^\/admin(?:\/.*)?$/, target: '/' },
  { pattern: /^\/settings(?:\/.*)?$/, target: '/' },
  { pattern: /^\/payment(?:\/.*)?$/, target: '/' },
  { pattern: /^\/codes(?:\/.*)?$/, target: '/' },
  { pattern: /^\/tier-list(?:\/.*)?$/, target: '/combat-attributes' },
  { pattern: /^\/card-database(?:\/.*)?$/, target: '/cards' },
  { pattern: /^\/deck(?:\/.*)?$/, target: '/deck-builder' },
  { pattern: /^\/deck-planner(?:\/.*)?$/, target: '/deck-builder' },
  { pattern: /^\/attributes?(?:\/.*)?$/, target: '/combat-attributes' },
  { pattern: /^\/combat(?:\/.*)?$/, target: '/combat-attributes' },
  { pattern: /^\/map(?:\/.*)?$/, target: '/map-routes' },
  { pattern: /^\/cursed-swords?(?:\/.*)?$/, target: '/cursed-swords-leaders' },
  { pattern: /^\/leaders?(?:\/.*)?$/, target: '/cursed-swords-leaders' },
  { pattern: /^\/cast(?:\/.*)?$/, target: '/characters' },
  { pattern: /^\/steam\/?$/, target: '/platforms' },
  { pattern: /^\/switch\/?$/, target: '/switch-vs-steam' },
  { pattern: /^\/pc\/?$/, target: '/platforms' },
  { pattern: /^\/requirements\/?$/, target: '/system-requirements' },
  { pattern: /^\/release\/?$/, target: '/release-date' },
  { pattern: /^\/buy\/?$/, target: '/download' },
  { pattern: /^\/apk(?:\/.*)?$/, target: '/download' },
  {
    pattern: /^\/tokyo-valkyries-beginner-guide(?:\/.*)?$/,
    target: '/guides/beginner-guide',
  },
  {
    pattern: /^\/tokyo-valkyries-release-date(?:\/.*)?$/,
    target: '/release-date',
  },
  {
    pattern: /^\/tokyo-valkyries-switch(?:\/.*)?$/,
    target: '/switch-vs-steam',
  },
  {
    pattern: /^\/tokyo-valkyries-steam(?:\/.*)?$/,
    target: '/platforms',
  },
  {
    pattern: /^\/tokyo-valkyries-characters(?:\/.*)?$/,
    target: '/characters',
  },
  {
    pattern: /^\/tokyo-valkyries-download(?:\/.*)?$/,
    target: '/download',
  },
];

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const hostHeader = req.headers.get('host');
  const hostname = hostHeader?.split(':')[0].toLowerCase();
  const forwardedProto = req.headers.get('x-forwarded-proto');
  const productionHosts = new Set([
    'tokyovalkyries.wiki',
    'www.tokyovalkyries.wiki',
  ]);
  const canonicalHost = 'www.tokyovalkyries.wiki';

  if (
    hostname &&
    productionHosts.has(hostname) &&
    (hostname !== canonicalHost ||
      forwardedProto === 'http' ||
      nextUrl.protocol === 'http:')
  ) {
    const canonicalUrl = new URL(nextUrl);
    canonicalUrl.protocol = 'https:';
    canonicalUrl.hostname = canonicalHost;
    canonicalUrl.port = '';
    return NextResponse.redirect(canonicalUrl, 308);
  }

  const isDefaultLocalePrefixedPath =
    nextUrl.pathname === defaultLocalePrefix ||
    nextUrl.pathname.startsWith(`${defaultLocalePrefix}/`);

  if (
    !hasSingleLocale &&
    (nextUrl.pathname.startsWith('/docs/') || nextUrl.pathname === '/docs')
  ) {
    const localeCookie = req.cookies.get(LOCALE_COOKIE_NAME);
    const preferredLocale = localeCookie?.value;

    if (
      preferredLocale &&
      preferredLocale !== DEFAULT_LOCALE &&
      LOCALES.includes(preferredLocale)
    ) {
      return NextResponse.redirect(
        new URL(
          `/${preferredLocale}${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`,
          nextUrl
        )
      );
    }
  }

  const pathnameWithoutLocale = getPathnameWithoutLocale(
    nextUrl.pathname,
    LOCALES
  );
  const retiredRoute = retiredPublicRouteRedirects.find(({ pattern }) =>
    pattern.test(pathnameWithoutLocale)
  );

  if (retiredRoute) {
    const locale = getLocaleFromPathname(nextUrl.pathname, LOCALES);
    const localizedTarget =
      locale && locale !== DEFAULT_LOCALE
        ? `/${locale}${retiredRoute.target}`
        : retiredRoute.target;

    return NextResponse.redirect(
      new URL(`${localizedTarget}${nextUrl.search}`, nextUrl),
      308
    );
  }

  const needsAuthCheck = authRelatedRoutes.some((route) =>
    new RegExp(`^${route}$`).test(pathnameWithoutLocale)
  );

  if (!needsAuthCheck) {
    if (hasSingleLocale) {
      if (isDefaultLocalePrefixedPath) {
        return NextResponse.next();
      }

      const localizedPath =
        nextUrl.pathname === '/'
          ? defaultLocalePrefix
          : `${defaultLocalePrefix}${nextUrl.pathname}`;
      return NextResponse.rewrite(
        new URL(`${localizedPath}${nextUrl.search}`, nextUrl)
      );
    }

    return intlMiddleware(req);
  }

  let session: Session | null = null;
  try {
    const result = await betterFetch<Session>('/api/auth/get-session', {
      baseURL: getBaseUrl(),
      headers: { cookie: req.headers.get('cookie') || '' },
    });
    session = result.data;
  } catch {
    session = null;
  }
  const isLoggedIn = !!session;

  if (isLoggedIn) {
    const isNotAllowedRoute = routesNotAllowedByLoggedInUsers.some((route) =>
      new RegExp(`^${route}$`).test(pathnameWithoutLocale)
    );
    if (isNotAllowedRoute) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    new RegExp(`^${route}$`).test(pathnameWithoutLocale)
  );

  if (!isLoggedIn && isProtectedRoute) {
    const callbackUrl = `${nextUrl.pathname}${nextUrl.search}`;
    return NextResponse.redirect(
      new URL(
        `/auth/login?callbackUrl=${encodeURIComponent(callbackUrl)}`,
        nextUrl
      )
    );
  }

  if (hasSingleLocale) {
    if (isDefaultLocalePrefixedPath) {
      return NextResponse.next();
    }

    const localizedPath =
      nextUrl.pathname === '/'
        ? defaultLocalePrefix
        : `${defaultLocalePrefix}${nextUrl.pathname}`;
    return NextResponse.rewrite(
      new URL(`${localizedPath}${nextUrl.search}`, nextUrl)
    );
  }

  return intlMiddleware(req);
}

function getPathnameWithoutLocale(pathname: string, locales: string[]): string {
  const localePattern = new RegExp(`^/(${locales.join('|')})/`);
  return pathname.replace(localePattern, '/');
}

function getLocaleFromPathname(
  pathname: string,
  locales: string[]
): string | undefined {
  const localePattern = new RegExp(`^/(${locales.join('|')})(?:/|$)`);
  return pathname.match(localePattern)?.[1];
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

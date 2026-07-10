import { guides } from '@/data/tokyovalkyries/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Guides,
  Routes.BeginnerGuide,
  Routes.CombatAttributes,
  Routes.DeckBuilding,
  Routes.Cards,
  Routes.DeckBuilder,
  Routes.MapRoutes,
  Routes.CursedSwordsLeaders,
  Routes.Characters,
  Routes.Story,
  Routes.ReleaseDate,
  Routes.Platforms,
  Routes.SwitchVsSteam,
  Routes.SystemRequirements,
  Routes.Review,
  Routes.Download,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const guideRoutes = guides
  .map((guide) => guide.path)
  .filter((path) => !coreRoutes.includes(path as Routes));

const stableLastModified = new Date('2026-07-10T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getCanonicalBaseUrl();
  const allRoutes = [...new Set([...coreRoutes, ...guideRoutes])];

  return routing.locales.flatMap((locale) =>
    allRoutes.map((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;
      const isPrimary =
        route === Routes.Root ||
        route === Routes.Guides ||
        route === Routes.BeginnerGuide ||
        route === Routes.CombatAttributes ||
        route === Routes.Cards ||
        route === Routes.DeckBuilder ||
        route === Routes.Characters;

      return {
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root || route === Routes.Guides
            ? ('daily' as const)
            : ('weekly' as const),
        priority: route === Routes.Root ? 1 : isPrimary ? 0.9 : 0.8,
      };
    })
  );
}

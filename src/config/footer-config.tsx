'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
        { title: 'Guide Hub', href: Routes.Guides, external: false },
        { title: 'Should You Buy?', href: Routes.Review, external: false },
      ],
    },
    {
      title: 'Combat',
      items: [
        { title: 'Attributes', href: Routes.CombatAttributes, external: false },
        { title: 'Deck Building', href: Routes.DeckBuilding, external: false },
        { title: 'Map Routes', href: Routes.MapRoutes, external: false },
        {
          title: 'Cursed Swords',
          href: Routes.CursedSwordsLeaders,
          external: false,
        },
      ],
    },
    {
      title: 'World',
      items: [
        { title: 'Characters', href: Routes.Characters, external: false },
        { title: 'Story Primer', href: Routes.Story, external: false },
      ],
    },
    {
      title: 'Platforms',
      items: [
        { title: 'Release Date', href: Routes.ReleaseDate, external: false },
        {
          title: 'Switch vs Steam',
          href: Routes.SwitchVsSteam,
          external: false,
        },
        {
          title: 'PC Requirements',
          href: Routes.SystemRequirements,
          external: false,
        },
        { title: 'Official Download', href: Routes.Download, external: false },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        {
          title: 'Privacy Policy',
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: 'Terms of Service',
          href: Routes.TermsOfService,
          external: false,
        },
        { title: 'Cookie Policy', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}

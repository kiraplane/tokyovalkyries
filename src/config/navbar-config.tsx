'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  CalendarClock,
  Download,
  Gamepad2,
  Layers3,
  Map,
  Sparkles,
  Swords,
  UsersRound,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guide hub',
          description: 'Every current Tokyo Valkyries guide in one index.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description: 'Party, deck, intent, route and first-boss priorities.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Map routes',
          description: 'Battle, Elite, Shop, Cafe, Locker and Anomaly choices.',
          href: Routes.MapRoutes,
          external: false,
          icon: <Map className="size-4" />,
        },
      ],
    },
    {
      title: 'Combat',
      href: Routes.CombatAttributes,
      external: false,
      icon: <Swords className="size-4" />,
      items: [
        {
          title: 'Combat and attributes',
          description: 'Resolve, Courage, Hope, Dawn and enemy target intent.',
          href: Routes.CombatAttributes,
          external: false,
          icon: <Swords className="size-4" />,
        },
        {
          title: 'Deck building',
          description: 'When to take, skip and upgrade cards.',
          href: Routes.DeckBuilding,
          external: false,
          icon: <Layers3 className="size-4" />,
        },
        {
          title: 'Cursed Swords and leaders',
          description: 'Added attributes, party leaders and special skills.',
          href: Routes.CursedSwordsLeaders,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
      ],
    },
    {
      title: 'World',
      href: Routes.Characters,
      external: false,
      icon: <UsersRound className="size-4" />,
      items: [
        {
          title: 'Characters',
          description: 'Nine official profiles and the Japanese voice cast.',
          href: Routes.Characters,
          external: false,
          icon: <UsersRound className="size-4" />,
        },
        {
          title: 'Story primer',
          description: 'Haruka, Artesia, Grand Earth and the Underworld.',
          href: Routes.Story,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
    {
      title: 'Platforms',
      href: Routes.Platforms,
      external: false,
      icon: <Gamepad2 className="size-4" />,
      items: [
        {
          title: 'Release date',
          description: 'July 2026 launch, price and language status.',
          href: Routes.ReleaseDate,
          external: false,
          icon: <CalendarClock className="size-4" />,
        },
        {
          title: 'Switch vs Steam',
          description: 'Portability, achievements, cloud and version details.',
          href: Routes.SwitchVsSteam,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'PC requirements',
          description: 'Official minimum and recommended Windows specs.',
          href: Routes.SystemRequirements,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Steam and Nintendo links without APK or crack risk.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}

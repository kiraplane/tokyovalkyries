import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides } from './guides';
import { gameFacts, keywordMatrix, siteDescription } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  routeLabels: Record<string, string>;
  keywordRoutes: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  sectionsTitle: string;
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  relatedTitle: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const keywordRoutes = keywordMatrix
    .filter(
      (item) =>
        item.route !== 'none' &&
        (item.status === 'keep' || item.status === 'watch')
    )
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route] ?? item.route,
      intent: item.intent,
    }));

  return {
    badge: 'Tokyo Valkyries launch guide hub',
    metadataTitle: 'Tokyo Valkyries Wiki - Deck, Character and Beginner Guides',
    title: 'Tokyo Valkyries Wiki',
    intro:
      'Build a three-Valkyrie party, focus Resolve, Courage, Hope and Dawn cards, read enemy intent, plan safer routes and reach every Cursed Sword with a deck that can defend itself.',
    primaryCta: 'Beginner guide',
    secondaryCta: 'Attributes guide',
    scopeNote:
      'Focused on the decisions players face now. No fake codes, unsupported tier list or incomplete card database.',
    routeLabels,
    keywordRoutes,
    faq: [
      {
        question: 'What is Tokyo Valkyries?',
        answer:
          'Tokyo Valkyries is a single-player roguelite deckbuilder by qureate. A three-character party fights turn-based card battles across Underworld maps in Tokyo.',
      },
      {
        question: 'Is Tokyo Valkyries out now?',
        answer:
          'Yes. It launched during the July 8–9, 2026 global window on Steam for Windows and Nintendo Switch.',
      },
      {
        question: 'Does Tokyo Valkyries have codes or a tier list?',
        answer:
          'No official redeem-code system was found, and the launch data is not stable enough for a responsible universal character or card tier list.',
      },
      {
        question: 'What should I read first?',
        answer:
          'Start with the beginner guide, then use combat attributes, deck building and map routes for the decision currently blocking a run.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: 'Tokyo Valkyries guides',
    title: 'Tokyo Valkyries Guide Hub',
    intro:
      'Choose a guide by the decision in front of you: first run, attribute triggers, deck focus, map route, Cursed Sword leader, character roster, platform, release status, review or safe download.',
    readGuide: 'Read guide',
    faq: [
      {
        question: 'Which Tokyo Valkyries guide should I read first?',
        answer:
          'Begin with the first-run guide. Move to attributes when party triggers are unclear, deck building when draws feel inconsistent, and map routes when health disappears before the boss.',
      },
      {
        question: 'Are these guides based on the released game?',
        answer:
          'Yes. They use the July 2026 release, official system pages, live Steam data, official media and launch-day gameplay cross-checks.',
      },
      {
        question: 'Will this wiki add a card database?',
        answer:
          'Only after a reliable complete dataset and update workflow exist. The launch site avoids presenting incomplete extracted cards as authoritative.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    sectionsTitle: 'On this page',
    videoPrefix: 'Gameplay companion:',
    videoSuffix: 'Watch for the battle flow, then use the guide below.',
    officialTitle: 'Keep official status one click away',
    officialBody:
      'Use qureate, Steam and Nintendo for live purchase, patch, language and platform information. Strategy pages separate verified mechanics from early community impressions.',
    officialLinkLabel: 'Open the official Steam page',
    relatedTitle: 'Related pages',
    faqTitle: 'FAQ',
    categoryLabels: {
      Start: 'Start',
      Combat: 'Combat',
      Decks: 'Decks',
      Routes: 'Routes',
      Characters: 'Characters',
      Story: 'Story',
      Platform: 'Platform',
      Release: 'Release',
      Review: 'Review',
      Safety: 'Safety',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Reference: 'Reference',
      Status: 'Live status',
    },
  };
}

export const routeLabels: Record<string, string> = {
  '/': 'Tokyo Valkyries Wiki',
  '/guides': 'Guide Hub',
  '/guides/beginner-guide': 'Beginner Guide',
  '/combat-attributes': 'Combat & Attributes',
  '/deck-building': 'Deck Building',
  '/map-routes': 'Map Routes',
  '/cursed-swords-leaders': 'Cursed Swords & Leaders',
  '/characters': 'Characters',
  '/story': 'Story Primer',
  '/release-date': 'Release Date',
  '/platforms': 'Platforms',
  '/switch-vs-steam': 'Switch vs Steam',
  '/system-requirements': 'PC Requirements',
  '/review': 'Should You Buy?',
  '/download': 'Official Download',
  '/disclaimer': 'Disclaimer',
};

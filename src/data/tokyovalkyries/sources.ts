import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-07-10';

export const siteFacts = {
  siteName: 'Tokyo Valkyries',
  domain: 'https://www.tokyovalkyries.wiki',
  canonicalHost: 'www.tokyovalkyries.wiki',
  gameName: 'Tokyo Valkyries',
  creator: 'qureate',
  publisher: 'qureate',
  officialWebsiteUrl: 'https://qureate.co.jp/TokyoValkyries/en/',
  officialSteamUrl:
    'https://store.steampowered.com/app/4093240/Tokyo_Valkyries/',
  officialNintendoUrl:
    'https://store-jp.nintendo.com/item/software/D70010000121929',
  officialTwitterUrl: 'https://x.com/qureate',
  officialYouTubeUrl:
    'https://www.youtube.com/channel/UCerhAhpnanzS4fHGvQOGm-g',
  supportEmail: 'hello@tokyovalkyries.wiki',
  releaseDate: 'July 8–9, 2026',
  price: '$22.99 list price',
  officialCoverImage:
    'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4093240/78820e864b501fdc97fbb661621b2d0332af3b1a/header.jpg',
  officialHeroImage: 'https://i.ytimg.com/vi/RNgGcErvGZE/hq720.jpg',
  officialScreenshot:
    'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4093240/f5dee22d83a141b32268a78d720b667945a3b1b1/ss_f5dee22d83a141b32268a78d720b667945a3b1b1.1920x1080.jpg',
} as const;

export const siteDescription =
  'Tokyo Valkyries wiki with beginner, deck, combat, map, character, Cursed Sword, Switch, Steam and story guides for the roguelite card RPG.';

export const gameFacts: GameFact[] = [
  {
    label: 'Genre',
    value: 'Single-player roguelite deckbuilder with turn-based card combat.',
  },
  {
    label: 'Party system',
    value:
      'Build a three-character party around Resolve, Courage, Hope and Dawn.',
  },
  {
    label: 'Route system',
    value: 'Battle, Elite, Shop, Cafe, Locker, Anomaly and Boss nodes.',
  },
  {
    label: 'Platforms',
    value: 'Windows PC via Steam and Nintendo Switch.',
  },
  {
    label: 'Release',
    value:
      'Released July 8 on Steam / July 9, 2026 in the official global schedule.',
  },
  {
    label: 'Languages',
    value:
      'English, Japanese, Simplified Chinese and Traditional Chinese text; Japanese audio.',
  },
];

export const sources: DataSource[] = [
  {
    type: 'official',
    label: 'Tokyo Valkyries official website',
    url: siteFacts.officialWebsiteUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary source for story, nine character profiles, combat systems, map nodes, platform differences, price, languages and staff.',
  },
  {
    type: 'official',
    label: 'Tokyo Valkyries Steam store',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Primary source for the live PC release, system requirements, achievements, controller support, screenshots and current review summary.',
  },
  {
    type: 'official',
    label: 'Tokyo Valkyries Nintendo listing',
    url: siteFacts.officialNintendoUrl,
    checkedAt,
    confidence: 'high',
    note: 'Official Nintendo storefront linked by qureate. Used for Switch availability and platform status.',
  },
  {
    type: 'youtube',
    label: 'Tokyo Valkyries Trailer ENG',
    url: 'https://www.youtube.com/watch?v=RNgGcErvGZE',
    checkedAt,
    confidence: 'high',
    note: 'Official qureate trailer used as the homepage trust video and visual overview.',
  },
  {
    type: 'youtube',
    label: 'Tokyo Valkyries PC English gameplay series',
    url: 'https://www.youtube.com/watch?v=K0cfFD_WErs',
    checkedAt,
    confidence: 'medium',
    note: 'Hikikomori Gaming launch-day playthrough used only to cross-check visible combat flow and English UI.',
  },
  {
    type: 'community',
    label: 'Steam launch reviews',
    url: 'https://store.steampowered.com/appreviews/4093240?json=1',
    checkedAt,
    confidence: 'medium',
    note: 'Used to identify early player questions about party attributes, target-specific defense, route choice, controls, content length and replayability. Claims remain labeled as early impressions.',
  },
  {
    type: 'competitor',
    label: 'Gematsu game overview',
    url: 'https://www.gematsu.com/games/tokyo-valkyries',
    checkedAt,
    confidence: 'medium',
    note: 'Cross-check source for official system descriptions. No mature dedicated Tokyo Valkyries wiki or database was found at launch.',
  },
  {
    type: 'serper',
    label: 'Serper balanced discovery',
    url: 'https://google.serper.dev/',
    checkedAt,
    confidence: 'high',
    note: 'One autocomplete and one related/PAA request found release date, Switch, Steam, review and roguelite deckbuilder as the strongest current derivatives.',
  },
];

export const keywordMatrix: KeywordMatrixItem[] = [
  {
    keyword: 'tokyo valkyries',
    intent: 'Find the game, current status and core guide hub.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence: 'User requirement, official site, Steam and Serper head results.',
    notes: 'Primary homepage entity target.',
  },
  {
    keyword: 'tokyo valkyries wiki',
    intent: 'Find structured game systems, characters and walkthrough help.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence: 'User requirement and wiki-hub intent.',
    notes: 'Homepage distributes links to every supported launch page.',
  },
  {
    keyword: 'tokyo valkyries guide',
    intent: 'Browse beginner and system guides.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence: 'Post-launch guide intent plus YouTube gameplay availability.',
    notes: 'Guide hub owns broad help intent.',
  },
  {
    keyword: 'tokyo valkyries release date',
    intent: 'Confirm whether the game is out.',
    route: '/release-date',
    priority: 'P0',
    status: 'keep',
    evidence: 'Serper autocomplete and related searches.',
    notes: 'Answer out-now status and explain timezone date difference.',
  },
  {
    keyword: 'tokyo valkyries switch',
    intent: 'Find Nintendo Switch availability and version details.',
    route: '/switch-vs-steam',
    priority: 'P0',
    status: 'keep',
    evidence: 'Serper autocomplete and related searches; official Switch link.',
    notes: 'Comparison page owns Switch and Steam differences.',
  },
  {
    keyword: 'tokyo valkyries steam',
    intent: 'Find the PC version, requirements and purchase page.',
    route: '/platforms',
    priority: 'P0',
    status: 'keep',
    evidence: 'Serper autocomplete and Steam organic result.',
    notes: 'Platform page links system requirements and safe download.',
  },
  {
    keyword: 'tokyo valkyries review',
    intent: 'Decide whether the game is worth buying.',
    route: '/review',
    priority: 'P0',
    status: 'keep',
    evidence: 'Serper related searches and live Steam reviews.',
    notes: 'Decision-first buyer guide, not a fabricated score.',
  },
  {
    keyword: 'tokyo valkyries roguelite deckbuilder',
    intent: 'Understand the gameplay loop and genre fit.',
    route: '/guides/beginner-guide',
    priority: 'P1',
    status: 'keep',
    evidence: 'Serper related searches and official store description.',
    notes: 'Beginner guide explains party, cards, route and boss loop.',
  },
  {
    keyword: 'tokyo valkyries characters',
    intent: 'See the official cast and voice actors.',
    route: '/characters',
    priority: 'P1',
    status: 'keep',
    evidence: 'Official site exposes nine detailed profiles.',
    notes: 'One roster page is stronger than nine thin launch pages.',
  },
  {
    keyword: 'tokyo valkyries attributes',
    intent: 'Understand Resolve, Courage, Hope and Dawn.',
    route: '/combat-attributes',
    priority: 'P1',
    status: 'keep',
    evidence: 'Official system page and launch-day gameplay cross-check.',
    notes: 'Explain trigger multiplication without inventing a full tier list.',
  },
  {
    keyword: 'tokyo valkyries deck building',
    intent: 'Build a consistent deck and decide when to skip cards.',
    route: '/deck-building',
    priority: 'P1',
    status: 'keep',
    evidence: 'Core official mechanic and early review pain points.',
    notes: 'Decision guide, not an unsupported card database.',
  },
  {
    keyword: 'tokyo valkyries map routes',
    intent: 'Choose Battle, Elite, Shop, Cafe, Locker and Anomaly nodes.',
    route: '/map-routes',
    priority: 'P1',
    status: 'keep',
    evidence: 'Official system page lists seven route tiles.',
    notes: 'Route-first guide; interactive map would need stronger data.',
  },
  {
    keyword: 'tokyo valkyries cursed sword leader',
    intent: 'Understand awakening, extra attributes and leader skills.',
    route: '/cursed-swords-leaders',
    priority: 'P1',
    status: 'keep',
    evidence: 'Official system page describes the mechanic.',
    notes: 'Avoid claiming one universally best leader.',
  },
  {
    keyword: 'tokyo valkyries story',
    intent: 'Read a spoiler-light premise and world glossary.',
    route: '/story',
    priority: 'P1',
    status: 'keep',
    evidence: 'Official site provides the complete premise.',
    notes: 'Keep ending details out of launch copy.',
  },
  {
    keyword: 'tokyo valkyries system requirements',
    intent: 'Check whether a Windows PC can run the game.',
    route: '/system-requirements',
    priority: 'P1',
    status: 'keep',
    evidence: 'Steam publishes minimum and recommended specs.',
    notes: 'Exact factual reference page.',
  },
  {
    keyword: 'tokyo valkyries download',
    intent: 'Reach an official storefront safely.',
    route: '/download',
    priority: 'P1',
    status: 'keep',
    evidence: 'Normal release-game navigation intent.',
    notes: 'Official Steam and Nintendo links only; no APK or cracks.',
  },
  {
    keyword: 'tokyo valkyries codes',
    intent: 'Look for redeem codes.',
    route: 'none',
    priority: 'P3',
    status: 'ignore',
    evidence:
      'No search signal or official code system; premium single-player game.',
    notes: 'Do not create a fake codes page.',
  },
  {
    keyword: 'tokyo valkyries tier list',
    intent: 'Rank characters or cards.',
    route: 'none',
    priority: 'P3',
    status: 'watch',
    evidence: 'No current autocomplete support and launch data is incomplete.',
    notes:
      'Revisit after stable card/character data and broader community evidence.',
  },
  {
    keyword: 'tokyo valkyries card database',
    intent: 'Browse every card and effect.',
    route: 'none',
    priority: 'P2',
    status: 'watch',
    evidence:
      'Player job is plausible, but no reliable complete public dataset exists.',
    notes:
      'A full database requires gameplay extraction and a maintenance plan.',
  },
];

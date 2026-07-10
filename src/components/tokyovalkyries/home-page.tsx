import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqSection } from '@/components/tokyovalkyries/faq-section';
import {
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/tokyovalkyries/wiki-navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/tokyovalkyries/localized';
import { siteFacts } from '@/data/tokyovalkyries/sources';
import { attributes, routeNodes } from '@/data/tokyovalkyries/systems';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  Gamepad2,
  Layers3,
  Map,
  ShieldCheck,
  Sparkles,
  Swords,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const startSteps = [
  {
    title: 'Read the party icons',
    href: '/combat-attributes',
    body: 'Count Resolve, Courage, Hope and Dawn before judging a card.',
  },
  {
    title: 'Build one clear deck',
    href: '/deck-building',
    body: 'Take cards with a job and skip rewards that weaken the draw cycle.',
  },
  {
    title: 'Protect the real target',
    href: '/guides/beginner-guide',
    body: 'Enemy intent shows who needs defense before the turn ends.',
  },
  {
    title: 'Route for the boss',
    href: '/map-routes',
    body: 'Spend health only when the reward improves the full run.',
  },
] as const;

const hubs = [
  {
    title: 'Combat and Decks',
    icon: Swords,
    body: 'Learn party triggers, target-aware defense, energy use and card-selection discipline.',
    links: [
      ['Combat attributes', '/combat-attributes'],
      ['Deck building', '/deck-building'],
      ['Cursed Swords', '/cursed-swords-leaders'],
    ],
  },
  {
    title: 'Map and World',
    icon: Map,
    body: 'Choose safer Underworld nodes, meet the cast and understand the spoiler-light premise.',
    links: [
      ['Map routes', '/map-routes'],
      ['Characters', '/characters'],
      ['Story primer', '/story'],
    ],
  },
  {
    title: 'Buy and Play',
    icon: Gamepad2,
    body: 'Compare Steam and Switch, check Windows requirements and use official storefronts.',
    links: [
      ['Switch vs Steam', '/switch-vs-steam'],
      ['PC requirements', '/system-requirements'],
      ['Official download', '/download'],
    ],
  },
  {
    title: 'Launch Status',
    icon: CalendarDays,
    body: 'Confirm the release window, current platforms and whether the game fits what you want.',
    links: [
      ['Release date', '/release-date'],
      ['Platforms', '/platforms'],
      ['Should you buy?', '/review'],
    ],
  },
] as const;

const homeTrailer = {
  title: 'Tokyo Valkyries Trailer ENG',
  embedUrl: 'https://www.youtube-nocookie.com/embed/RNgGcErvGZE?rel=0&hl=en',
  watchUrl: 'https://www.youtube.com/watch?v=RNgGcErvGZE',
  thumbnailUrl: 'https://i.ytimg.com/vi/RNgGcErvGZE/hq720.jpg',
};

export function TokyoValkyriesHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featuredGuides = getLocalizedFeaturedGuides(locale);
  const gameFacts = getLocalizedGameFacts(locale);
  const siteDescription = getLocalizedSiteDescription(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteFacts.domain}/#website`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        '@id': `${siteFacts.domain}/#organization`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/logo.svg`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: { '@type': 'Organization', name: siteFacts.creator },
        publisher: { '@type': 'Organization', name: siteFacts.publisher },
        applicationCategory: 'Game',
        genre: ['Roguelite deckbuilder', 'Card battler', 'RPG', 'Strategy'],
        gamePlatform: ['Windows', 'Steam', 'Nintendo Switch'],
        url: siteFacts.officialSteamUrl,
        sameAs: [
          siteFacts.officialWebsiteUrl,
          siteFacts.officialSteamUrl,
          siteFacts.officialNintendoUrl,
          siteFacts.officialYouTubeUrl,
          siteFacts.officialTwitterUrl,
        ],
      },
      {
        '@type': 'VideoObject',
        name: homeTrailer.title,
        thumbnailUrl: homeTrailer.thumbnailUrl,
        embedUrl: homeTrailer.embedUrl,
        uploadDate: '2026-06-25',
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#070711] text-[#f8f6ff]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#3b2b62] border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(255,79,216,0.18),transparent_35%),radial-gradient(circle_at_88%_18%,rgba(84,231,255,0.16),transparent_32%),linear-gradient(180deg,#0b0a1c_0%,#070711_100%)]" />
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:36px_36px]" />
        <Container className="relative px-4 py-8 lg:py-10">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.78fr)]">
            <div className="min-w-0">
              <Badge className="bg-[#ff4fd8] text-[#110715]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.03] md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#bdb3d2] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#ff4fd8] px-4 py-3 text-[#110715] hover:bg-[#54e7ff]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#54e7ff] bg-transparent px-4 py-3 text-[#f8f6ff] hover:bg-[#54e7ff] hover:text-[#081014]"
                >
                  <LocaleLink href="/combat-attributes">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks className="mt-5" locale={locale} />
              <p className="mt-4 hidden max-w-3xl text-sm leading-6 text-[#9f94ba] sm:block">
                {content.scopeNote}
              </p>
            </div>

            <div className="min-w-0 overflow-hidden rounded-xl border border-[#3b2b62] bg-black shadow-2xl shadow-[#ff4fd8]/10">
              <div className="relative aspect-video">
                <Image
                  src={homeTrailer.thumbnailUrl}
                  alt={homeTrailer.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 540px, 100vw"
                  className="object-cover"
                />
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={homeTrailer.embedUrl}
                  title={homeTrailer.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8 lg:py-10">
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-8">
            <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {gameFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-xl border border-[#3b2b62] bg-[#111126] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#54e7ff]">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#bdb3d2]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </section>

            <section>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fd8]">
                    First clear route
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Start here
                  </h2>
                </div>
                <BookOpen className="size-6 text-[#54e7ff]" />
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-4">
                {startSteps.map((step, index) => (
                  <LocaleLink
                    key={step.href}
                    href={step.href}
                    className="group rounded-xl border border-[#3b2b62] bg-[#111126] p-4 transition hover:-translate-y-0.5 hover:border-[#54e7ff]"
                  >
                    <span className="inline-flex size-7 items-center justify-center rounded-lg bg-[#ff4fd8] text-sm font-black text-[#110715]">
                      {index + 1}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#bdb3d2]">
                      {step.body}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              {hubs.map((hub) => {
                const Icon = hub.icon;
                return (
                  <div
                    key={hub.title}
                    className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5"
                  >
                    <div className="flex gap-3">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1b1634] text-[#54e7ff]">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h2 className="font-display text-2xl font-bold">
                          {hub.title}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-[#bdb3d2]">
                          {hub.body}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {hub.links.map(([label, href]) => (
                        <LocaleLink
                          key={href}
                          href={href}
                          className="rounded-lg border border-[#3b2b62] bg-[#090916] px-3 py-2 text-sm text-[#f8f6ff] transition hover:border-[#ff4fd8] hover:text-[#54e7ff]"
                        >
                          {label}
                        </LocaleLink>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>

            <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54e7ff]">
                    Resolve · Courage · Hope · Dawn
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Four attributes, one party engine
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3b2b62] bg-[#090916] text-[#f8f6ff] hover:border-[#54e7ff] hover:bg-[#1b1634]"
                >
                  <LocaleLink href="/combat-attributes">
                    Full combat guide
                  </LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {attributes.map((attribute) => (
                  <div
                    key={attribute.name}
                    className="rounded-xl border bg-[#090916] p-4"
                    style={{ borderColor: `${attribute.color}70` }}
                  >
                    <span
                      className="inline-block size-2.5 rotate-45 rounded-[2px]"
                      style={{ backgroundColor: attribute.color }}
                    />
                    <h3 className="mt-3 font-display text-xl font-bold">
                      {attribute.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#bdb3d2]">
                      {attribute.advice}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fd8]">
                    Current guide set
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Guides for the decisions that end runs
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#3b2b62] bg-[#090916] text-[#f8f6ff] hover:border-[#54e7ff] hover:bg-[#1b1634]"
                >
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={guide.path}
                    className="group overflow-hidden rounded-xl border border-[#3b2b62] bg-[#090916] transition hover:border-[#54e7ff]"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 300px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090916] via-transparent to-transparent" />
                    </div>
                    <div className="p-4">
                      <Badge className="bg-[#ff4fd8] text-[#110715]">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#bdb3d2]">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-6">
              <div className="flex gap-3">
                <Map className="mt-1 size-5 shrink-0 text-[#54e7ff]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fd8]">
                    Underworld route
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Know what every node is asking from the run
                  </h2>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {routeNodes.map((node) => (
                  <div
                    key={node.name}
                    className="rounded-xl border border-[#3b2b62] bg-[#090916] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="size-2.5 rounded-full"
                        style={{ backgroundColor: node.color }}
                      />
                      <h3 className="font-display text-lg font-bold">
                        {node.name}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#bdb3d2]">
                      {node.description}
                    </p>
                  </div>
                ))}
                <LocaleLink
                  href="/map-routes"
                  className="flex min-h-32 items-center justify-center rounded-xl border border-dashed border-[#54e7ff]/70 bg-[#54e7ff]/5 p-4 text-center font-semibold text-[#54e7ff] transition hover:bg-[#54e7ff]/10"
                >
                  Open the full route guide
                  <ArrowRight className="ml-2 size-4" />
                </LocaleLink>
              </div>
            </section>

            <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-6">
              <div className="flex gap-3">
                <Sparkles className="mt-1 size-5 shrink-0 text-[#ff4fd8]" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54e7ff]">
                    Topic finder
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Every supported Tokyo Valkyries search route
                  </h2>
                </div>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {content.keywordRoutes.map((item) => (
                  <LocaleLink
                    key={`${item.keyword}-${item.route}`}
                    href={item.route}
                    className="min-w-0 rounded-xl border border-[#3b2b62] bg-[#090916] p-4 transition hover:border-[#54e7ff]"
                  >
                    <span className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span className="min-w-0 break-words font-semibold text-[#f8f6ff]">
                        {item.keyword}
                      </span>
                      <span className="text-[#54e7ff]">{item.label}</span>
                    </span>
                    <p className="mt-2 text-sm leading-6 text-[#9f94ba]">
                      {item.intent}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 size-5 text-[#62e6a7]" />
                  <div>
                    <h2 className="font-display text-2xl font-bold">
                      Official storefronts only
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#bdb3d2]">
                      There is no official mobile APK or free installer. Use
                      Steam for Windows or Nintendo for Switch.
                    </p>
                    <LocaleLink
                      href="/download"
                      className="mt-3 inline-flex items-center gap-1 text-[#54e7ff] text-sm underline underline-offset-4"
                    >
                      Safe download links
                      <ArrowRight className="size-3" />
                    </LocaleLink>
                  </div>
                </div>
              </div>
              <div className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5">
                <div className="flex gap-3">
                  <UsersRound className="mt-1 size-5 text-[#ff4fd8]" />
                  <div>
                    <h2 className="font-display text-2xl font-bold">
                      Nine official character profiles
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#bdb3d2]">
                      Meet Haruka, Artesia, Tsubasa, Anna, Mamika, Raimu,
                      Suzuno, Tamaki and Karin without ending spoilers.
                    </p>
                    <LocaleLink
                      href="/characters"
                      className="mt-3 inline-flex items-center gap-1 text-[#54e7ff] text-sm underline underline-offset-4"
                    >
                      Open the character roster
                      <ArrowRight className="size-3" />
                    </LocaleLink>
                  </div>
                </div>
              </div>
            </section>

            <FaqSection items={content.faq} title="Tokyo Valkyries FAQ" />

            <section className="rounded-xl border border-[#ff4fd8]/50 bg-[linear-gradient(135deg,rgba(255,79,216,0.13),rgba(84,231,255,0.08))] p-6">
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54e7ff]">
                    Ready to enter the Underworld?
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Build the deck that can reach the sword
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-[#ff4fd8] text-[#110715] hover:bg-[#54e7ff]"
                  >
                    <LocaleLink href="/guides/beginner-guide">
                      Beginner guide
                    </LocaleLink>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#54e7ff] bg-transparent text-[#f8f6ff] hover:bg-[#54e7ff] hover:text-[#081014]"
                  >
                    <a
                      href={siteFacts.officialSteamUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Steam
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </section>
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}

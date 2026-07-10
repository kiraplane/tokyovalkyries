import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqSection } from '@/components/tokyovalkyries/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/tokyovalkyries/wiki-navigation';
import { Badge } from '@/components/ui/badge';
import { characters } from '@/data/tokyovalkyries/characters';
import { getGuide } from '@/data/tokyovalkyries/guides';
import { siteFacts } from '@/data/tokyovalkyries/sources';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, Mic2, Sparkles, UsersRound } from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const accentClasses = {
  pink: 'border-[#ff4fd8]/55 bg-[#ff4fd8]/8 text-[#ff8be6]',
  cyan: 'border-[#54e7ff]/55 bg-[#54e7ff]/8 text-[#8df0ff]',
  gold: 'border-[#ffd166]/55 bg-[#ffd166]/8 text-[#ffe29a]',
  violet: 'border-[#8d7cff]/55 bg-[#8d7cff]/8 text-[#b6aaff]',
} as const;

export function CharacterRosterPage({ locale }: { locale?: Locale }) {
  const guide = getGuide('characters');

  if (!guide) {
    return null;
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Tokyo Valkyries Characters',
        numberOfItems: characters.length,
        itemListElement: characters.map((character, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: character.name,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: siteFacts.siteName,
            item: siteFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Characters',
            item: `${siteFacts.domain}/characters`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#070711] py-10 text-[#f8f6ff]">
      <JsonLd data={jsonLd} />
      <Container className="px-4">
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-8">
            <header className="overflow-hidden rounded-xl border border-[#3b2b62] bg-[#111126]">
              <div className="relative aspect-[16/6] min-h-[220px] border-[#3b2b62] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt="Tokyo Valkyries character roster"
                  fill
                  priority
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090916] via-[#090916]/25 to-transparent" />
              </div>
              <div className="p-5 md:p-7">
                <Badge className="bg-[#ff4fd8] text-[#110715]">
                  Official character profiles
                </Badge>
                <h1 className="mt-4 font-display text-4xl font-black md:text-6xl">
                  {guide.title}
                </h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-[#bdb3d2]">
                  {guide.summary}
                </p>
                <p className="mt-3 text-sm text-[#9f94ba]">
                  Later story events are intentionally excluded.
                </p>
                <div className="mt-5">
                  <MobileWikiNav currentPath="/characters" locale={locale} />
                </div>
              </div>
            </header>

            <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-6">
              <div className="flex gap-3">
                <UsersRound className="mt-1 size-5 shrink-0 text-[#54e7ff]" />
                <div>
                  <h2 className="font-display text-3xl font-black">
                    Nine lives pulled into the same fight
                  </h2>
                  <p className="mt-3 max-w-4xl text-base leading-8 text-[#bdb3d2]">
                    Haruka anchors modern Tokyo while Artesia carries the
                    warning from Grand Earth. The wider group brings friends,
                    fashion, university pressure, gaming, Akihabara culture and
                    medicine into the Underworld story. These profiles describe
                    personality and narrative role; they do not assign an
                    unsupported combat tier.
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {characters.map((character, index) => (
                <article
                  key={character.name}
                  className={`min-w-0 rounded-xl border p-5 ${accentClasses[character.accent]}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#090916] font-display font-black text-[#f8f6ff]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Sparkles className="size-5 shrink-0" />
                  </div>
                  <h2 className="mt-4 min-w-0 break-words font-display text-2xl font-black text-[#f8f6ff]">
                    {character.name}
                  </h2>
                  <p className="mt-1 text-sm font-semibold">{character.role}</p>
                  <p className="mt-3 text-sm leading-7 text-[#c9c1da]">
                    {character.profile}
                  </p>
                  <div className="mt-4 flex items-center gap-2 border-white/10 border-t pt-3 text-sm text-[#f8f6ff]">
                    <Mic2 className="size-4 shrink-0" />
                    <span>CV: {character.voiceActor}</span>
                  </div>
                </article>
              ))}
            </section>

            <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-6">
              <h2 className="font-display text-3xl font-black">
                Choose parties by attributes, not biography
              </h2>
              <p className="mt-3 max-w-4xl text-base leading-8 text-[#bdb3d2]">
                A favorite character can still anchor a successful party, but
                the run is decided by the relationship between her attribute
                icons, the deck and the leader skill you have unlocked. Use the
                roster to understand the cast, then use the combat guide for
                formation decisions.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <LocaleLink
                  href="/combat-attributes"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#ff4fd8] px-4 py-3 font-semibold text-[#110715] transition hover:bg-[#54e7ff]"
                >
                  Combat and attributes
                  <ArrowRight className="size-4" />
                </LocaleLink>
                <LocaleLink
                  href="/story"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#54e7ff] px-4 py-3 font-semibold text-[#f8f6ff] transition hover:bg-[#54e7ff] hover:text-[#081014]"
                >
                  Spoiler-light story
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
            </section>

            <FaqSection items={guide.faq} title="Character FAQ" />
          </main>

          <WikiRouteSidebar currentPath="/characters" locale={locale} />
        </div>
      </Container>
    </div>
  );
}

import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { DeckBuilder } from '@/components/tokyovalkyries/deck-builder';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/tokyovalkyries/wiki-navigation';
import { Badge } from '@/components/ui/badge';
import { cards } from '@/data/tokyovalkyries/cards';
import { siteFacts } from '@/data/tokyovalkyries/sources';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, Layers3 } from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const plannerCards = [cards[0], cards[6], cards[8]].filter(Boolean);

export function DeckBuilderPage({ locale }: { locale?: Locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Tokyo Valkyries Deck Builder',
        applicationCategory: 'GameApplication',
        operatingSystem: 'Web',
        url: `${siteFacts.domain}/deck-builder`,
        description:
          'Build a Tokyo Valkyries run deck, count energy costs and compare card attributes with the current party.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
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
            name: 'Deck Builder',
            item: `${siteFacts.domain}/deck-builder`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#070711] py-10 text-[#f8f6ff]">
      <JsonLd data={jsonLd} />
      <Container className="px-4">
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <main className="min-w-0 space-y-8">
            <header className="relative overflow-hidden rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,79,216,0.14),transparent_30%),radial-gradient(circle_at_86%_80%,rgba(84,231,255,0.13),transparent_35%)]" />
              <div className="relative grid grid-cols-[minmax(0,1fr)] items-center gap-7 md:grid-cols-[minmax(0,1fr)_280px]">
                <div className="min-w-0">
                  <Badge className="bg-[#ff4fd8] text-[#110715]">
                    Interactive run tool
                  </Badge>
                  <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-6xl">
                    Tokyo Valkyries Deck Builder
                  </h1>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[#bdb3d2] md:text-lg">
                    Map the deck you are assembling during a run, match card
                    attributes to the party and keep the energy curve visible
                    before the next battle.
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-[#9f94ba]">
                    This planner models the current run. It does not import a
                    permanent loadout into the game.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <LocaleLink
                      href="/cards"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#ff4fd8] px-4 py-3 font-semibold text-[#110715] transition hover:bg-[#54e7ff]"
                    >
                      Browse all cards
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                    <LocaleLink
                      href="/combat-attributes"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#54e7ff] px-4 py-3 font-semibold text-[#f8f6ff] transition hover:bg-[#54e7ff] hover:text-[#081014]"
                    >
                      Attribute guide
                    </LocaleLink>
                  </div>
                  <div className="mt-5">
                    <MobileWikiNav
                      currentPath="/deck-builder"
                      locale={locale}
                    />
                  </div>
                </div>

                <div className="relative mx-auto h-[255px] w-full max-w-[280px]">
                  <div className="absolute inset-5 rounded-full bg-[#ff4fd8]/15 blur-3xl" />
                  {plannerCards.map((card, index) => (
                    <div
                      key={card.id}
                      className="absolute top-1/2 left-1/2 aspect-[3/4] w-[130px] overflow-hidden rounded-xl border border-white/20 bg-[#090916] shadow-2xl"
                      style={{
                        transform: `translate(-50%, -50%) translateX(${
                          (index - 1) * 62
                        }px) rotate(${(index - 1) * 7}deg)`,
                        zIndex: index === 1 ? 3 : 2,
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={`${card.name} card`}
                        fill
                        priority={index === 1}
                        sizes="130px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <span className="absolute right-1 bottom-1 inline-flex size-12 items-center justify-center rounded-xl border border-[#54e7ff]/50 bg-[#090916] text-[#54e7ff] shadow-xl">
                    <Layers3 className="size-6" />
                  </span>
                </div>
              </div>
            </header>

            <DeckBuilder />
          </main>

          <WikiRouteSidebar currentPath="/deck-builder" locale={locale} />
        </div>
      </Container>
    </div>
  );
}

import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { CardsBrowser } from '@/components/tokyovalkyries/cards-browser';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/tokyovalkyries/wiki-navigation';
import { Badge } from '@/components/ui/badge';
import { cards } from '@/data/tokyovalkyries/cards';
import { siteFacts } from '@/data/tokyovalkyries/sources';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, Database, Layers3, Zap } from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const heroCards = [cards[6], cards[7], cards[9]].filter(Boolean);

export function CardsPage({ locale }: { locale?: Locale }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'Tokyo Valkyries Cards',
        description:
          'Search Tokyo Valkyries cards by energy cost, card type, attribute and effect keyword.',
        url: `${siteFacts.domain}/cards`,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: cards.length,
          itemListElement: cards.map((card, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: card.name,
            url: `${siteFacts.domain}/cards#${card.id}`,
          })),
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
            name: 'Cards',
            item: `${siteFacts.domain}/cards`,
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_16%,rgba(84,231,255,0.14),transparent_30%),radial-gradient(circle_at_12%_80%,rgba(255,79,216,0.13),transparent_34%)]" />
              <div className="relative grid grid-cols-[minmax(0,1fr)] items-center gap-7 md:grid-cols-[minmax(0,1fr)_310px]">
                <div className="min-w-0">
                  <Badge className="bg-[#ff4fd8] text-[#110715]">
                    Card database
                  </Badge>
                  <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-tight md:text-6xl">
                    Tokyo Valkyries Cards
                  </h1>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-[#bdb3d2] md:text-lg">
                    Browse the card library by energy, type, attribute and
                    effect. Open a card for its current details or move into the
                    run planner to test a deck shape.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <LocaleLink
                      href="/deck-builder"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#ff4fd8] px-4 py-3 font-semibold text-[#110715] transition hover:bg-[#54e7ff]"
                    >
                      Open deck builder
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                    <LocaleLink
                      href="/deck-building"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#54e7ff] px-4 py-3 font-semibold text-[#f8f6ff] transition hover:bg-[#54e7ff] hover:text-[#081014]"
                    >
                      Read deck guide
                    </LocaleLink>
                  </div>
                  <div className="mt-5">
                    <MobileWikiNav currentPath="/cards" locale={locale} />
                  </div>
                </div>

                <div className="relative mx-auto h-[285px] w-full max-w-[310px]">
                  {heroCards.map((card, index) => (
                    <div
                      key={card.id}
                      className="absolute top-1/2 left-1/2 aspect-[3/4] w-[145px] overflow-hidden rounded-xl border border-white/20 bg-[#090916] shadow-2xl"
                      style={{
                        transform: `translate(-50%, -50%) translateX(${
                          (index - 1) * 72
                        }px) rotate(${(index - 1) * 8}deg)`,
                        zIndex: index === 1 ? 3 : 2,
                      }}
                    >
                      <Image
                        src={card.image}
                        alt={`${card.name} card`}
                        fill
                        priority={index === 1}
                        sizes="145px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </header>

            <section className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-[#3b2b62] bg-[#111126] p-4">
                <Database className="size-5 text-[#54e7ff]" />
                <p className="mt-3 font-display text-3xl font-black">
                  {cards.length}
                </p>
                <p className="mt-1 text-sm text-[#bdb3d2]">Catalogued cards</p>
              </div>
              <div className="rounded-xl border border-[#3b2b62] bg-[#111126] p-4">
                <Zap className="size-5 text-[#ffd166]" />
                <p className="mt-3 font-display text-3xl font-black">1–3</p>
                <p className="mt-1 text-sm text-[#bdb3d2]">Energy range</p>
              </div>
              <div className="rounded-xl border border-[#3b2b62] bg-[#111126] p-4">
                <Layers3 className="size-5 text-[#ff4fd8]" />
                <p className="mt-3 font-display text-3xl font-black">2</p>
                <p className="mt-1 text-sm text-[#bdb3d2]">
                  Attack and Support types
                </p>
              </div>
            </section>

            <CardsBrowser />
          </main>

          <WikiRouteSidebar currentPath="/cards" locale={locale} />
        </div>
      </Container>
    </div>
  );
}

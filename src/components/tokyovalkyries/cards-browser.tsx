'use client';

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  type CardAttribute,
  type CardType,
  type TokyoValkyriesCard,
  cardAttributes,
  cardTypes,
  cards,
} from '@/data/tokyovalkyries/cards';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, Search, SlidersHorizontal, X } from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const attributeStyles: Record<CardAttribute, string> = {
  Resolve: 'border-[#ff4f8b]/60 bg-[#ff4f8b]/10 text-[#ff9dba]',
  Courage: 'border-[#ffb84d]/60 bg-[#ffb84d]/10 text-[#ffd18b]',
  Hope: 'border-[#62e6a7]/60 bg-[#62e6a7]/10 text-[#9cf0c9]',
  Dawn: 'border-[#8d7cff]/60 bg-[#8d7cff]/10 text-[#b8adff]',
  Other: 'border-white/20 bg-white/5 text-[#d8d1e8]',
};

function publicAttributeLabel(attribute: CardAttribute) {
  return attribute === 'Other' ? 'Other icon' : attribute;
}

function CardDetails({ card }: { card: TokyoValkyriesCard }) {
  return (
    <section className="grid grid-cols-[minmax(0,1fr)] gap-5 rounded-xl border border-[#ff4fd8]/55 bg-[linear-gradient(135deg,rgba(255,79,216,0.11),rgba(84,231,255,0.05))] p-5 md:grid-cols-[230px_minmax(0,1fr)] md:p-6">
      <div className="relative mx-auto aspect-[3/4] w-full max-w-[230px] overflow-hidden rounded-xl border border-white/15 bg-[#090916]">
        <Image
          src={card.image}
          alt={`${card.name} card`}
          fill
          sizes="230px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-[#ff4fd8] text-[#110715]">
            {card.cost} energy
          </Badge>
          <Badge
            variant="outline"
            className="border-[#54e7ff]/55 text-[#f8f6ff]"
          >
            {card.type}
          </Badge>
          <Badge variant="outline" className={attributeStyles[card.attribute]}>
            {publicAttributeLabel(card.attribute)}
          </Badge>
        </div>

        <h2 className="mt-4 break-words font-display text-3xl font-black md:text-4xl">
          {card.name}
        </h2>

        <div className="mt-5 rounded-xl border border-[#3b2b62] bg-[#090916] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54e7ff]">
            Card text
          </p>
          {card.effectLines.length > 0 ? (
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#f8f6ff]">
              {card.effectLines.map((line) => (
                <li key={line} className="flex items-center gap-2">
                  <span className="size-1.5 shrink-0 rotate-45 bg-[#ff4fd8]" />
                  {line}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm leading-6 text-[#bdb3d2]">
              Detailed effect text is being added to the library.
            </p>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {card.roles.map((role) => (
            <Badge
              key={role}
              variant="outline"
              className="border-white/15 text-[#d8d1e8]"
            >
              {role}
            </Badge>
          ))}
          {card.keywords.map((keyword) => (
            <Badge
              key={keyword}
              variant="outline"
              className="border-[#62e6a7]/45 text-[#9cf0c9]"
            >
              {keyword}
            </Badge>
          ))}
        </div>

        <LocaleLink
          href="/deck-builder"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#ff4fd8] px-4 py-3 font-semibold text-[#110715] transition hover:bg-[#54e7ff]"
        >
          Open deck builder
          <ArrowRight className="size-4" />
        </LocaleLink>
      </div>
    </section>
  );
}

export function CardsBrowser() {
  const [query, setQuery] = useState('');
  const [attribute, setAttribute] = useState<'All' | CardAttribute>('All');
  const [type, setType] = useState<'All' | CardType>('All');
  const [cost, setCost] = useState<'All' | '1' | '2' | '3'>('All');
  const [selectedId, setSelectedId] = useState(cards[0]?.id ?? '');

  const filteredCards = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return cards.filter((card) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        card.name.toLowerCase().includes(normalizedQuery) ||
        card.keywords.some((keyword) =>
          keyword.toLowerCase().includes(normalizedQuery)
        );
      const matchesAttribute =
        attribute === 'All' || card.attribute === attribute;
      const matchesType = type === 'All' || card.type === type;
      const matchesCost = cost === 'All' || card.cost === Number(cost);

      return matchesQuery && matchesAttribute && matchesType && matchesCost;
    });
  }, [attribute, cost, query, type]);

  const selectedCard =
    filteredCards.find((card) => card.id === selectedId) ?? filteredCards[0];
  const hasFilters =
    query.length > 0 || attribute !== 'All' || type !== 'All' || cost !== 'All';

  function clearFilters() {
    setQuery('');
    setAttribute('All');
    setType('All');
    setCost('All');
  }

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#54e7ff]">
              <SlidersHorizontal className="size-4" />
              Find a card
            </p>
            <h2 className="mt-2 font-display text-2xl font-black">
              Search and filter
            </h2>
          </div>
          <p className="text-sm text-[#bdb3d2]">
            {filteredCards.length} of {cards.length} cards
          </p>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <label
            htmlFor="card-search"
            className="relative md:col-span-2 xl:col-span-1"
          >
            <span className="sr-only">Search card names</span>
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[#9f94ba]" />
            <Input
              id="card-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search cards or keywords"
              className="h-11 border-[#3b2b62] bg-[#090916] pl-10 text-[#f8f6ff] placeholder:text-[#756b8c] focus-visible:border-[#54e7ff]"
            />
          </label>

          <label>
            <span className="sr-only">Filter by attribute</span>
            <select
              value={attribute}
              onChange={(event) =>
                setAttribute(event.target.value as 'All' | CardAttribute)
              }
              className="h-11 w-full rounded-md border border-[#3b2b62] bg-[#090916] px-3 text-sm text-[#f8f6ff] outline-none focus:border-[#54e7ff]"
            >
              <option value="All">All attributes</option>
              {cardAttributes.map((item) => (
                <option key={item} value={item}>
                  {publicAttributeLabel(item)}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Filter by card type</span>
            <select
              value={type}
              onChange={(event) =>
                setType(event.target.value as 'All' | CardType)
              }
              className="h-11 w-full rounded-md border border-[#3b2b62] bg-[#090916] px-3 text-sm text-[#f8f6ff] outline-none focus:border-[#54e7ff]"
            >
              <option value="All">All card types</option>
              {cardTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span className="sr-only">Filter by energy cost</span>
            <select
              value={cost}
              onChange={(event) =>
                setCost(event.target.value as 'All' | '1' | '2' | '3')
              }
              className="h-11 w-full rounded-md border border-[#3b2b62] bg-[#090916] px-3 text-sm text-[#f8f6ff] outline-none focus:border-[#54e7ff]"
            >
              <option value="All">All energy costs</option>
              <option value="1">1 energy</option>
              <option value="2">2 energy</option>
              <option value="3">3 energy</option>
            </select>
          </label>
        </div>

        {hasFilters ? (
          <button
            type="button"
            onClick={clearFilters}
            className="mt-4 inline-flex items-center gap-1.5 text-[#54e7ff] text-sm hover:text-[#ff4fd8]"
          >
            <X className="size-4" />
            Clear filters
          </button>
        ) : null}
      </section>

      {selectedCard ? <CardDetails card={selectedCard} /> : null}

      {filteredCards.length > 0 ? (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredCards.map((card) => {
            const isSelected = selectedCard?.id === card.id;

            return (
              <button
                key={card.id}
                id={card.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedId(card.id)}
                className={cn(
                  'group min-w-0 overflow-hidden rounded-xl border bg-[#111126] text-left transition hover:-translate-y-0.5 hover:border-[#54e7ff]',
                  isSelected
                    ? 'border-[#ff4fd8] shadow-lg shadow-[#ff4fd8]/10'
                    : 'border-[#3b2b62]'
                )}
              >
                <div className="relative aspect-[3/4] overflow-hidden border-[#3b2b62] border-b bg-[#090916]">
                  <Image
                    src={card.image}
                    alt={`${card.name} card`}
                    fill
                    sizes="(min-width: 1280px) 280px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#ff4fd8] text-[#110715]">
                      {card.cost}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-[#54e7ff]/45 text-[#d8d1e8]"
                    >
                      {card.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={attributeStyles[card.attribute]}
                    >
                      {publicAttributeLabel(card.attribute)}
                    </Badge>
                  </div>
                  <h3 className="mt-3 break-words font-display text-xl font-bold text-[#f8f6ff]">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-sm text-[#9f94ba]">
                    Select card details
                  </p>
                </div>
              </button>
            );
          })}
        </section>
      ) : (
        <section className="rounded-xl border border-dashed border-[#3b2b62] bg-[#111126] p-8 text-center">
          <h2 className="font-display text-2xl font-black">No cards found</h2>
          <p className="mt-2 text-sm text-[#bdb3d2]">
            Clear one or more filters to return to the card library.
          </p>
        </section>
      )}
    </div>
  );
}

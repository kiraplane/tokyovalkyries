'use client';

import { Badge } from '@/components/ui/badge';
import {
  type CardAttribute,
  type TokyoValkyriesCard,
  cards,
} from '@/data/tokyovalkyries/cards';
import { cn } from '@/lib/utils';
import {
  Check,
  Clipboard,
  Copy,
  Minus,
  Plus,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Swords,
  Zap,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const storageKey = 'tokyo-valkyries-run-deck-v1';
const partyAttributes = ['Resolve', 'Courage', 'Hope', 'Dawn'] as const;
type PartyAttribute = (typeof partyAttributes)[number];
type DeckCounts = Record<string, number>;
type PartyCounts = Record<PartyAttribute, number>;

const emptyParty: PartyCounts = {
  Resolve: 0,
  Courage: 0,
  Hope: 0,
  Dawn: 0,
};

const attributeStyles: Record<CardAttribute, string> = {
  Resolve: 'border-[#ff4f8b]/60 bg-[#ff4f8b]/10 text-[#ff9dba]',
  Courage: 'border-[#ffb84d]/60 bg-[#ffb84d]/10 text-[#ffd18b]',
  Hope: 'border-[#62e6a7]/60 bg-[#62e6a7]/10 text-[#9cf0c9]',
  Dawn: 'border-[#8d7cff]/60 bg-[#8d7cff]/10 text-[#b8adff]',
  Other: 'border-white/20 bg-white/5 text-[#d8d1e8]',
};

const attributeColors: Record<PartyAttribute, string> = {
  Resolve: '#ff4f8b',
  Courage: '#ffb84d',
  Hope: '#62e6a7',
  Dawn: '#8d7cff',
};

function parseDeckParam(value: string | null): DeckCounts {
  if (!value) {
    return {};
  }

  const entries = value.split(',').flatMap((item): Array<[string, number]> => {
    const [id, rawCount] = item.split(':');
    const count = Number(rawCount);

    if (
      !id ||
      !cards.some((card) => card.id === id) ||
      !Number.isInteger(count) ||
      count <= 0 ||
      count > 9
    ) {
      return [];
    }

    return [[id, count]];
  });

  return Object.fromEntries(entries);
}

function parsePartyParam(value: string | null): PartyCounts {
  const values = value?.split(',').map(Number) ?? [];

  return Object.fromEntries(
    partyAttributes.map((attribute, index) => {
      const count = values[index];
      return [
        attribute,
        Number.isInteger(count) && count >= 0 && count <= 9 ? count : 0,
      ];
    })
  ) as PartyCounts;
}

function CardCountControl({
  card,
  count,
  onChange,
}: {
  card: TokyoValkyriesCard;
  count: number;
  onChange: (nextCount: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        aria-label={`Remove one ${card.name}`}
        disabled={count === 0}
        onClick={() => onChange(Math.max(0, count - 1))}
        className="inline-flex size-9 items-center justify-center rounded-lg border border-[#3b2b62] bg-[#090916] text-[#f8f6ff] transition hover:border-[#54e7ff] disabled:cursor-not-allowed disabled:opacity-35"
      >
        <Minus className="size-4" />
      </button>
      <span className="inline-flex min-w-8 justify-center font-display text-lg font-black">
        {count}
      </span>
      <button
        type="button"
        aria-label={`Add one ${card.name}`}
        disabled={count >= 9}
        onClick={() => onChange(Math.min(9, count + 1))}
        className="inline-flex size-9 items-center justify-center rounded-lg bg-[#ff4fd8] text-[#110715] transition hover:bg-[#54e7ff] disabled:cursor-not-allowed disabled:opacity-35"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}

export function DeckBuilder() {
  const [deck, setDeck] = useState<DeckCounts>({});
  const [party, setParty] = useState<PartyCounts>(emptyParty);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlDeck = parseDeckParam(params.get('deck'));
    const hasUrlDeck = Object.keys(urlDeck).length > 0;

    if (hasUrlDeck || params.has('party')) {
      setDeck(urlDeck);
      setParty(parsePartyParam(params.get('party')));
      setReady(true);
      return;
    }

    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved) as {
          deck?: DeckCounts;
          party?: PartyCounts;
        };
        setDeck(parsed.deck ?? {});
        setParty({ ...emptyParty, ...parsed.party });
      }
    } catch {
      window.localStorage.removeItem(storageKey);
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify({ deck, party }));

    const params = new URLSearchParams();
    const deckParam = cards
      .filter((card) => (deck[card.id] ?? 0) > 0)
      .map((card) => `${card.id}:${deck[card.id]}`)
      .join(',');
    const partyParam = partyAttributes
      .map((attribute) => party[attribute])
      .join(',');

    if (deckParam) {
      params.set('deck', deckParam);
    }
    if (partyParam !== '0,0,0,0') {
      params.set('party', partyParam);
    }

    const nextUrl = `${window.location.pathname}${
      params.size > 0 ? `?${params.toString()}` : ''
    }`;
    window.history.replaceState(null, '', nextUrl);
  }, [deck, party, ready]);

  const summary = useMemo(() => {
    const selected = cards
      .map((card) => ({ card, count: deck[card.id] ?? 0 }))
      .filter((entry) => entry.count > 0);
    const totalCards = selected.reduce((sum, entry) => sum + entry.count, 0);
    const totalEnergy = selected.reduce(
      (sum, entry) => sum + entry.card.cost * entry.count,
      0
    );
    const attackCards = selected
      .filter((entry) => entry.card.type === 'Attack')
      .reduce((sum, entry) => sum + entry.count, 0);
    const supportCards = totalCards - attackCards;
    const curve = [1, 2, 3].map((cost) => ({
      cost,
      count: selected
        .filter((entry) => entry.card.cost === cost)
        .reduce((sum, entry) => sum + entry.count, 0),
    }));
    const attributes = [...partyAttributes, 'Other' as const].map(
      (attribute) => ({
        attribute,
        count: selected
          .filter((entry) => entry.card.attribute === attribute)
          .reduce((sum, entry) => sum + entry.count, 0),
      })
    );
    const defenseCards = selected
      .filter((entry) => entry.card.roles.includes('Defense'))
      .reduce((sum, entry) => sum + entry.count, 0);

    return {
      selected,
      totalCards,
      attackCards,
      supportCards,
      defenseCards,
      averageCost: totalCards > 0 ? totalEnergy / totalCards : 0,
      curve,
      attributes,
    };
  }, [deck]);

  const checks = useMemo(() => {
    if (summary.totalCards === 0) {
      return ['Add cards to start mapping the current run.'];
    }

    const messages: string[] = [];

    for (const attribute of partyAttributes) {
      const cardCount =
        summary.attributes.find((item) => item.attribute === attribute)
          ?.count ?? 0;
      if (cardCount > 0 && party[attribute] === 0) {
        messages.push(
          `${cardCount} ${attribute} card${cardCount === 1 ? '' : 's'} currently have no matching party icon.`
        );
      }
    }

    const otherCount =
      summary.attributes.find((item) => item.attribute === 'Other')?.count ?? 0;
    if (otherCount > 0) {
      messages.push(
        `${otherCount} card${otherCount === 1 ? '' : 's'} use another visible attribute icon; match those directly against the party screen.`
      );
    }
    if (summary.supportCards === 0) {
      messages.push('No Support cards are selected.');
    }
    if (summary.defenseCards === 0) {
      messages.push('No defense-role cards are selected.');
    }
    if (summary.averageCost > 2) {
      messages.push(
        'The curve is weighted toward 2–3 energy cards; check that the opening hand can still act cleanly.'
      );
    }

    return messages.length > 0
      ? messages
      : [
          'The selected cards have matching party icons and include Support coverage.',
        ];
  }, [party, summary]);

  function updateCard(cardId: string, count: number) {
    setDeck((current) => {
      const next = { ...current };
      if (count <= 0) {
        delete next[cardId];
      } else {
        next[cardId] = count;
      }
      return next;
    });
  }

  function updateParty(attribute: PartyAttribute, count: number) {
    setParty((current) => ({
      ...current,
      [attribute]: Math.max(0, Math.min(9, count)),
    }));
  }

  function resetPlanner() {
    setDeck({});
    setParty(emptyParty);
    setCopied(false);
    window.localStorage.removeItem(storageKey);
  }

  async function copyPlannerLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54e7ff]">
              Party trigger profile
            </p>
            <h2 className="mt-2 font-display text-2xl font-black">
              Match the icons on your current party
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#bdb3d2]">
              Count every displayed attribute, including additional icons gained
              after a Cursed Sword.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={copyPlannerLink}
              className="inline-flex items-center gap-2 rounded-lg border border-[#54e7ff] bg-[#54e7ff]/5 px-3 py-2 text-[#f8f6ff] text-sm transition hover:bg-[#54e7ff] hover:text-[#081014]"
            >
              {copied ? (
                <Check className="size-4" />
              ) : (
                <Copy className="size-4" />
              )}
              {copied ? 'Link copied' : 'Share deck'}
            </button>
            <button
              type="button"
              onClick={resetPlanner}
              className="inline-flex items-center gap-2 rounded-lg border border-[#3b2b62] bg-[#090916] px-3 py-2 text-[#bdb3d2] text-sm transition hover:border-[#ff4fd8] hover:text-[#f8f6ff]"
            >
              <RotateCcw className="size-4" />
              Reset
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {partyAttributes.map((attribute) => (
            <div
              key={attribute}
              className="rounded-xl border bg-[#090916] p-4"
              style={{ borderColor: `${attributeColors[attribute]}75` }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2 font-display text-lg font-bold">
                  <span
                    className="size-2.5 rotate-45 rounded-[2px]"
                    style={{ backgroundColor: attributeColors[attribute] }}
                  />
                  {attribute}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label={`Decrease ${attribute} party icons`}
                    onClick={() => updateParty(attribute, party[attribute] - 1)}
                    className="inline-flex size-8 items-center justify-center rounded-lg border border-[#3b2b62] text-[#f8f6ff] hover:border-[#54e7ff]"
                  >
                    <Minus className="size-4" />
                  </button>
                  <span className="min-w-6 text-center font-display text-lg font-black">
                    {party[attribute]}
                  </span>
                  <button
                    type="button"
                    aria-label={`Increase ${attribute} party icons`}
                    onClick={() => updateParty(attribute, party[attribute] + 1)}
                    className="inline-flex size-8 items-center justify-center rounded-lg bg-[#ff4fd8] text-[#110715] hover:bg-[#54e7ff]"
                  >
                    <Plus className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <section className="min-w-0 rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#ff4fd8]">
                Card pool
              </p>
              <h2 className="mt-2 font-display text-2xl font-black">
                Add cards to this run
              </h2>
            </div>
            <Badge
              variant="outline"
              className="border-[#54e7ff]/50 text-[#f8f6ff]"
            >
              {summary.totalCards} cards
            </Badge>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => {
              const count = deck[card.id] ?? 0;
              return (
                <article
                  key={card.id}
                  className={cn(
                    'overflow-hidden rounded-xl border bg-[#090916] transition',
                    count > 0
                      ? 'border-[#ff4fd8] shadow-lg shadow-[#ff4fd8]/8'
                      : 'border-[#3b2b62]'
                  )}
                >
                  <div className="relative aspect-[3/4] overflow-hidden border-[#3b2b62] border-b">
                    <Image
                      src={card.image}
                      alt={`${card.name} card`}
                      fill
                      sizes="(min-width: 1280px) 220px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    {count > 0 ? (
                      <span className="absolute top-3 right-3 inline-flex size-9 items-center justify-center rounded-full bg-[#ff4fd8] font-display text-lg font-black text-[#110715] shadow-lg">
                        {count}
                      </span>
                    ) : null}
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
                        {card.attribute === 'Other'
                          ? 'Other icon'
                          : card.attribute}
                      </Badge>
                    </div>
                    <h3 className="mt-3 min-h-12 break-words font-display text-lg font-bold">
                      {card.name}
                    </h3>
                    <div className="mt-4">
                      <CardCountControl
                        card={card}
                        count={count}
                        onChange={(nextCount) => updateCard(card.id, nextCount)}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="space-y-4 xl:sticky xl:top-24">
          <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54e7ff]">
                  Run summary
                </p>
                <h2 className="mt-1 font-display text-2xl font-black">
                  Current deck
                </h2>
              </div>
              <Clipboard className="size-5 text-[#ff4fd8]" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-[#3b2b62] bg-[#090916] p-3">
                <p className="text-xs text-[#9f94ba]">Cards</p>
                <p className="mt-1 font-display text-2xl font-black">
                  {summary.totalCards}
                </p>
              </div>
              <div className="rounded-lg border border-[#3b2b62] bg-[#090916] p-3">
                <p className="text-xs text-[#9f94ba]">Average cost</p>
                <p className="mt-1 font-display text-2xl font-black">
                  {summary.averageCost.toFixed(1)}
                </p>
              </div>
              <div className="rounded-lg border border-[#3b2b62] bg-[#090916] p-3">
                <p className="flex items-center gap-1 text-xs text-[#9f94ba]">
                  <Swords className="size-3" /> Attack
                </p>
                <p className="mt-1 font-display text-2xl font-black">
                  {summary.attackCards}
                </p>
              </div>
              <div className="rounded-lg border border-[#3b2b62] bg-[#090916] p-3">
                <p className="flex items-center gap-1 text-xs text-[#9f94ba]">
                  <ShieldCheck className="size-3" /> Support
                </p>
                <p className="mt-1 font-display text-2xl font-black">
                  {summary.supportCards}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Zap className="size-4 text-[#ffd166]" /> Energy curve
              </p>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {summary.curve.map((item) => (
                  <div
                    key={item.cost}
                    className="rounded-lg border border-[#3b2b62] bg-[#090916] p-3 text-center"
                  >
                    <p className="text-xs text-[#9f94ba]">{item.cost} cost</p>
                    <p className="mt-1 font-display text-xl font-black">
                      {item.count}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Sparkles className="size-4 text-[#ff4fd8]" /> Attribute mix
              </p>
              <div className="mt-3 grid gap-2">
                {summary.attributes
                  .filter((item) => item.count > 0)
                  .map((item) => (
                    <div
                      key={item.attribute}
                      className="flex items-center justify-between rounded-lg border border-[#3b2b62] bg-[#090916] px-3 py-2 text-sm"
                    >
                      <span>
                        {item.attribute === 'Other'
                          ? 'Other icon'
                          : item.attribute}
                      </span>
                      <span className="font-display font-black">
                        {item.count}
                      </span>
                    </div>
                  ))}
                {summary.attributes.every((item) => item.count === 0) ? (
                  <p className="text-sm text-[#9f94ba]">No cards selected.</p>
                ) : null}
              </div>
            </div>
          </section>

          <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5">
            <h2 className="font-display text-xl font-black">Run checks</h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-[#bdb3d2]">
              {checks.map((message) => (
                <li
                  key={message}
                  className="rounded-lg border border-[#3b2b62] bg-[#090916] px-3 py-2"
                >
                  {message}
                </li>
              ))}
            </ul>
          </section>

          {summary.selected.length > 0 ? (
            <section className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5">
              <h2 className="font-display text-xl font-black">Deck list</h2>
              <div className="mt-3 grid gap-2">
                {summary.selected.map(({ card, count }) => (
                  <div
                    key={card.id}
                    className="flex min-w-0 items-center gap-3 rounded-lg border border-[#3b2b62] bg-[#090916] p-2"
                  >
                    <div className="relative h-14 w-11 shrink-0 overflow-hidden rounded-md border border-white/10">
                      <Image
                        src={card.image}
                        alt=""
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {card.name}
                      </p>
                      <p className="text-[#9f94ba] text-xs">
                        {card.cost} cost · {card.type}
                      </p>
                    </div>
                    <span className="font-display text-lg font-black text-[#ff4fd8]">
                      ×{count}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

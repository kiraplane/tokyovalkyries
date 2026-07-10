import { DeckBuilderPage } from '@/components/tokyovalkyries/deck-builder-page';
import { cards } from '@/data/tokyovalkyries/cards';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Tokyo Valkyries Deck Builder - Interactive Run Planner',
    description:
      'Build a Tokyo Valkyries run deck, count energy costs, compare Attack and Support cards, and match card attributes to the current party.',
    locale,
    pathname: '/deck-builder',
    image: cards[7]?.image,
  });
}

export default async function TokyoValkyriesDeckBuilderRoute({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <DeckBuilderPage locale={locale} />;
}

import { CardsPage } from '@/components/tokyovalkyries/cards-page';
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
    title: 'Tokyo Valkyries Cards - Card Database and Effects',
    description:
      'Browse Tokyo Valkyries cards by energy, Attack or Support type, attribute and effect, then open the interactive run deck builder.',
    locale,
    pathname: '/cards',
    image: cards[6]?.image,
  });
}

export default async function TokyoValkyriesCardsRoute({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <CardsPage locale={locale} />;
}

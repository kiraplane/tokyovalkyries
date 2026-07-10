import { CharacterRosterPage } from '@/components/tokyovalkyries/characters-page';
import { getGuide } from '@/data/tokyovalkyries/guides';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const guide = getGuide('characters');

  return constructMetadata({
    title: guide?.seoTitle ?? 'Tokyo Valkyries Characters',
    description: guide?.seoDescription,
    locale,
    pathname: '/characters',
    image: guide?.coverImageUrl,
  });
}

export default async function CharactersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <CharacterRosterPage locale={locale} />;
}

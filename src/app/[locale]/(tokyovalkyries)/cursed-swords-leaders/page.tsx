import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { buildGuideMetadata, renderGuidePage } from '../guide-page';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildGuideMetadata(
    'cursed-swords-leaders',
    locale,
    '/cursed-swords-leaders'
  );
}

export default async function CursedSwordsLeadersPage({
  params,
}: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return renderGuidePage(
    'cursed-swords-leaders',
    '/cursed-swords-leaders',
    locale
  );
}

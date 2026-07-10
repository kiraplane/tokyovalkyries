import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { buildGuideMetadata, renderGuidePage } from '../guide-page';

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildGuideMetadata('review', locale, '/review');
}

export default async function ReviewPage({
  params,
}: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return renderGuidePage('review', '/review', locale);
}

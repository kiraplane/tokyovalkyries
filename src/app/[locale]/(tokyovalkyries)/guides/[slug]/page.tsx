import { guides } from '@/data/tokyovalkyries/guides';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { buildGuideMetadata, renderGuidePage } from '../../guide-page';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides
      .filter((guide) => guide.path.startsWith('/guides/'))
      .map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return buildGuideMetadata(slug, locale, `/guides/${slug}`);
}

export default async function GuideSlugPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  return renderGuidePage(slug, `/guides/${slug}`, locale);
}

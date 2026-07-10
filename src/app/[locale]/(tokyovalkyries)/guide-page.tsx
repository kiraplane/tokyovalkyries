import { GuideArticle } from '@/components/tokyovalkyries/guide-article';
import { getLocalizedGuide } from '@/data/tokyovalkyries/localized';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

export function renderGuidePage(
  slug: string,
  pathname: string,
  locale?: Locale
) {
  const guide = getLocalizedGuide(slug, locale);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} locale={locale} pathname={pathname} />;
}

export function buildGuideMetadata(
  slug: string,
  locale: Locale,
  pathname: string
): Metadata {
  const guide = getLocalizedGuide(slug, locale);

  if (!guide) {
    return {};
  }

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname,
    image: guide.coverImageUrl,
  });
}

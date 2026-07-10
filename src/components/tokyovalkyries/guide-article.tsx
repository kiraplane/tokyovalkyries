import {
  AdsterraAdFrame,
  AdsterraSideRails,
} from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { FaqSection } from '@/components/tokyovalkyries/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/tokyovalkyries/wiki-navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getGuideArticleUi,
  getHomeContent,
} from '@/data/tokyovalkyries/localized';
import { siteFacts } from '@/data/tokyovalkyries/sources';
import type { Guide } from '@/data/tokyovalkyries/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

function toSectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getRelatedRouteLabel(
  route: string,
  routeLabels: Record<string, string>
) {
  return (
    routeLabels[route] ??
    route
      .replace(/^\/+/, '')
      .split('/')
      .filter(Boolean)
      .map((segment) =>
        segment
          .split('-')
          .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
          .join(' ')
      )
      .join(' ')
  );
}

function GuideVideo({
  guide,
  label,
  suffix,
}: {
  guide: Guide;
  label: string;
  suffix: string;
}) {
  if (!guide.video) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-xl border border-[#3b2b62] bg-black">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${guide.video.id}?rel=0`}
        title={guide.video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="bg-[#090916] px-4 py-3 text-sm leading-6 text-[#bdb3d2]">
        {label}{' '}
        <a
          href={guide.video.url}
          target="_blank"
          rel="noreferrer"
          className="text-[#54e7ff] underline underline-offset-4"
        >
          {guide.video.title}
        </a>{' '}
        by {guide.video.channel}. {suffix}
      </div>
    </section>
  );
}

export function GuideArticle({
  guide,
  locale,
  pathname,
}: {
  guide: Guide;
  locale?: Locale;
  pathname: string;
}) {
  const ui = getGuideArticleUi(locale);
  const routeLabels = {
    ...getHomeContent(locale).routeLabels,
    '/disclaimer': 'Disclaimer',
  };
  const canonicalUrl = `${siteFacts.domain}${pathname}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.summary,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        image: guide.coverImageUrl.startsWith('http')
          ? guide.coverImageUrl
          : `${siteFacts.domain}${guide.coverImageUrl}`,
        mainEntityOfPage: canonicalUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: siteFacts.siteName,
          url: siteFacts.domain,
        },
        author: {
          '@type': 'Organization',
          name: siteFacts.siteName,
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
            name: 'Guides',
            item: `${siteFacts.domain}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };
  const sectionLinks = guide.body.map((section) => ({
    href: `#${toSectionId(section.heading)}`,
    label: section.heading,
  }));
  const nextRoutes = guide.relatedRoutes.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#070711] py-10 text-[#f8f6ff]">
      <JsonLd data={jsonLd} />
      <AdsterraSideRails />
      <Container className="px-4">
        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-8 lg:grid-cols-[minmax(0,1fr)_272px]">
          <article className="min-w-0 space-y-6">
            <header className="overflow-hidden rounded-xl border border-[#3b2b62] bg-[#111126]">
              <div className="relative aspect-[4/3] border-[#3b2b62] border-b sm:aspect-[16/7] sm:min-h-[210px]">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,17,0.05)_0%,rgba(7,7,17,0.92)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-[#ff4fd8] text-[#110715]">
                      {ui.categoryLabels[guide.category]}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-[#54e7ff]/60 bg-[#090916]/75 text-[#f8f6ff]"
                    >
                      {ui.difficultyLabels[guide.difficulty]}
                    </Badge>
                    {guide.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/20 bg-[#090916]/75 text-[#f8f6ff]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 md:p-7">
                <h1 className="max-w-4xl font-display text-4xl font-black leading-tight md:text-5xl">
                  {guide.title}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-[#bdb3d2] md:text-lg">
                  {guide.summary}
                </p>
                <div className="mt-5">
                  <MobileWikiNav
                    currentPath={pathname}
                    locale={locale}
                    sectionLinks={sectionLinks}
                  />
                </div>
              </div>
            </header>

            <div className="rounded-xl border border-[#3b2b62] bg-[#111126] p-5 md:p-8">
              <AdsterraAdFrame slot="banner-300x250" className="mb-8" label />

              <div className="space-y-9">
                {guide.body.map((section, sectionIndex) => (
                  <div key={section.heading} className="space-y-9">
                    <section id={toSectionId(section.heading)}>
                      <h2 className="font-display text-2xl font-bold text-[#f8f6ff] md:text-3xl">
                        {section.heading}
                      </h2>
                      <div className="mt-3 space-y-4 text-base leading-8 text-[#bdb3d2]">
                        {section.paragraphs.map((paragraph, index) => (
                          <p key={`${section.heading}-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets ? (
                        <ul className="mt-5 grid gap-2 text-sm leading-7 text-[#d8d1e8]">
                          {section.bullets.map((bullet, index) => (
                            <li
                              key={`${section.heading}-bullet-${index}`}
                              className="rounded-lg border border-[#3b2b62] bg-[#090916] px-4 py-3"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>

                    {sectionIndex === 0 && guide.video ? (
                      <GuideVideo
                        guide={guide}
                        label={ui.videoPrefix}
                        suffix={ui.videoSuffix}
                      />
                    ) : null}
                  </div>
                ))}
              </div>

              <section className="mt-10 rounded-xl border border-[#3b2b62] bg-[#090916] p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-1 size-5 shrink-0 text-[#62e6a7]" />
                  <div>
                    <h2 className="font-display text-xl font-bold">
                      {ui.officialTitle}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-[#bdb3d2]">
                      {ui.officialBody}
                    </p>
                    <a
                      href={siteFacts.officialSteamUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-[#54e7ff] text-sm underline underline-offset-4"
                    >
                      {ui.officialLinkLabel}
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>
              </section>

              <section className="mt-10 rounded-xl border border-[#3b2b62] bg-[#090916] p-5">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54e7ff]">
                      Next decisions
                    </p>
                    <h2 className="mt-1 font-display text-xl font-bold">
                      Continue through the wiki
                    </h2>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-[#ff4fd8]/50 text-[#f8f6ff]"
                  >
                    {nextRoutes.length} routes
                  </Badge>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {nextRoutes.map((route) => (
                    <Button
                      key={route}
                      asChild
                      variant="outline"
                      className="h-auto min-w-0 justify-between gap-3 whitespace-normal border-[#3b2b62] bg-[#111126] px-3 py-3 text-left text-[#f8f6ff] hover:border-[#54e7ff] hover:bg-[#1b1634]"
                    >
                      <LocaleLink href={route}>
                        <span className="min-w-0 break-words">
                          {getRelatedRouteLabel(route, routeLabels)}
                        </span>
                        <ArrowRight className="size-4 shrink-0 text-[#54e7ff]" />
                      </LocaleLink>
                    </Button>
                  ))}
                </div>
              </section>

              <section className="mt-10">
                <FaqSection items={guide.faq} title={ui.faqTitle} />
              </section>
            </div>
          </article>

          <WikiRouteSidebar
            currentPath={pathname}
            locale={locale}
            sectionLinks={sectionLinks}
          >
            <AdsterraAdFrame slot="sidebar-160x600" label />
          </WikiRouteSidebar>
        </div>
      </Container>
    </div>
  );
}

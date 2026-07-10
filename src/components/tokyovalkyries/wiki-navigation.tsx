import { Badge } from '@/components/ui/badge';
import { getHomeContent } from '@/data/tokyovalkyries/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Download,
  Gamepad2,
  Layers3,
  Map,
  Menu,
  Sparkles,
  Swords,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: Gamepad2,
    routes: ['/', '/guides', '/guides/beginner-guide', '/review'],
  },
  {
    title: 'Combat & Decks',
    icon: Swords,
    routes: ['/combat-attributes', '/deck-building', '/cursed-swords-leaders'],
  },
  {
    title: 'World & Cast',
    icon: UsersRound,
    routes: ['/characters', '/story', '/map-routes'],
  },
  {
    title: 'Platforms',
    icon: Compass,
    routes: [
      '/release-date',
      '/platforms',
      '/switch-vs-steam',
      '/system-requirements',
      '/download',
    ],
  },
  {
    title: 'Site',
    icon: Sparkles,
    routes: ['/disclaimer'],
  },
] as const;

export function getWikiNavGroups(locale?: Locale): WikiNavGroup[] {
  const routeLabels = getHomeContent(locale).routeLabels;

  return wikiNavRoutes.map((group) => ({
    title: group.title,
    icon: group.icon,
    links: group.routes.map((route) => ({
      href: route,
      label: routeLabels[route] ?? route,
    })),
  }));
}

function isCurrentPath(currentPath: string | undefined, href: string) {
  return currentPath === href;
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-lg border px-3 py-2 text-sm leading-6 transition',
        isActive
          ? 'border-[#ff4fd8] bg-[#ff4fd8] font-semibold text-[#110715]'
          : 'border-[#3b2b62] bg-[#090916] text-[#bdb3d2] hover:border-[#54e7ff] hover:bg-[#1b1634] hover:text-[#f8f6ff]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#110715]' : 'text-[#54e7ff]'
        )}
      />
    </LocaleLink>
  );
}

export function WikiRouteSidebar({
  children,
  currentPath,
  locale,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  const groups = getWikiNavGroups(locale);

  return (
    <aside className="sticky top-24 hidden w-[272px] shrink-0 self-start space-y-4 lg:block">
      <div className="rounded-xl border border-[#3b2b62] bg-[#111126] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#54e7ff]">
              Wiki Navigation
            </p>
            <h2 className="mt-1 font-display text-xl font-bold">
              Tokyo routes
            </h2>
          </div>
          <Compass className="size-5 text-[#ff4fd8]" />
        </div>

        <div className="mt-4 space-y-3">
          {groups.map((group) => {
            const isGroupActive = group.links.some((link) =>
              isCurrentPath(currentPath, link.href)
            );

            return (
              <details
                key={group.title}
                open={isGroupActive}
                className={cn(
                  'group rounded-lg border p-3',
                  isGroupActive
                    ? 'border-[#ff4fd8]/65 bg-[#ff4fd8]/10'
                    : 'border-[#3b2b62] bg-[#090916]'
                )}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#f8f6ff] [&::-webkit-details-marker]:hidden">
                  <span className="flex min-w-0 items-center gap-2">
                    <group.icon className="size-4 shrink-0 text-[#54e7ff]" />
                    <span className="min-w-0 break-words">{group.title}</span>
                  </span>
                  <span className="ml-auto rounded-full bg-white/8 px-1.5 py-0.5 text-[10px] font-medium text-[#bdb3d2]">
                    {group.links.length}
                  </span>
                  <ChevronDown className="size-4 shrink-0 text-[#ff4fd8] transition group-open:rotate-180" />
                </summary>
                <div className="mt-3 grid gap-2">
                  {group.links.map((link) => (
                    <WikiNavLinkItem
                      key={link.href}
                      currentPath={currentPath}
                      href={link.href}
                      label={link.label}
                    />
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </div>

      {sectionLinks.length > 0 ? (
        <details className="group rounded-xl border border-[#3b2b62] bg-[#111126] p-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
            <span className="flex items-center gap-2">
              <BookOpen className="size-4 text-[#54e7ff]" />
              <span className="font-display text-lg font-bold">
                On this page
              </span>
            </span>
            <ChevronDown className="size-4 shrink-0 text-[#ff4fd8] transition group-open:rotate-180" />
          </summary>
          <div className="mt-3 grid gap-2 border-[#3b2b62] border-t pt-3">
            {sectionLinks.slice(0, 7).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="rounded-lg border border-[#3b2b62] bg-[#090916] px-3 py-2 text-sm leading-6 text-[#bdb3d2] transition hover:border-[#54e7ff] hover:text-[#f8f6ff]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </details>
      ) : null}

      {children}
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  locale,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  const groups = getWikiNavGroups(locale);

  return (
    <details className="group rounded-xl border border-[#3b2b62] bg-[#090916] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-2 font-display text-lg font-bold">
          <Menu className="size-5 shrink-0 text-[#54e7ff]" />
          Wiki Menu
        </span>
        <Badge className="bg-[#ff4fd8] text-[#110715]">
          {groups.reduce((total, group) => total + group.links.length, 0)} links
        </Badge>
      </summary>

      {sectionLinks.length > 0 ? (
        <div className="mt-4 border-[#3b2b62] border-t pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#62e6a7]">
            On this page
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {sectionLinks.slice(0, 7).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-lg border border-[#3b2b62] bg-[#111126] px-3 py-2 text-sm text-[#bdb3d2]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 border-[#3b2b62] border-t pt-4">
        {groups.map((group) => {
          const isGroupActive = group.links.some((link) =>
            isCurrentPath(currentPath, link.href)
          );

          return (
            <details
              key={group.title}
              open={isGroupActive}
              className="group rounded-lg border border-[#3b2b62] bg-[#111126] p-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#f8f6ff] [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-center gap-2">
                  <group.icon className="size-4 shrink-0 text-[#54e7ff]" />
                  <span className="min-w-0 break-words">{group.title}</span>
                </span>
                <ChevronDown className="size-4 shrink-0 text-[#ff4fd8] transition group-open:rotate-180" />
              </summary>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {group.links.map((link) => (
                  <WikiNavLinkItem
                    key={link.href}
                    currentPath={currentPath}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </details>
  );
}

export function QuickWikiLinks({
  className,
  links,
  locale,
}: {
  className?: string;
  links?: ReadonlyArray<readonly [string, string]>;
  locale?: Locale;
}) {
  const routeLabels = getHomeContent(locale).routeLabels;
  const defaultRoutes = [
    { href: '/guides/beginner-guide', label: 'Beginner', icon: BookOpen },
    { href: '/combat-attributes', label: 'Attributes', icon: Swords },
    { href: '/deck-building', label: 'Decks', icon: Layers3 },
    { href: '/map-routes', label: 'Routes', icon: Map },
    { href: '/characters', label: 'Characters', icon: UsersRound },
    { href: '/switch-vs-steam', label: 'Versions', icon: Gamepad2 },
    { href: '/download', label: 'Download', icon: Download },
  ];
  const quickRoutes = links
    ? links.map(([label, href]) => ({ href, label, icon: BookOpen }))
    : defaultRoutes;

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {quickRoutes.map((route) =>
        route.href.startsWith('http') ? (
          <a
            key={route.href}
            href={route.href}
            target="_blank"
            rel="noreferrer"
            aria-label={route.label}
            className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#3b2b62] bg-[#090916]/85 px-2.5 py-1.5 text-[#f8f6ff] text-xs transition hover:border-[#54e7ff] hover:bg-[#1b1634] sm:text-sm"
          >
            <route.icon className="size-3.5 shrink-0 text-[#54e7ff]" />
            {route.label}
          </a>
        ) : (
          <LocaleLink
            key={route.href}
            href={route.href}
            aria-label={routeLabels[route.href] ?? route.label}
            className="inline-flex h-auto items-center gap-1.5 rounded-lg border border-[#3b2b62] bg-[#090916]/85 px-2.5 py-1.5 text-[#f8f6ff] text-xs transition hover:border-[#54e7ff] hover:bg-[#1b1634] sm:text-sm"
          >
            <route.icon className="size-3.5 shrink-0 text-[#54e7ff]" />
            {route.label}
          </LocaleLink>
        )
      )}
    </div>
  );
}

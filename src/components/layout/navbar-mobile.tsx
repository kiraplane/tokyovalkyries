'use client';

import LocaleSelector from '@/components/layout/locale-selector';
import { Logo } from '@/components/layout/logo';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useNavbarLinks } from '@/config/navbar-config';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Routes } from '@/routes';
import { Portal } from '@radix-ui/react-portal';
import {
  ArrowUpRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { RemoveScroll } from 'react-remove-scroll';

export function NavbarMobile({
  className,
  ...other
}: React.HTMLAttributes<HTMLDivElement>) {
  const t = useTranslations();
  const [open, setOpen] = React.useState<boolean>(false);
  const localePathname = useLocalePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      if (document.activeElement instanceof HTMLInputElement) {
        document.activeElement.blur();
      }

      setOpen(false);
    };

    handleRouteChangeStart();
  }, [localePathname]);

  const handleChange = () => {
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    setOpen((open) => (open ? !mediaQueryList.matches : false));
  };

  useEffect(() => {
    handleChange();
    const mediaQueryList = window.matchMedia('(min-width: 1024px)');
    mediaQueryList.addEventListener('change', handleChange);
    return () => mediaQueryList.removeEventListener('change', handleChange);
  }, []);

  const handleToggleMobileMenu = (): void => {
    setOpen((open) => !open);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div
        className={cn('flex items-center justify-between', className)}
        {...other}
      >
        {/* navbar left shows logo */}
        <LocaleLink
          href={Routes.Root}
          className="flex min-w-0 items-center gap-2"
        >
          <Logo />
          <span className="truncate text-lg font-semibold sm:text-xl">
            {t('Metadata.name')}
          </span>
        </LocaleLink>

        <div className="ml-2 flex shrink-0 items-center justify-end">
          <Button
            variant="ghost"
            size="icon"
            aria-expanded={open}
            aria-label="Toggle Mobile Menu"
            onClick={handleToggleMobileMenu}
            className="size-8 flex aspect-square h-fit cursor-pointer select-none items-center
              justify-center rounded-md border border-[#3b2b62] text-[#f8f6ff] hover:border-[#54e7ff] hover:bg-[#111126]"
          >
            {open ? (
              <XIcon className="size-4" />
            ) : (
              <MenuIcon className="size-4" />
            )}
          </Button>
        </div>
      </div>

      {/* mobile menu */}
      {open && (
        <Portal asChild>
          {/* if we don't add RemoveScroll component, the underlying
            page will scroll when we scroll the mobile menu */}
          <RemoveScroll allowPinchZoom enabled>
            <MainMobileMenu onLinkClicked={handleToggleMobileMenu} />
          </RemoveScroll>
        </Portal>
      )}
    </>
  );
}

interface MainMobileMenuProps {
  onLinkClicked: () => void;
}

function MainMobileMenu({ onLinkClicked }: MainMobileMenuProps) {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});
  const t = useTranslations();
  const menuLinks = useNavbarLinks();
  const localePathname = useLocalePathname();

  return (
    <div
      className="fixed w-full inset-0 z-50 mt-[64px] overflow-y-auto
      border-[#3b2b62] border-t bg-[#070711] text-[#f8f6ff] backdrop-blur-md animate-in fade-in-0"
    >
      <div className="size-full flex flex-col items-start space-y-4 pt-4">
        {/* main menu */}
        <ul className="w-full px-4">
          {menuLinks?.map((item) => {
            const isActive = item.href
              ? item.href === '/'
                ? localePathname === '/'
                : localePathname.startsWith(item.href)
              : item.items?.some(
                  (subItem) =>
                    subItem.href &&
                    (subItem.href === '/'
                      ? localePathname === '/'
                      : localePathname.startsWith(subItem.href))
                );

            return (
              <li key={item.title} className="py-1">
                {item.items ? (
                  <Collapsible
                    open={expanded[item.title.toLowerCase()] ?? isActive}
                    onOpenChange={(isOpen) =>
                      setExpanded((prev) => ({
                        ...prev,
                        [item.title.toLowerCase()]: isOpen,
                      }))
                    }
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        className={cn(
                          'flex w-full !pl-2 items-center justify-between text-left',
                          'bg-transparent text-[#9f94ba] cursor-pointer',
                          'hover:bg-transparent hover:text-[#ff4fd8]',
                          'focus:bg-transparent focus:text-[#ff4fd8]',
                          isActive &&
                            'font-semibold bg-transparent text-[#ff4fd8]'
                        )}
                      >
                        <span className="text-base">{item.title}</span>
                        {expanded[item.title.toLowerCase()] ? (
                          <ChevronDownIcon className="size-4" />
                        ) : (
                          <ChevronRightIcon className="size-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="pl-2">
                      <ul className="mt-2 space-y-2 pl-0">
                        {item.items.map((subItem) => {
                          const isSubItemActive =
                            subItem.href &&
                            localePathname.startsWith(subItem.href);

                          return (
                            <li key={subItem.title}>
                              <LocaleLink
                                href={subItem.href || '#'}
                                target={subItem.external ? '_blank' : undefined}
                                rel={
                                  subItem.external
                                    ? 'noopener noreferrer'
                                    : undefined
                                }
                                className={cn(
                                  buttonVariants({ variant: 'ghost' }),
                                  'group h-auto w-full justify-start gap-4 p-1 !pl-0 !pr-3',
                                  'bg-transparent text-[#9f94ba] cursor-pointer',
                                  'hover:bg-transparent hover:text-[#ff4fd8]',
                                  'focus:bg-transparent focus:text-[#ff4fd8]',
                                  isSubItemActive &&
                                    'font-semibold bg-transparent text-[#ff4fd8]'
                                )}
                                onClick={onLinkClicked}
                              >
                                <div
                                  className={cn(
                                    'flex size-8 shrink-0 items-center justify-center transition-colors ml-0',
                                    'bg-transparent text-[#9f94ba]',
                                    'group-hover:bg-transparent group-hover:text-[#ff4fd8]',
                                    'group-focus:bg-transparent group-focus:text-[#ff4fd8]',
                                    isSubItemActive &&
                                      'bg-transparent text-[#ff4fd8]'
                                  )}
                                >
                                  {subItem.icon ? subItem.icon : null}
                                </div>
                                <div className="flex-1">
                                  <span
                                    className={cn(
                                      'text-sm text-[#9f94ba]',
                                      'group-hover:bg-transparent group-hover:text-[#ff4fd8]',
                                      'group-focus:bg-transparent group-focus:text-[#ff4fd8]',
                                      isSubItemActive &&
                                        'font-semibold bg-transparent text-[#ff4fd8]'
                                    )}
                                  >
                                    {subItem.title}
                                  </span>
                                  {/* hide description for now */}
                                  {/* {subItem.description && (
                                      <p
                                        className={cn(
                                          'text-xs text-muted-foreground',
                                          'group-hover:bg-transparent group-hover:text-foreground/80',
                                          'group-focus:bg-transparent group-focus:text-foreground/80',
                                          isSubItemActive &&
                                          'bg-transparent text-foreground/80'
                                        )}
                                      >
                                        {subItem.description}
                                      </p>
                                    )} */}
                                </div>
                                {subItem.external && (
                                  <ArrowUpRightIcon
                                    className={cn(
                                      'size-4 shrink-0 text-[#9f94ba] items-center',
                                      'group-hover:bg-transparent group-hover:text-[#ff4fd8]',
                                      'group-focus:bg-transparent group-focus:text-[#ff4fd8]',
                                      isSubItemActive &&
                                        'bg-transparent text-[#ff4fd8]'
                                    )}
                                  />
                                )}
                              </LocaleLink>
                            </li>
                          );
                        })}
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <LocaleLink
                    href={item.href || '#'}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'w-full !pl-2 justify-start cursor-pointer group',
                      'bg-transparent text-[#9f94ba]',
                      'hover:bg-transparent hover:text-[#ff4fd8]',
                      'focus:bg-transparent focus:text-[#ff4fd8]',
                      isActive && 'font-semibold bg-transparent text-[#ff4fd8]'
                    )}
                    onClick={onLinkClicked}
                  >
                    <div className="flex items-center w-full pl-0">
                      <span className="text-base">{item.title}</span>
                    </div>
                  </LocaleLink>
                )}
              </li>
            );
          })}
        </ul>

        {/* bottom buttons */}
        <div className="flex w-full items-center justify-center gap-4 border-[#3b2b62]/70 border-t p-4">
          <LocaleSelector />
        </div>
      </div>
    </div>
  );
}

'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import image from '@/public/images/schaechinger.jpg';
import { LEGAL_NAVIGATION, MAIN_NAVIGATION } from '@app/config';
import Link from '@components/atoms/Link';
import MenuButton from '@components/atoms/MenuButton';
import NavigationItem from '@components/atoms/NavigationItem';
import ThemeToggle from '@components/atoms/ThemeToggle';
import { splitPath } from '@lib/router';

type Props = {
  themeTranslations: Record<string, string>;
  translations: Record<string, string>;
};

const WideNavigation = ({ themeTranslations, translations }: Props) => {
  const pathname = usePathname();
  const { page } = splitPath(pathname);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <ThemeToggle translations={themeTranslations} />
      <MenuButton
        open={open}
        onClick={() => setOpen((cur) => !cur)}
        translations={translations}
        className="ml-2 -mr-2"
      />
      <div className={clsx(open ? 'left-0' : '-left-[100vw]', 'fixed top-[4.625rem] sm:top-[5.125rem] w-full min-h-screen px-4 sm:px-10 md:px-20 lg:px-0 xl:px-4 pt-6 transition-all duration-300 bg-dark-50 dark:bg-dark-800')}>
        <div className="max-w-screen-lg mx-auto flex flex-col">
          <div className="sm:hidden flex flex-col gap-4 items-center">
            <Link href="/">
              <Image
                src={image}
                alt="Manuel Schächinger"
                className="w-24 rounded-full border-2 border-dark-950/25 dark:border-dark-200/80"
                sizes="96px"
                loading="lazy"
              />
            </Link>
          </div>

          <nav className="-mx-1 px-1 w-full flex-grow">
            <ul className="flex flex-col gap-6 pt-6 lg:pt-0">
              {MAIN_NAVIGATION.map(({ icon, page: identifier }) => (
                <li key={identifier} className="ml-4 sm:ml-5 md:-ml-[2.5rem] lg:ml-9 xl:-ml-6">
                  <NavigationItem
                    href={`/${identifier}`}
                    active={page.startsWith(`/${identifier}`)}
                    label={translations[identifier]}
                    icon={icon}
                  />
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-row gap-4 content-start pl-4 sm:pl-[3.75rem] md:pl-0 lg:pl-[4.75rem] xl:pl-4 pt-6">
            {LEGAL_NAVIGATION.map((page) => (
              <li key={page}>
                <Link href={`/${page}`} className="font-normal">{translations[page]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WideNavigation;

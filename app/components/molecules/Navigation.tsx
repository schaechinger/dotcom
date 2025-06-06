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
      <div className={clsx(open ? 'top-[3.75rem] sm:top-[4.5rem]' : '-top-[30rem]', 'right-0 absolute -z-10 w-full sm:w-80 transition-all duration-300')}>
        <div className="blurred-container rounded-xl overflow-hidden max-w-screen-lg mx-auto flex flex-col h-full">
          <div className="sm:hidden flex flex-col gap-4 items-center my-6">
            <Link href="/">
              <Image
                src={image}
                alt="Manuel Schächinger"
                className="w-24 rounded-full border-2 border-contrast-200/50 dark:border-contrast-700/80"
                sizes="96px"
                loading="lazy"
              />
            </Link>
          </div>

          <nav className="">
            <ul className="flex flex-col lg:pt-0">
              {MAIN_NAVIGATION.map(({ icon, page: identifier }) => (
                <li key={identifier}>
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
          <ul className="hidden flex-row gap-4 content-start pt-6">
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

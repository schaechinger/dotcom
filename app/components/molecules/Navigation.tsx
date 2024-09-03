'use client';

import { usePathname } from 'next/navigation';

import NavigationItem from '@components/atoms/NavigationItem';
import LanguageToggle from '@/app/components/atoms/LanguageToggle';
import ThemeToggle from '@components/molecules/ThemeToggle';
import { splitPath } from '@lib/router';

type Props = {
  themeTranslations: Record<string, string>;
  translations: Record<string, string>;
};

const Navigation = ({ translations, themeTranslations }: Props) => {
  const pathname = usePathname();
  const { page } = splitPath(pathname);

  return (
    <>
      <div className="flex gap-6 lg:order-2">
        <ThemeToggle translations={themeTranslations} />
        <LanguageToggle className="hidden lg:flex" />
      </div>
      <nav className="hidden lg:block -mx-1 px-1 w-full lg:h-auto transition-transform lg:overflow-visible">
        <ul className="flex flex-col gap-2 pt-8 lg:pt-0">
          {[
            'about',
            'resume',
            'projects',
            'contact',
          ].map((identifier) => (
            <li key={identifier}>
              <NavigationItem
                href={`/${identifier}`}
                active={page.startsWith(`/${identifier}`)}
                label={translations[identifier]}
              />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

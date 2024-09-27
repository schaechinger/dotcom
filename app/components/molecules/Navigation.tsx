'use client';

import { usePathname } from 'next/navigation';

import { MAIN_NAVIGATION } from '@app/config';
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
      <div className="flex gap-6">
        <ThemeToggle translations={themeTranslations} />
        <LanguageToggle className="hidden" />
      </div>
      <nav className="hidden -mx-1 px-1 w-full transition-transform">
        <ul className="flex flex-col gap-2 pt-8 lg:pt-0">
          {MAIN_NAVIGATION.map(({ page: identifier }) => (
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

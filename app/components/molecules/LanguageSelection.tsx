'use client';

import { usePathname } from 'next/navigation';

import translations from '@/messages/language';
import { supportedLangs } from '@app/config';
import Link from '@components/atoms/Link';
import { splitPath } from '@lib/router';

const LanguageSelection = () => {
  const pathname = usePathname();
  const { page } = splitPath(pathname);

  return (
    <ul className="flex flex-col gap-2 sm:gap-0 justify-center">
      {supportedLangs.map((lang) => (
        <li key={lang} className="py-1.5">
          <Link href={page} locale={lang} prefetch={false} className="font-normal">{translations.name[lang]}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelection;

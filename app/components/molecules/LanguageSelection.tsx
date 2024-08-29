'use client';


import translations from '@/messages/language';
import { Link, usePathname } from '@/routing';
import { supportedLangs } from '@app/config';

const LanguageSelection = () => {
  const page = usePathname();

  return (
    <ul className="flex flex-col gap-2 sm:gap-0 justify-center">
      {supportedLangs.map((lang) => (
        <li key={lang} className="py-1.5">
          <Link
            href={page}
            lang={lang}
            locale={lang}
            dir="ltr"
            className="font-normal"
          >
            {translations.name[lang]}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelection;

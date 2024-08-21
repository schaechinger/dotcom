import Image from 'next/image';
import Link from 'next/link';

import type { LangComponentProps } from '@app/interfaces';
import Logo from '@components/layout/Logo';
import Navigation from '@components/layout/Navigation';
import { _l, _t, loadTranslations } from '@lib/i18n';

const Header = async ({ lang }: LangComponentProps) => {
  const translations = await loadTranslations('components.header', lang);

  return (
    <header className="sticky top-0 flex flex-wrap lg:flex-nowrap lg:flex-col gap-4 lg:gap-10 justify-between lg:justify-start bg-dark-50/80 dark:bg-dark-800/80 backdrop-blur-sm z-30 lg:h-screen lg:flex-none lg:w-80 px-4 sm:px-10 md:px-20 lg:px-4 border-b-2 border-b-dark-300 dark:border-b-dark-700 lg:border-b-0">
      <div className="flex flex-shrink-0 items-center pt-4 lg:pt-10">
        <Link href={_l('/', lang)}>
          <Image
            src="/images/schaechinger.jpg"
            alt="Manuel Schächinger"
            width={200}
            height={200}
            className="w-11 rounded-full border-2 border-slate-300 mt-0 mb-0 mx-auto ml-0 mr-4"
            priority
          />
        </Link>

        <div>
          <Logo lang={lang} />
        </div>
      </div>

      <p className="hidden lg:block text-sm">{_t('text.0', translations, lang)}<br
        className="hidden lg:inline" /> {_t('text.1', translations, lang)}</p>

      <Navigation lang={lang} translations={(translations.navigation || {}) as Record<string, unknown>} />
    </header>
  );
};

export default Header;

import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useMessages, useTranslations } from 'next-intl';

import image from '@/public/images/schaechinger.jpg';
import Logo from '@components/layout/Logo';
import Navigation from '@components/layout/Navigation';
import { _l, type LanguageCode } from '@lib/i18n';

const Header = () => {
  const t = useTranslations('layout.header');
  const { layout: { header: { navigation, themeToggle } } } = useMessages() as any;
  const locale = useLocale() as LanguageCode;

  return (
    <header className="sticky top-0 flex flex-wrap lg:flex-nowrap lg:flex-col lg:gap-10 justify-between lg:justify-start bg-dark-50/80 dark:bg-dark-800/80 backdrop-blur-sm z-30 lg:h-screen lg:flex-none lg:w-80 px-4 py-4 sm:px-10 md:px-20 lg:px-4 lg:py-0 border-b-2 border-b-dark-300 dark:border-b-dark-700 lg:border-b-0">
      <div className="flex flex-shrink-0 items-center lg:pt-10">
        <Link href={_l('/', locale)}>
          <Image
            src={image}
            alt="Manuel Schächinger"
            className="w-11 rounded-full border-2 border-slate-300 mt-0 mb-0 mx-auto ml-0 mr-4"
            priority
          />
        </Link>

        <div>
          <Logo />
        </div>
      </div>

      <p className="hidden lg:block text-sm">{t('text.0')}<br
        className="hidden lg:inline" /> {t('text.1')}</p>

      <Navigation translations={navigation} themeTranslations={themeToggle} />
    </header>
  );
};

export default Header;

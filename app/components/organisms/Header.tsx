import Image from 'next/image';
import { useTranslations } from 'next-intl';

import image from '@/public/images/schaechinger.jpg';
import { Link } from '@lib/router';
import Logo from '@components/atoms/Logo';
import Navigation from '@components/molecules/Navigation';

const Header = () => {
  const t = useTranslations('layout.header');

  return (
    <header className="sticky top-0 flex flex-wrap lg:flex-nowrap lg:flex-col lg:gap-10 justify-between lg:justify-start bg-dark-50/80 dark:bg-dark-800/80 backdrop-blur-sm z-30 lg:h-screen lg:flex-none lg:w-80 px-4 pt-4 pb-2 sm:px-10 md:px-20 lg:px-4 lg:py-0 border-b-2 border-b-dark-300 dark:border-b-dark-700 lg:border-b-0">
      <div className="flex flex-shrink-0 items-center lg:pt-10">
        <Link href="/">
          <Image
            src={image}
            alt="Manuel Schächinger"
            className="w-9 sm:w-11 rounded-full border-2 border-slate-300 mt-0 mb-0 mx-auto ml-0 mr-4"
            priority
          />
        </Link>

        <div>
          <Logo />
        </div>
      </div>

      <p className="hidden lg:block text-sm">
        {t('text.0')}<br
          className="hidden lg:inline" />
        {t('text.1')}
      </p>

      <Navigation translations={t.raw('navigation')} themeTranslations={t.raw('themeToggle')} />
    </header>
  );
};

export default Header;

import clsx from 'clsx';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import image from '@/public/images/schaechinger.jpg';
import Link from '@components/atoms/Link';
import Logo from '@components/atoms/Logo';
import Navigation from '@components/molecules/Navigation';

type Props = {
  className?: string;
};

const Header = ({ className }: Props) => {
  const t = useTranslations('layout.header');

  return (
    <header className="sticky top-0 bg-dark-50/80 dark:bg-dark-800/80 backdrop-blur-sm z-30 border-b-2 border-b-dark-300 dark:border-b-dark-700">
      <div className={clsx('w-full mx-auto flex flex-wrap justify-between px-4 pt-4 pb-2 sm:px-10 md:px-20 lg:px-4', className)}>
        <div className="flex flex-shrink-0 flex-grow items-center sm:z-50">
          <Link href="/" className="hidden sm:block md:-ml-[3.75rem] lg:ml-0 xl:-ml-[3.75rem]">
            <Image
              src={image}
              alt="Manuel Schächinger"
              className="w-9 sm:w-11 rounded-full border-2 border-dark-950/25 dark:border-dark-200/80 mt-0 mb-0 mx-auto ml-0 mr-4"
              loading="eager"
              priority
            />
          </Link>

          <div>
            <Logo />
          </div>
        </div>

        <p className="hidden text-sm">
          {t('text.0')}<br
            className="hidden lg:inline" />
          {t('text.1')}
        </p>

        <Navigation translations={t.raw('navigation')} themeTranslations={t.raw('themeToggle')} />
      </div>
    </header>
  );
};

export default Header;

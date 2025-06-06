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
    <header className="sticky top-0 pt-2 md:pt-4 z-30 mx-1 sm:mx-4 md:mx-10 lg:mx-1">
      <div className={clsx('blurred-container w-full mx-auto flex flex-wrap justify-between px-4 sm:px-6 md:px-10 lg:px-4 py-2', className)}>
        <div className="flex flex-shrink-0 flex-grow items-center">
          <Link href="/" className="hidden sm:block">
            <Image
              src={image}
              alt="Manuel Schächinger"
              className="w-9 sm:w-11 rounded-full border-2 border-contrast-200/50 dark:border-contrast-700/50 mt-0 mb-0 mr-4"
              loading="eager"
              priority
            />
          </Link>

          <div>
            <Logo />
          </div>
        </div>

        <Navigation translations={t.raw('navigation')} themeTranslations={t.raw('themeToggle')} />
      </div>
    </header>
  );
};

export default Header;

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@components/layout/Logo';
import Navigation from '@components/layout/Navigation';

const Header = () => (
  <header className="sticky top-0 flex flex-wrap lg:flex-nowrap lg:flex-col justify-between lg:justify-start bg-dark-50/80 dark:bg-dark-800/80 backdrop-blur-sm z-30 lg:h-screen lg:flex-none lg:w-80 px-4 sm:px-10 md:px-20 lg:px-4 border-b-2 border-b-dark-300 dark:border-b-dark-700 lg:border-b-0">
    <div className="flex flex-shrink-0 items-center py-4 lg:py-10">
      <Link href="/">
        <Image
          src="/schaechinger.jpg"
          alt="Manuel Schächinger"
          width={200}
          height={200}
          className="w-11 rounded-full border-2 border-slate-300 mt-0 mb-0 mx-auto ml-0 mr-4"
          priority
        />
      </Link>

      <div>
        <Logo />
      </div>
    </div>

    <p className="hidden lg:block text-sm mb-4 lg:mb-10">Erfahrener Entwickler für skalierbare und<br
      className="hidden lg:inline" /> performance-kritische Softwaresysteme.</p>

    <Navigation />
  </header>
);

export default Header;

import Image from 'next/image';
import Link from 'next/link';

import Logo from '@components/layout/Logo';
import Navigation from '@components/layout/Navigation';
import SocialLinks from '@components/layout/SocialLinks';

const Header = () => (
  <header className="lg:sticky lg:top-0 lg:h-screen lg:flex-none lg:w-80 px-4 sm:px-10 md:px-20 lg:px-4">
    <div className="sm:flex items-center py-4 lg:py-10">
      <Link href="/">
        <Image
          src="https://images.schaechinger.com/2/schaechinger.jpg"
          alt="Manuel Schächinger"
          width={200}
          height={200}
          className="w-1/3 sm:w-11 rounded-full border-2 border-slate-300 mb-6 mt-2 sm:mt-0 sm:mb-0 mx-auto sm:ml-0 sm:mr-4"
          priority
        />
      </Link>
      <Logo />
    </div>
    <p className="hidden sm:block text-sm mb-4 lg:mb-10">Entwickler für skalierbare und<br
      className="hidden lg:inline" /> performance-kritische Softwaresysteme.</p>

    <Navigation />

    <div className="hidden lg:block mt-4 lg:mt-10">
      <SocialLinks />
    </div>
  </header>
);

export default Header;

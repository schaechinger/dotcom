import Image from 'next/image';
import Link from 'next/link';

import Logo from '@components/Logo';
import SocialLinks from '@components/SocialLinks';
import ThemeToggle from '@components/ThemeToggle';

const Sidebar = () => (
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
      className="hidden lg:inline-block" /> performance-kritische Softwaresysteme.</p>
    <nav className="hidden lg:flex lg:flex-col lg:gap-2 py-2">
      { [
          { link: '/#ueber-mich', label: 'Über mich' },
          { link: '/lebenslauf', label: 'Berufserfahrung' },
          { link: '/projekte', label: 'Projekte' },
          { link: '/kontakt', label: 'Kontakt' },
        ].map((item) => (
          <Link href={item.link} key={item.link} className="font-normal">{ item.label }</Link>
        )) }
        <ThemeToggle />
    </nav>

    <div className="hidden lg:block mt-4 lg:mt-10">
      <SocialLinks />
    </div>
  </header>
);

export default Sidebar;

import Link from 'next/link';

import SocialLinks from '@components/SocialLinks';
import HeartEmpty from '@components/icons/HeartEmpty';
import SnesButtons from '@components/mario/SnesButtons';
import ThemeToggle from './ThemeToggle';

const Footer = () => (
  <footer className="footer mb-6 mt-10 sm:text-left text-sm">
    
    <SnesButtons />

    <div className="mt-6 lg:hidden">
      <SocialLinks />
    </div>

    <div className="mt-6 lg:hidden">
      <ThemeToggle />
    </div>

    <ul className="flex justify-start gap-4 mt-6 mb-2">
      <li>
        <Link href="/impressum" className="font-normal">
          Impressum
        </Link>
      </li>
      <li>
        <Link href="/datenschutz" className="font-normal">
          Datenschutz
        </Link>
      </li>
    </ul>
    <p className="footer__copyright mb-2">
      &copy; { new Date().getFullYear() } Manuel Schächinger. Alle Rechte vorbehalten.
    </p>
    <p className="footer__love">Mit viel <HeartEmpty
      className="text-lg -mt-1 mx-1 text-snes-a"
    /> in München entwickelt.</p>
  </footer>
);

export default Footer;

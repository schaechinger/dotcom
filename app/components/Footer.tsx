import Link from 'next/link';

import HeartEmpty from '@/app/components/icons/HeartEmpty';
import Scissors from '@/app/components/icons/Scissors';

const Footer = () => (
  <footer className="footer relative pb-6 pt-6 mt-6 sm:text-left text-sm border-t border-t-slate-600 border-dashed">
    <Scissors className="absolute text-xl -top-2.5 left-2 rotate-90 text-slate-400" />
    <ul className="sm:flex sm:justify-start sm:gap-4 mb-2">
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
      className="text-lg -mt-1 mx-1 transition-all" style={{ color: '#fb3958' }} /> in München entwickelt.</p>
  </footer>
);

export default Footer;

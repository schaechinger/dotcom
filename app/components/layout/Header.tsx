import Image from 'next/image';
import Link from 'next/link';

import Logo from '@components/layout/Logo';
import Navigation from '@components/layout/Navigation';

const Header = () => (
  <header className="header">
    <div className="header__title">
      <Link href="/">
        <Image
          src="/schaechinger.jpg"
          alt="Manuel Schächinger"
          width={200}
          height={200}
          className="header__image"
          priority
        />
      </Link>

      <div>
        <Logo />
      </div>
    </div>

    <p className="header__slogan">
      Senior Engineer für skalierbare und performante Softwaresysteme.
    </p>

    <Navigation />
  </header>
);

export default Header;

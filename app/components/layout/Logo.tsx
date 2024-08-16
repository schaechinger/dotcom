import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="logo">
    <h1>
      <span className="logo__first-name">Manuel</span>
      <span className="logo__last-name">Schächinger</span>
    </h1>
    <p className="logo__profession">Fullstack JavaScript Engineer</p>
  </Link>
);

export default Logo;

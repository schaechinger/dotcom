import Link from 'next/link';

const Logo = () => (
  <Link href="/" className="text-2xl">
    <h1>
      <span className="text-primary-500 font-light">Manuel</span>
      <span className="text-dark-950 dark:text-dark-50 font-normal">Schächinger</span>
    </h1>
    <p className="text-sm text-dark-950 dark:text-dark-50 font-normal">Fullstack JavaScript Engineer</p>
  </Link>
);

export default Logo;

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ThemeToggle from '@components/layout/ThemeToggle';

const Navigation = () => {
  const path = usePathname();

  return (
    <nav className="flex overflow-x-visible lg:flex-col gap-4 lg:gap-2 py-2 border-b-2 border-b-primary-100 lg:border-b-0">
      <Link
        href="/#ueber-mich"
        className={`hidden lg:block font-normal${'/' === path ? ' text-primary-500 dark:text-primary-500' : ''}`}
      >Über mich</Link>
      { [
        { link: '/lebenslauf', label: 'Erfahrung' },
        { link: '/projekte', label: 'Projekte' },
        { link: '/kontakt', label: 'Kontakt' },
      ].map((item) => (
        <Link
          href={item.link}
          key={item.link}
          className={`font-normal${path.startsWith(item.link) ? ' text-primary-500 dark:text-primary-500' : ''}`}
        >{ item.label }</Link>
      )) }
      <div className="hidden lg:block">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navigation;

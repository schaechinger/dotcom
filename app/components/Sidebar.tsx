import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => (
  <aside className="lg:sticky lg:top-0 lg:h-screen lg:flex-none lg:w-80 px-4 sm:px-10 md:px-20 lg:px-4">
    <div className="sm:flex items-center py-4 lg:py-10">
      <Image
        src="https://images.schaechinger.com/2/schaechinger.jpg"
        alt="Manuel Schächinger"
        width={200}
        height={200}
        className="w-1/3 sm:w-11 rounded-full border-2 border-slate-300 mb-6 mt-2 sm:mt-1 sm:mb-0 mx-auto sm:ml-0 sm:mr-4"
      />
      <div className="text-center sm:text-left">
        <h1>
          <Link href="/" className="text-2xl">
            <span className="text-primary-500 font-light">Manuel</span>
            <span className="text-dark-950 dark:text-dark-50 font-normal">Schächinger</span>
            <p className="text-sm text-dark-950 dark:text-dark-50 font-normal">Fullstack JavaScript Engineer</p>
          </Link>
        </h1>
      </div>
    </div>
    <p className="hidden sm:block text-sm mb-4 lg:mb-10">Entwickler für skalierbare und<br
      className="hidden lg:inline-block" /> performance-kritische Anwendungen.</p>
    <nav className="hidden lg:block">
      <ul className="flex flex-col gap-2 py-2">
        { [
            { link: '/#ueber-mich', label: 'Über mich' },
            { link: '/lebenslauf', label: 'Lebenslauf' },
            { link: '/projekte', label: 'Projekte' },
            { link: '/kontakt', label: 'Kontakt' },
          ].map((item) => (
            <li key={item.link}>
              <Link href={item.link} className="font-normal">{ item.label }</Link>
            </li>
          )) }
      </ul>
    </nav>
  </aside>
);

export default Sidebar;

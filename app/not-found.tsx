import Link from 'next/link';
import ChevronRight from './components/icons/ChevronRight';
import LinkButton from './components/LinkButton';

const NotFound = () => (
  <div className="not-found-page pt-4 lg:pt-10 lg:mr-80">
    <section>
      <header>
        <h2>404 &ndash; Seite nicht gefunden</h2>
      </header>

      <p className="mb-2">Hier geht es nicht weiter, bitte gehen Sie zur Startseite oder wählen Sie einen passenden Punkt aus dem Menü aus.</p>

      <p>
        <LinkButton href="/" label="Zur Startseite" />
      </p>
    </section>
  </div>
);

export default NotFound;

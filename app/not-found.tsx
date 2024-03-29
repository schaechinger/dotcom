import type { Metadata } from 'next';

import KonamiCode from '@components/KonamiCode';
import LinkButton from '@components/LinkButton';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
};

const NotFound = () => (
  <div className="not-found-page pt-4 lg:pt-10 lg:max-w-screen-sm">
    <section>
      <h2>Seite nicht gefunden</h2>

      <p className="mb-4">
        Hier geht es nicht weiter, bitte geh zur Startseite oder wähle einen
        passenden Punkt aus dem Menü aus.
      </p>

      <p>
        <LinkButton href="/" label="Zur Startseite" />
      </p>

      <KonamiCode />
    </section>
  </div>
);

export default NotFound;

'use client';

import KonamiCode from '@components/KonamiCode';
import LinkButton from '@components/LinkButton';

const NotFound = () => (
  <div className="not-found-page pt-4 lg:pt-10 lg:max-w-screen-sm">
    <section>
      <h1>Inhalt nicht verfügbar</h1>

      <p className="mb-4">
        Aktuell gibt es ein Problem mit der Anzeige des Inhalts. Versuche es bitte später
        noch einmal.
      </p>

      <p>
        <LinkButton href="/" label="Zur Startseite" />
      </p>

      <KonamiCode />
    </section>
  </div>
);

export default NotFound;

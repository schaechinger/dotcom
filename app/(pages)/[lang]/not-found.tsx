import type { Metadata } from 'next';

import KonamiCode from '@components/KonamiCode';
import LinkButton from '@components/LinkButton';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
};

const LangNotFoundPage = () => (
  <div className="not-found-page page--error pt-4 lg:pt-10 lg:max-w-screen-sm">
    <section id="not-found">
      <h1>Seite nicht gefunden</h1>

      <p className="mb-4">
      Hier geht es nicht weiter, bitte geh zur Startseite
      oder wähle einen passenden Punkt aus dem Menü aus.
      </p>

      <LinkButton href="/" label="Zur Startseite" />

      <KonamiCode />
    </section>
  </div>
);

export default LangNotFoundPage;

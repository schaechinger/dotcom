import type { Metadata } from 'next';

import KonamiCode from '@components/KonamiCode';
import LinkButton from '@components/LinkButton';

export const metadata: Metadata = {
  title: 'Projekt nicht gefunden',
};

const ProjectNotFoundPage = () => (
  <div className="project-page page--error pt-4 lg:pt-10 lg:max-w-screen-sm">
    <section id="project-not-found">
      <h2>Projekt nicht gefunden</h2>


      <p className="mb-4">
        Dieses Projekt existiert nicht oder ist nicht mehr verfgbar. Sieh dir gerne meine
        anderen Projekte an und finde das für dich passende.
      </p>

      <LinkButton
        href="/projects"
        label="Zur Projektliste"
      />

      <KonamiCode />
    </section>
  </div>
);

export default ProjectNotFoundPage;

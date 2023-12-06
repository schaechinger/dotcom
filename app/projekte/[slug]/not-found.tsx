'use client';

import { Metadata } from 'next';

import LinkButton from '@/app/components/LinkButton';

export const metadata: Metadata = {
  title: 'Projekt nicht gefunden',
};

const ProjectNotFoundPage = (props: { params: { slug: string } }) => (
  <div className={`project-page page--error pt-4 lg:pt-10 lg:mr-80`}>
    <section id="project-not-found">
      <h2>404 &ndash; Projekt nicht gefunden</h2>


      <p className="mb-4">
        Dieses Projekt existiert nicht oder ist nicht mehr verfgbar. Sehen Sie sich gerne meine
        anderen Projekte an und finden Sie das passende.
      </p>

      <LinkButton
        href="/projekte"
        label="Zur Projektliste"
      />
    </section>
  </div>
);

export default ProjectNotFoundPage;

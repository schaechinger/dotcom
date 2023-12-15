import type { Metadata } from 'next';

import ProjectList from '@components/projects/ProjectList';

export const metadata: Metadata = {
  title: 'Projekte',
  description: 'Erhalte hier einen Überblick über meine bisherigen Projekte.',
  alternates: {
    canonical: '/projects',
    languages: {
      'de': '/projects',
    },
  },
}

const ProjectsPage = () => (
  <div className="projects-page pt-4 lg:pt-10 lg:max-w-screen-sm">
    <section id="projects">
      <h2>Projekte</h2>

      <ProjectList />
    </section>
  </div>
);

export default ProjectsPage;

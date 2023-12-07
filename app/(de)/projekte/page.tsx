import { Metadata } from 'next';

import ProjectList from '@components/projects/ProjectList';

export const metadata: Metadata = {
  title: 'Projekte',
}

const ProjectsPage = () => (
  <div className="projects-page pt-4 lg:pt-10 lg:mr-80">
    <section id="projekte">
      <h2>Projekte</h2>

      <ProjectList />
    </section>
  </div>
);

export default ProjectsPage;

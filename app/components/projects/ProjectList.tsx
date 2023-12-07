import { unstable_noStore } from 'next/cache';

import LinkButton from '@components/LinkButton';
import ProjectItem from '@components/projects/ProjectItem';
import { loadProjects } from '@/app/lib/contentful';

const ProjectList = async  ({ highlights }: { highlights?: boolean }) => {
  unstable_noStore();
  const projects = await loadProjects(highlights || false) || [];

  return (
    <div className="-mt-4">
      {projects.map((p) => (
        <ProjectItem key={p.slug} item={p} />
      ))}
      { !projects.length
        ? <p className="py-4">Leider konnten die bisherigen Projekte nicht geladen werden.</p>
        : '' }
      { (highlights && projects.length)
        ? <LinkButton href="/projekte" label="Alle Projekte ansehen" /> : null}
    </div>
  );
};

export default ProjectList;

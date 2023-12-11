import LinkButton from '@components/LinkButton';
import ProjectItem from '@components/projects/ProjectItem';
import { loadProjects } from '@lib/contentful';

interface Props {
  highlights?: boolean;
}

const ProjectList = async  ({ highlights }: Props) => {
  const projects = await loadProjects(highlights || false) || [];

  return (
    <div className="-mt-4">
      {projects.map((p) => (
        <ProjectItem key={p.slug} item={p} />
      ))}
      { !projects.length
        ? <p className="py-4">Leider konnten die bisherigen Projekte nicht geladen werden.</p>
        : '' }
      { highlights ? <LinkButton href="/projekte" label="Alle Projekte ansehen" /> : null}
    </div>
  );
};

export default ProjectList;

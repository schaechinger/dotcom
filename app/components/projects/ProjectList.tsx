import ProjectItem from '@/app/components/projects/ProjectItem';
import LinkButton from '@/app/components/LinkButton';
import { loadProjects } from '@/app/lib/projects';

interface ProjectListProps {
  highlights?: boolean;
}

const ProjectList = async  ({ highlights }: ProjectListProps) => {
  const projects = await loadProjects(highlights || false);

  return (
    <div className="-mt-4">
      {projects.map((p) => (
        <ProjectItem key={p.slug} item={p} />
      ))}
      { (!projects.length)
        ? <p className="pt-4">Leider konnten die bisherigen Projekte nicht geladen werden.</p>
        : '' }
      { (highlights && projects.length)
        ? <LinkButton href="/projekte" label="Alle Projekte ansehen" /> : null}
    </div>
  );
};

export default ProjectList;


import CompanyLink from '@/app/components/career/CompanyLink';
import TechItem from '@/app/components/career/TechItem';
import TimeSpan from '@/app/components/career/TimeSpan';
import ProjectType from '@/app/components/projects/ProjectType';
import { ProjectData } from '@/models/project';

const ProjectMasterData = ({ project }: { project: ProjectData }) => (
  <section id={project.slug}>
    <h2>{ project.title }</h2>

    <p className="mb-2">{ project.description }</p>

    <p className="mb-2">
      Zeitspanne: <TimeSpan startDate={project.startDate} endDate={project.endDate} />
    </p>

    <p className="mb-2">
      Projektart: <ProjectType type={project.type} label />
    </p>

    { project.company
      ? <p className="mb-2">Firma: <CompanyLink company={project.company} /></p>
      : null }

    <ul className="flex flex-wrap mt-3 gap-2">
      { (project.tech || []).map((t) => (
        <TechItem key={t.slug} item={t} />
      ))}
    </ul>
  </section>
);

export default ProjectMasterData;

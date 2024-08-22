
import { useTranslations } from 'next-intl';

import CompanyLink from '@components/career/CompanyLink';
import TechItem from '@components/career/TechItem';
import TimeSpan from '@components/career/TimeSpan';
import ProjectTypeLabel from '@components/projects/ProjectTypeLabel';
import { type ProjectData } from '@models/project';

type Props = {
  project: ProjectData;
};

const ProjectMasterData = ({ project }: Props) => {
  const t = useTranslations('pages.projects.details');

  return (
    <section id={project.slug}>
      <h1>{ project.title }</h1>

      <p className="mb-2">{ project.description }</p>

      <p className="mb-2">
        {t('timeSpan')}: <TimeSpan startDate={project.startDate} endDate={project.endDate} />
      </p>

      <p className="mb-2">
        {t('type')}: <ProjectTypeLabel type={project.type} label />
      </p>

      { project.company
        && <p className="mb-2">{t('company')}: <CompanyLink company={project.company} /></p> }

      <ul className="flex flex-wrap mt-3 gap-2">
        { (project.tech || []).map((t) => (
          <TechItem
            key={t.slug}
            item={t}
            color={project.slug}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectMasterData;

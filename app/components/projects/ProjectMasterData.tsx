
import { useTranslations } from 'next-intl';

import CompanyLink from '@components/atoms/CompanyLink';
import ProjectTypeLabel from '@components/atoms/ProjectTypeLabel';
import TechItem from '@components/atoms/TechItem';
import TimeSpan from '@components/atoms/TimeSpan';
import PageSection from '@components/organisms/PageSection';
import { type ProjectData } from '@models/project';

type Props = {
  project: ProjectData;
};

const ProjectMasterData = ({ project }: Props) => {
  const t = useTranslations('pages.projects.details');

  return (
    <PageSection id={project.slug} first dense>
      <h1 className="text-h1">{ project.title }</h1>

      <p className="mb-2">{ project.description }</p>

      <p className="mb-2">
        {t('timeSpan')}: <TimeSpan startDate={project.startDate} endDate={project.endDate} />
      </p>

      <p className="mb-2">
        {t('type')}: <ProjectTypeLabel type={project.type} label />
      </p>

      { project.company
        && <p className="mb-2">{t('company')}: <CompanyLink company={project.company} inline /></p> }

      <ul className="flex flex-wrap mt-3 gap-2">
        { (project.tech || []).map((t) => (
          <TechItem key={t.slug} item={t} />
        ))}
      </ul>
    </PageSection>
  );
};

export default ProjectMasterData;

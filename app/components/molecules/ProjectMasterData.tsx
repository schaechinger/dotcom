
import { getTranslations } from 'next-intl/server';

import Breadcrumbs from '@components/atoms/Breadcumbs';
import CompanyLink from '@components/atoms/CompanyLink';
import HistoryItemTypeLabel from '@components/atoms/HistoryItemTypeLabel';
import TechItem from '@components/atoms/TechItem';
import TimeSpan from '@components/atoms/TimeSpan';
import PageSection from '@components/organisms/PageSection';
import type { ProjectData } from '@models/project';

type Props = Readonly<{
  project: ProjectData;
}>;

const ProjectMasterData = async ({ project }: Props) => {
  const t = await getTranslations('pages.projects');

  return (
    <PageSection id={project.slug} first dense>
      <Breadcrumbs list={[
        { page: '/projects', title: t('title') },
        { title: project.title },
      ]} />

      <h1 className="text-h1">{project.title}</h1>

      <p className="mb-2">{project.description}</p>

      <p className="mb-2">
        {t('details.timeSpan')}: <TimeSpan startDate={project.startDate} endDate={project.endDate} />
      </p>

      <p className="mb-2">
        {t('details.type')}: <HistoryItemTypeLabel type={project.type} colored label />
      </p>

      { project.company
        && <p className="mb-2">{t('details.company')}: <CompanyLink company={project.company} inline /></p> }

      <ul className="flex flex-wrap mt-3 gap-2">
        { (project.tech || []).map((t) => (
          <TechItem key={t.slug} item={t} />
        ))}
      </ul>
    </PageSection>
  );
};

export default ProjectMasterData;

import { getLocale, getTranslations } from 'next-intl/server';

import { l, type LanguageCode } from '@/i18n';
import LinkButton from '@components/atoms/LinkButton';
import HistoryItemList from '@components/organisms/HistoryItemList';
import ProjectItem from '@components/projects/ProjectItem';
import { loadProjects } from '@lib/contentful';

type Props = {
  heading?: string;
  highlights?: boolean;
};

const ProjectList = async ({ heading, highlights }: Props) => {
  const t = await getTranslations('projectList');
  const locale = await getLocale() as LanguageCode;
  const projects = await loadProjects(locale, highlights || false) || [];

  return (
    <HistoryItemList
      items={projects.map((p) => (
        <ProjectItem key={p.slug} item={p} heading={heading} />
      ))}
      link={highlights && <LinkButton href={l('/projects', locale)} label={t('goto')} />}
      error={t('error')}
    />
  );
};

export default ProjectList;

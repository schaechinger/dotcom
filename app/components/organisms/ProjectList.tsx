import { getLocale, getTranslations } from 'next-intl/server';

import type { HeadingTag } from '@components/atoms/Heading';
import LinkButton from '@components/atoms/LinkButton';
import HistoryItemList from '@components/organisms/HistoryItemList';
import ProjectItem from '@components/organisms/ProjectItem';
import { loadProjects } from '@lib/contentful';
import type { LocaleCode } from '@lib/router';

type Props = {
  heading?: HeadingTag;
  highlights?: boolean;
};

const ProjectList = async ({ heading, highlights }: Props) => {
  const t = await getTranslations('projectList');
  const locale = await getLocale() as LocaleCode;
  const projects = await loadProjects(locale, highlights || false) || [];

  return (
    <HistoryItemList
      items={projects.map((p) => (
        <ProjectItem key={p.slug} item={p} heading={heading} />
      ))}
      link={highlights && <LinkButton href="/projects" label={t('goto', { count: 0 })} />}
      error={t('error')}
    />
  );
};

export default ProjectList;

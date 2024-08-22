import { getLocale, getTranslations } from 'next-intl/server';

import LinkButton from '@components/atoms/LinkButton';
import ProjectItem from '@components/projects/ProjectItem';
import { loadProjects } from '@lib/contentful';
import { l, type LanguageCode } from '@/i18n';

type Props = {
  heading?: string;
  highlights?: boolean;
};

const ProjectList = async ({ heading, highlights }: Props) => {
  const t = await getTranslations('projectList');
  const locale = await getLocale() as LanguageCode;
  const projects = await loadProjects(locale, highlights || false) || [];

  return (
    <div className="-mt-4">
      {projects.map((p) => (
        <ProjectItem key={p.slug} item={p} heading={heading} />
      ))}
      { !projects.length
        ? <p className="py-4">{t('error')}</p>
        : '' }
      { highlights && <LinkButton href={l('projects', locale)} label={t('goto')} /> }
    </div>
  );
};

export default ProjectList;

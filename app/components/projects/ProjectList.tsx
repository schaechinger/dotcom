import { getLocale, getTranslations } from 'next-intl/server';

import LinkButton from '@components/LinkButton';
import ProjectItem from '@components/projects/ProjectItem';
import { loadProjects } from '@lib/contentful';
import { _l, type LanguageCode } from '@lib/i18n';

type Props = {
  highlights?: boolean;
};

const ProjectList = async ({ highlights }: Props) => {
  const t = await getTranslations('projectList');
  const locale = await getLocale() as LanguageCode;
  const projects = await loadProjects(locale, highlights || false) || [];

  return (
    <div className="-mt-4">
      {projects.map((p) => (
        <ProjectItem key={p.slug} item={p} />
      ))}
      { !projects.length
        ? <p className="py-4">{t('error')}</p>
        : '' }
      { highlights && <LinkButton href={_l('projects', locale)} label={t('goto')} /> }
    </div>
  );
};

export default ProjectList;

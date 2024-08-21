import type { ComponentProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import ProjectItem from '@components/projects/ProjectItem';
import { loadProjects } from '@lib/contentful';
import { _l, _t, loadTranslations } from '@lib/i18n';

interface Props extends ComponentProps {
  highlights?: boolean;
}

const ProjectList = async  ({ highlights, lang }: Props) => {
  const translations = await loadTranslations('components.projectList', lang);
  const projects = await loadProjects(lang, highlights || false) || [];

  return (
    <div className="-mt-4">
      {projects.map((p) => (
        <ProjectItem key={p.slug} item={p} lang={lang} />
      ))}
      { !projects.length
        ? <p className="py-4">{_t('error', translations, lang)}</p>
        : '' }
      { highlights && <LinkButton href={_l('projects', lang)} label={_t('goto', translations, lang)} /> }
    </div>
  );
};

export default ProjectList;

import type { Metadata } from 'next';

import type { PageProps } from '@app/interfaces';
import ProjectList from '@components/projects/ProjectList';
import { _t, getPageAlternates, loadTranslations } from '@lib/i18n';

export const generateMetadata = async ({ params: { lang } }: PageProps): Promise<Metadata> => {
  const translations = await loadTranslations('pages.projects', lang);

  return {
    title: _t('title', translations, lang),
    description: _t('description', translations, lang),
    alternates: getPageAlternates('/projects', lang),
  };
};

const ProjectsPage = async ({ params: { lang } }: PageProps) => {
  const translations = await loadTranslations('pages.projects', lang);

  return (
    <div className="projects-page pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="projects">
        <h1>{_t('title', translations, lang)}</h1>

        <ProjectList lang={lang} />
      </section>
    </div>
  );
};

export default ProjectsPage;

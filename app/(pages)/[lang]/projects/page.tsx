import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import ProjectList from '@components/projects/ProjectList';
import { getPageAlternates } from '@lib/i18n';

export const generateMetadata = async ({ params: { lang } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.projects');

  return {
    title: t('title'),
    description: t('description'),
    alternates: getPageAlternates('/projects', lang),
  };
};

const ProjectsPage = ({ params: { lang } }: PageProps) => {
  const t = useTranslations('pages.projects');

  return (
    <div className="projects-page pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="projects">
        <h1>{t('title')}</h1>

        <ProjectList lang={lang} />
      </section>
    </div>
  );
};

export default ProjectsPage;

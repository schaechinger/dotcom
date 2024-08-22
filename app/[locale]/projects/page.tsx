import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import ProjectList from '@components/projects/ProjectList';
import { getPageAlternates } from '@lib/i18n';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.projects');

  return {
    title: t('title'),
    description: t('description'),
    alternates: getPageAlternates('/projects', locale),
  };
};

const ProjectsPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.projects');

  return (
    <div className="projects-page pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="projects">
        <h1>{t('title')}</h1>

        <ProjectList />
      </section>
    </div>
  );
};

export default ProjectsPage;

import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import LinkButton from '@components/atoms/LinkButton';
import KonamiCode from '@components/molecules/KonamiCode';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('errors.projectNotFound');

  return {
    title: t('title'),
  };
};

const ProjectNotFound = () => {
  const t = useTranslations('errors');

  return (
    <PageContainer name="not-found">
      <PageSection id="not-found" first>
        <h1 className="text-h1">{t('projectNotFound.title')}</h1>

        <p className="mb-4">{t('projectNotFound.text')}</p>

        <LinkButton href="/projects" label={t('projectNotFound.goto')} back />

        <KonamiCode translations={t.raw<any>('konamiCode')} />
      </PageSection>
    </PageContainer>
  );
};

export default ProjectNotFound;

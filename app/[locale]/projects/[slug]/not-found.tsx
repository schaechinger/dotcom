import type { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { l, type LanguageCode } from '@/i18n';
import KonamiCode from '@components/KonamiCode';
import LinkButton from '@components/atoms/LinkButton';
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
  const lang = useLocale() as LanguageCode || 'en';

  return (
    <PageContainer name="not-found" narrow>
      <PageSection id="not-found" first>
        <h1 className="text-h1">{t('projectNotFound.title')}</h1>

        <p className="mb-4">{t('projectNotFound.text')}</p>

        <LinkButton href={l('/projects', lang)} label={t('projectNotFound.goto')} back />

        <KonamiCode translations={t.raw('konamitCode')} />
      </PageSection>
    </PageContainer>
  );
};

export default ProjectNotFound;

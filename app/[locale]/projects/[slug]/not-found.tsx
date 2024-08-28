import type { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import LinkButton from '@components/atoms/LinkButton';
import KonamiCode from '@components/molecules/KonamiCode';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { l, type LocaleCode } from '@lib/router';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('errors.projectNotFound');

  return {
    title: t('title'),
  };
};

const ProjectNotFound = () => {
  const t = useTranslations('errors');
  const locale = useLocale() as LocaleCode || 'en';

  return (
    <PageContainer name="not-found" narrow>
      <PageSection id="not-found" first>
        <h1 className="text-h1">{t('projectNotFound.title')}</h1>

        <p className="mb-4">{t('projectNotFound.text')}</p>

        <LinkButton href={l('/projects', locale)} label={t('projectNotFound.goto')} back />

        <KonamiCode translations={t.raw('konamiCode')} />
      </PageSection>
    </PageContainer>
  );
};

export default ProjectNotFound;

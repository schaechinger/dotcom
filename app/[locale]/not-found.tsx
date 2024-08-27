import type { Metadata } from 'next';
import { useLocale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import KonamiCode from '@components/KonamiCode';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { l, type LocaleCode } from '@lib/router';

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('errors.notFound');

  return {
    title: t('title'),
  };
};

const LocalizedNotFoundPage = () => {
  const t = useTranslations('errors');
  const locale = useLocale() as LocaleCode || 'en';

  return (
    <PageContainer name="not-found" narrow>
      <PageSection id="not-found" first>
        <h1 className="text-h1">{t('notFound.title')}</h1>

        <p className="mb-4">{t('notFound.text')}</p>

        <LinkButton href={l('/', locale)} label={t('notFound.goto')} />

        <KonamiCode translations={t.raw('konamiCode')} />
      </PageSection>
    </PageContainer>
  );
};

export default LocalizedNotFoundPage;

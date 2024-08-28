import { type Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import JsonLd from '@components/atoms/JsonLd';
import LinkButton from '@components/atoms/LinkButton';
import ContestParticipation from '@components/molecules/ContestParticipation';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { loadParticipationsByContest } from '@lib/contentful';
import { generateBreadcrumbJson, generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.sports');

  return {
    ...generatePageMeta('/sports', locale),
    title: t('title'),
    description: t('description'),
  };
};

const SportsPage = async ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('pages.sports');

  const jsonLd = generateBreadcrumbJson([{ title: t('title') }], locale);
  const marathons = await loadParticipationsByContest('marathon', locale);

  return (
    <>
      <PageContainer name="sports">
        <PageSection id="sports" first>
          <h1 className="text-h1">{t('pageTitle')}</h1>

          <p>{t('text')}</p>

          <p className="mt-4">
            <LinkButton href="https://www.medalmonday.de/profil/schaechinger">{t('goto.medalmonday')}</LinkButton>
          </p>
        </PageSection>

        <PageSection id="marathons">
          <h2 className="text-h2">{t('marathons.title')}</h2>

          <p>{t('marathons.text.0')}</p>
          <p className="mt-2">{t('marathons.text.1')}</p>

          {marathons?.map((marathon) => (
            <ContestParticipation key={marathon.slug} participation={marathon} />
          ))}
        </PageSection>
      </PageContainer>

      <JsonLd json={jsonLd} />
    </>
  )
};

export default SportsPage;

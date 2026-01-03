import { type Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Breadcrumbs from '@components/atoms/Breadcumbs';
import Heading from '@components/atoms/Heading';
import LinkButton from '@components/atoms/LinkButton';
import ContestParticipation from '@components/molecules/ContestParticipation';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { loadParticipationsByContest } from '@dal/participations';
import type { LocaleCode } from '@lib/router';
import { generatePageMeta } from '@lib/seo';
import { getPb } from '@models/participation';

export const generateMetadata = async ({ params }: PageProps<"/[locale]/sports">): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.sports');

  return {
    ...generatePageMeta('/sports', locale),
    title: t('title'),
    description: t('description'),
  };
};

const SportsPage = async ({ params }: PageProps<"/[locale]/sports">) => {
  const { locale } = await params;
  const [marathons, t] = await Promise.all([
    loadParticipationsByContest('marathon', locale as LocaleCode),
    getTranslations('pages.sports'),
  ]);

  const pb = getPb(marathons || []);

  return (
    <PageContainer name="sports">
      <PageSection id="sports" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <Heading level={1} title={t('title')} />

        <p>{t('text')}</p>

        <p className="mt-4">
          <LinkButton href="https://www.medalmonday.de/profil/schaechinger">{t('goto.medalmonday')}</LinkButton>
        </p>
      </PageSection>

      <PageSection id="marathons">
        <Heading level={2} title={t('marathons.title')} />

        <p>{t('marathons.text.0')}</p>
        <p className="my-2">{t('marathons.text.1')}</p>

        {marathons?.map((marathon) => (
          <ContestParticipation key={marathon.slug} participation={marathon} pb={pb.slug === marathon.slug} />
        ))}
      </PageSection>
    </PageContainer>
  )
};

export default SportsPage;

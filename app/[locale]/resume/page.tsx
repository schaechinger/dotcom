import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';;
import Breadcrumbs from '@components/atoms/Breadcumbs';
import CareerList from '@components/organisms/CareerList';
import CertificationList from '@components/organisms/CertificationList';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.resume');

  return {
    ...generatePageMeta('/resume', locale),
    title: t('title'),
    description: t('description'),
  };
};

const ResumePage = async ({ params }: PageProps) => {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const t = await getTranslations('pages.resume');

  return (
    <PageContainer name="resume" narrow>
      <PageSection id="experience" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <h1 className="text-h1">{t('title')}</h1>

        <CareerList heading="h2" />
      </PageSection>

      <PageSection id="education">
        <h2 className="text-h2">{t('education.title')}</h2>

        <CareerList type="education" noLink />
      </PageSection>

      <PageSection id="certifications">
        <h2 className="text-h2">{t('certifications.title')}</h2>

        <CertificationList />
      </PageSection>

      <PageSection id="skills">
        <h2 className="text-h2">{t('skills.title')}</h2>

        <div className="mt-4">
          <h3 className="text-h3">{t('skills.languages')}</h3>

          <HistoryItemTechList tech={[
            { slug: 'javascript', name: 'JavaScript' },
            { slug: 'typescript', name: 'TypeScript' },
            { slug: 'css', name: 'CSS/Sass' },
            { slug: 'python', name: 'Python' },
            { slug: 'sql', name: 'SQL' },
          ]} />
        </div>

        <div className="mt-6">
          <h3 className="text-h3">{t('skills.frameworks')}</h3>

          <HistoryItemTechList tech={[
            { slug: 'nodejs', name: 'Node.js' },
            { slug: 'vue', name: 'Vue.js' },
            { slug: 'pinia', name: 'Pinia' },
            { slug: 'quasar', name: 'Quasar' },
            { slug: 'react', name: 'React' },
            { slug: 'nextjs', name: 'Next.js' },
            { slug: 'express', name: 'Express.js' },
            { slug: 'jest', name: 'Jest' },
            { slug: 'mqtt', name: 'MQTT' },
            { slug: 'graphql', name: 'GraphQL' },
          ]} />
        </div>

        <div className="mt-6">
          <h3 className="text-h3">{t('skills.databases')}</h3>

          <HistoryItemTechList tech={[
            { slug: 'postgresql', name: 'PostgreSQL' },
            { slug: 'dynamodb', name: 'DynamoDB' },
            { slug: 'elasticsearch', name: 'Elasticsearch' },
            { slug: 'mongodb', name: 'MongoDB' },
          ]} />
        </div>

        <div className="mt-6">
          <h3 className="text-h3">{t('skills.tools')}</h3>

          <HistoryItemTechList tech={[
            { slug: 'linux', name: 'Linux' },
            { slug: 'aws', name: 'AWS' },
            { slug: 'docker', name: 'Docker' },
            { slug: 'nginx', name: 'nginx' },
            { slug: 'git', name: 'Git' },
            { slug: 'rest', name: 'REST' },
            { slug: 'responsivedesign', name: 'Reponsive Design' },
            { slug: 'ui', name: 'Reponsive UI/UX' },
            { slug: 'auth', name: t('skills.auth') },
          ]} />
        </div>
      </PageSection>
    </PageContainer>
  );
};

export default ResumePage;

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import Breadcrumbs from '@components/atoms/Breadcumbs';
import Heading from '@components/atoms/Heading';
import CareerList from '@components/organisms/CareerList';
import CertificationList from '@components/organisms/CertificationList';
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';
import { generatePageMeta } from '@lib/seo';

export const generateMetadata = async ({ params }: PageProps<"/[locale]/resume">): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations('pages.resume');

  return {
    ...generatePageMeta('/resume', locale),
    title: t('title'),
    description: t('description'),
  };
};

const ResumePage = async () => {
  const t = await getTranslations('pages.resume');

  return (
    <PageContainer name="resume">
      <PageSection id="experience" first>
        <Breadcrumbs list={[{ title: t('title') }]} />

        <Heading level={1} title={t('title')} />

        <CareerList heading="h2" />
      </PageSection>

      <PageSection id="education">
        <Heading level={2} title={t('education.title')} />

        <CareerList type="education" noLink />
      </PageSection>

      <PageSection id="certifications">
        <Heading level={2} title={t('certifications.title')} />

        <CertificationList />
      </PageSection>

      <PageSection id="skills">
        <Heading level={2} title={t('skills.title')} />

        <div className="mt-4">
          <Heading level={3} title={t('skills.languages')} />

          <HistoryItemTechList tech={[
            { slug: 'javascript', name: 'JavaScript' },
            { slug: 'typescript', name: 'TypeScript' },
            { slug: 'css', name: 'CSS/SCSS' },
            { slug: 'python', name: 'Python' },
            { slug: 'sql', name: 'SQL' },
          ]} />
        </div>

        <div className="mt-6">
          <Heading level={3} title={t('skills.frameworks')} />

          <HistoryItemTechList tech={[
            { slug: 'nodejs', name: 'Node.js' },
            { slug: 'react', name: 'React' },
            { slug: 'nextjs', name: 'Next.js' },
            { slug: 'vue', name: 'Vue.js' },
            { slug: 'pinia', name: 'Pinia' },
            { slug: 'quasar', name: 'Quasar' },
            { slug: 'express', name: 'Express.js' },
            { slug: 'jest', name: 'Jest' },
            { slug: 'mqtt', name: 'MQTT' },
            { slug: 'graphql', name: 'GraphQL' },
          ]} />
        </div>

        <div className="mt-6">
          <Heading level={3} title={t('skills.databases')} />

          <HistoryItemTechList tech={[
            { slug: 'postgresql', name: 'PostgreSQL' },
            { slug: 'dynamodb', name: 'DynamoDB' },
            { slug: 'mongodb', name: 'MongoDB' },
            { slug: 'elasticsearch', name: 'Elasticsearch' },
          ]} />
        </div>

        <div className="mt-6">
          <Heading level={3} title={t('skills.tools')} />

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

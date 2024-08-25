import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { getPageAlternates } from '@/i18n';
import type { PageProps } from '@app/interfaces';;
import HistoryItemTechList from '@components/atoms/HistoryItemTechList';
import CareerList from '@components/career/CareerList';
import CertificationList from '@components/certifications/CertificationList';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.resume');

  return {
    title: t('title'),
    description: t('description'),
    alternates: getPageAlternates('/resume', locale),
  };
};

const ResumePage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.resume');

  return (
    <PageContainer name="resume" narrow>
      <PageSection id="experience" first>
        <h1 className="text-h1">{t('title')}</h1>

        <CareerList heading="h2" />
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
            { slug: 'sql', name: 'SQL' },
            { slug: 'php', name: 'PHP' },
            { slug: 'python', name: 'Python' },
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
            { slug: 'mqtt', name: 'MQTT' },
            { slug: 'mocha', name: 'Mocha' },
            { slug: 'graphql', name: 'GraphQL' },
          ]} />
        </div>

        <div className="mt-6">
          <h3 className="text-h3">{t('skills.databases')}</h3>

          <HistoryItemTechList tech={[
            { slug: 'postgresql', name: 'PostgreSQL' },
            { slug: 'dynamodb', name: 'DynamoDB' },
            { slug: 'elasticsearch', name: 'Elasticsearch' },
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
            { slug: 'auth', name: 'Authentifizierung' },
          ]} />
        </div>
      </PageSection>
    </PageContainer>
  );
};

export default ResumePage;

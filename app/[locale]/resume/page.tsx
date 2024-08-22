import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import type { PageProps } from '@app/interfaces';
import CareerList from '@components/career/CareerList';
import TechItem from '@components/atoms/TechItem';
import CertificationList from '@components/certifications/CertificationList';
import { getPageAlternates } from '@/i18n';

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
    <div className="resume-page pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="career">
        <h1 className="text-h1">{t('title')}</h1>

        <CareerList heading="h2" />
      </section>

      <section id="certifications" className="mt-10">
        <h2 className="text-h2">{t('certifications.title')}</h2>

        <CertificationList />
      </section>

      <section id="skills" className="mt-10">
        <h2 className="text-h2">{t('skills.title')}</h2>

        <div className="mt-4">
          <h3 className="text-h3">{t('skills.languages')}</h3>

          <ul className="flex flex-wrap mt-3 gap-2">
            { [
              { slug: 'javascript', name: 'JavaScript' },
              { slug: 'typescript', name: 'TypeScript' },
              { slug: 'css', name: 'CSS/Sass' },
              { slug: 'sql', name: 'SQL' },
              { slug: 'php', name: 'PHP' },
              { slug: 'python', name: 'Python' },
            ].map((tech) => (
              <TechItem key={tech.slug} item={tech} />
            )) }
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-h3">{t('skills.frameworks')}</h3>

          <ul className="flex flex-wrap mt-3 gap-2">
            { [
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
            ].map((tech) => (
              <TechItem key={tech.slug} item={tech} />
            )) }
            </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-h3">{t('skills.databases')}</h3>

          <ul className="flex flex-wrap mt-3 gap-2">
            { [
              { slug: 'postgresql', name: 'PostgreSQL' },
              { slug: 'dynamodb', name: 'DynamoDB' },
              { slug: 'elasticsearch', name: 'Elasticsearch' },
            ].map((tech) => (
              <TechItem key={tech.slug} item={tech} />
            )) }
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="text-h3">{t('skills.tools')}</h3>

          <ul className="flex flex-wrap mt-3 gap-2">
            { [
              { slug: 'linux', name: 'Linux' },
              { slug: 'aws', name: 'AWS' },
              { slug: 'docker', name: 'Docker' },
              { slug: 'nginx', name: 'nginx' },
              { slug: 'git', name: 'Git' },
              { slug: 'rest', name: 'REST' },
              { slug: 'responsivedesign', name: 'Reponsive Design' },
              { slug: 'ui', name: 'Reponsive UI/UX' },
              { slug: 'auth', name: 'Authentifizierung' },
            ].map((tech) => (
              <TechItem key={tech.slug} item={tech} />
            )) }
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;

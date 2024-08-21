import type { Metadata } from 'next';

import type { PageProps } from '@app/interfaces';
import CareerList from '@components/career/CareerList';
import TechItem from '@components/career/TechItem';
import CertificationList from '@components/certifications/CertificationList';
import { _t, getPageAlternates, loadTranslations } from '@lib/i18n';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const translations = await loadTranslations('pages.resume', locale);

  return {
    title: _t('title', translations, locale),
    description: _t('description', translations, locale),
    alternates: getPageAlternates('/resume', locale),
  };
};

const ResumePage = async ({ params: { locale } }: PageProps) => {
  const translations = await loadTranslations('pages.resume', locale);

  return (
    <div className="resume-page pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section id="career">
        <h1>{_t('title', translations, locale)}</h1>

        <CareerList lang={locale} />
      </section>

      <section id="certifications" className="mt-10">
        <h3>{_t('certifications.title', translations, locale)}</h3>

        <CertificationList lang={locale} />
      </section>

      <section className="mt-10">
        <h3>{_t('skills.title', translations, locale)}</h3>

        <div className="mt-4">
          <h4>Programmiersprachen</h4>

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
          <h4>Frameworks & Librarys</h4>

          <ul className="flex flex-wrap mt-3 gap-2">
            { [
              { slug: 'nodejs', name: 'Node.js' },
              { slug: 'vue', name: 'Vue' },
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
          <h4>Datenbanken</h4>

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
          <h4>Tools & Sonstiges</h4>

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

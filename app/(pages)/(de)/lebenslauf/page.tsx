import { Metadata } from 'next';

import LinkButton from '@components/LinkButton';
import CareerList from '@components/career/CareerList';
import TechItem from '@components/career/TechItem';

export const metadata: Metadata = {
  title: 'Berufserfahrung',
  description: 'Erfahre mehr über meinen beruflichen Werdegang.',
};

const ResumePage = () => (
  <div className="resume-page pt-4 lg:pt-10 lg:mr-80">
    <section id="lebenslauf">
      <h2>Berufserfahrung</h2>

      <CareerList />
    </section>

    <section className="mt-10">
      <h3>Zertifizierungen</h3>

      <LinkButton
        href="https://www.certible.com/verify/c3b8c56cffa37513e67fb4ae6d5f433a"
        label="iSAQB Certified Professional for Software Architecture (CPSA-F)"
      />
    </section>

    <section className="mt-10">
      <h3>Fähigkeiten</h3>

      <div className="mt-6">
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

export default ResumePage;

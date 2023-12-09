import { Metadata } from 'next';

import LinkButton from '@components/LinkButton';

export const metadata: Metadata = {
  title: 'Meine Tätigkeit',
  description: 'Ein Einblick in meine Tätigkeitsfelder sowie meine technischen Fähigkeiten.',
};

const ResumePage = () => (
  <div className="resume-page pt-4 lg:pt-10 lg:max-w-screen-sm">
    <section id="taetigkeit">
      <h2>Meine Tätigkeit</h2>

      <p className="mb-2">
        In zahlreichen Projekten konnte ich erfolgreich den gesamten Projektzyklus von der Idee
        bis hin zum fertigen Produkt begleiten und war sowohl beratend als auch als Entwickler
        tätig.
      </p>

      <p>
        Im Rahmen meiner freiberuflichen Tätigkeit kann ich entweder auf Stundenbasis oder auf
        Wunsch auf Paketbasis arbeiten. Dabei biete ich verschiedene Leistungen an:
      </p>

      <div className="mt-6">
        <h3>Umsetzung</h3>

        <p className="mb-2">
          Ich unterstütze aktiv die Implementierung des Projekts und nutze meine Fähigkeiten,
          um das bestmögliche Produkt zu erhalten.
        </p>

        <p>
          Meist im JavaScript-Umfeld, sowohl im Backend mit Node.js und TypeScript als auch
          im Frontend mit React und SASS.
        </p>
      </div>

      <div className="mt-6">
        <h3>Konzeption & Architektur</h3>

        <p className="mb-2">
          Noch vor der ersten Zeile Code steht die durchdachte Konzeption der Projektbasis und
          die Planung der Architektur an.
        </p>

        <p>
          Hier helfe ich beim Entwurf einer leistungsfähigen und langlebigen Software
          Architektur und einem stimmigen Gesamtkonzept.
        </p>
      </div>

      <div className="mt-6">
        <h3>Beratung</h3>

        <p className="mb-2">
          Hier geht es um die Überwindung von aufgetretenen Problemen, der Migration von
          Systemen oder einer beliebigen anderen Herausforderung.
        </p>

        <p>
          Kontaktiere mich gere mit deinem spezifischen Anliegen, um gemeinsam eine
          Lösung dafür zu finden.
        </p>
      </div>

      <p className="mt-4">
        <LinkButton href="/projekte">Meine bisherigen Projekte</LinkButton>
      </p>
    </section>

    <section id="mein-stack" className="mt-10">
      <h2>Meine Basisstack</h2>

      <div>
        <h3>Frontend</h3>
        <div className="border-b border-b-primary-200 pb-1 mb-1">
          Vue, Quasar, Pinia, Sass, ...
        </div>
        <div>
          React, Next.js, Sass, ...
        </div>
      </div>

      <div className="mt-6">
        <h3>Backend</h3>
        <div className="border-b border-b-primary-200 pb-1 mb-1">
          Node.js, Express, MQTT, ...
        </div>
        <div>
          Strapi, Contentful, ...
        </div>
      </div>

      <div className="mt-6">
        <h3>Datenbanken</h3>
        <div>
          PostgreSQL, DynamoDB, MongoDB, Neo4j, ...
        </div>
      </div>

      <div className="mt-6">
        <h3>CI & CD</h3>
        <div>
          Docker, GitHub Actions, Mocha, ...
        </div>
      </div>

      <div className="mt-6">
        <h3>Basis</h3>
        <div>
          Linux, AWS, Traefik, Git, REST, Elasticsearch, Auth0, Jira, Confluence, ...
        </div>
      </div>
    </section>
  </div>
);

export default ResumePage;

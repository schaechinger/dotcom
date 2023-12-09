import Link from 'next/link';

import LinkButton from '@components/LinkButton';
import CareerList from '@components/career/CareerList';
import AvailabilityIndicator from '@components/freelance/AvailabilityIndicator';
import ProjectList from '@components/projects/ProjectList';

const Home = () => (
  <div className="home-page lg:mr-80">
    <section id="ueber-mich" className="pt-4 lg:pt-10 mb-8">
      <h2>Servus, ich bin Manuel.</h2>

      <p className="mb-2">
        Seit über 10 Jahren entwickle ich professionelle Anwendungen sowohl im Backend als auch
        im Frontend. Ich habe mich auf <strong className="highlight-label"
        >JavaScript</strong> spezialisiert, da diese Sprache ein fast grenzenloses Spektrum an
        Möglichkeiten und Einsatzgebieten ermöglicht.
      </p>

      <p className="mb-2">
        Meine Aufgabenbereiche erstrecken sich über komplexe APIs mit <strong
          className="highlight-label">Node.js</strong>, performante Frontends mit <strong
          className="highlight-label">Vue</strong> und <strong
          className="highlight-label">React</strong>, Absicherung von Systemen sowie Deployment
        und Übergabe an Kunden.
      </p>

      <p className="mb-4">
        Abseits der Arbeit bin ich leidenschaftlicher Läufer. Mein großes Ziel ist die
        Teilnahmen an den sechs großen Marathons der Welt, von denen ich bis auf Boston
        schon fünf abschließen konnte.
      </p>

      <p>
        <LinkButton href="/taetigkeit" label="Mehr zu meiner Tätigkeit" />
      </p>
    </section>

    <section id="verfuegbarkeit" className="pt-4 lg:pt-10 mb-8">
      <h2>Aktuelle Verfügbarkeit</h2>

      <AvailabilityIndicator />

      <p className="mt-4">
        Auch wenn meine Verfügbarkeit für die Bedürfnisse nicht ausreicht, <Link href="/kontakt"
          className="inline-link">kontaktiere</Link> mich gerne. Wir finden einen Weg, das
        Projekt umzusetzen.
      </p>
    </section>

    <section id="erfahrungen" className="pt-4 lg:pt-10 mb-8">
      <h2>Berufliche Erfahrung</h2>

      <CareerList latest />
    </section>

    <section id="projekte" className="pt-4 lg:pt-10 mb-8">
      <h2>Aktuelle Projekte</h2>

      <ProjectList highlights />
    </section>

    <section id="kontakt" className="pt-4 lg:pt-10">
      <h2>Kontakt</h2>

      <p className="mb-4">
        Nimm gerne Kontakt mit mir auf, um gemeinsam dein Vorhaben zu verwirklichen und
        die Herausforderung zu meistern.
      </p>

      <LinkButton href="/kontakt" label="Jetzt kontaktieren" />
    </section>
  </div>
);

export default Home;

import Link from 'next/link';

import AvailabilityIndicator from '@/app/components/freelance/AvailabilityIndicator';
import CareerList from '@/app/components/career/CareerList';
import ProjectList from '@/app/components/projects/ProjectList';

const Home = () => (
  <div className="home-page lg:mr-80">
    <section id="ueber-mich" className="pt-4 lg:pt-10 mb-8">
      <h2>Servus, ich bin Manuel.</h2>

      <p className="mb-2">
        Seit über 10 Jahren entwickle ich professionelle Anwendungen sowohl im Backend als auch
        im Frontend tätig. Ich habe mich auf <strong className="highlight-label"
        >JavaScript</strong> spezialisiert, da diese Sprache ein fast grenzenloses Spektrum an
        Möglichkeiten und Einsatzgebieten ermöglicht.
      </p>

      <p className="mb-2">
        In diversen freiberuflichen Projekten sowie meiner bisherigen beruflichen Laufbahn konnte
        ich erfolgreich den gesamten Projektzyklus von der Idee bis hin zum fertigen Produkt
        begleiten und war sowohl beratend als auch als Entwickler tätig. Meine Aufgabenbereiche
        erstrecken sich über komplexe APIs mit <strong className="highlight-label">Node.js</strong>,
        performante Frontends mit <strong className="highlight-label">Vue</strong> und <strong
          className="highlight-label">React</strong>, Absicherung von Systemen sowie Deployment
        und Übergabe an Kunden.
      </p>

      <p>
        Abseits der Arbeit bin ich leidenschaftlicher Läufer und trainiere fast immer für den
        nächsten Marathon. Mein großes Ziel ist die Teilnahmen an den sechs großen Marathons der
        Welt, von denen ich bis auf Boston schon fünf abschließen konnte.
      </p>
    </section>

    <section id="verfuegbarkeit" className="pt-4 lg:pt-10 mb-8">
      <h2>Aktuelle Verfügbarkeit</h2>

      <AvailabilityIndicator />

      <p className="mt-4">
        Auch wenn meine Verfügbarkeit für Ihre Bedürfnisse nicht ausreicht, <Link href="/#kontakt"
          className="inline-link">kontaktieren</Link> Sie mich gerne. Wir finden einen Weg, Ihr
        Projekt umzusetzen.
      </p>
    </section>

    <section id="erfahrungen" className="pt-4 lg:pt-10 mb-8">
      <h2>Berufliche Erfahrung</h2>

      <CareerList />
    </section>

    <section id="projekte" className="pt-4 lg:pt-10 mb-8">
      <h2>Aktuelle Projekte</h2>

      <ProjectList highlights />
    </section>

    <section id="kontakt" className="pt-4 lg:pt-10">
      <h2>Kontakt</h2>

      <p className="mb-2">
        Nehmen Sie gerne Kontakt mit mir auf, um über Ihr Projekt oder Ihr Anliegen zu sprechen!
      </p>

      <a href="mailto:manuel@schaechinger.com">Per E-Mail</a>
      <br />
      <a href="tel:+4916097506593">Telefonisch</a>
    </section>
  </div>
);

export default Home;

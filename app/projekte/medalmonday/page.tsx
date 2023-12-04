import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Medal Monday',
};

const MedalMondayPage = () => (
  <div className="project-page page--medalmonday pt-4 lg:pt-10">
    <section id="medalmonday">
      <h2>Medal Monday</h2>

      <p>
        Eine digitale Wettkampf-Plattform für Ausdauersportler, auf der sie alle Daten, Statistiken
        und Erlebnisse an ihre Erfolge an einem Ort finden können.
      </p>
    </section>

    <section id="intro" className="pt-10">
      <h3>Was ist Medal Monday</h3>

      <p>...</p>
    </section>

    <section id="ziele" className="pt-10">
      <h3>Ziel des Projekts</h3>

      <p>...</p>
    </section>

    <section id="features" className="pt-10">
      <h3>Features</h3>

      <p>...</p>
    </section>

    <section id="links" className="pt-10">
      <h3>Links</h3>

      <p>
        Das Projekt finden Sie auf <Link href="https://medalmonday.de"
          target="_blank">www.medalmonday.de</Link>
      </p>
    </section>
  </div>
);

export default MedalMondayPage;

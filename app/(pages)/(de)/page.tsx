import type { Metadata } from 'next';
import Link from 'next/link';

import LinkButton from '@components/LinkButton';
import AboutSection from '@components/about/AboutSection';
import CareerList from '@components/career/CareerList';
import AvailabilityIndicator from '@components/freelance/AvailabilityIndicator';
import ProjectList from '@components/projects/ProjectList';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: {
      'de': '/',
    },
  },
};

const Home = () => (
  <div className="home-page lg:max-w-screen-sm">
    <AboutSection />

    <section id="availability" className="pt-4 lg:pt-10 mb-8">
      <h2>Aktuelle Verfügbarkeit</h2>

      <AvailabilityIndicator />

      <p className="mt-4">
        Auch wenn meine Verfügbarkeit für die Bedürfnisse nicht ausreicht, <Link href="/contact"
          className="inline-link">kontaktiere</Link> mich gerne. Wir finden einen Weg, das
        Projekt umzusetzen.
      </p>
    </section>

    <section id="experience" className="pt-4 lg:pt-10 mb-8">
      <h2>Berufliche Erfahrung</h2>

      <CareerList latest />
    </section>

    <section id="projects" className="pt-4 lg:pt-10 mb-8">
      <h2>Aktuelle Projekte</h2>

      <ProjectList highlights />
    </section>

    <section id="contact" className="pt-4 lg:pt-10">
      <h2>Kontakt</h2>

      <p className="mb-4">
        Nimm gerne Kontakt mit mir auf, um gemeinsam dein Vorhaben zu verwirklichen und
        die Herausforderung zu meistern.
      </p>

      <LinkButton href="/contact" label="Jetzt kontaktieren" />
    </section>
  </div>
);

export default Home;

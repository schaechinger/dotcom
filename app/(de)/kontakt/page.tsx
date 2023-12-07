import { Metadata } from 'next';

import LinkButton from '@components/LinkButton';

export const metadata: Metadata = {
  title: 'Gehen wir es an!',
};

const ResumePage = () => (
  <div className="resume-page pt-4 lg:pt-10 lg:mr-80">
    <section id="kontakt">
      <h2>Kontakt</h2>

      <p className="mb-2">Der erste Schritt liegt bei Ihnen.</p>

      <p className="mb-4">
        Sie möchten direkt mit mir in Kontakt treten? Melden Sie sich einfach und wir setzen
        Ihr Vorhaben so um, wie Sie es sich vorstellen!
      </p>

      <p className="mb-2">
        <LinkButton href="mailto:manuel@schaechinger.com">Per E-Mail</LinkButton>
      </p>
      <p>
        <LinkButton href="tel:+4916097506593">Telefonisch</LinkButton>
      </p>
    </section>
  </div>
);

export default ResumePage;

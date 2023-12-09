import { Metadata } from 'next';

import LinkButton from '@components/LinkButton';
import ContactForm from '@components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Hier kannst du auf schnellem Weg mit mir in Kontakt treten.',
};

const ResumePage = () => (
  <div className="resume-page pt-4 lg:pt-10 lg:max-w-screen-sm">
    <section id="kontakt">
      <h2>Kontakt</h2>

      <p className="mb-2">Der erste Schritt liegt bei dir.</p>

      <p>
        Melde dich gerne und wir setzen dein Vorhaben so um, wie du es dir vorstellst!
      </p>

      <div className="flex flex-wrap mt-10 gap-y-10">
        <div className="flex-1">
        <h3>Per Mail</h3>
          <LinkButton href="mailto:manuel@schaechinger.com">E-Mail senden</LinkButton>
        </div>

        <div className="flex-1">
          <h3>Telefonisch</h3>
          <LinkButton href="tel:+4916097506593">Jetzt anrufen</LinkButton>
        </div>

        <div className="flex-none w-full">
          <h3>Direkt schreiben</h3>

          <ContactForm />
        </div>
      </div>
    </section>
  </div>
);

export default ResumePage;

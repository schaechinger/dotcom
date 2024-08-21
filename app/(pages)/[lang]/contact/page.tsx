import type { Metadata } from 'next';

import type { LangPageProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import ContactForm from '@components/forms/ContactForm';
import AvailabilityIndicator from '@components/freelance/AvailabilityIndicator';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Hier kannst du auf schnellem Weg mit mir in Kontakt treten.',
  alternates: {
    canonical: '/contact',
    languages: {
      'de': '/contact',
    },
  },
};

const ResumePage = ({ params: { lang } }: LangPageProps) => (
  <div className="resume-page pt-4 lg:pt-10 lg:max-w-screen-sm">
    <section id="contact">
      <h1>Kontakt</h1>

      <p className="mb-2">Der erste Schritt liegt bei dir.</p>

      <p>
        Melde dich gerne und wir setzen dein Vorhaben so um, wie du es dir vorstellst!
      </p>

      <h3 className="mt-10 mb-4">Meine Verfügbarkeit</h3>

      <AvailabilityIndicator lang={lang} />

      <div className="flex flex-wrap mt-10 gap-y-10">
        <div className="flex-1">
          <h3>Per Mail</h3>
          <LinkButton href="mailto:manuel@schaechinger.com" label="E-Mail senden" />
        </div>

        <div className="flex-1">
          <h3>Telefonisch</h3>
          <LinkButton href="tel:+4916097506593" label="Jetzt anrufen" />
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

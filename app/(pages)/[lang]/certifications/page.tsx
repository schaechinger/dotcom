import type { Metadata } from 'next';

import type { PageProps } from '@app/interfaces';
import CertificationList from '@components/certifications/CertificationList';

export const metadata: Metadata = {
  title: 'Zertifizierungen',
  description: 'Meine Zertifizierungen im Überbrick',
  alternates: {
    canonical: '/certifications',
    languages: {
      'de': '/certifications',
    },
  },
}

const CertificationsPage = ({ params: { lang } }: PageProps) => (
  <div className="certifications-page pt-4 lg:pt-10 lg:max-w-screen-sm">
    <section id="certifications">
      <h1>Zertifizierungen</h1>

      <CertificationList lang={lang} />
    </section>
  </div>
);

export default CertificationsPage;

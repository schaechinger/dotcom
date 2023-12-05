import { Metadata } from 'next';

import CareerList from '@/app/components/career/CareerList';

export const metadata: Metadata = {
  title: 'Lebenslauf',
};

const ResumePage = () => (
  <div className="resume-page pt-4 lg:pt-10 lg:mr-80">
    <section id="lebenslauf">
      <h2>Lebenslauf</h2>

      <CareerList />
    </section>
  </div>
);

export default ResumePage;

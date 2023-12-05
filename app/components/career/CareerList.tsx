import { unstable_noStore } from 'next/cache';

import CareerItem from '@/app/components/career/CareerItem';
import LinkButton from '@/app/components/LinkButton';
import { getDatabase } from '@/app/lib/db/factory';

const CareerList = async ({ latest }: { latest?: boolean }) => {
  unstable_noStore();
  let career = await getDatabase()?.loadCareer() || [];

  if (latest) {
    career = career.slice(0, 3);
  }

  return (
    <div className="-mt-4">
      {career.map((c) => (
        <CareerItem key={c.slug} item={c} />
      ))}
      { (!career.length)
        ? <p className="py-4">Leider konnten die bisherigen Positionen nicht geladen werden.</p>
        : '' }
      <div>
        { latest
          ? <LinkButton
            href="/lebenslauf"
            label="Vollständigen Werdegang ansehen"
          />
          :  <LinkButton
            href="https://static.schaechinger.com/de/lebenslauf-manuel-schaechinger.pdf"
            label="Lebenslauf herunterladen"
          /> }
      </div>
    </div>
  );
};

export default CareerList;

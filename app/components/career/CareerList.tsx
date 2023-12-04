import { unstable_noStore } from 'next/cache';
import CareerItem from '@/app/components/career/CareerItem';
import LinkButton from '@/app/components/LinkButton';
import { loadCareer } from '@/app/lib/career';

const CareerList = async () => {
  unstable_noStore();
  const career = await loadCareer();

  return (
    <div className="-mt-4">
      {career.map((c) => (
        <CareerItem key={c.slug} item={c} />
      ))}
      { (!career.length)
        ? <p className="pt-4">Leider konnten die bisherigen Positionen nicht geladen werden.</p>
        : '' }
      <LinkButton
        href="https://static.schaechinger.com/de/lebenslauf-manuel-schaechinger.pdf"
        label="Lebenslauf ansehen"
      />
    </div>
  );
};

export default CareerList;

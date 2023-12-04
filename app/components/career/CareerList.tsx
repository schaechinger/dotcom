import CareerItem from '@/app/components/career/CareerItem';
import { loadCareer } from '@/app/lib/career';
import LinkButton from '../LinkButton';

const CareerList = async () => {
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

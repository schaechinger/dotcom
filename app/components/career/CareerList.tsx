import LinkButton from '@components/LinkButton';
import CareerItem from '@components/career/CareerItem';
import { loadCareer } from '@lib/contentful';

interface Props {
  latest?: boolean;
}

const CareerList = async ({ latest }: Props) => {
  let career = await loadCareer() || [];

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

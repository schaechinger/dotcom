import TechItem from '@components/atoms/TechItem';
import { TechData } from '@models/history';

type Props = {
  tech?: TechData[];
};

const HistoryItemTechList = ({ tech }: Props) => {
  if (!tech?.length) {
    return;
  }

  return (
    <ul className="flex flex-wrap mt-3 gap-2">
      {(tech || []).map((t) => <TechItem key={t.slug} item={t} />)}
    </ul>
  );
};

export default HistoryItemTechList;

import BulletList from '@components/atoms/BulletList';

type Props = {
  bullets?: string[];
  description?: string;
};

const HistoryItemDescription = ({ bullets, description }: Props) => {
  if (description) {
    return <p className="mt-2">{description}</p>
  }

  if (bullets?.length) {
    return <BulletList bullets={bullets} className="mt-2" />;
  }
};

export default HistoryItemDescription;

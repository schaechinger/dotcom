type Props = {
  items: React.ReactNode[];
  link?: React.ReactNode | false;
  error?: string;
};

const HistoryItemList = ({ items, link, error }: Props) => (
  <div className="-mt-4">
    {items}
    {!items?.length ? <p className="py-4">{error}</p> : null}
    {items.length && link}
  </div>
);

export default HistoryItemList;


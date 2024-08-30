import MessageBanner from '@/app/components/molecules/MessageBanner';

type Props = {
  items: React.ReactNode[];
  link?: React.ReactNode | false;
  error?: string;
};

const HistoryItemList = ({ items, link, error }: Props) => (
  <div className="-mt-4">
    {items}
    {!items?.length && <MessageBanner text={error} classname="mt-12" error />}
    {!!items.length && link}
  </div>
);

export default HistoryItemList;


type Props = {
  date?: React.ReactNode;
  heading?: string;
  title: React.ReactNode;
};

const HistoryItemHeader = ({ date, heading, title }: Props) => {
  const Heading = (heading || 'h3') as React.ElementType;

  return (
    <header className="history-item__header sm:flex items-center">
      {date && <div className="history-item__date text-sm font-normal sm:order-2">
        {date}
      </div>}
      <Heading className="text-h3 font-bold mb-0 sm:order-1">
        {title}
      </Heading>
    </header>
  );
};

export default HistoryItemHeader;

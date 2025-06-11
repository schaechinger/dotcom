import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  indented?: boolean;
};

const HistoryItemContent = ({ children, indented }: Props) => (
  <div className="sm:grid sm:grid-cols-9 gap-4">
    <div className={clsx(indented ? 'sm:col-start-3 sm:col-span-7 lg:col-start-3 lg:col-span-5' : 'sm:col-span-9')}>
      {children}
    </div>
  </div>
);

export default HistoryItemContent;

import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  indented?: boolean;
};

const HistoryItemContent = ({ children, indented }: Props) => (
  <div className="sm:grid sm:grid-cols-9 gap-4">
    <div className={clsx('sm:col-start-3', indented ? 'sm:col-span-7' : 'sm:col-span-9')}>
      {children}
    </div>
  </div>
);

export default HistoryItemContent;

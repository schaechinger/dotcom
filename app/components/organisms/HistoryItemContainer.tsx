type Props = {
  children: React.ReactNode;
  id?: string;
};

const HistoryItemContainer = ({ children, id }: Props) => (
  <article id={id} className="history-item max-w-screen-sm sm:hover:bg-primary-100 transition-colors sm:rounded-md my-4 -mx-4 px-4 py-4">
    {children}
  </article>
);

export default HistoryItemContainer;

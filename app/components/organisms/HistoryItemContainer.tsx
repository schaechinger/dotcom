type Props = {
  children: React.ReactNode;
  id?: string;
};

const HistoryItemContainer = ({ children, id }: Props) => (
  <article id={id} className="history-item max-w-screen-sm sm:hover:bg-secondary/10 sm:hover:dark:bg-primary/15 transition-colors sm:rounded-md my-4 -mx-4 px-4 py-4">
    {children}
  </article>
);

export default HistoryItemContainer;

type Props = {
  children: React.ReactNode;
  id?: string;
};

const HistoryItemContainer = ({ children, id }: Props) => (
  <article id={id} className="history-item sm:hover:bg-primary-light/10 sm:hover:dark:bg-primary-dark/15 transition-colors sm:rounded-md -mx-4 sm:-mx-3 my-8 px-4 sm:px-3 py-2">
    {children}
  </article>
);

export default HistoryItemContainer;

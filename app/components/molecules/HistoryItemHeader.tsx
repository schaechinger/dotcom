import Link from "../atoms/Link";
import ArrowRight from "../icons/ArrowRight";

type Props = {
  title: React.ReactNode;
  date?: React.ReactNode;
  heading?: string;
  link?: string;
};

const HistoryItemHeader = ({ date, heading, link, title }: Props) => {
  const Heading = (heading || 'h3') as React.ElementType;

  return (
    <header className="history-item__header sm:flex items-center">
      {date && <div className="history-item__date text-sm font-normal sm:order-2">
        {date}
      </div>}
      <Heading className="text-h3 font-bold mb-0 sm:order-1">
        {link ? (
          <Link href={link} className="group">
            {title}
            <ArrowRight className="inline-block transition-all text-secondary/60 dark:text-primary/60 group-hover:text-current group-hover:text-xl -rotate-45 -mt-1 ml-1 group-hover:ml-0.5" />
          </Link>
        ) : title}
      </Heading>
    </header>
  );
};

export default HistoryItemHeader;

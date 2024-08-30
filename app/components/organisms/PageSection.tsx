import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  id: string;
  className?: string;
  dense?: boolean;
  first?: boolean;
};

const PageSection = ({ children, className, dense, first, id }: Props) => (
  <section id={id} className={clsx(!first && dense && 'pt-10', !first && !dense && 'pt-4 lg:pt-10', !dense && 'pb-8', className)}>
    {children}
  </section>
);

export default PageSection;

import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  dense?: boolean;
  first?: boolean;
  id: string;
};

const PageSection = ({ children, dense, first, id }: Props) => (
  <section id={id} className={clsx(!first && dense && 'pt-10', !first && !dense && 'pt-4 lg:pt-10', !dense && 'pb-8')}>
    {children}
  </section>
);

export default PageSection;

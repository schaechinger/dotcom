import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  name?: string;
  narrow?: boolean;
};

const PageContainer = ({ children, name, narrow }: Props) => (
  <div className={clsx('pt-4 lg:pt-10', name && `${name}-page`, narrow && 'lg:max-w-screen-sm')}>
    {children}
  </div>
);

export default PageContainer;

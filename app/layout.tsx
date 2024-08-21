type Props = {
  children: React.ReactNode;
};

import '@/css/style.scss';

const RootLayout = ({ children }: Props) => (
  <>{children}</>
);

export default RootLayout;

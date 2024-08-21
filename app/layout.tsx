type Props = {
  children: React.ReactNode;
};

import '@/css/style.scss';

export const revalidate = 3600;

const RootLayout = ({ children }: Props) => (
  <>{children}</>
);

export default RootLayout;

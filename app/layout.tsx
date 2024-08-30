import type { LayoutProps } from '@app/interfaces';

import '@/css/style.scss';

export const revalidate = 3600;

export default function RootLayout({ children }: LayoutProps) {
  return children;
};

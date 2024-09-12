import type { LayoutProps } from '@app/interfaces';

import '@/css/style.scss';

export const revalidate = 28800; // 8 hours

export default function RootLayout({ children }: LayoutProps) {
  return children;
};

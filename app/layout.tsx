import '@/css/style.scss';

export const revalidate = 7 * 86400;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
};

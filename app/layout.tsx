import '@/css/style.scss';

export const revalidate = 86400;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
};

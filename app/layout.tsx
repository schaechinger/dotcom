import '@/css/style.scss';

export const revalidate = 604800;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return children;
};

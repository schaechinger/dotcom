export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export type PageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

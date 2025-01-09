import { type LocaleCode } from '@lib/router';

export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: LocaleCode }>;
};

export type PageProps = {
  params: Promise<{ locale: LocaleCode }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

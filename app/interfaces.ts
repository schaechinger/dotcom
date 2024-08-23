import { type LanguageCode } from '@/i18n';

export type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: LanguageCode;
  };
};

export type PageProps = {
  params: {
    locale: LanguageCode;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

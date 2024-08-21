import { LanguageCode } from '@lib/i18n';

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

export type ComponentProps = {
  lang: LanguageCode;
};

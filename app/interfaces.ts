import { LanguageCode } from '@lib/i18n';

export type LayoutProps = {
  children: React.ReactNode;
  params: {
    lang: LanguageCode;
  };
};

export type PageProps = {
  params: {
    lang: LanguageCode;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type ComponentProps = {
  lang: LanguageCode;
};

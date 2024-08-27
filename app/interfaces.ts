import { type LocaleCode } from '@lib/router';

export type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: LocaleCode;
  };
};

export type PageProps = {
  params: {
    locale: LocaleCode;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

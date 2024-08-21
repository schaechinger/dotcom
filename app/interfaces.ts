import { LanguageCode } from '@lib/i18n';

export interface LangPageProps {
  params: {
    lang: LanguageCode;
  };
}

export interface LangComponentProps {
  lang: LanguageCode;
}

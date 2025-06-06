'use client';

import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

import translations from '@/messages/language';
import { LANGUAGE_SUGGESTION_OPT_OUT } from '@app/config';
import { isBrowser, useLocalStorage } from '@app/utils';
import LinkButton from '@components/atoms/LinkButton';
import MenuClose from '@components/icons/MenuClose';
import MessageBanner from '@components/molecules/MessageBanner';
import { type LocaleCode, matchLocale, splitPath } from '@lib/router';

const LanguageSuggestion = () => {
  const pathname = usePathname();
  const { page } = splitPath(pathname);
  const locale = useLocale() as LocaleCode;

  const [suggestion, setSuggestion] = useState(locale);
  const localStorage = useLocalStorage();

  useEffect(() => {
    if (isBrowser()) {
      if (!+localStorage.getItem(LANGUAGE_SUGGESTION_OPT_OUT)) {
        const defaultLang = matchLocale(window.navigator.languages);

        setSuggestion(defaultLang !== locale ? defaultLang : locale);
      }
    }
  }, [localStorage, locale]);

  const hide = () => {
    localStorage.setItem(LANGUAGE_SUGGESTION_OPT_OUT, '1');

    setSuggestion(locale);
  };

  return suggestion !== locale && (
    <aside lang={suggestion} dir="ltr" className="language-suggestion pt-4 lg:max-w-screen-md">
      <MessageBanner classname="relative">
        <button
          onClick={hide}
          className="absolute right-3 top-1"
        >
          <MenuClose title={translations.suggestion.stay[suggestion]} />
          <span className="sr-only">{translations.suggestion.stay[suggestion]}</span>
        </button>
        <p className="pr-6">
          {translations.suggestion.text[suggestion]}
        </p>
        <p className="mt-2">
          <LinkButton
            href={page}
            locale={suggestion}
            label={translations.suggestion.goto[suggestion]}
          />
        </p>
      </MessageBanner>
    </aside>
  );
};

export default LanguageSuggestion;

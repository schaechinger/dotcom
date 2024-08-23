'use client';

import { match } from '@formatjs/intl-localematcher';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

import { splitPath, l, type LanguageCode, supportedLangs } from '@/i18n';
import { isBrowser, useLocalStorage } from '@app/utils';
import LinkButton from '@components/atoms/LinkButton';
import MenuClose from '@components/icons/MenuClose';
import translations from '@/messages/language';

const LANGUAGE_SUGGESTION_OPT_OUT = 'ls-opt-out';

const LanguageSuggestion = () => {
  const pathname = usePathname();
  const { page } = splitPath(pathname);
  const locale = useLocale() as LanguageCode;

  const [suggestion, setSuggestion] = useState(locale);
  const localStorage = useLocalStorage();

  useEffect(() => {
    if (isBrowser()) {
      if (!+localStorage.getItem(LANGUAGE_SUGGESTION_OPT_OUT)) {
        const defaultLang = match(window.navigator.languages, supportedLangs, 'en') as LanguageCode;

        setSuggestion(defaultLang !== locale ? defaultLang : locale);
      }
    }
  }, []);

  const hide = () => {
    localStorage.setItem(LANGUAGE_SUGGESTION_OPT_OUT, '1');

    setSuggestion(locale);
  };

  return suggestion !== locale && (
    <aside lang={suggestion} dir="ltr" className="language-suggestion pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section className="border-y sm:border-x border-primary-200 bg-primary-100 -mx-4 sm:rounded-md px-4 py-2 relative">
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
            href={l(page, suggestion)}
            label={translations.suggestion.goto[suggestion]}
          />
        </p>
      </section>
    </aside>
  );
};

export default LanguageSuggestion;
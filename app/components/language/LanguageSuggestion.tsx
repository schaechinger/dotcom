'use client';

import { match } from '@formatjs/intl-localematcher';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { l, type LanguageCode, supportedLangs } from '@/i18n';
import { isBrowser, useLocalStorage } from '@app/utils';
import type { ComponentProps } from '@app/interfaces';
import LinkButton from '@components/atoms/LinkButton';
import MenuClose from '@components/icons/MenuClose';
import translations from '@/messages/language';

const LANGUAGE_SUGGESTION_OPT_OUT = 'ls-opt-out';

const LanguageSuggestion = ({ lang }: ComponentProps) => {
  const pathname = usePathname();
  const parts = pathname.split('/');
  parts.splice(1, 1);
  const page = parts.join('/');

  const [suggestion, setSuggestion] = useState(lang);
  const localStorage = useLocalStorage();

  useEffect(() => {
    if (isBrowser()) {
      if (!+localStorage.getItem(LANGUAGE_SUGGESTION_OPT_OUT)) {
        const defaultLang = match(window.navigator.languages, supportedLangs, 'en') as LanguageCode;

        setSuggestion(defaultLang !== lang ? defaultLang : lang);
      }
    }
  }, []);

  const hide = () => {
    localStorage.setItem(LANGUAGE_SUGGESTION_OPT_OUT, '1');

    setSuggestion(lang);
  };

  return suggestion !== lang && (
    <aside lang={suggestion} className="language-suggestion pt-4 lg:pt-10 lg:max-w-screen-sm">
      <section className="border-y sm:border-x border-primary-200 bg-primary-100 -mx-4 sm:rounded-md px-4 py-2 relative">
        <button
          onClick={hide}
          className="absolute right-3 top-1"
        >
          <MenuClose />
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

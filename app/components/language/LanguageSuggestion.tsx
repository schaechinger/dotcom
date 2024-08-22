'use client';

import { match } from '@formatjs/intl-localematcher';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import type { ComponentProps } from '@app/interfaces';
import LinkButton from '@components/LinkButton';
import MenuClose from '@components/icons/MenuClose';
import translations from '@i18n/language';
import { _l, _t, type LanguageCode, supportedLangs } from '@lib/i18n';
import { isBrowser, useLocalStorage } from '@lib/utils';

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
        localStorage.setItem(LANGUAGE_SUGGESTION_OPT_OUT, '0');
        const defaultLang = match(window.navigator.languages, supportedLangs, 'de') as LanguageCode;

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
          {_t('suggestion.text', translations, suggestion)}
        </p>
        <p className="mt-2">
          <LinkButton
            href={_l(page, suggestion)}
            label={_t('suggestion.goto', translations, suggestion)}
          />
        </p>
      </section>
    </aside>
  );
};

export default LanguageSuggestion;

import Link from 'next/link';

import type { LangComponentProps } from '@app/interfaces';
import HeartEmpty from '@components/icons/HeartEmpty';
import LanguageSelection from '@components/language/LanguageSelection';
import SocialLinks from '@components/layout/SocialLinks';
import SnesButtons from '@components/mario/SnesButtons';
import { _l, _t, loadTranslations } from '@lib/i18n';

const Footer = async ({ lang }: LangComponentProps) => {
  const translations = await loadTranslations('components.footer', lang);

  return (
    <footer className="footer mb-6 mt-10 sm:text-left text-sm">
      <SnesButtons />

      <div className="mt-6 mb-4">
        <SocialLinks />
      </div>

      <div className="my-4">
        <LanguageSelection lang={lang} />
      </div>

      <ul className="flex justify-start gap-4 my-4">
        <li>
          <Link href={_l('imprint', lang)} className="font-normal">
            {_t('imprint', translations, lang)}
          </Link>
        </li>
        <li>
          <Link href={_l('privacy', lang)} className="font-normal">
            {_t('privacy', translations, lang)}
          </Link>
        </li>
      </ul>
      <p className="footer__copyright mb-2">
        &copy; { new Date().getFullYear() } Manuel Schächinger. {_t('rights', translations, lang)}
      </p>
      <p className="footer__love">{_t('dev.0', translations, lang)}<HeartEmpty
        className="text-lg -mt-1 mx-1 text-snes-a"
      />{_t('dev.1', translations, lang)}</p>
    </footer>
  );
};

export default Footer;

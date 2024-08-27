import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import HeartEmpty from '@components/icons/HeartEmpty';
import LanguageSelection from '@components/language/LanguageSelection';
import SnesButtons from '@components/mario/SnesButtons';
import SocialLinks from '@components/molecules/SocialLinks';
import { l, type LocaleCode } from '@lib/router';

const Footer = () => {
  const t = useTranslations('layout.footer');
  const locale = useLocale() as LocaleCode;

  return (
    <footer className="footer mb-6 mt-10 sm:text-left text-sm">
      <SnesButtons />

      <div className="mt-6 mb-4">
        <SocialLinks />
      </div>

      <div className="my-4">
        <LanguageSelection />
      </div>

      <ul className="flex justify-start gap-4 my-4">
        {['imprint', 'privacy'].map((page) => (
          <li key={page}>
            <Link href={l(page, locale)} className="font-normal">{t(page)}</Link>
          </li>
        ))}
      </ul>
      <p className="footer__copyright mb-2">
        {t('copyright', { year: new Date().getFullYear() })}
      </p>
      <p className="footer__love">
        {t.rich('dev', {
          love: (_chunk: React.ReactNode) => <HeartEmpty className="text-lg -mt-1 mx-1 text-snes-a" />,
        })}
      </p>
    </footer>
  );
};

export default Footer;

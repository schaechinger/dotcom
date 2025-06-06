import { useTranslations } from 'next-intl';

import { CORE_TECHNOLOGIES, LEGAL_NAVIGATION } from '@app/config';
import Link from '@components/atoms/Link';
import SnesButtons from '@components/atoms/SnesButtons';
import HeartEmpty from '@components/icons/HeartEmpty';
import LanguageSelection from '@components/molecules/LanguageSelection';
import SocialLinks from '@components/molecules/SocialLinks';

const Footer = () => {
  const t = useTranslations('layout.footer');
  const sectionClassName = 'font-bold mb-2 text-base';

  return (
    <footer className="footer flex flex-col gap-8 mb-6 mt-10 sm:text-left text-sm lg:max-w-screen-md">
      <SnesButtons />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
        <div>
          <p className={sectionClassName}>{t('social')}</p>
          <SocialLinks />
        </div>

        <div>
          <p className={sectionClassName}>{t('languages')}</p>
          <LanguageSelection />
        </div>

        <div>
          <p className={sectionClassName}>{t('legal')}</p>
          <ul className="flex flex-col gap-2 sm:gap-0 justify-center">
            {LEGAL_NAVIGATION.map((page) => (
              <li key={page} className="py-1.5">
                <Link href={`/${page}`} className="font-normal">{t(page as 'imprint')}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="footer__copyright mb-2">
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
        <p className="footer__love">
          {t.rich('dev', {
            love: (_chunk: React.ReactNode) => <HeartEmpty className="text-lg -mt-1 mx-1 text-snes-a" />,
            tech: () => (CORE_TECHNOLOGIES.map(({ name, href }, i) => (
              <span key={name}><Link href={href} className="font-normal">{name}</Link>{2 > i && <>,&nbsp;</>}</span>
            ))),
          })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

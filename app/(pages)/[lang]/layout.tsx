import type { Metadata } from 'next';

import { clearSans } from '@app/font';
import type { LangPageProps } from '@app/interfaces';
import Provider from '@app/provider';
import LanguageSuggestion from '@components/language/LanguageSuggestion';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { _t, getPageAlternates, loadTranslations, supportedLangs } from '@lib/i18n';

export const revalidate = 3600;

export const generateMetadata = async ({ params: { lang } }: LangPageProps): Promise<Metadata> => {
  const translations = await loadTranslations('general', lang);

  return {
    title: {
      template: '%s – Manuel Schächinger',
      default: 'Manuel Schächinger',
    },
    description: _t('meta.description', translations, lang),
    alternates: getPageAlternates('/', lang),
    metadataBase: new URL('https://www.schaechinger.com'),
    openGraph: {
      images: '/images/opengraph-schaechinger.jpg',
      type: 'website',
    },
  };
};

export const generateStaticParams = () => supportedLangs.map((lang) => ({ lang }));

interface Props extends LangPageProps {
  children: React.ReactNode;
}

const RootLayout = ({ children, params: { lang } }: Props) => (
  <html className={`${clearSans.className} dark`} style={{ colorScheme: 'dark' }} lang={lang}>
      <head>
        <link type="text/plain" rel="author" href="https://www.schaechinger.com/humans.txt" />
      </head>
      <body className="dark:text-dark-200 dark:bg-dark-800">
        <Provider>
          <div className="lg:flex lg:gap-8 w-full max-w-screen-xl mx-auto">
            <Header lang={lang} />

            <div className="lg:flex-auto lg:w-3/4 px-4 sm:px-10 md:px-20 lg:px-4">
              <main className="min-h-screen">
                <LanguageSuggestion lang={lang} />
                {children}
              </main>

              <Footer lang={lang} />
            </div>
          </div>
        </Provider>
      </body>
  </html>
);

export default RootLayout;

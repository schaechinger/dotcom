import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';

import { clearSans } from '@app/font';
import type { LayoutProps } from '@app/interfaces';
import Provider from '@app/provider';
import LanguageSuggestion from '@components/language/LanguageSuggestion';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { type LanguageCode } from '@lib/i18n';

import '@/css/style.scss';

export const revalidate = 3600;

export const generateMetadata = async ({ params: { lang } }: LayoutProps): Promise<Metadata> => {
  const t = await getTranslations('general');

  return {
    title: {
      template: '%s – Manuel Schächinger',
      default: 'Manuel Schächinger',
    },
    description: t('meta.description'),
    metadataBase: new URL('https://www.schaechinger.com'),
    openGraph: {
      images: '/images/opengraph-schaechinger.jpg',
      type: 'website',
    },
  };
};

const RootLayout = async ({ children }: LayoutProps) => {
  const messages = await getMessages();
  const lang = (await getLocale()) as LanguageCode || 'en';

  return (
    <html className={`${clearSans.className} dark`} style={{ colorScheme: 'dark' }} lang={lang}>
      <head>
        <link type="text/plain" rel="author" href="https://www.schaechinger.com/humans.txt" />
      </head>
      <body className="dark:text-dark-200 dark:bg-dark-800">
        <NextIntlClientProvider messages={messages}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

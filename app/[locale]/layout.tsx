import clsx from 'clsx';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { supportedLangs, WEB_HOST } from '@app/config';
import { clearSans } from '@app/font';
import type { LayoutProps } from '@app/interfaces';
import Provider from '@app/provider';
import Footer from '@components/organisms/Footer';
import Header from '@components/organisms/Header';
import LanguageSuggestion from '@components/organisms/LanguageSuggestion';

import '@/css/style.scss';

export const generateStaticParams = () => (
  supportedLangs.map((locale) => ({ locale }))
);

export const generateMetadata = async ({ params: { locale } }: LayoutProps): Promise<Metadata> => {
  const t = await getTranslations('general');

  return {
    title: {
      template: '%s – Manuel Schächinger',
      default: t('meta.title'),
    },
    description: t('meta.description'),
    metadataBase: new URL(WEB_HOST),
    authors: {
      name: 'Manuel Schächinger',
      url: 'https://www.schaechinger.com',
    },
    openGraph: {
      images: {
        url: `${WEB_HOST}/images/opengraph-schaechinger.jpg`,
        width: 2400,
        height: 1260,
      },
      siteName: 'Manuel Schächinger',
      type: 'website',
      locale,
    },
  };
};

const RootLayout = async ({ children, params: { locale } }: LayoutProps) => {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html className={clsx(clearSans.className/*, bestChoice.variable*/)} lang={locale} dir="ltr">
      <head>
        <link type="text/plain" rel="author" href={`${WEB_HOST}/humans.txt`} />
      </head>
      <body className="text-dark-950 dark:text-dark-200 bg-dark-50 dark:bg-dark-800 font-sans">
        <NextIntlClientProvider messages={messages}>
          <Provider>
            <div className="lg:flex lg:gap-8 w-full max-w-screen-xl mx-auto">
              <Header />

              <div className="lg:flex-auto lg:w-3/4 px-4 sm:px-10 md:px-20 lg:px-4">
                <main className="min-h-screen">
                  <LanguageSuggestion />
                  {children}
                </main>

                <Footer />
              </div>
            </div>
          </Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import clsx from 'clsx';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { supportedLangs } from '@/i18n';
import { WEB_HOST } from '@app/config';
import { clearSans } from '@app/font';
import type { LayoutProps } from '@app/interfaces';
import Provider from '@app/provider';
import LanguageSuggestion from '@components/language/LanguageSuggestion';
import Footer from '@/app/components/organisms/Footer';
import Header from '@/app/components/organisms/Header';

import '@/css/style.scss';

export const revalidate = 3600;

export const generateStaticParams = () => (
  supportedLangs.map((locale) => ({ locale }))
);

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('general');

  return {
    title: {
      template: '%s – Manuel Schächinger',
      default: 'Manuel Schächinger',
    },
    description: t('meta.description'),
    metadataBase: new URL(WEB_HOST),
    openGraph: {
      images: '/images/opengraph-schaechinger.jpg',
      type: 'website',
    },
  };
};

const RootLayout = async ({ children, params: { locale } }: LayoutProps) => {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html className={clsx(clearSans.className, 'dark')} style={{ colorScheme: 'dark' }} lang={locale} dir="ltr">
      <head>
        <link type="text/plain" rel="author" href={`${WEB_HOST}/humans.txt`} />
      </head>
      <body className="dark:text-dark-200 dark:bg-dark-800">
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

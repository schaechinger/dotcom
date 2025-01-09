import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { supportedLangs, WEB_HOST } from '@app/config';
import { clearSans } from '@app/font';
import type { LayoutProps } from '@app/interfaces';
import Footer from '@components/organisms/Footer';
import Header from '@components/organisms/Header';
import LanguageSuggestion from '@components/organisms/LanguageSuggestion';
import ThemeProvider from '@components/organisms/ThemeProvider';

export const generateStaticParams = () => (
  supportedLangs.map((locale) => ({ locale }))
);

export const generateMetadata = async ({ params }: LayoutProps): Promise<Metadata> => {
  const { locale } = await params;
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

const RootLayout = async ({ children, params }: LayoutProps) => {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return (
    <html className={clearSans.variable} lang={locale} dir="ltr" suppressHydrationWarning>
      <head>
        <link type="text/plain" rel="author" href={`${WEB_HOST}/humans.txt`} />
      </head>
      <body className="text-dark-950 dark:text-dark-200 bg-dark-50 dark:bg-dark-800 font-sans">
        <ThemeProvider>
          <NextIntlClientProvider>
            <div className="w-full mx-auto">
              <Header className="max-w-screen-lg" />

              <div className="max-w-screen-lg mx-auto">
                <div className="px-4 sm:px-10 md:px-20 lg:px-4">
                  <main className="min-h-screen">
                    <LanguageSuggestion />
                    {children}
                  </main>

                  <Footer />
                </div>
              </div>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

import type { Metadata } from 'next';

import { clearSans } from '@app/font';
import Provider from '@app/provider';
import { locale } from '@app/utils';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import '@/css/style.scss';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    template: '%s – Manuel Schächinger',
    default: 'Manuel Schächinger',
  },
  description: 'Senior Fullstack JavaScript Engineer und Berater für komplexe und skalierbare Softwaresysteme in München.',
  metadataBase: new URL('https://www.schaechinger.com'),
  openGraph: {
    images: '/opengraph-image.jpg',
  },
};

type Props = {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html className={`${clearSans.className} light`} style={{ colorScheme: 'light' }} lang={locale}>
      <body className="dark:text-dark-200 dark:bg-dark-800">
      <Provider>
        <div className="lg:flex lg:gap-8 w-full max-w-screen-xl mx-auto">
          <Header />

          <div className="lg:flex-auto lg:w-3/4 px-4 sm:px-10 md:px-20 lg:px-4">
            <main className="min-h-screen">
              {children}
            </main>

            <Footer />
          </div>
        </div>
      </Provider>
      </body>
  </html>
);

export default RootLayout;

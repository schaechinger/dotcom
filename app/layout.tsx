import type { Metadata } from 'next';

import { locale } from '@app/utils';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

import '@/css/style.scss';
import Provider from './provider';

export const revalidate = 600;

export const metadata: Metadata = {
  title: {
    template: '%s – Manuel Schächinger',
    default: 'Manuel Schächinger',
  },
  description: 'Freiberuflicher Fullstack JavaScript Engineer und Berater für komplexe Softwaresysteme aus München.',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className="light" style={{ colorScheme: 'light' }} lang={locale}>
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

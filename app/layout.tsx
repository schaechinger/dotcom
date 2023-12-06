import type { Metadata } from 'next';

import Footer from '@/app/components/Footer';
import Sidebar from '@/app/components/Sidebar';
import { locale } from '@/services/utils';

import '@/css/style.scss';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: {
    template: '%s – Manuel Schächinger',
    default: 'Manuel Schächinger',
  },
  description: 'Fullstack JavaScript Engineer für skalierbare und performance-kritische Anwendungen.',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html className="dark" lang={locale}>
    <body className="dark:text-dark-200 dark:bg-dark-800">
      <div className="lg:flex lg:gap-8 w-full max-w-screen-xl mx-auto">
        <Sidebar />

        <div className="lg:flex-auto lg:w-3/4 px-4 sm:px-10 md:px-20 lg:px-4">
          <main className="min-h-screen">
            {children}
          </main>

          <Footer />
        </div>
      </div>
    </body>
  </html>
);

export default RootLayout;

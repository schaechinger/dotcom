import { clearSans } from '@app/font';
import Provider from '@app/provider';
import LinkButton from '@components/LinkButton';
import KonamiCode from '@components/KonamiCode';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import { _l } from './lib/i18n';

export default async function NotFound() {
  const lang = 'de';

  return (
    <html className={`${clearSans.className} dark`} style={{ colorScheme: 'dark' }} lang={lang}>
      <body className="dark:text-dark-200 dark:bg-dark-800">
        <Provider>
          <div className="lg:flex lg:gap-8 w-full max-w-screen-xl mx-auto">
            <Header lang={lang} />

            <div className="lg:flex-auto lg:w-3/4 px-4 sm:px-10 md:px-20 lg:px-4">
              <main className="min-h-screen">
                <div className="not-found-page page--error pt-4 lg:pt-10 lg:max-w-screen-sm">
                <section id="not-found">
                  <h1>Seite nicht gefunden</h1>

                  <p className="mb-4">
                    Hier geht es nicht weiter, bitte geh zur Startseite
                    oder wähle einen passenden Punkt aus dem Menü aus.
                  </p>

                  <LinkButton href={_l('/', lang)} label="Zur Startseite" />

                  <KonamiCode />
                </section>
                </div>
              </main>

              <Footer lang={lang} />
            </div>
          </div>
        </Provider>
      </body>
  </html>
  );
};

import KonamiCode from '@/app/components/KonamiCode';
import LinkButton from '@/app/components/LinkButton';

const NotFound = () => (
  <div className="not-found-page pt-4 lg:pt-10 lg:mr-80">
    <section>
      <h2>404 &ndash; Seite nicht gefunden</h2>

      <p className="mb-4">
        Hier geht es nicht weiter, bitte gehen Sie zur Startseite oder wählen Sie einen
        passenden Punkt aus dem Menü aus.
      </p>

      <p>
        <LinkButton href="/" label="Zur Startseite" />
      </p>

      <KonamiCode />
    </section>
  </div>
);

export default NotFound;

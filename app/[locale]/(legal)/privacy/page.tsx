import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { generatePageMeta, l } from '@/i18n';
import type { PageProps } from '@app/interfaces';
import Address from '@components/atoms/Address';
import BulletList from '@components/atoms/BulletList';
import LinkButton from '@components/atoms/LinkButton';
import PageContainer from '@components/organisms/PageContainer';
import PageSection from '@components/organisms/PageSection';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const t = await getTranslations('pages.privacy');

  return {
    ...generatePageMeta('/privacy', locale),
    title: t('title'),
    description: t('description'),
  };
};

const PrivacyPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('pages.privacy');

  return (
    <PageContainer name="privacy">
      <PageSection id="privacy" first dense>
        <h1 className="text-h1">{t('title')}</h1>

        <h2 className="text-h2">Inhaltsverzeichnis</h2>

        <BulletList>
          <Link href="#owner">Verantwortlicher</Link>
          <Link href="#revocation">Widerruf deiner Einwilligung zur Datenverarbeitung</Link>
          <Link href="#complaint">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</Link>
          <Link href="#data-transfer">Recht auf Datenübertragbarkeit</Link>
          <Link href="#information">Recht auf Auskunft, Berichtigung, Sperrung und Löschung</Link>
          <Link href="#ssl">SSL- bzw. TLS-Verschlüsselung</Link>
          <Link href="#logs">Server-Log-Dateien</Link>
          <Link href="#contact">Kontaktformular</Link>
          <Link href="#cookies">Cookies</Link>
        </BulletList>
      </PageSection>

      <PageSection id="owner" dense>
        <h2 className="text-h2">Verantwortlicher</h2>

        <p className="mb-4">
          <Address />
        </p>

        <p>
          <LinkButton href={l('/imprint', locale)} label={t('imprint')} />
        </p>
      </PageSection>

      <PageSection id="revokation" dense>
        <h2 className="text-h2">Widerruf deiner Einwilligung zur Datenverarbeitung</h2>

        <p>
          Nur mit deiner ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung
          möglich. Ein Widerruf deiner bereits erteilten Einwilligung ist jederzeit möglich.
          Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis
          zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
      </PageSection>

      <PageSection id="complaint" dense>
        <h2 className="text-h2">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h2>

        <p>
          Als Betroffener steht dir im Falle eines datenschutzrechtlichen Verstoßes ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde
          bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des
          Bundeslandes, in dem sich der Sitz meines Unternehmens befindet. Der folgende Link
          stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a
            href="https://www.bfdi.bund.de" target="_blank">www.bfdi.bund.de</a>
        </p>
      </PageSection>

      <PageSection id="data-transfer" dense>
        <h2 className="text-h2">Recht auf Datenübertragbarkeit</h2>

        <p>
          Dir steht das Recht zu, Daten, die ich auf Grundlage deiner Einwilligung oder in
          Erfüllung eines Vertrags automatisiert verarbeite, an dich oder an Dritte aushändigen zu
          lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern du die
          direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies
          nur, soweit es technisch machbar ist.
        </p>
      </PageSection>

      <PageSection id="information" dense>
        <h2 className="text-h2">Recht auf Auskunft, Berichtigung, Sperrung und Löschung</h2>

        <p>
          Du hast jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf
          unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, Herkunft der
          Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
          Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren
          Fragen zum Thema personenbezogene Daten kannst du dir jederzeit über die im Impressum
          aufgeführten Kontaktmöglichkeiten an mich wenden.
        </p>
      </PageSection>

      <PageSection id="ssl" dense>
        <h2 className="text-h2">SSL- bzw. TLS-Verschlüsselung</h2>

        <p>
          Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die du an
          mich als Seitenbetreiber senden, nutzt meine Website eine SSL- bzw. TLS-Verschlüsselung.
          Damit sind Daten, die du über diese Website übermitteln, für Dritte nicht mitlesbar.
          Du erkennst eine verschlüsselte Verbindung an der „https://“ Adresszeile deines Browsers
          und am Schloss-Symbol in der Browserzeile.
        </p>
      </PageSection>

      <PageSection id="logs" dense>
        <h2 className="text-h2">Server-Log-Dateien</h2>

        <p className="mb-2">
          In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch
          Informationen, die dein Browser automatisch an mich übermittelt. Dies sind:
        </p>

        <BulletList bullets={[
          'Besuchte Seite auf meiner Domain',
          'Datum und Uhrzeit der Serveranfrage',
          'Browsertyp und Browserversion',
          'Verwendetes Betriebssystem',
          'Referrer URL',
          'Hostname des zugreifenden Rechners',
          'IP-Adresse',
        ]} />

        <p className="mt-2">
          Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage
          der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten
          zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
        </p>
      </PageSection>

      <PageSection id="contact" dense>
        <h2 className="text-h2">Kontaktformular</h2>

        <p className="mb-2">
          Per Kontaktformular übermittelte Daten werden einschließlich deine Kontaktdaten
          gespeichert, um dein Anfrage bearbeiten zu können oder um für Anschlussfragen
          bereitzustehen. Eine Weitergabe dieser Daten findet ohne deine Einwilligung nicht statt.
        </p>

        <p className="mb-2">
          Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich
          auf Grundlage deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf deiner bereits
          erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose
          Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
          Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
        </p>

        <p>
          Über das Kontaktformular übermittelte Daten verbleiben bei mir, bis du mich zur Löschung
          aufforderst, deine Einwilligung zur Speicherung widerrufst oder keine Notwendigkeit der
          Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen – insbesondere
          Aufbewahrungsfristen – bleiben unberührt.
        </p>
      </PageSection>

      <section id="cookies" className="pt-10">
        <h2 className="text-h2">Cookies</h2>

        <p className="mb-2">
          Meine Website verwendet Cookies. Das sind kleine Textdateien, die dein Webbrowser auf
          deinem Endgerät speichert. Cookies helfen mir dabei, mein Angebot nutzerfreundlicher,
          effektiver und sicherer zu machen.
        </p>

        <p className="mb-2">
          Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende deiner
          Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf deinem Endgerät
          bestehen, bis du diese selbst löschen. Solche Cookies helfen mir, dich bei Rückkehr auf
          meine Website wiederzuerkennen.
        </p>

        <p className="mb-2">
          Mit einem modernen Webbrowser kannst du das Setzen von Cookies überwachen, einschränken
          oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem
          Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann
          eine eingeschränkte Funktionalität meiner Website zur Folge haben.
        </p>

        <p>
          Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der
          Bereitstellung bestimmter, von dir erwünschter Funktionen (z.B. Warenkorb) notwendig
          sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website
          habe ich ein berechtigtes Interesse an der Speicherung von Cookies zur technisch
          fehlerfreien und reibungslosen Bereitstellung meiner Dienste. Sofern die Setzung anderer
          Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung
          separat behandelt.
        </p>
      </section>
    </PageContainer>
  );
};

export default PrivacyPage;

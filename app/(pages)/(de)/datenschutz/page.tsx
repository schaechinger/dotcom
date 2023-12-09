import LinkButton from '@/app/components/LinkButton';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutz',
};

const PrivacyPage = () => (
  <div className="privacy-page pt-4 lg:pt-10">
    <section id="datenschutz">
      <h2>Datenschutz</h2>

      <h3>Inhaltsverzeichnis</h3>

      <ul className="list-disc ml-5">
        <li><Link href="#verantwortlicher">Verantwortlicher</Link></li>
        <li><Link href="#widerruf">Widerruf deiner Einwilligung zur Datenverarbeitung</Link></li>
        <li><Link href="#beschwerde">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</Link></li>
        <li><Link href="#datenuebertragbarkeit">Recht auf Datenübertragbarkeit</Link></li>
        <li><Link href="#auskunft">Recht auf Auskunft, Berichtigung, Sperrung und Löschung</Link></li>
        <li><Link href="#ssl">SSL- bzw. TLS-Verschlüsselung</Link></li>
        <li><Link href="#logs">Server-Log-Dateien</Link></li>
        <li><Link href="#kontakt">Kontaktformular</Link></li>
        <li><Link href="#cookies">Cookies</Link></li>
      </ul>
    </section>

    <section id="verantwortlicher" className="pt-10">
      <h3>Verantwortlicher</h3>

      <p className="mb-4">
        Manuel Schächinger<br />
        An der Ottosäule 16<br />
        85521 Ottobrunn
      </p>

      <p>
        <LinkButton href="/impressum" label="Impressum" />
      </p>
    </section>

    <section id="widerruf" className="pt-10">
      <h3>Widerruf deiner Einwilligung zur Datenverarbeitung</h3>

      <p>
        Nur mit deiner ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung
        möglich. Ein Widerruf deiner bereits erteilten Einwilligung ist jederzeit möglich.
        Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis
        zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>
    </section>

    <section id="beschwerde" className="pt-10">
      <h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>

      <p>
        Als Betroffener steht dir im Falle eines datenschutzrechtlichen Verstoßes ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde
        bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des
        Bundeslandes, in dem sich der Sitz meines Unternehmens befindet. Der folgende Link
        stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a
          href="https://www.bfdi.bund.de" target="_blank">www.bfdi.bund.de</a>
      </p>
    </section>

    <section id="datenuebertragbarkeit" className="pt-10">
      <h3>Recht auf Datenübertragbarkeit</h3>

      <p>
        Dir steht das Recht zu, Daten, die ich auf Grundlage deiner Einwilligung oder in
        Erfüllung eines Vertrags automatisiert verarbeite, an dich oder an Dritte aushändigen zu
        lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern du die
        direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies
        nur, soweit es technisch machbar ist.
      </p>
    </section>

    <section id="auskunft" className="pt-10">
      <h3>Recht auf Auskunft, Berichtigung, Sperrung und Löschung</h3>

      <p>
        Du hast jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf
        unentgeltliche Auskunft über deine gespeicherten personenbezogenen Daten, Herkunft der
        Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
        Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren
        Fragen zum Thema personenbezogene Daten kannst du dir jederzeit über die im Impressum
        aufgeführten Kontaktmöglichkeiten an mich wenden.
      </p>
    </section>

    <section id="ssl" className="pt-10">
      <h3>SSL- bzw. TLS-Verschlüsselung</h3>

      <p>
        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die du an
        mich als Seitenbetreiber senden, nutzt meine Website eine SSL- bzw. TLS-Verschlüsselung.
        Damit sind Daten, die du über diese Website übermitteln, für Dritte nicht mitlesbar.
        Du erkennst eine verschlüsselte Verbindung an der „https://“ Adresszeile deines Browsers
        und am Schloss-Symbol in der Browserzeile.
      </p>
    </section>

    <section id="logs" className="pt-10">
      <h3>Server-Log-Dateien</h3>

      <p className="mb-2">
        In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch
        Informationen, die dein Browser automatisch an mich übermittelt. Dies sind:
      </p>

      <ul className="list-disc ml-5 mb-2">
        <li>Besuchte Seite auf meiner Domain</li>
        <li>Datum und Uhrzeit der Serveranfrage</li>
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>IP-Adresse</li>
      </ul>

      <p>
        Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage
        der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten
        zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
      </p>
    </section>

    <section id="kontakt" className="pt-10">
      <h3>Kontaktformular</h3>

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
    </section>

    <section id="cookies" className="pt-10">
      <h3>Cookies</h3>

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
  </div>
);

export default PrivacyPage;

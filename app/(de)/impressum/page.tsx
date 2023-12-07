import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum',
};

const ImprintPage = () => (
  <div className="imprint-page pt-4 lg:pt-10">
    <section id="impressum">
      <h2>Impressum</h2>

      <h3>Eigentümer gemäß § 5 TMG</h3>

      <p className="mb-2">
        Manuel Schächinger<br />
        An der Ottosäule 16<br />
        85521 Ottobrunn
      </p>
      <p className="mb-2">
        USt-IdNr. gem. § 27a UStG: DE324539715
      </p>

      <p className="mb-2">
        <a href="mailto:manuel@schaechinger.com">E-Mail senden</a><br />
        <a href="tel:+4916097506593">+49 160 97506593</a>
      </p>

      <p>
        <strong>Online-Streitbeilegung:</strong> Die Europäische Kommission stellt eine Plattform
        zur Online-Streitbeilegung (OS) bereit, die Sie unter <a
          href="https://ec.europa.eu/consumers/odr" target="_blank" className="inline-link"
        >ec.europa.eu/consumers/odr</a> finden.
        Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten
        zu nutzen.<br />
        Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        sind wir nicht verpflichtet und nicht bereit.
      </p>
    </section>

    <section id="haftungsausschluss" className="pt-10">
      <h3>Haftung für Inhalte</h3>

      <p className="mb-2">
        <strong>Haftungsausschluss:</strong> Die Inhalte dieses Onlineangebotes
        wurden sorgfältig und nach meinem aktuellen Kenntnisstand erstellt, dienen jedoch nur der
        Information und entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um
        gesetzlich verpflichtende Informationen (z.B. das Impressum, die Datenschutzerklärung,
        AGB oder verpflichtende Belehrungen von Verbrauchern) handelt. Ich behalte mir vor, die
        Inhalte vollständig oder teilweise zu ändern oder zu löschen, soweit vertragliche
        Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und unverbindlich.
      </p>

      <p className="mb-2">
        <strong>Links auf fremde Webseiten:</strong> Die Inhalte fremder Webseiten, auf die ich
        direkt oder indirekt verweise, liegen außerhalb meines Verantwortungsbereiches und ich
        mache sie mir nicht zu Eigen. Für alle Inhalte und Nachteile, die aus der Nutzung der in
        den verlinkten Webseiten aufrufbaren Informationen entstehen, übernehme ich keine
        Verantwortung.
      </p>

      <p className="mb-2">
        <strong>Urheberrechte und Markenrechte:</strong> Alle auf dieser Website
        dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind
        durch die jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die Verwendung,
        Vervielfältigung usw. unterliegen meinen Rechten oder den Rechten der jeweiligen Urheber
        bzw. Rechteinhaber.</p>

      <p>
        <strong>Hinweise auf Rechtsverstöße:</strong> Sollten Sie innerhalb meines
        Internetauftritts Rechtsverstöße bemerken, bitte ich Sie mich auf diese hinzuweisen.
        Ich werde rechtswidrige Inhalte und Links nach Kenntnisnahme unverzüglich entfernen.
      </p>
    </section>
  </div>
);

export default ImprintPage;
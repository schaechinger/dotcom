import { Metadata } from 'next';

import LinkButton from '@components/LinkButton';

export const metadata: Metadata = {
  title: 'Gehen wir es an!',
};

const ResumePage = () => (
  <div className="resume-page pt-4 lg:pt-10 lg:mr-80">
    <section id="taetigkeit">
      <h2>Tätigkeit</h2>

      <p>
        Im Rahmen meiner freiberuflichen Tätigkeit kann ich entweder auf Stundenbasis oder auf
        Wunsch auf Paketbasis arbeiten. Dabei biete ich verschiedene Leistungen an:
      </p>

      <div className="mt-6">
        <h3>Umsetzung</h3>

        <p className="mb-2">
          Ich unterstütze aktiv die Implementierung des Projekts und nutze meine Fähigkeiten,
          um das bestmögliche Produkt zu erhalten.
        </p>

        <p>
          Meist im JavaScript-Umfeld, sowohl im Backend mit Node.js und TypeScript als auch
          im Frontend mit React und SASS.
        </p>
      </div>

      <div className="mt-6">
        <h3>Konzeption & Architektur</h3>

        <p className="mb-2">
          Noch vor der ersten Zeile Code steht die durchdachte Konzeption der Projektbasis und
          die Planung der Architektur an.
        </p>

        <p>
          Hier helfe ich beim Entwurf einer leistungsfähigen und langlebigen Software
          Architektur und einem stimmigen Gesamtkonzept.
        </p>
      </div>

      <div className="mt-6">
        <h3>Beratung</h3>

        <p className="mb-2">
          Hier geht es um die Überwindung von aufgetretenen Problemen, der Migration von
          Systemen oder einer beliebigen anderen Herausforderung.
        </p>

        <p>
          Kontaktieren Sie mich gere mit Ihrem speziellen Anliegen, um gemeinsam eine
          Lösung zu finden.
        </p>
      </div>

      <p className="mt-4">
        <LinkButton href="/projekte">Meine bisherigen Projekte</LinkButton>
      </p>
    </section>
  </div>
);

export default ResumePage;

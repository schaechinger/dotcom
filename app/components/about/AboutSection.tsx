import LinkButton from '@components/LinkButton';
import HighlightLabel from '../HighlightLabel';

const AboutSection = () => (
  <section id="ueber-mich" className="pt-4 lg:pt-10 mb-8">
    <h2>Servus, ich bin Manuel.</h2>

    <p className="mb-2">
      Seit über 10 Jahren entwickle ich professionelle Anwendungen sowohl im Backend als auch
      im Frontend. Ich habe mich auf <HighlightLabel>JavaScript</HighlightLabel
      > spezialisiert, da diese Sprache ein fast grenzenloses Spektrum an
      Möglichkeiten und Einsatzgebieten ermöglicht.
    </p>

    <p className="mb-2">
      Meine Aufgabenbereiche erstrecken sich über komplexe APIs mit <HighlightLabel
        >Node.js</HighlightLabel>, performante Frontends mit <HighlightLabel
        >Vue</HighlightLabel> und <HighlightLabel>React</HighlightLabel>, Absicherung
        von Systemen sowie Deployment und Übergabe an Kunden.
    </p>

    <p className="mb-4">
      Abseits der Arbeit bin ich leidenschaftlicher Läufer. Mein großes Ziel ist die
      Teilnahmen an den sechs großen Marathons der Welt, von denen ich bis auf Boston
      schon fünf abschließen konnte.
    </p>

    <p>
      <LinkButton href="/taetigkeit" label="Mehr zu meiner Tätigkeit" />
    </p>
  </section>
);

export default AboutSection;

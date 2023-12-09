import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import LinkButton from '@components/LinkButton';
import ProjectMasterData from '@components/projects/ProjectMasterData';
import { loadProjectBySlug } from '@/app/lib/contentful';
import { ProjectPageProps } from '../[slug]/page';

export async function generateMetadata(
  { params }: ProjectPageProps,
): Promise<Metadata> {
  const metadata: Metadata = {
    title: 'Projektdetails',
  };

  const project = await loadProjectBySlug('internetmarke');

  if (project) {
    metadata.title = project.title;
    metadata.description = project.description;
  }

  return metadata;
};

const InternetmarkePage = async () => {
  const project = await loadProjectBySlug('internetmarke');

  if (!project) {
    return notFound();
  }

  return (
    <div className="project-page pt-4 lg:pt-10">
      <ProjectMasterData project={project} />

      <section id="intro" className="pt-10">
        <h3>Was ist eine Internetmarke</h3>

        <p className="mb-2">
          Internetmarke ist ein Produkt der Deutschen Post, die Privat- wie auch Geschäftskunden
          die Möglichkeit bietet, Porto für Briefe digital zu erstellen.
        </p>

        <p>
          Eine Internetmarke kann im Adressformat für den Briefkopf oder als Frankierversion
          auf ein Kuvert generiert werden. Beide Varianten gibt es dann sowohl als PNG als auch
          als PDF für Etikettendrucker.
        </p>
      </section>

      <section id="ziel" className="pt-10">
        <h3>Ziel des Projekts</h3>

        <p className="mb-2">
          Ausgangsproblem war, dass die Internetmarke auf der Homepage der Deutschen Post zwar gekauft werden kann, mir das alles aber zu umständlich war, da ich die Marken direkt auf meine generierten Briefe und Rechnungen drucken wollte. Also musste die API genutzt werden und die Internetmarken möglichst einfach gekauft und genutzt werden können.
        </p>

        <p className="mb-2">
          Angefangen habe ich 2018 mit den ersten Features und dem Kauf von Marken als PNG. Später wurde das Projekt dann komplett auf TypeScript umgeschrieben und generiert nun alle vorhandenen Marken mit Zusatzoptionen wie Einschreiben, Prio etc. und auch in PDF-Versionen, um mehrere Marken auf Labels drucken zu können.
        </p>

        <p className="mb-2">
          Mir war wichtig, ein möglichst generisches Projekt zu erstellen, das von vielen genutzt werden kann und dann auf npm veröffentlicht werden kann.
        </p>

        <p>
          Auch wenn wir langsam im digitalen Zeitalter angekommen sind, sind Briefe nach wie vor ein Teil des Geschäftsalltags. Die Internetmarke war ein Bestandteil meines Exkurses in die Briefwelt, nachdem ich bereits DIN 5008 Briefe mit Node generiert hatte und nun immer noch zur Post laufen musste um mir das nötige Porto zu kaufen. Mittlerweile ist zwar auch das neue Produkt #PORTO vorhanden, ich finde es aber immer noch gewöhnungsbedürftig, auf einen Geschäftsbrief handschriftlich das Porto zu hinterlegen.
        </p>
      </section>

      <section id="features" className="pt-10">
        <h3>Features</h3>

        <p className="mb-2">
          Marken können als Vorschau generiert, dem Warenkorb hinzugefügt und gekauft werden. Die einzelnen Variationen beim Kauf der Marken wird in vollem Umfang ermöglicht.
        </p>

        <p className="mb-2">
          Die verfügbaren Wertmarken der Deutschen Post können über den Produktservice angefragt werden.
        </p>

        <p>
          Um sich nicht mit IDs und Spezifikationen der einzelnen Marken herumschlagen zu müssen, gibt es nun ein Feature, das anhand von Eckdaten des Briefs (Verwendetes Papier und Kuvert) sowie Angaben zur Nutzung (Empfängerland, Zusatzleistungen wie Einschreiben) die benötigte Marke aus der Liste findet und es dem Nutzer anbietet.
        </p>
      </section>

      <section id="links" className="pt-10">
        <h3>Links</h3>

        <p>
          Das Projekt findest du auf <Link href="https://github.com/schaechinger/internetmarke#readme"
            target="_blank" className="inline-link">GitHub</Link>.
        </p>
        <p>
          Du kannst das Paket mit <Link href="https://npmjs.org/package/internetmarke"
            target="_blank" className="inline-link">npm</Link> in dein Projekt einbinden.
        </p>
      </section>

      <p className="mt-4">
        <LinkButton href="/projekte" label="Zur Projektliste" />
      </p>
    </div>
  );
};

export default InternetmarkePage;

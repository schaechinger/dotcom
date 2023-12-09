import Link from 'next/link';

import { ProjectLinkData } from '@models/project';

const ProjectLinks = ({ links }: { links?: ProjectLinkData }) => (
  <section id="links" className="pt-10">
    <h3>Links</h3>

    { !links
      ? <p>Das Projekt wird intern verwendet und ist daher nicht öffentlich zugänglich.</p>
      : ([
        links?.project
        ? <p>Das Projekt findest du auf <Link href={links.project.link}
          target="_blank" className="inline-link">{ links.project.label }</Link>.</p>
        : null,
        links?.code
        ? <p>Den Code zum Projekt findest du auf <Link href={links.code.link}
          target="_blank" className="inline-link">{ links.code.label }</Link>.</p>
        : null,
        links?.github
        ? <p>Den Code zum Projekt findest du auf <Link
          href={`https://github.com/${links.github.join('/')}`}
          target="_blank" className="inline-link">GitHub</Link>.</p>
        : null,
        links?.package
        ? <p>Du kannst das Paket mit <Link href={links.package.link}
          target="_blank" className="inline-link">{ links.package.label }</Link> in dein Projekt einbinden.</p>
        : null,
        links?.npm
        ? <p>Du kannst das Paket mit <Link href={`https://npmjs.org/package/${links.npm}`}
          target="_blank" className="inline-link">npm</Link> in dein Projekt einbinden.</p>
        : null,
      ]) }
  </section>
);

export default ProjectLinks;

import Link from 'next/link';

import { ProjectLinkData } from '@models/project';

type Props = {
  links?: ProjectLinkData;
}

const ProjectLinks = ({ links }: Props) => (
  <section id="links" className="pt-10">
    <h3>Links</h3>

    { !links
      ? <p>Das Projekt wird intern verwendet und ist daher nicht öffentlich zugänglich.</p>
      : ([
        links?.project
          && <p key="project">Das Projekt findest du auf <Link href={links.project.link}
            target="_blank" className="inline-link">{ links.project.label }</Link>.</p>,
        links?.code
          && <p key="code">Den Code zum Projekt findest du auf <Link href={links.code.link}
            target="_blank" className="inline-link">{ links.code.label }</Link>.</p>,
        links?.github
          && <p key="github">Den Code zum Projekt findest du auf <Link
            href={`https://github.com/${links.github.join('/')}`}
            target="_blank" className="inline-link">GitHub</Link>.</p>,
        links?.package
          && <p key="package">Du kannst das Paket mit <Link href={links.package.link}
            target="_blank" className="inline-link">{ links.package.label }</Link> in dein Projekt einbinden.</p>,
        links?.npm
          && <p key="npm">Du kannst das Paket mit <Link href={`https://npmjs.org/package/${links.npm}`}
            target="_blank" className="inline-link">npm</Link> in dein Projekt einbinden.</p>,
      ]) }
  </section>
);

export default ProjectLinks;

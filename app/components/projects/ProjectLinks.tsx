import Link from 'next/link';

import { type ProjectLinkData } from '@models/project';
import { useTranslations } from 'next-intl';

type Props = {
  links?: ProjectLinkData;
}

const ProjectLinks = ({ links }: Props) => {
  const t = useTranslations('pages.projects.links');

  return (
    <section id="links" className="pt-10">
      <h3>{t('title')}</h3>

      { !links
        ? <p>{t('internal')}</p>
        : ([
          links?.project
            && <p key="project">{t.rich('project', {
              link: () => <Link
                  href={links.project!.link}
                  target="_blank"
                  className="inline-link"
                >{ links.project!.label }</Link>
            })}</p>,
          links?.code
            && <p key="code">{t.rich('code', {
              link: () => <Link
                  href={links.code!.link}
                  target="_blank"
                  className="inline-link"
                >{ links.code!.label }</Link>
            })}</p>,
          links?.github
            && <p key="github">{t.rich('code', {
              link: () => <Link
                  href={`https://github.com/${links.github!.join('/')}`}
                  target="_blank"
                  className="inline-link"
                >GitHub</Link>
            })}</p>,
          links?.package
            && <p key="package">{t.rich('package', {
              link: () => <Link
                  href={links.package!.link}
                  target="_blank"
                  className="inline-link"
                >{ links.package!.label }</Link>
            })}</p>,
          links?.npm
            && <p key="npm">{t.rich('package', {
              link: () => <Link
                  href={`https://npmjs.org/package/${links.npm}`}
                  target="_blank"
                  className="inline-link"
                >npm</Link>
            })}</p>,
        ]) }
    </section>
  );
};

export default ProjectLinks;

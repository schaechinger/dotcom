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
      <h2 className="text-h2">{t('title')}</h2>

      {!links && <p>{t('internal')}</p>}
      {links?.project && <p className="link--project mb-2">{t.rich('project', {
        link: () => <Link
            href={links.project!.link}
            target="_blank"
            className="inline-link"
          >{ links.project!.label }</Link>
      })}</p>}
      {links?.code && <p className="link--code mb-2">{t.rich('code', {
        link: () => <Link
            href={links.code!.link}
            target="_blank"
            className="inline-link"
          >{ links.code!.label }</Link>
      })}</p>}
      {links?.github && <p className="link--github mb-2">{t.rich('code', {
        link: () => <Link
            href={`https://github.com/${links.github!.join('/')}`}
            target="_blank"
            className="inline-link"
          >GitHub</Link>
      })}</p>}
      {links?.package && <p className="link--package mb-2">{t.rich('package', {
        link: () => <Link
            href={links.package!.link}
            target="_blank"
            className="inline-link"
          >{ links.package!.label }</Link>
      })}</p>}
      {links?.npm && <p className="link--npm mb-2">{t.rich('package', {
        link: () => <Link
            href={`https://npmjs.org/package/${links.npm}`}
            target="_blank"
            className="inline-link"
          >npm</Link>
      })}</p>}
    </section>
  );
};

export default ProjectLinks;

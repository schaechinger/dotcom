import Link from 'next/link';
import { useLocale } from 'next-intl';

import CompanyLink from '@components/atoms/CompanyLink';
import TechItem from '@components/atoms/TechItem';
import TimeSpan from '@components/atoms/TimeSpan';
import ArrowRight from '@components/icons/ArrowRight';
import BulletList from '@/app/components/atoms/BulletList';
import ProjectTypeLabel from '@components/projects/ProjectTypeLabel';
import { type ProjectData } from '@models/project';
import { l, type LanguageCode } from '@/i18n';

type Props = {
  item: ProjectData;
  heading?: string;
};

const ProjectItem = ({ item, heading }: Props) => {
  const locale = useLocale() as LanguageCode;
  const Heading = (heading || 'h3') as React.ElementType;

  return (
    <article className="career-item max-w-screen-sm hover:bg-primary-100 transition-colors sm:rounded-md my-4 -mx-4 px-4 py-3">
      <header className="career-item__headline sm:flex items-center">
        <div className="career-item__dates text-sm font-normal sm:order-2">
          <TimeSpan startDate={item.startDate} endDate={item.endDate} />
        </div>
        <Heading className="text-h3 text-dark-950 dark:text-dark-50 font-bold mb-0 sm:order-1">
          <Link href={l(`projects.${item.slug}`, locale)} className="group">
            { item.title }
            <ArrowRight className="inline-block -mt-0.5 ml-1 text-primary-300 -rotate-45 transition-colors group-hover:text-primary-500 group-hover:text-xl group-hover:-mt-0.5 group-hover:ml-0.5" />
          </Link>
        </Heading>
      </header>
        <div className="font-thin mb-2">
          <ProjectTypeLabel type={item.type} label={!item.company} />
          { item.company && <CompanyLink company={item.company} /> }
        </div>
      { item.description && <p>{ item.description }</p> }
      { (!item.description && item.bullets?.length) && <BulletList bullets={item.bullets} /> }
      <ul className="flex flex-wrap mt-3 gap-2">
        { (item.tech || []).map((t) => (
          <TechItem key={t.slug} item={t} />
        ))}
      </ul>
    </article>
  );
};

export default ProjectItem;

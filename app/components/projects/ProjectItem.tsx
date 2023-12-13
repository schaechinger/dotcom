import Link from 'next/link';

import CompanyLink from '@components/career/CompanyLink';
import TechItem from '@components/career/TechItem';
import TimeSpan from '@components/career/TimeSpan';
import ArrowRight from '@components/icons/ArrowRight';
import ProjectType from '@components/projects/ProjectType';
import { ProjectData } from '@models/project';

type Props = {
  item: ProjectData;
}

const ProjectItem = ({ item }: Props) => (
  <article className="career-item max-w-screen-sm hover:bg-primary-100 transition-colors sm:rounded-md my-4 -mx-4 px-4 py-3">
    <header className="career-item__headline sm:flex items-center">
      <div className="career-item__dates text-sm font-normal sm:order-2">
        <TimeSpan startDate={item.startDate} endDate={item.endDate} />
      </div>
      <h3 className="text-lg text-dark-950 dark:text-dark-50 font-bold mb-0 sm:order-1">
        <Link href={`/projekte/${item.slug}`} className="group">
          { item.title }
          <ArrowRight className="inline-block -mt-0.5 mx-1 text-primary-300 -rotate-45 transition-colors group-hover:text-primary-500 group-hover:text-xl group-hover:-mt-0.5 group-hover:mr-0.5" />
        </Link>
      </h3>
    </header>
      <div className="font-thin mb-2">
        <ProjectType type={item.type} label={!item.company} />
        { item.company && <CompanyLink company={item.company} /> }
      </div>
    { item.description && <p>{ item.description }</p> }
    { (!item.description && item.bullets?.length) && (
      <ul className="bullet-list">{
        item.bullets.map((b, i) => (
          <li key={i}>{ b }</li>
        ))
        }</ul>
      ) }
    <ul className="flex flex-wrap mt-3 gap-2">
      { (item.tech || []).map((t) => (
        <TechItem key={t.slug} item={t} />
      ))}
    </ul>
  </article>
);

export default ProjectItem;

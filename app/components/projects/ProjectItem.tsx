import Link from 'next/link';

import CompanyLink from '@/app/components/career/CompanyLink';
import TechItem from '@/app/components/career/TechItem';
import TimeSpan from '@/app/components/career/TimeSpan';
import ArrowRight from '@/app/components/icons/ArrowRight';
import ProjectType from '@/app/components/projects/ProjectType';
import { ProjectData } from '@/models/project';

interface ProjectItemProps {
  item: ProjectData;
}

const ProjectItem = ({ item }: ProjectItemProps) => (
  <article className="career-item max-w-screen-sm hover:bg-primary-100 transition-colors lg:rounded-md my-4 -mx-4 px-4 py-3">
    <header className="career-item__headline sm:flex items-center">
      <div className="career-item__dates text-sm font-normal sm:order-2">
        <TimeSpan startDate={item.startDate} endDate={item.endDate} />
      </div>
      <h4 className="text-lg text-dark-950 dark:text-dark-50 font-bold mb-0 sm:order-1">
        <Link href={`/projekte/${item.slug}`} className="group">
          { item.title }
          <ArrowRight className="inline-block -mt-0.5 ml-1 text-primary-300 -rotate-45 transition-colors group-hover:text-primary-500" />
        </Link>
      </h4>
    </header>
      <div className="font-thin mb-2">
        <ProjectType type={item.type} label={!item.company} />
        { item.company ? <CompanyLink company={item.company} /> : null }
      </div>
    { item.description ? <p>{ item.description }</p> : null }
    { (!item.description && item.bullets?.length) ? (
      <ul className="bullet-list">{
        item.bullets.map((b, i) => (
          <li key={i}>{ b }</li>
        ))
        }</ul>
      ) : null
    }
    <ul className="flex flex-wrap mt-3 gap-2">
      { (item.tech || []).map((t) => (
        <TechItem key={t.slug} item={t} />
      ))}
    </ul>
  </article>
);

export default ProjectItem;

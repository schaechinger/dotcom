import Link from 'next/link';

import TechItem from '@/app/components/career/TechItem';
import ArrowRight from '@/app/components/icons/ArrowThinRight';
import { ProjectData } from '@/models/project';

interface ProjectItemProps {
  item: ProjectData;
}

const ProjectItem = ({ item }: ProjectItemProps) => {
  const CompanyTag = item.company?.link ? 'a' : 'span';

  const date = 2 === item.date.length
    ? (
      `${item.date[0] !== item.date[1] ? `${item.date[0].substring(0, 4)} bis ` : ''}${
        item.date[1].substring(0, 4)}`
    )
    : `seit ${item.date[0].substring(0, 4)}`;

  return (
    <article className="career-item max-w-screen-sm hover:bg-primary-100 transition-colors lg:rounded-md my-4 -mx-4 px-4 py-3">
      <header className="career-item__headline sm:flex items-center">
        <div className="career-item__dates text-sm font-normal sm:order-2">{ date }</div>
        <h4 className="text-lg text-dark-950 dark:text-dark-50 font-bold sm:order-1">
          <Link href={`/projekte/${item.slug}`} className="group">
            { item.title }
            <ArrowRight className="inline-block -mt-0.5 ml-1 text-primary-300 -rotate-45 transition-colors group-hover:text-primary-500" />
          </Link>
        </h4>
      </header>
      <div className="font-thin mb-2">
        <CompanyTag
          href={item.company?.link}
          target="_blank"
          className={`font-thin${item.company?.link ? ' hover:text-primary-500' : ''}`}
        >{ item.company?.name }</CompanyTag>{item.company?.location ? `, ${item.company?.location}` : '' }
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
          <TechItem key={t} item={t} />
        ))}
      </ul>
    </article>
  );
};

export default ProjectItem;

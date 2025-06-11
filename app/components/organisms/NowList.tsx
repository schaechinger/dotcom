import { getLocale } from 'next-intl/server';

import { loadNow } from '@lib/contentful';
import { type LocaleCode } from '@lib/router';
import BulletList from '../atoms/BulletList';
import { ReactNode } from 'react';

const NowList = async () => {
  const locale = await getLocale() as LocaleCode;
  const activities = await loadNow(locale) || [];

  const tasks: ReactNode[] = [];

  activities.forEach((activity) => {
    activity.tasks.forEach((task) => {
      tasks.push(<div key={`${activity.category}-${task}`}>
        <strong>{activity.category}</strong> {task}
      </div>);
    });
  });

  return (
    <BulletList bullets={tasks} />
  )
};

export default NowList;

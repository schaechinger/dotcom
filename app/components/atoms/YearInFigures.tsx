import clsx from 'clsx';
import { getTranslations } from 'next-intl/server';

import Heading from '@components/atoms/Heading';
import CoffeeToGo from '@components/icons/CoffeeToGo';
import Medal from '@components/icons/Medal';
import Server from '@components/icons/Server';
import { loadFigures } from '@lib/contentful';

const calcDays = (factor = 1) => {
  var date = new Date();
  var first = new Date(date.getFullYear(), 0, 0);
  var diff = date.getTime() - first.getTime();

  return Math.floor((diff / 86400000) * factor);
};

const YearInFigures = async () => {
  const [data, t] = await Promise.all([loadFigures(), getTranslations('yearInFigures')]);
  
  const figures = [
    {
      type: 'coffees',
      className: 'sm:order-2',
      iconClassName: 'text-coffee-light dark:text-coffee-dark',
      icon: CoffeeToGo,
      count: calcDays(2.15),
    },
    {
      type: 'outages',
      className: 'sm:order-3',
      iconClassName: 'text-squash-red',
      icon: Server,
      count: data?.outages || 0,
    },
    {
      type: 'marathons',
      className: 'sm:order-1',
      iconClassName: 'text-amber-500',
      icon: Medal,
      count: data?.marathons || 0,
    },
  ];

  return (
    <div className="-mx-4 sm:-mx-2">
      <div className="px-4 sm:px-2">
        <Heading level={2} title={t('title')} />

        <div className="flex flex-col sm:flex-row gap-4">
          {figures.map((figure) => {
            const Icon = figure.icon;

            return (
              <div key={figure.type} className={clsx('flex-1 flex items-center', figure.className)}>
                <Icon className={clsx('text-3xl mr-3', figure.iconClassName)} />
                <div>
                  <div className="text-xl dark:text-contrast-50">{figure.count}</div>
                  <div className="text-sm">{t(figure.type as 'coffees', { count: figure.count })}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YearInFigures;

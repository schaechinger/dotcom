import clsx from 'clsx';
import { useLocale, useTranslations } from 'next-intl';

import { Link } from '@/routing';
import JsonLd from '@components/atoms/JsonLd';
import ChevronRight from '@components/icons/ChevronRight';
import Home from '@components/icons/Home';
import { type LocaleCode } from '@lib/router';
import { BreadcrumbData, generateBreadcrumbJson } from '@lib/seo';

type Props = {
  list: BreadcrumbData[];
};

const Breadcrumbs = ({ list }: Props) => {
  const locale = useLocale() as LocaleCode;
  const t = useTranslations('general');
  const json = generateBreadcrumbJson(list, locale);
  const visible = 1 < list.length;

  return (
    <div className={clsx(list.length && 'mb-4', visible ? 'sm:mb-4' : 'sm:hidden')}>
      <nav aria-label="Breadcrumb">
        <ul className="flex list-none text-xs">
          <li key="home" className={clsx(visible && 'hidden sm:inline-block', 'flex-none')}>
            <Link href="/" className="text-gray-400 dark:text-gray-400">
              <Home className="hidden sm:inline-block text-[0.875rem] relative -top-[1px]" />
              <ChevronRight className={clsx(visible && 'hidden', 'sm:hidden mr-2 rotate-180 relative -top-[1px] text-gray-400 dark:text-gray-400')} />
              <span className={clsx(visible && 'hidden', 'sm:hidden')}>{t('home')}</span>
            </Link>
          </li>
          {list.map((item, i) => {
            const Item = item.page ? Link : 'span';

            return (
              <li key={item.page || item.title} className={clsx(i != list.length - 2 && 'hidden sm:inline-block', 'flex-none')}>
                <ChevronRight className="mr-2 sm:ml-2 rotate-180 sm:rotate-0 relative -top-[1px] text-gray-400 dark:text-gray-400" />
                <Item
                  href={item.page ? item.page : '/'}
                  className={clsx(item.page && 'text-gray-400 dark:text-gray-400')}
                >{item.title}</Item>
              </li>
            );
          })}
        </ul>
      </nav>
      <JsonLd json={json} />
    </div>
  );
};

export default Breadcrumbs;
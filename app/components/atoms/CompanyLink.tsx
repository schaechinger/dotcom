import clsx from 'clsx';

import { type Company } from '@models/history';

type Props = {
  company?: Company;
  inline?: boolean;
}

const CompanyLink = ({ company, inline }: Props) => {
  const CompanyTag = company?.link ? 'a' : 'span';

  return (
    <>
      <CompanyTag
        href={company?.link}
        target="_blank"
        className={clsx(company?.link ? 'font-normal hover:text-primary-500' : 'font-thin', company?.link && inline && 'inline-link')}
      >{ company?.name }</CompanyTag>{company?.location ? `, ${company.location}` : '' }
    </>
  );
};

export default CompanyLink;

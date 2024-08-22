import { type Company } from '@models/career';

type Props = {
  company?: Company;
}

const CompanyLink = ({ company }: Props) => {
  const CompanyTag = company?.link ? 'a' : 'span';

  return (
    <>
      <CompanyTag
        href={company?.link}
        target="_blank"
        className={company?.link ? 'font-normal hover:text-primary-500' : 'font-thin'}
      >{ company?.name }</CompanyTag>{company?.location ? `, ${company.location}` : '' }
    </>
  );
};

export default CompanyLink;

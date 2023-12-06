import { Company } from '@/models/career';

const CompanyLink = ({ company }: { company?: Company }) => {
  const CompanyTag = company?.link ? 'a' : 'span';

  return (
    <>
      <CompanyTag
        href={company?.link}
        target="_blank"
        className={`font-thin${company?.link ? ' hover:text-primary-500' : ''}`}
      >{ company?.name }</CompanyTag>{company?.location ? `, ${company.location}` : '' }
    </>
  );
};

export default CompanyLink;

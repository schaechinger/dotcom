import Banknotes from '@components/icons/Banknotes';
import BuildingsCity from '@components/icons/BuildingsCity';
import HeartEmpty from '@components/icons/HeartEmpty';
import Knight from '@components/icons/Knight';
import { type ProjectType } from '@models/project';
import { useTranslations } from 'next-intl';


type Props = {
  type: ProjectType;
  label?: boolean;
}

const ProjectTypeLabel = ({ type, label }: Props) => {
  const t = useTranslations('pages.projects.types')
  const TypeIcon = {
    employee: BuildingsCity,
    founder: HeartEmpty,
    freelance: Banknotes,
    private: Knight,
  }[type];

  if (!TypeIcon) {
    return null;
  }

  return (
    <>
      <TypeIcon title={t(type)} className="inline-block -mt-1 mr-2" />
      { label && t(type) }
    </>
  );
};

export default ProjectTypeLabel;

import Banknotes from '@components/icons/Banknotes';
import BuildingsCity from '@components/icons/BuildingsCity';
import HeartEmpty from '@components/icons/HeartEmpty';
import Knight from '@components/icons/Knight';
import { type ProjectType } from '@models/project';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';


type Props = {
  type: ProjectType;
  colored?: boolean;
  label?: boolean;
}

const ProjectTypeLabel = ({ colored, label, type }: Props) => {
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
      <TypeIcon title={t(type)} className={clsx('inline-block -mt-1 mr-2', colored && 'text-secondary/60 dark:text-primary/60')} />
      {label && t(type)}
    </>
  );
};

export default ProjectTypeLabel;

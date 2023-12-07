import Banknotes from '@components/icons/Banknotes';
import BuildingsCity from '@components/icons/BuildingsCity';
import HeartEmpty from '@components/icons/HeartEmpty';
import Knight from '@components/icons/Knight';
import { ProjectType } from '@models/project';

export const projectTypeLabels = {
  employee: 'Angestellter',
  founder: 'Gründer',
  freelance: 'Freiberuflich',
  private: 'Privat',
  volunteer: 'Ehrenamtlich',
};

const ProjectType = ({ type, label }: { type: ProjectType; label?: boolean }) => {
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
      <TypeIcon title={projectTypeLabels[type]} className="inline-block -mt-1 mr-2" />
      { label ? projectTypeLabels[type] : null }
    </>
  );
};

export default ProjectType;
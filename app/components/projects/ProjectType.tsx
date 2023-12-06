import Banknotes from '@/app/components/icons/Banknotes';
import BuildingsCity from '@/app/components/icons/BuildingsCity';
import HeartEmpty from '@/app/components/icons/HeartEmpty';
import Knight from '@/app/components/icons/Knight';
import { ProjectType } from '@/models/project';

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

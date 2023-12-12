import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const Block = ({ children }: Props) => (
  <div className="flex justify-center items-center relative w-6 h-6 bg-amber-400 border border-slate-400 rounded-sm">
    { children }
    <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-gray-400"></div>
    <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-gray-400"></div>
    <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-gray-400"></div>
    <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-gray-400"></div>
  </div>
);

export default Block;

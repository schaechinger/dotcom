import Block from './Block';
import QBlock from './QBlock';

const Level = () => (
  <div className="flex justify-center gap-0.5 py-6">
    <Block />
    <Block />
    <QBlock />
    <Block />
  </div>
);

export default Level;

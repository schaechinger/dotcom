interface TechItemProps {
  item: string;
}

const TechItem = ({ item }: TechItemProps) => (
  <li key={item} className="text-primary-500 bg-primary-100 border border-primary-100 rounded-full px-2">
    <span>{ item }</span>
  </li>
);

export default TechItem;

import { useTranslations } from "next-intl";

type Props = {
  id: string;
  title?: string;
  content: string[];
}

const DetailBlock = ({ id, title, content }: Props) => {
  const t = useTranslations('pages.projects.details');

  return (
    <section id={id} className="pt-10">
      <h3>{title || t(id)}</h3>

      {(content || []).map((p, i) => (
        <p className={i < ((content.length || 0) - 1) ? 'mb-2' : ''}
          key={i}>{p}</p>
      ))}
    </section>
  );
};

export default DetailBlock;

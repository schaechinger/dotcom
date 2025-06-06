type Props = {
  children: React.ReactNode;
  id: string;
  label?: string;
};

const SplitSection = ({ children, id, label }: Props) => (
  <section id={id} className="font-sans">
    {label && (
      <div className="text-2xl pt-10 pb-4 px-4">
        <span className="text-primary-dark/60">#</span> {label}
      </div>
    )}
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1 p-4 text-contrast-950 bg-contrast-50">
        {children}
      </div>
      <div className="flex-1 p-4 dark text-contrast-200 bg-contrast-950">
        {children}
      </div>
    </div>
  </section>
);

export default SplitSection;

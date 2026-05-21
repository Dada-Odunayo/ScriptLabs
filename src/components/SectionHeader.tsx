type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeader({ eyebrow, title, description, id }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-sm font-medium uppercase text-cyan-glow">{eyebrow}</p>
      <h2 id={id} className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

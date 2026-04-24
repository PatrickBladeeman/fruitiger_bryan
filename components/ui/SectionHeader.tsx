export function SectionHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <header className="mb-8 md:mb-10">
      {eyebrow ? <p className="mb-2 text-sm font-medium uppercase tracking-wide text-aero-blue">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-navy-deep md:text-3xl">{title}</h2>
      {description ? <p className="mt-3 max-w-2xl text-sm text-navy-deep/80 md:text-base">{description}</p> : null}
    </header>
  );
}

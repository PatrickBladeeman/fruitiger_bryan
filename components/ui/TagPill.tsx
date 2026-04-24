export function TagPill({ label }: { label: string }) {
  return (
    <span className="inline-flex rounded-full border border-glass-border/80 bg-cloud-white/80 px-3 py-1 text-xs font-medium text-navy-deep/80 shadow-inner-highlight">
      {label}
    </span>
  );
}

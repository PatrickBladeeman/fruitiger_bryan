export function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-panel-chrome rounded-xl p-4">
      <dt className="text-sm text-navy-deep/70">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold text-navy-deep">{value}</dd>
    </div>
  );
}

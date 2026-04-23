import type { ReactNode } from 'react';

export function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <article className={`rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur ${className}`.trim()}>
      {children}
    </article>
  );
}

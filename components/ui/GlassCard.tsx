import type { ReactNode } from 'react';

export function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <article className={`frosted-glass-card ${className}`.trim()}>{children}</article>;
}

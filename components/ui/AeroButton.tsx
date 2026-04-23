import type { ReactNode } from 'react';

type AeroButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
};

const baseClassName =
  'inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500';

export function AeroButton({ children, className = '', href, type = 'button' }: AeroButtonProps) {
  const classes = `${baseClassName} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}

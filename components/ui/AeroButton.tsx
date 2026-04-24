import type { ReactNode } from 'react';

type AeroButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
};

const baseClassName =
  'aero-button';

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

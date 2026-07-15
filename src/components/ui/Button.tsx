import type { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'outline';
}

export function Button({ href, children, variant = 'solid' }: ButtonProps) {
  const base =
    'group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300';

  const styles =
    variant === 'solid'
      ? 'bg-ink text-bg hover:bg-accent'
      : 'border border-line text-ink hover:border-accent hover:text-accent';

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

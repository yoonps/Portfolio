import type { ReactNode } from 'react';

interface RotatingBadgeProps {
  text: string;
  className?: string;
  icon?: ReactNode;
}

export function RotatingBadge({ text, className = '', icon }: RotatingBadgeProps) {
  const repeated = `${text} • `.repeat(2);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_16s_linear_infinite]">
        <defs>
          <path
            id="badge-circle"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>
        <text className="fill-ink text-[7.5px] tracking-[0.15em] uppercase">
          <textPath href="#badge-circle" startOffset="0%">
            {repeated}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}

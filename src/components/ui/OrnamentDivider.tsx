import { Sparkle } from './Sparkle';

interface OrnamentDividerProps {
  className?: string;
}

export function OrnamentDivider({ className = '' }: OrnamentDividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-line" />
      <Sparkle className="h-3.5 w-3.5 shrink-0 text-accent-strong" />
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

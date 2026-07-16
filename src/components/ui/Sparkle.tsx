interface SparkleProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Sparkle({ className = '', style }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 0c0 6.627 1.373 10 6 12-4.627 2-6 5.373-6 12 0-6.627-1.373-10-6-12 4.627-2 6-5.373 6-12Z" />
    </svg>
  );
}

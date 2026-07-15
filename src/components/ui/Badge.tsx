interface BadgeProps {
  children: string;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-mute uppercase">
      {children}
    </span>
  );
}

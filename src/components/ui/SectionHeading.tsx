import { RevealItem } from './Reveal';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  heading: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  index,
  eyebrow,
  heading,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <RevealItem
      className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}
    >
      <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-mute">
        <span className="text-accent-strong">{index}</span>
        <span className="h-px w-8 bg-line" />
        <span className="uppercase">{eyebrow}</span>
      </div>
      <h2 className="max-w-2xl text-3xl leading-[1.1] font-medium text-ink sm:text-4xl md:text-5xl">
        {heading}
      </h2>
    </RevealItem>
  );
}

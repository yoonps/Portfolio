import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  duration?: number;
  className?: string;
}

export function Marquee({ items, duration = 26, className = '' }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden border-y border-line py-4 ${className}`}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
        className="flex w-max items-center gap-10"
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-mono text-sm tracking-widest text-mute uppercase whitespace-nowrap"
          >
            {item}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

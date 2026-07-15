import { motion, type MotionStyle } from 'framer-motion';
import { useState } from 'react';
import { RotatingBadge } from './RotatingBadge';

interface PortraitPanelProps {
  style?: MotionStyle;
}

export function PortraitPanel({ style }: PortraitPanelProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[22rem] lg:mx-0"
    >
      <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-accent/25 blur-[70px]" />
      <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-accent-2/25 blur-[70px]" />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem_3rem_3rem_1rem] border border-line bg-surface shadow-[0_30px_60px_-25px_rgba(28,27,30,0.25)]">
        {!imageFailed && (
          <img
            src="/portrait.jpg"
            alt="Yoon"
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {imageFailed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface to-surface-2 text-center">
            <span className="font-display text-[7rem] leading-none font-semibold text-ink/[0.08] italic">
              Y
            </span>
            <span className="max-w-[70%] font-mono text-[11px] leading-relaxed text-mute uppercase">
              Add photo at
              <br />
              /public/portrait.jpg
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-accent-2/20 mix-blend-multiply" />
      </div>

      <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full border border-line bg-bg shadow-lg">
        <RotatingBadge
          text="Available for work"
          className="h-full w-full text-ink"
          icon={
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-strong opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-strong" />
            </span>
          }
        />
      </div>
    </motion.div>
  );
}

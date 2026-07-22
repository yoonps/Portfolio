import { motion } from 'framer-motion';
import { Sparkle } from '../ui/Sparkle';

interface WaveDividerProps {
  tone?: 'surface' | 'accent' | 'accent-2';
  flip?: boolean;
}

const TONE_FILLS: Record<
  NonNullable<WaveDividerProps['tone']>,
  { back: string; front: string }
> = {
  surface: { back: 'var(--color-surface-2)', front: 'var(--color-accent-2)' },
  accent: { back: 'var(--color-accent-2)', front: 'var(--color-accent)' },
  'accent-2': { back: 'var(--color-accent)', front: 'var(--color-accent-2)' },
};

const VIEW_HEIGHT = 140;

const BACK_PATH =
  'M0,70 C180,110 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1350,72 1440,70 L1440,140 L0,140 Z';
const FRONT_PATH =
  'M0,90 C160,40 320,110 480,80 C640,50 800,120 960,80 C1120,40 1280,110 1440,90 L1440,140 L0,140 Z';

interface WaveLayerProps {
  path: string;
  fill: string;
  opacity: number;
  duration: number;
  reverse?: boolean;
}

function WaveLayer({ path, fill, opacity, duration, reverse }: WaveLayerProps) {
  return (
    <motion.div
      className="absolute inset-0 flex h-full w-[200%] will-change-transform"
      animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {[0, 1].map((i) => (
        <svg
          key={i}
          viewBox={`0 0 1440 ${VIEW_HEIGHT}`}
          preserveAspectRatio="none"
          className="h-full w-1/2 shrink-0"
        >
          <path d={path} fill={fill} opacity={opacity} />
        </svg>
      ))}
    </motion.div>
  );
}

export function WaveDivider({ tone = 'surface', flip = false }: WaveDividerProps) {
  const fills = TONE_FILLS[tone];

  return (
    <div
      aria-hidden="true"
      className="relative h-20 w-full overflow-hidden md:h-32"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <WaveLayer path={BACK_PATH} fill={fills.back} opacity={0.35} duration={22} />
      <WaveLayer path={FRONT_PATH} fill={fills.front} opacity={0.45} duration={16} reverse />

      <Sparkle
        className="absolute top-4 left-[18%] h-3 w-3 text-accent-strong/70"
        style={flip ? { transform: 'scaleY(-1)' } : undefined}
      />
      <Sparkle
        className="absolute right-[24%] bottom-5 h-2.5 w-2.5 text-accent-2/70"
        style={flip ? { transform: 'scaleY(-1)' } : undefined}
      />
    </div>
  );
}

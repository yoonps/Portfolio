import { motion } from 'framer-motion';
import { Sparkle } from '../ui/Sparkle';

interface WaveDividerProps {
  tone?: 'surface' | 'accent' | 'accent-2';
  flip?: boolean;
}

const FILL_VAR: Record<NonNullable<WaveDividerProps['tone']>, string> = {
  surface: 'var(--color-surface-2)',
  accent: 'var(--color-accent)',
  'accent-2': 'var(--color-accent-2)',
};

const FILL_OPACITY: Record<NonNullable<WaveDividerProps['tone']>, string> = {
  surface: '0.9',
  accent: '0.22',
  'accent-2': '0.28',
};

export function WaveDivider({ tone = 'surface', flip = false }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className="relative h-16 w-full overflow-hidden md:h-24"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <motion.svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <path
          d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,120 L0,120 Z"
          fill={FILL_VAR[tone]}
          opacity={FILL_OPACITY[tone]}
        />
      </motion.svg>

      <Sparkle
        className="absolute top-3 left-[18%] h-3 w-3 text-accent-strong/70"
        style={flip ? { transform: 'scaleY(-1)' } : undefined}
      />
      <Sparkle
        className="absolute right-[24%] bottom-4 h-2.5 w-2.5 text-accent-2/70"
        style={flip ? { transform: 'scaleY(-1)' } : undefined}
      />
    </div>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HERO, QUICK_FACTS } from '../../data/dummyData';
import { Button } from '../ui/Button';
import { PortraitPanel } from '../ui/PortraitPanel';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  const lineVariants = {
    hidden: { y: '110%' },
    show: (i: number) => ({
      y: '0%',
      transition: {
        delay: 0.45 + i * 0.1,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="intro"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28 pb-12 md:px-12 lg:px-24"
    >
      <motion.div style={{ opacity, y, scale }} className="flex flex-col">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 flex items-center gap-2 font-mono text-xs tracking-[0.25em] text-mute uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {HERO.eyebrow}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-mono text-sm text-mute md:text-base"
            >
              {HERO.greeting}
            </motion.p>

            <h1 className="font-display overflow-hidden py-1 text-[19vw] leading-[0.95] font-medium text-ink italic sm:text-[15vw] lg:text-[7vw]">
              <motion.span
                custom={0}
                variants={lineVariants}
                initial="hidden"
                animate="show"
                className="inline-block"
              >
                {HERO.name}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="mt-3 font-mono text-sm tracking-wide text-accent-strong uppercase sm:text-base"
            >
              {HERO.role}
            </motion.p>

            <div className="mt-4 flex flex-col sm:mt-6">
              {HERO.taglineLines.map((line, i) => (
                <span key={line} className="overflow-hidden py-0.5">
                  <motion.span
                    custom={i + 1}
                    variants={lineVariants}
                    initial="hidden"
                    animate="show"
                    className={`inline-block font-mono text-xl tracking-tight sm:text-2xl md:text-3xl ${
                      i === HERO.taglineLines.length - 1
                        ? 'font-medium text-accent-strong'
                        : 'text-mute'
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-mute md:text-lg"
            >
              {HERO.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button href={HERO.ctaPrimary.href}>{HERO.ctaPrimary.label}</Button>
              <Button href={HERO.ctaSecondary.href} variant="outline">
                {HERO.ctaSecondary.label}
              </Button>
            </motion.div>
          </div>

          <div className="flex flex-1 justify-center lg:justify-end">
            <PortraitPanel style={{ y: portraitY }} />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-4"
      >
        {QUICK_FACTS.map((fact) => (
          <div key={fact.label} className="flex flex-col gap-1">
            <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
              {fact.label}
            </span>
            <span className="text-sm text-ink">{fact.value}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

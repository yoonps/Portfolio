import { Code2, PenTool, ShieldCheck } from 'lucide-react';
import { ABOUT, CAPABILITIES, MARQUEE_WORDS, STATS } from '../../data/dummyData';
import { Marquee } from '../ui/Marquee';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const CAPABILITY_ICONS = [Code2, PenTool, ShieldCheck];

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-32 md:px-12 lg:px-24"
    >
      <span className="font-display pointer-events-none absolute -top-16 right-0 hidden text-[16rem] font-semibold text-ink/[0.035] italic select-none lg:block">
        01
      </span>

      <SectionHeading index="01" eyebrow={ABOUT.eyebrow} heading={ABOUT.heading} />

      <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <RevealGroup className="flex flex-col gap-5" stagger={0.15} delay={0.1}>
            {ABOUT.paragraphs.map((paragraph) => (
              <RevealItem key={paragraph}>
                <p className="max-w-xl leading-relaxed text-mute">{paragraph}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealGroup
            className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4"
            stagger={0.1}
            delay={0.2}
          >
            {STATS.map((stat) => (
              <RevealItem key={stat.label}>
                <span className="font-display block text-4xl font-medium text-ink italic md:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-1.5 block font-mono text-[10px] tracking-widest text-mute uppercase">
                  {stat.label}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <RevealGroup className="flex flex-col gap-4" stagger={0.12} delay={0.15}>
          {CAPABILITIES.map((capability, i) => {
            const Icon = CAPABILITY_ICONS[i % CAPABILITY_ICONS.length];
            return (
              <RevealItem key={capability.title}>
                <div className="group flex gap-4 rounded-2xl border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-surface/60">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-strong transition-colors duration-300 group-hover:bg-accent-strong group-hover:text-bg">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink">{capability.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-mute">
                      {capability.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      <div className="mt-20">
        <Marquee items={MARQUEE_WORDS} />
      </div>
    </section>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import { CASE_STUDIES, PROJECTS } from '../../data/dummyData';
import { DeviceFrame } from '../ui/DeviceFrame';
import { OrnamentDivider } from '../ui/OrnamentDivider';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

interface CaseStudyProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export function CaseStudy({ selectedId, onSelect }: CaseStudyProps) {
  const project = PROJECTS.find((p) => p.id === selectedId) ?? PROJECTS[0];
  const study = CASE_STUDIES[project.id];

  return (
    <section
      id="case-study"
      className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 lg:px-24"
    >
      <SectionHeading index="05" eyebrow="Case Study" heading={project.title} />

      <RevealItem className="mt-10 flex flex-wrap gap-3">
        {PROJECTS.map((p) => {
          const isActive = p.id === selectedId;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onSelect(p.id)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'border-ink bg-ink text-bg'
                  : 'border-line text-mute hover:border-accent/60 hover:text-ink'
              }`}
            >
              {p.shortTitle}
            </button>
          );
        })}
      </RevealItem>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mt-10 flex flex-wrap gap-8 border-b border-line pb-10 font-mono text-xs text-mute uppercase">
            <div>
              <span className="block text-[10px] tracking-widest text-mute/70">
                Project Type
              </span>
              <span className="mt-1 block text-sm text-ink normal-case">
                {study.client}
              </span>
            </div>
            <div>
              <span className="block text-[10px] tracking-widest text-mute/70">
                Timeline
              </span>
              <span className="mt-1 block text-sm text-ink normal-case">
                {study.timeline}
              </span>
            </div>
            <div>
              <span className="block text-[10px] tracking-widest text-mute/70">
                Role
              </span>
              <span className="mt-1 block text-sm text-ink normal-case">
                {project.role}
              </span>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <DeviceFrame
              device={study.device}
              layout={study.layout}
              gradient={project.cover}
              screenshot={study.screenshot}
              alt={`${project.title} preview screen`}
            />
          </div>

          <p className="font-display mx-auto mt-14 max-w-3xl text-2xl leading-snug font-medium text-ink md:text-3xl">
            {study.goal}
          </p>

          <RevealGroup
            className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2"
            stagger={0.12}
            delay={0.1}
          >
            {study.process.map((step, i) => (
              <RevealItem key={step.heading} className="flex gap-5">
                <span className="font-mono text-sm text-accent-strong">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="mb-2 text-lg font-medium text-ink">
                    {step.heading}
                  </h4>
                  <p className="text-sm leading-relaxed text-mute">{step.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealGroup
            className="mt-20 grid grid-cols-2 gap-8 rounded-3xl border border-line bg-surface/60 p-8 md:grid-cols-4"
            stagger={0.1}
            delay={0.1}
          >
            {study.results.map((metric) => (
              <RevealItem key={metric.label} className="flex flex-col gap-1">
                <span className="font-display text-3xl font-semibold text-accent-strong md:text-4xl">
                  {metric.value}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-mute uppercase">
                  {metric.label}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealItem className="mt-20 max-w-2xl">
            <OrnamentDivider className="mb-8 max-w-[220px]" />
            <p className="text-lg leading-relaxed text-ink italic">
              &ldquo;{study.testimonial.quote}&rdquo;
            </p>
            <p className="mt-4 font-mono text-xs tracking-wide text-mute uppercase">
              {study.testimonial.author} — {study.testimonial.role}
            </p>
          </RevealItem>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

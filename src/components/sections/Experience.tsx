import { CERTIFICATES, EDUCATION, EXPERIENCE } from '../../data/dummyData';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 lg:px-24"
    >
      <SectionHeading
        index="02"
        eyebrow="Experience"
        heading="Where I've grown, on paper."
      />

      <RevealGroup
        className="mt-14 flex flex-col gap-10 border-l border-line pl-8"
        stagger={0.12}
        delay={0.1}
      >
        {EXPERIENCE.map((entry) => (
          <RevealItem key={`${entry.role}-${entry.org}`} className="relative">
            <span className="absolute top-1.5 -left-[2.55rem] h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent-strong" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-medium text-ink">
                {entry.role} <span className="text-mute">· {entry.org}</span>
              </h3>
              <span className="font-mono text-xs whitespace-nowrap text-mute">
                {entry.period}
              </span>
            </div>
            <ul className="mt-3 flex flex-col gap-1.5">
              {entry.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2 text-sm leading-relaxed text-mute"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mute" />
                  {bullet}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>

      <RevealGroup
        className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
        stagger={0.12}
        delay={0.15}
      >
        <RevealItem>
          <div className="h-full rounded-2xl border border-line bg-surface/40 p-6">
            <h4 className="font-mono text-xs tracking-[0.2em] text-accent-strong uppercase">
              Education
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              {EDUCATION.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-sm font-medium text-ink">{edu.degree}</p>
                  <p className="mt-0.5 text-sm text-mute">
                    {edu.institution} · {edu.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealItem>

        <RevealItem>
          <div className="h-full rounded-2xl border border-line bg-surface/40 p-6">
            <h4 className="font-mono text-xs tracking-[0.2em] text-accent-strong uppercase">
              Certificates
            </h4>
            <div className="mt-4 flex flex-col gap-2.5">
              {CERTIFICATES.map((cert) => (
                <p key={cert.name} className="text-sm text-ink">
                  {cert.name}
                </p>
              ))}
            </div>
          </div>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}

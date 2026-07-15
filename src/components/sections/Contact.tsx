import { Download } from 'lucide-react';
import { CONTACT, RESUME_URL, SOCIAL_LINKS } from '../../data/dummyData';
import { RevealGroup, RevealItem } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto flex min-h-[90svh] max-w-6xl flex-col justify-between px-6 py-32 md:px-12 lg:px-24"
    >
      <SectionHeading
        index="06"
        eyebrow={CONTACT.eyebrow}
        heading={CONTACT.heading}
      />

      <RevealGroup className="mt-12 flex flex-col gap-10" stagger={0.15}>
        <RevealItem>
          <p className="max-w-xl text-lg leading-relaxed text-mute">
            {CONTACT.description}
          </p>
        </RevealItem>

        <RevealItem>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group inline-flex items-baseline gap-3 border-b border-line pb-2 transition-colors duration-300 hover:border-accent"
          >
            <span className="font-display text-3xl font-medium text-ink italic transition-colors duration-300 group-hover:text-accent-strong sm:text-5xl">
              {CONTACT.email}
            </span>
            <span className="text-accent-strong transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </RevealItem>

        <RevealItem className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label === 'Email' ? undefined : '_blank'}
              rel="noreferrer"
              className="font-mono text-xs tracking-widest text-mute uppercase transition-colors duration-300 hover:text-accent-strong"
            >
              {social.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            download
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent-strong"
          >
            <Download
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            Download CV
          </a>
        </RevealItem>
      </RevealGroup>

      <div className="mt-24 flex flex-col gap-4 border-t border-line pt-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Yoon. All rights reserved.</span>
        <span className="font-mono uppercase">Designed &amp; built with care.</span>
      </div>
    </section>
  );
}

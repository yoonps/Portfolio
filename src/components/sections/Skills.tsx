import { AnimatePresence, motion } from 'framer-motion';
import {
  Atom,
  Bot,
  Boxes,
  Braces,
  Code2,
  Cpu,
  FileCode2,
  GitBranch,
  Languages as LanguagesIcon,
  Megaphone,
  MessageSquareCode,
  Palette,
  PenTool,
  Server,
  Layers,
  Wand2,
  Wrench,
} from 'lucide-react';
import { useState } from 'react';
import { SKILLS } from '../../data/dummyData';
import { RevealItem } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const CATEGORY_ICONS: Record<string, typeof PenTool> = {
  'Frontend Development': Code2,
  Design: PenTool,
  'Tools & AI': Wrench,
  Languages: LanguagesIcon,
};

const SKILL_ICONS: Record<string, typeof PenTool> = {
  'HTML & CSS': FileCode2,
  JavaScript: Braces,
  React: Atom,
  PHP: Server,
  Laravel: Layers,
  'UI/UX Design': PenTool,
  Figma: Wand2,
  Canva: Palette,
  'Social Media Content': Megaphone,
  Git: GitBranch,
  GitHub: Boxes,
  Claude: Bot,
  ChatGPT: MessageSquareCode,
  'Agentic AI': Cpu,
  Burmese: LanguagesIcon,
  English: LanguagesIcon,
  Japanese: LanguagesIcon,
};

export function Skills() {
  const [active, setActive] = useState(SKILLS[0].category);
  const activeGroup = SKILLS.find((group) => group.category === active) ?? SKILLS[0];

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-6 py-32 md:px-12 lg:px-24"
    >
      <SectionHeading
        index="03"
        eyebrow="Skills"
        heading="Tools I use to turn ideas into interfaces."
      />

      <RevealItem className="mt-12 flex flex-wrap gap-3">
        {SKILLS.map((group) => {
          const Icon = CATEGORY_ICONS[group.category] ?? PenTool;
          const isActive = group.category === active;
          return (
            <button
              key={group.category}
              type="button"
              onClick={() => setActive(group.category)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'border-ink bg-ink text-bg'
                  : 'border-line text-mute hover:border-accent/60 hover:text-ink'
              }`}
            >
              <Icon size={15} />
              {group.category}
            </button>
          );
        })}
      </RevealItem>

      <div className="relative mt-10 min-h-[160px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.category}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
          >
            {activeGroup.items.map((skill) => {
              const Icon = SKILL_ICONS[skill.name] ?? Wrench;
              return (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 rounded-2xl border border-line bg-surface/40 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface/70"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-strong">
                    <Icon size={16} />
                  </span>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-medium text-ink">
                      {skill.name}
                    </span>
                    {skill.detail && (
                      <span className="font-mono text-[10px] tracking-wide text-accent-strong uppercase">
                        {skill.detail}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

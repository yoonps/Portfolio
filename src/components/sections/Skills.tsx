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
import { SKILLS } from '../../data/dummyData';
import { RevealGroup, RevealItem } from '../ui/Reveal';
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

      <RevealGroup
        className="mt-12 flex flex-col divide-y divide-line border-y border-line"
        stagger={0.08}
        amount={0.2}
      >
        {SKILLS.map((group) => {
          const CategoryIcon = CATEGORY_ICONS[group.category] ?? PenTool;
          return (
            <RevealItem
              key={group.category}
              className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex shrink-0 items-center gap-2.5 sm:w-44">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink text-bg">
                  <CategoryIcon size={15} />
                </span>
                <h3 className="font-display text-base font-medium text-ink italic">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-1 flex-wrap gap-2">
                {group.items.map((skill) => {
                  const Icon = SKILL_ICONS[skill.name] ?? Wrench;
                  return (
                    <span
                      key={skill.name}
                      className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-sm text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface/70"
                    >
                      <Icon size={13} className="text-accent-strong" />
                      {skill.name}
                      {skill.detail && (
                        <span className="font-mono text-[9px] tracking-wide text-mute uppercase">
                          · {skill.detail}
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}

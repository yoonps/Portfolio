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

function categorySlug(category: string) {
  return `skills-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
}

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

      <RevealItem className="mt-12 flex flex-wrap gap-3">
        {SKILLS.map((group) => {
          const Icon = CATEGORY_ICONS[group.category] ?? PenTool;
          return (
            <a
              key={group.category}
              href={`#${categorySlug(group.category)}`}
              className="flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-mute transition-all duration-300 hover:border-accent/60 hover:bg-ink hover:text-bg"
            >
              <Icon size={15} />
              {group.category}
            </a>
          );
        })}
      </RevealItem>

      <div className="mt-14 flex flex-col gap-12">
        {SKILLS.map((group) => {
          const CategoryIcon = CATEGORY_ICONS[group.category] ?? PenTool;
          return (
            <RevealGroup
              key={group.category}
              id={categorySlug(group.category)}
              className="scroll-mt-28"
              stagger={0.06}
              amount={0.2}
            >
              <RevealItem className="mb-5 flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ink text-bg">
                  <CategoryIcon size={15} />
                </span>
                <h3 className="font-display text-lg font-medium text-ink italic">
                  {group.category}
                </h3>
              </RevealItem>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {group.items.map((skill) => {
                  const Icon = SKILL_ICONS[skill.name] ?? Wrench;
                  return (
                    <RevealItem key={skill.name}>
                      <div className="group flex h-full items-center gap-3 rounded-2xl border border-line bg-surface/40 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface/70">
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
                    </RevealItem>
                  );
                })}
              </div>
            </RevealGroup>
          );
        })}
      </div>
    </section>
  );
}

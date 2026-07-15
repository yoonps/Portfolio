import { motion } from 'framer-motion';
import type { Project } from '../../types';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
  className?: string;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
}

export function ProjectCard({
  project,
  className = '',
  isSelected = false,
  onSelect,
}: ProjectCardProps) {
  return (
    <motion.a
      href="#case-study"
      onClick={() => onSelect?.(project.id)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex h-[24rem] flex-col overflow-hidden rounded-3xl border bg-surface/60 transition-colors duration-300 hover:border-accent/60 ${isSelected ? 'border-accent-strong' : 'border-line'} ${className}`}
    >
      <div
        className={`relative h-36 w-full shrink-0 overflow-hidden bg-gradient-to-br ${project.cover}`}
      >
        <div className="absolute inset-0 bg-ink/10 transition-opacity duration-300 group-hover:bg-ink/0" />
        <span className="absolute top-3.5 left-4 font-mono text-xs text-ink/60">
          {project.year}
        </span>
        <span className="absolute right-4 bottom-3.5 flex h-9 w-9 -translate-x-2 items-center justify-center rounded-full bg-ink/85 text-bg opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          →
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        <div>
          <h3 className="font-display text-lg font-medium text-ink">
            {project.title}
          </h3>
          <p className="mt-0.5 font-mono text-xs text-mute">{project.role}</p>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-mute">
          {project.summary}
        </p>

        <div className="mt-auto flex gap-5 border-t border-line pt-3">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-0.5">
              <span className="text-base font-semibold text-accent-strong">
                {metric.value}
              </span>
              <span className="font-mono text-[10px] tracking-wide text-mute uppercase">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

import { NAV_LINKS } from '../../data/dummyData';

interface SectionRailProps {
  activeId: string;
}

export function SectionRail({ activeId }: SectionRailProps) {
  return (
    <nav className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 lg:right-10 lg:flex">
      {NAV_LINKS.map((link) => {
        const isActive = link.id === activeId;
        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="group flex items-center gap-3"
          >
            <span
              className={`font-mono text-[11px] tracking-wide transition-all duration-300 ${
                isActive
                  ? 'translate-x-0 text-accent-strong opacity-100'
                  : 'translate-x-2 text-mute opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
              }`}
            >
              {link.label}
            </span>
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'scale-125 bg-accent shadow-[0_0_10px_rgba(192,138,146,0.6)]'
                    : 'bg-silver/60 group-hover:bg-mute'
                }`}
              />
            </span>
          </a>
        );
      })}
      <div className="absolute top-1/2 right-[7px] -z-10 h-[calc(100%+40px)] w-px -translate-y-1/2 bg-line" />
      <span className="absolute -right-6 bottom-0 translate-y-full font-mono text-[10px] text-mute">
        {NAV_LINKS.findIndex((l) => l.id === activeId) + 1 || 1}/
        {NAV_LINKS.length}
      </span>
    </nav>
  );
}

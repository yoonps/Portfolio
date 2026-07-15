import { SOCIAL_LINKS } from '../../data/dummyData';

export function SocialRail() {
  return (
    <div className="fixed bottom-10 left-6 z-40 hidden flex-col items-center gap-6 lg:left-10 lg:flex">
      <div className="flex flex-col items-center gap-4">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.label === 'Email' ? undefined : '_blank'}
            rel="noreferrer"
            className="font-mono text-[11px] tracking-wide text-mute uppercase transition-colors duration-300 hover:text-accent-strong"
            style={{ writingMode: 'vertical-rl' }}
          >
            {social.label}
          </a>
        ))}
      </div>
      <div className="h-16 w-px bg-line" />
    </div>
  );
}

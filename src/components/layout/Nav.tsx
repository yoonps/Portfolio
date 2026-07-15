import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NAV_LINKS, RESUME_URL, SOCIAL_LINKS } from '../../data/dummyData';

interface NavProps {
  activeId: string;
}

export function Nav({ activeId }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-line/0 bg-bg/70 px-6 py-5 backdrop-blur-md transition-colors duration-300 md:px-12">
        <a
          href="#intro"
          className="font-display text-lg font-semibold tracking-wide text-ink"
        >
          Yoon<span className="text-accent-strong">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link.id === activeId;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`group relative py-1 font-mono text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive ? 'text-ink' : 'text-mute hover:text-ink'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={RESUME_URL}
            download
            aria-label="Download resume (PDF)"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-accent hover:text-accent-strong"
          >
            <Download size={16} />
          </a>
          <a
            href="#contact"
            className="hidden rounded-full border border-line px-4 py-2 text-xs font-medium tracking-wide text-ink transition-colors duration-300 hover:border-accent hover:text-accent-strong sm:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-accent hover:text-accent-strong md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-8 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className={`font-display py-2 text-4xl font-medium transition-colors duration-300 ${
                    link.id === activeId ? 'text-accent-strong' : 'text-ink'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-12 flex gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label === 'Email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="font-mono text-xs tracking-widest text-mute uppercase hover:text-accent-strong"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

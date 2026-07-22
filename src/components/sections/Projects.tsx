import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';
import { PROJECTS } from '../../data/dummyData';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';

interface ProjectsProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export function Projects({ selectedId, onSelect }: ProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const trackWidth = trackRef.current?.scrollWidth ?? 0;
      const viewportWidth = stickyRef.current?.clientWidth ?? 0;
      const railGutter = window.innerWidth >= 1024 ? 160 : 0;
      setMaxScroll(Math.max(trackWidth - viewportWidth + railGutter, 0));
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    mass: 0.4,
  });

  const x = useTransform(smoothProgress, [0, 1], [0, -maxScroll]);
  const progressWidth = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-6xl px-6 pt-32 md:px-12 lg:px-24">
        <SectionHeading
          index="04"
          eyebrow="Selected Work"
          heading="A few projects I've built along the way."
        />
      </div>

      <div ref={containerRef} style={{ height: `${PROJECTS.length * 60}vh` }}>
        <div
          ref={stickyRef}
          className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-24 pb-10"
        >
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 px-6 will-change-transform md:px-12 lg:px-24"
          >
            {PROJECTS.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isSelected={project.id === selectedId}
                onSelect={onSelect}
                className="w-[78vw] shrink-0 sm:w-[22rem]"
              />
            ))}
            <div className="w-px shrink-0 sm:w-1" />
          </motion.div>

          <div className="mx-auto mt-10 h-px w-32 overflow-hidden rounded-full bg-line">
            <motion.div style={{ width: progressWidth }} className="h-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { AuroraBackground } from './components/layout/AuroraBackground';
import { Nav } from './components/layout/Nav';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { SectionRail } from './components/layout/SectionRail';
import { SocialRail } from './components/layout/SocialRail';
import { About } from './components/sections/About';
import { CaseStudy } from './components/sections/CaseStudy';
import { Contact } from './components/sections/Contact';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { WaveDivider } from './components/layout/WaveDivider';
import { NAV_LINKS, PROJECTS } from './data/dummyData';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const activeId = useActiveSection(NAV_LINKS.map((link) => link.id));
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS[0].id);

  return (
    <div className="relative min-h-screen">
      <a
        href="#intro"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <AuroraBackground />
      <ScrollProgress />
      <Nav activeId={activeId} />
      <SectionRail activeId={activeId} />
      <SocialRail />

      <main className="relative z-10">
        <Hero />
        <WaveDivider tone="surface" />
        <About />
        <WaveDivider tone="accent-2" flip />
        <Experience />
        <WaveDivider tone="accent" />
        <Skills />
        <WaveDivider tone="surface" flip />
        <Projects
          selectedId={selectedProjectId}
          onSelect={setSelectedProjectId}
        />
        <WaveDivider tone="accent-2" />
        <CaseStudy
          selectedId={selectedProjectId}
          onSelect={setSelectedProjectId}
        />
        <WaveDivider tone="accent" flip />
        <Contact />
      </main>
    </div>
  );
}

export default App;

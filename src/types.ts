export interface NavLink {
  id: string;
  label: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface SkillItem {
  name: string;
  detail?: string;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  year: string;
  title: string;
  shortTitle: string;
  role: string;
  tags: string[];
  summary: string;
  cover: string; // gradient token used as placeholder art
  metrics: ProjectMetric[];
}

export interface CaseStudySection {
  heading: string;
  body: string;
}

export type DeviceType = 'browser' | 'phone';
export type ScreenLayout = 'grid' | 'list' | 'form' | 'hero';

export interface CaseStudy {
  client: string;
  timeline: string;
  goal: string;
  process: CaseStudySection[];
  results: ProjectMetric[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  device: DeviceType;
  layout: ScreenLayout;
  screenshot?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
}

export interface Certificate {
  name: string;
}

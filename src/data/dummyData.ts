import type {
  Capability,
  CaseStudy,
  Certificate,
  EducationEntry,
  ExperienceEntry,
  NavLink,
  Project,
  QuickFact,
  SkillGroup,
  SocialLink,
  Stat,
} from '../types';

export const NAV_LINKS: NavLink[] = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'contact', label: 'Contact' },
];

export const HERO = {
  eyebrow: 'PORTFOLIO — 2026',
  greeting: "Hi, I'm",
  name: 'Yoon',
  role: 'Junior Front-end Developer',
  taglineLines: ['Designing for people.', 'Developing for performance.'],
  description:
    'Building modern web applications that combine intuitive user experiences with clean, scalable code.',
  ctaPrimary: { label: 'View the work', href: '#work' },
  ctaSecondary: { label: "Let's talk", href: '#contact' },
};

export const QUICK_FACTS: QuickFact[] = [
  { label: 'Based in', value: 'Yangon, Myanmar' },
  { label: 'Focus', value: 'Front-End Development & UI/UX' },
  { label: 'Education', value: 'BSc Computer Science, 2026' },
  { label: 'Currently', value: 'Junior Front-end Developer @ Plus Impact' },
];

export const ABOUT = {
  eyebrow: 'About',
  heading: 'From Yangon to Tokyo — building better interfaces.',
  paragraphs: [
    "Adaptable and motivated, with international experience as a scholarship exchange student in Japan and hands-on experience across coding and design projects — I bring strong problem-solving skills and a fast learning curve to everything I build.",
    "Currently working as a Junior Front-end Developer at Plus Impact, where I improve UI/UX, run regression testing, and help ship reliable, user-friendly features.",
    "I'm finishing my Bachelor of Science in Computer Science at the University of Yangon, with a year abroad at Kokushikan University in Tokyo studying Electrical and Information Engineering.",
  ],
};

export const STATS: Stat[] = [
  { value: '5+', label: 'Projects built' },
  { value: 'N2', label: 'Japanese (JLPT)' },
  { value: '3', label: 'Certificates earned' },
  { value: '2026', label: 'Graduating' },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Junior Front-end Developer',
    org: 'Plus Impact',
    period: 'Jun 2026 — Present',
    bullets: [
      "Improved the application's user interface by fixing UI design issues and enhancing the overall user experience (UX).",
    ],
  },
  {
    role: 'Intern',
    org: 'Plus Impact',
    period: 'Mar 2026 — May 2026',
    bullets: [
      'Conducted regression testing to ensure existing functionality remained stable after updates and new features.',
      'Contributed to UI/UX improvements by analyzing user flows and suggesting enhancements.',
      'Supported QA processes by executing test cases and maintaining detailed test reports.',
    ],
  },
  {
    role: 'Scholarship Exchange Student',
    org: 'Kokushikan University, Japan',
    period: 'Mar 2025 — Feb 2026',
    bullets: [
      'Developed strong independence, time management, and problem-solving skills.',
      'Communicated and collaborated with students from diverse cultural backgrounds.',
      'Completed academic coursework in Electrical and Information Engineering in an international setting.',
    ],
  },
  {
    role: 'Student Manager & Volunteer',
    org: 'Summit Education',
    period: 'Jun 2024 — Feb 2025',
    bullets: [
      'Supported leadership and management of student activities and programs.',
      'Helped organize events, meetings, and resources.',
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Yangon, Myanmar',
    period: '2026',
  },
];

export const CERTIFICATES: Certificate[] = [
  { name: 'Practical English Club (Intermediate)' },
  { name: 'Code-Lab — Professional Web Design' },
  { name: 'Japanese Language Proficiency Test (N2)' },
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'Front-End Development',
    description:
      'Building responsive interfaces with React, JavaScript, PHP, and Laravel.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Designing intuitive, user-first experiences in Figma — from wireframes to polish.',
  },
  {
    title: 'QA & Testing',
    description:
      'Running regression tests and quality checks to ship stable, reliable features.',
  },
];

export const MARQUEE_WORDS: string[] = [
  'React',
  'JavaScript',
  'PHP & Laravel',
  'Figma',
  'UI/UX Design',
  'Git & GitHub',
  'Agentic AI',
  'Canva',
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML & CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'PHP' },
      { name: 'Laravel' },
    ],
  },
  {
    category: 'Design',
    items: [
      { name: 'UI/UX Design' },
      { name: 'Figma' },
      { name: 'Canva' },
      { name: 'Social Media Content' },
    ],
  },
  {
    category: 'Tools & AI',
    items: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Claude' },
      { name: 'ChatGPT' },
      { name: 'Agentic AI' },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'Burmese', detail: 'Native' },
      { name: 'English', detail: 'Intermediate' },
      { name: 'Japanese', detail: 'JLPT N2' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'parcel-delivery',
    year: '2026',
    title: 'Parcel Delivery App Concept',
    shortTitle: 'Parcel Delivery',
    role: 'UI/UX Design (Figma)',
    tags: ['UI/UX', 'Figma', 'Concept'],
    summary:
      'An original parcel delivery app concept designed for a simple, intuitive experience — from booking to shipment tracking.',
    cover: 'from-accent/60 to-accent-2/50',
    metrics: [
      { label: 'Tool', value: 'Figma' },
      { label: 'Assisted by', value: 'Claude AI' },
    ],
  },
  {
    id: 'food-delivery',
    year: '2026',
    title: 'Food Delivery App Concept',
    shortTitle: 'Food Delivery',
    role: 'UI/UX Design (Figma)',
    tags: ['UI/UX', 'Figma', 'Concept'],
    summary:
      'A complete UI/UX prototype inspired by platforms like Foodpanda, refined with a focus on usability and visual consistency.',
    cover: 'from-accent-2/50 to-surface-2',
    metrics: [
      { label: 'Tool', value: 'Figma' },
      { label: 'Inspired by', value: 'Foodpanda' },
    ],
  },
  {
    id: 'movie-site',
    year: '2025',
    title: 'Movie Site',
    shortTitle: 'Movie Site',
    role: 'Front-End Development (React)',
    tags: ['React', 'API', 'Web App'],
    summary:
      'A movie listing web application built with React.js, pulling real-time data from a movie API with a favorites feature.',
    cover: 'from-silver/60 to-accent/40',
    metrics: [
      { label: 'Data source', value: 'Movie API' },
      { label: 'Key feature', value: 'Favorites list' },
    ],
  },
  {
    id: 'pizza-order-system',
    year: '2025',
    title: 'Pizza Order System',
    shortTitle: 'Pizza Order',
    role: 'Full-Stack Development (Laravel)',
    tags: ['PHP', 'Laravel', 'CRUD'],
    summary:
      'A pizza ordering web app with full CRUD for menu management, a working cart, and automated total price calculation.',
    cover: 'from-surface-2 to-accent-2/50',
    metrics: [
      { label: 'Stack', value: 'PHP + Laravel' },
      { label: 'Feature', value: 'Cart & pricing' },
    ],
  },
  {
    id: 'interface-web-design',
    year: '2024',
    title: 'Interface Web Design Project',
    shortTitle: 'Interface Design',
    role: 'Front-End Development (HTML/CSS)',
    tags: ['HTML', 'CSS', 'Responsive'],
    summary:
      'A complete web page built from scratch with only HTML and CSS — page layout, responsive design, and semantic structure, no frameworks.',
    cover: 'from-accent/40 to-silver/50',
    metrics: [
      { label: 'Built with', value: 'HTML & CSS' },
      { label: 'Focus', value: 'Responsive layout' },
    ],
  },
];

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'parcel-delivery': {
    client: 'Personal Project — Original Concept',
    timeline: 'Self-directed · Figma prototype',
    goal: 'Delivery apps often overload users with unnecessary steps. I set out to design a parcel delivery concept that made booking, tracking, and managing shipments feel effortless — using AI-assisted ideation to move faster from concept to polished screens.',
    process: [
      {
        heading: 'Research & Ideation',
        body: 'Explored parcel and courier apps to understand common pain points, then used AI-assisted prompting with Claude to accelerate ideation and structure the information architecture.',
      },
      {
        heading: 'Wireframing',
        body: 'Sketched core user flows — booking a parcel, tracking a shipment, and managing account details — prioritizing clarity over complexity.',
      },
      {
        heading: 'UI Design in Figma',
        body: 'Applied core UI/UX principles — consistency, spacing, typography, and color balance — to design a clean, intuitive interface end to end.',
      },
      {
        heading: 'Iteration',
        body: 'Refined navigation and status states so users always know exactly where their parcel is in the delivery process.',
      },
    ],
    results: [
      { label: 'Core screens designed', value: '12+' },
      { label: 'Key flows', value: 'Booking · Tracking' },
      { label: 'Design tool', value: 'Figma' },
      { label: 'Design approach', value: 'AI-assisted' },
    ],
    testimonial: {
      quote:
        "This project taught me that good UX isn't about adding features — it's about removing friction until only the essential steps remain.",
      author: 'Yoon Pyae Sone',
      role: 'Designer & Developer',
    },
    device: 'phone',
    layout: 'form',
    screenshot: '/project-parcel-delivery.png',
  },
  'food-delivery': {
    client: 'Personal Project — Original Concept',
    timeline: 'Self-directed · Figma prototype',
    goal: 'Food delivery apps like Foodpanda already solve real problems — but I wanted to understand why, by rebuilding the experience myself and improving on it wherever I could.',
    process: [
      {
        heading: 'Research',
        body: 'Studied platforms like Foodpanda to understand real-world user flow, menu browsing, and checkout patterns.',
      },
      {
        heading: 'Wireframing',
        body: 'Mapped out the core journey — browsing restaurants, building an order, and checking out — before touching visual design.',
      },
      {
        heading: 'UI Design',
        body: 'Applied consistency, spacing, typography, and color balance to design a polished, production-ready interface in Figma.',
      },
      {
        heading: 'Refinement',
        body: 'Modified UI elements based on personal analysis to improve usability beyond the original inspiration.',
      },
    ],
    results: [
      { label: 'Screens designed', value: '10+' },
      { label: 'Key flows', value: 'Browse · Order' },
      { label: 'Design tool', value: 'Figma' },
      { label: 'Inspired by', value: 'Foodpanda' },
    ],
    testimonial: {
      quote:
        'Recreating an app I already used every day taught me more about UX than any tutorial — you notice every tiny friction point once you have to design it yourself.',
      author: 'Yoon Pyae Sone',
      role: 'Designer',
    },
    device: 'phone',
    layout: 'grid',
    screenshot: '/project-food-delivery.png',
  },
  'movie-site': {
    client: 'Personal Project — Front-End Practice',
    timeline: 'Self-directed · React.js',
    goal: 'I wanted hands-on practice consuming a real external API and managing state in React — so I built a movie discovery site people could actually use to save what they want to watch.',
    process: [
      {
        heading: 'API Integration',
        body: 'Integrated a public movie API to fetch and display real-time movie data on the home page.',
      },
      {
        heading: 'Component Architecture',
        body: 'Structured the app into reusable React components for listings, details, and favorites.',
      },
      {
        heading: 'Favorites Feature',
        body: 'Implemented a Favorites feature letting users add movies to a dedicated page with one click.',
      },
      {
        heading: 'Polish',
        body: 'Refined loading states and layout so the browsing experience feels fast and responsive.',
      },
    ],
    results: [
      { label: 'Built with', value: 'React.js' },
      { label: 'Data source', value: 'Movie API' },
      { label: 'Key feature', value: 'Favorites list' },
      { label: 'Type', value: 'Web app' },
    ],
    testimonial: {
      quote:
        'This was the project where React finally clicked for me — state, props, and API calls stopped being separate concepts and started being one workflow.',
      author: 'Yoon Pyae Sone',
      role: 'Developer',
    },
    device: 'browser',
    layout: 'grid',
    screenshot: '/project-movie-site.png',
  },
  'pizza-order-system': {
    client: 'Personal Project — Full-Stack Practice',
    timeline: 'Self-directed · PHP & Laravel',
    goal: 'I wanted to go beyond front-end only and build something with a real backend — a pizza ordering system that handles data, logic, and a working cart end to end.',
    process: [
      {
        heading: 'Data Modeling',
        body: 'Designed the database structure for menu items and orders in Laravel.',
      },
      {
        heading: 'CRUD Implementation',
        body: 'Built full CRUD functionality for managing pizza menu items and order records.',
      },
      {
        heading: 'Cart & Pricing',
        body: 'Developed an add-to-cart feature with automated total price calculation based on selected items and quantities.',
      },
      {
        heading: 'Testing',
        body: 'Tested ordering flows end-to-end to make sure totals and cart state stayed accurate.',
      },
    ],
    results: [
      { label: 'Stack', value: 'PHP + Laravel' },
      { label: 'Feature', value: 'Cart & pricing' },
      { label: 'Data', value: 'CRUD menu & orders' },
      { label: 'Type', value: 'Full-stack app' },
    ],
    testimonial: {
      quote:
        "Building the backend myself made me appreciate what's actually happening behind every 'add to cart' button I'd taken for granted as a user.",
      author: 'Yoon Pyae Sone',
      role: 'Developer',
    },
    device: 'browser',
    layout: 'list',
    screenshot: '/project-pizza-order-system.png',
  },
  'interface-web-design': {
    client: 'Personal Project — Front-End Fundamentals',
    timeline: 'Self-directed · HTML & CSS',
    goal: 'Before frameworks, I wanted to be confident in the fundamentals — building a complete page from scratch using nothing but semantic HTML and hand-written CSS.',
    process: [
      {
        heading: 'Layout',
        body: 'Designed page layouts and visual elements without relying on any external frameworks.',
      },
      {
        heading: 'Semantic HTML',
        body: 'Structured the page with semantic HTML for accessibility and clean markup.',
      },
      {
        heading: 'Responsive CSS',
        body: 'Practiced responsive design and CSS styling across breakpoints.',
      },
      {
        heading: 'Review',
        body: 'Gained practical experience in front-end web development and interface design fundamentals.',
      },
    ],
    results: [
      { label: 'Built with', value: 'HTML & CSS' },
      { label: 'Frameworks', value: 'None' },
      { label: 'Focus', value: 'Responsive layout' },
      { label: 'Type', value: 'Static site' },
    ],
    testimonial: {
      quote:
        'Working without a framework forced me to actually understand the CSS box model instead of just trusting a utility class to handle it.',
      author: 'Yoon Pyae Sone',
      role: 'Developer',
    },
    device: 'browser',
    layout: 'hero',
    screenshot: '/project-interface-web-design.png',
  },
};

export const RESUME_URL = '/resume.pdf';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Email', href: 'mailto:yoonps86@gmail.com' },
  { label: 'Phone', href: 'tel:+959450049865' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yoon-pyae-sone' },
  { label: 'GitHub', href: 'https://github.com' },
];

export const CONTACT = {
  eyebrow: 'Contact',
  heading: "Let's build something great together.",
  description:
    "Open to junior front-end and UI/UX roles, internships, and freelance projects. Always excited to learn something new and build something useful.",
  email: 'yoonps86@gmail.com',
};

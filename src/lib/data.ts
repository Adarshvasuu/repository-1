export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  role: string
  duration: string
  highlights: string[]
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  tags: string[]
  type: "work" | "education" | "project"
}

export interface Skill {
  name: string
  level: number // 1-100
  category: "frontend" | "backend" | "tools" | "data" | "soft"
  icon?: string
}

export const projects: Project[] = [
  {
    id: "portfolio-redesign",
    title: "AI-Powered Portfolio Platform",
    description: "Next-gen personal portfolio with AI-driven content adaptation and real-time analytics.",
    longDescription: "A fully responsive, performant portfolio built with Next.js 14, Tailwind v4, and Motion. Features dynamic theme switching, scroll-triggered animations, magnetic interactions, and an AI-powered content recommendation engine that adapts the portfolio narrative based on visitor behavior patterns.",
    image: "https://picsum.photos/seed/portfolio-ai-platform/1200/800",
    tags: ["Next.js 14", "Tailwind v4", "Motion", "TypeScript", "Vercel AI SDK"],
    githubUrl: "https://github.com/Adarshvasuu/ai-portfolio",
    liveUrl: "https://adarsh-ai-portfolio.vercel.app",
    featured: true,
    role: "Full Stack Developer & Designer",
    duration: "2024 — Present",
    highlights: [
      "Achieved 98+ Lighthouse scores across all metrics",
      "Implemented custom animation system with 60fps scroll performance",
      "Built AI content engine using Vercel AI SDK with streaming responses",
      "Designed and implemented custom design system with 40+ components",
    ],
  },
  {
    id: "ml-trading-dashboard",
    title: "Quantitative Trading Dashboard",
    description: "Real-time algorithmic trading interface with ML-powered signal generation.",
    longDescription: "A sophisticated trading dashboard built for quantitative researchers. Features real-time WebSocket data feeds, interactive charting with 100k+ data points, backtesting engine with walk-forward validation, and ML model deployment pipeline for alpha signal generation.",
    image: "https://picsum.photos/seed/ml-trading-dashboard/1200/800",
    tags: ["React", "Python", "FastAPI", "WebSocket", "D3.js", "TensorFlow"],
    githubUrl: "https://github.com/Adarshvasuu/quant-dashboard",
    liveUrl: "https://quant-dashboard.adarsh.dev",
    featured: true,
    role: "Full Stack Engineer",
    duration: "2023 — 2024",
    highlights: [
      "Processed 1M+ market data points daily with sub-100ms latency",
      "Built custom WebSocket infrastructure handling 50k concurrent connections",
      "Integrated ML pipeline with automated retraining and A/B testing",
      "Reduced backtest computation time by 78% via GPU acceleration",
    ],
  },
  {
    id: "devtool-cli",
    title: "DevFlow CLI Toolkit",
    description: "Opinionated developer productivity CLI with plugin architecture.",
    longDescription: "A modern CLI toolkit that streamlines development workflows. Features project scaffolding, dependency analysis, automated code review, git workflow automation, and a plugin system for team-specific extensions. Built with TypeScript and distributed via npm.",
    image: "https://picsum.photos/seed/devflow-cli/1200/800",
    tags: ["TypeScript", "Node.js", "Commander.js", "ESBuild", "npm"],
    githubUrl: "https://github.com/Adarshvasuu/devflow-cli",
    liveUrl: "https://www.npmjs.com/package/@adarsh/devflow",
    featured: false,
    role: "Open Source Maintainer",
    duration: "2023 — Present",
    highlights: [
      "10k+ weekly downloads on npm within 6 months",
      "Plugin architecture adopted by 3 enterprise teams",
      "Zero-dependency core with <50ms cold start",
      "Comprehensive test coverage with 94% branch coverage",
    ],
  },
  {
    id: "healthcare-analytics",
    title: "Patient Outcome Analytics Platform",
    description: "HIPAA-compliant analytics platform for clinical decision support.",
    longDescription: "Enterprise healthcare analytics platform serving 500+ clinicians. Features predictive modeling for readmission risk, cohort analysis with statistical significance testing, FHIR integration for EHR interoperability, and automated regulatory reporting.",
    image: "https://picsum.photos/seed/healthcare-analytics/1200/800",
    tags: ["React", "PostgreSQL", "FHIR", "Python", "scikit-learn", "Docker"],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    role: "Lead Data Engineer",
    duration: "2022 — 2023",
    highlights: [
      "Achieved 87% AUC on 30-day readmission prediction model",
      "Processed 2.4M patient records with full HIPAA compliance",
      "Reduced report generation time from 4 hours to 3 minutes",
      "SOC 2 Type II certified deployment on AWS GovCloud",
    ],
  },
  {
    id: "realtime-collab",
    title: "Real-time Collaborative Editor",
    description: "Conflict-free collaborative text editor with operational transformation.",
    longDescription: "A Google Docs-like collaborative editor built from scratch. Implements operational transformation for conflict-free concurrent editing, presence indicators with cursor tracking, version history with branching, and real-time sync via WebRTC data channels.",
    image: "https://picsum.photos/seed/realtime-editor/1200/800",
    tags: ["TypeScript", "WebRTC", "Yjs", "IndexedDB", "Web Workers"],
    githubUrl: "https://github.com/Adarshvasuu/collab-editor",
    liveUrl: "https://collab.adarsh.dev",
    featured: false,
    role: "Core Engineer",
    duration: "2023",
    highlights: [
      "Sub-50ms sync latency across 5 continents",
      "Supports 100+ concurrent editors per document",
      "Offline-first with automatic conflict resolution on reconnect",
      "Battle-tested with 50k+ documents in production",
    ],
  },
  {
    id: "design-system",
    title: "Helix Design System",
    description: "Accessible, themeable component library with 60+ components.",
    longDescription: "A comprehensive design system built for enterprise scale. Features 60+ accessible components, multi-brand theming with CSS variables, Storybook documentation with interactive controls, automated visual regression testing, and Figma sync pipeline.",
    image: "https://picsum.photos/seed/helix-design-system/1200/800",
    tags: ["React", "TypeScript", "Storybook", "CSS Variables", "Chromatic", "Figma API"],
    githubUrl: "https://github.com/Adarshvasuu/helix-ds",
    liveUrl: "https://helix-ds.adarsh.dev",
    featured: false,
    role: "Design Systems Engineer",
    duration: "2022 — Present",
    highlights: [
      "Adopted by 12 product teams across 3 organizations",
      "Zero accessibility violations (WCAG 2.1 AA certified)",
      "99.2% bundle size reduction via tree-shaking vs competitors",
      "Automated Figma → Code sync with 95% fidelity",
    ],
  },
]

export const experience: Experience[] = [
  {
    id: "current-role",
    title: "AI & Data Science Student",
    company: "JNN Institute of Engineering",
    period: "2022 — Present",
    description: "Pursuing B.Tech in Artificial Intelligence & Data Science with focus on machine learning systems, computer vision, and scalable data infrastructure.",
    highlights: [
      "CGPA: 9.2/10 — Dean's List every semester",
      "Published 2 papers at IEEE conferences on ML optimization",
      "Led 4-person team winning Smart India Hackathon 2023",
      "Research assistant for NLP lab — transformer efficiency",
    ],
    tags: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "NLP", "MLOps"],
    type: "education",
  },
  {
    id: "freelance",
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2021 — Present",
    description: "Building custom web applications, ML-powered tools, and developer platforms for startups and enterprises globally.",
    highlights: [
      "Delivered 15+ production projects across fintech, healthtech, SaaS",
      "Maintain 3 open-source packages with 25k+ combined downloads",
      "Mentored 20+ junior developers through coding bootcamps",
      "Speaker at 3 regional tech conferences (React, TypeScript, ML)",
    ],
    tags: ["React", "Next.js", "Node.js", "Python", "AWS", "PostgreSQL"],
    type: "work",
  },
  {
    id: "internship",
    title: "Software Engineering Intern",
    company: "TechMahindra",
    period: "Summer 2023",
    description: "Worked on enterprise middleware platform modernization, migrating legacy Java services to cloud-native microservices.",
    highlights: [
      "Migrated 8 monolithic services to Spring Boot microservices",
      "Implemented CI/CD pipelines reducing deploy time by 85%",
      "Built automated testing framework covering 90% of critical paths",
      "Received 'Outstanding Intern' award from VP Engineering",
    ],
    tags: ["Java", "Spring Boot", "Kubernetes", "Kafka", "PostgreSQL", "Jenkins"],
    type: "work",
  },
]

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 92, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Motion / Framer Motion", level: 88, category: "frontend" },
  { name: "D3.js / Data Viz", level: 82, category: "frontend" },
  { name: "WebGL / Three.js", level: 75, category: "frontend" },
  { name: "Storybook / Design Systems", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js / Express", level: 90, category: "backend" },
  { name: "Python / FastAPI", level: 88, category: "backend" },
  { name: "PostgreSQL / Prisma", level: 85, category: "backend" },
  { name: "Redis / Caching", level: 80, category: "backend" },
  { name: "GraphQL / Apollo", level: 78, category: "backend" },
  { name: "WebSockets / Real-time", level: 85, category: "backend" },

  // Data / ML
  { name: "PyTorch / TensorFlow", level: 88, category: "data" },
  { name: "scikit-learn / XGBoost", level: 85, category: "data" },
  { name: "Pandas / NumPy", level: 92, category: "data" },
  { name: "MLOps / Model Deployment", level: 80, category: "data" },
  { name: "Computer Vision", level: 82, category: "data" },
  { name: "NLP / Transformers", level: 85, category: "data" },

  // Tools
  { name: "Git / GitHub Actions", level: 95, category: "tools" },
  { name: "Docker / Kubernetes", level: 82, category: "tools" },
  { name: "AWS / Vercel / GCP", level: 80, category: "tools" },
  { name: "Linux / Bash", level: 88, category: "tools" },
  { name: "VS Code / Cursor", level: 95, category: "tools" },

  // Soft
  { name: "Technical Writing", level: 90, category: "soft" },
  { name: "System Design", level: 85, category: "soft" },
  { name: "Mentoring / Teaching", level: 88, category: "soft" },
  { name: "Public Speaking", level: 82, category: "soft" },
]

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Adarshvasuu", icon: "GithubLogo", color: "var(--color-ink)" },
  { label: "LinkedIn", href: "https://linkedin.com/in/adarsh-vasu", icon: "LinkedinLogo", color: "#0a66c2" },
  { label: "Twitter", href: "https://twitter.com/adarshvasu", icon: "TwitterLogo", color: "#1da1f2" },
  { label: "Email", href: "mailto:adarsh.vasu@email.com", icon: "Envelope", color: "var(--color-accent)" },
] as const

export const siteConfig = {
  name: "Adarsh Vasu",
  title: "AI Engineer & Full Stack Developer",
  description: "Building intelligent systems at the intersection of ML, distributed systems, and human-centered design. Currently pursuing AI & Data Science at JNN Institute of Engineering.",
  ogImage: "https://picsum.photos/seed/adarsh-og/1200/630",
}
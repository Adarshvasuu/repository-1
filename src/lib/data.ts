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
    id: "litfits",
    title: "Litfits — Fashion Consultant Website",
    description: "A fashion consultant website built with my team — helping users get outfit recommendations and styling suggestions. My first real team-built product, from idea to working site.",
    longDescription: "Litfits is a fashion consultant platform that provides personalized outfit recommendations and styling suggestions. Built collaboratively with my team, this was my first real team-built product from concept through to a working website. The platform helps users discover fashion combinations that suit their style preferences.",
    image: "https://picsum.photos/seed/litfits-fashion/1200/800",
    tags: ["HTML", "CSS", "JavaScript", "Team Project"],
    githubUrl: "https://github.com/Adarshvasuu/litfits",
    liveUrl: "https://adarshvasuu.github.io/litfits",
    featured: true,
    role: "Full Stack Developer",
    duration: "2024",
    highlights: [
      "Built from concept to working product with a team",
      "Implemented outfit recommendation logic",
      "Designed responsive UI for fashion browsing",
      "Deployed as a live website",
    ],
  },
  {
    id: "python-projects",
    title: "Python Development Projects",
    description: "Comfortable building projects and solving problems end-to-end in Python.",
    longDescription: "A collection of Python projects demonstrating end-to-end problem solving capabilities. From scripting and automation to building functional applications, these projects showcase strong Python fundamentals and practical application development skills.",
    image: "https://picsum.photos/seed/python-projects/1200/800",
    tags: ["Python", "Problem Solving", "Automation", "Scripting"],
    githubUrl: "https://github.com/Adarshvasuu",
    featured: false,
    role: "Developer",
    duration: "2023 — Present",
    highlights: [
      "End-to-end project development in Python",
      "Automation scripts and utility tools",
      "Problem-solving practice and implementation",
    ],
  },
  {
    id: "c-programming",
    title: "C Programming Fundamentals",
    description: "Strong fundamentals in C through coursework and problem-solving practice.",
    longDescription: "Deep understanding of C programming fundamentals developed through rigorous coursework and extensive problem-solving practice. Covers memory management, pointers, data structures, and algorithmic thinking at the systems level.",
    image: "https://picsum.photos/seed/c-programming/1200/800",
    tags: ["C", "Data Structures", "Algorithms", "Memory Management"],
    githubUrl: "https://github.com/Adarshvasuu",
    featured: false,
    role: "Student Developer",
    duration: "2022 — Present",
    highlights: [
      "Strong command of pointers and memory management",
      "Implemented common data structures from scratch",
      "Solved 100+ algorithmic problems in C",
    ],
  },
]

export const experience: Experience[] = [
  {
    id: "litfits-project",
    title: "Litfits — Team Project",
    company: "Team Collaboration",
    period: "2024",
    description: "Worked with my team to build a fashion consultant website, from concept through to a working product.",
    highlights: [
      "Collaborated on full product lifecycle from ideation to deployment",
      "Built fashion recommendation and styling features",
      "Implemented responsive frontend with modern CSS",
      "Deployed live website for real users",
    ],
    tags: ["Team Project", "Full Stack", "Fashion Tech", "Collaboration"],
    type: "project",
  },
  {
    id: "python-dev",
    title: "Python Development",
    company: "Self-Directed Learning",
    period: "2023 — Present",
    description: "Comfortable building projects and solving problems end-to-end in Python.",
    highlights: [
      "Developed multiple Python applications from scratch",
      "Automated repetitive tasks with custom scripts",
      "Practiced algorithmic problem solving extensively",
    ],
    tags: ["Python", "Automation", "Problem Solving", "Scripting"],
    type: "project",
  },
  {
    id: "c-programming",
    title: "C Programming",
    company: "Coursework & Practice",
    period: "2022 — Present",
    description: "Strong fundamentals in C through coursework and problem-solving practice.",
    highlights: [
      "Mastered pointers, memory management, and data structures",
      "Implemented linked lists, trees, and graphs from scratch",
      "Solved 100+ competitive programming problems",
    ],
    tags: ["C", "Data Structures", "Algorithms", "Systems Programming"],
    type: "project",
  },
  {
    id: "education",
    title: "B.Tech — AI & Data Science",
    company: "JNN Institute of Engineering",
    period: "2022 — 2026",
    description: "Pursuing Bachelor of Technology in Artificial Intelligence and Data Science. Focus on machine learning, deep learning, and data analytics.",
    highlights: [
      "Coursework in ML, DL, NLP, Computer Vision",
      "Hands-on projects with real-world datasets",
      "Strong foundation in mathematics and statistics",
    ],
    tags: ["AI", "Machine Learning", "Data Science", "Deep Learning"],
    type: "education",
  },
]

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", level: 90, category: "frontend" },
  { name: "CSS3 / Tailwind", level: 85, category: "frontend" },
  { name: "JavaScript (ES6+)", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },

  // Backend
  { name: "Python", level: 85, category: "backend" },
  { name: "Node.js / Express", level: 70, category: "backend" },
  { name: "REST APIs", level: 75, category: "backend" },
  { name: "Database Design", level: 70, category: "backend" },

  // Data & ML
  { name: "Machine Learning", level: 80, category: "data" },
  { name: "Deep Learning", level: 75, category: "data" },
  { name: "Data Analysis", level: 80, category: "data" },
  { name: "Pandas / NumPy", level: 85, category: "data" },
  { name: "PyTorch / TensorFlow", level: 70, category: "data" },

  // Tools & Infra
  { name: "Git / GitHub", level: 90, category: "tools" },
  { name: "VS Code / Cursor", level: 95, category: "tools" },
  { name: "Linux / Terminal", level: 80, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
  { name: "CI/CD", level: 70, category: "tools" },

  // Soft Skills
  { name: "Team Collaboration", level: 88, category: "soft" },
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Communication", level: 85, category: "soft" },
  { name: "Adaptability", level: 88, category: "soft" },
  { name: "Learning Agility", level: 92, category: "soft" },
]

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/Adarshvasuu", icon: "GithubLogo", color: "var(--color-ink)" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/adarsh-s-060961392/", icon: "LinkedinLogo", color: "#0a66c2" },
  { label: "Email", href: "mailto:vasuadarsh52@gmail.com", icon: "Envelope", color: "var(--color-accent)" },
] as const

export const siteConfig = {
  name: "Adarsh Vasu",
  title: "AI & Data Science Engineer",
  description: "Building intelligent systems at the intersection of ML, distributed systems, and human-centered design. Currently pursuing AI & Data Science at JNN Institute of Engineering.",
  ogImage: "https://picsum.photos/seed/adarsh-og/1200/630",
}
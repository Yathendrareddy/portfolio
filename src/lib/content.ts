export const profile = {
  name: "Yathendra Ankaiah",
  role: "Product Engineer — Design & Frontend Systems",
  headline: "Product engineer specializing in frontend systems & complex data workflows.",
  subhead:
    "I build polished, accessible, high-performance interfaces that turn dense scientific and operational data into clear, usable products.",
  email: "yathendraa04@gmail.com",
  github: "https://github.com/Yathendrareddy",
  resumeHref: "/resume.pdf",
  location: "Houston, TX",
};

export const experience = [
  {
    company: "Cardinal Health",
    title: "Product Experience Engineer",
    dates: "August 2024 – Present",
  },
  {
    company: "Vivma Software Inc.",
    title: "Frontend Product Engineer",
    dates: "July 2020 – July 2022",
  },
];

export type CaseStudy = {
  id: string;
  tag: string;
  company: string;
  title: string;
  summary: string;
  problem: string;
  decisions: string[];
  implementation: string;
  stack: string[];
  outcome: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cardinal-health-workspace",
    tag: "01",
    company: "Cardinal Health",
    title: "Healthcare & Research Workflow Workspace",
    summary:
      "A guided React workspace that lets healthcare and research teams configure data-processing pipelines, inspect model results, and resolve validation issues without losing their place.",
    problem:
      "Healthcare and research teams struggled with fragmented, multi-step interfaces when configuring complex data-processing pipelines and validating scientific outputs — leading to high cognitive load and configuration errors that were expensive to recover from.",
    decisions: [
      "Implemented progressive disclosure to break dense configuration forms into guided, step-by-step flows with sensible defaults.",
      "Designed explicit, recoverable error states so users could inspect validation issues inline without losing their progress.",
      "Built a reusable design system — typography, spacing, color tokens, forms, tables, charts, dialogs — so new workflows shipped faster and stayed consistent.",
      "Instrumented critical flows to analyze usage, errors, and abandonment, feeding directly back into onboarding and task-completion improvements.",
    ],
    implementation:
      "Built with React, TypeScript, and Tailwind CSS. Developed reusable components for tabular data inspection, dynamic form-state validation, and interactive visualizations of model results, data quality, and evaluation comparisons — making technical findings legible to non-technical stakeholders.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Data Visualization", "Accessibility"],
    outcome: [
      "Streamlined workflow configuration time for research teams",
      "Reduced configuration error rates during pipeline setup",
      "Design-system patterns adopted across internal tooling teams",
    ],
  },
  {
    id: "vivma-operations-dashboard",
    tag: "02",
    company: "Vivma Software Inc.",
    title: "Operations & Data Processing Dashboard",
    summary:
      "A high-density operations dashboard for monitoring long-running jobs, searching large record logs, and triaging errors — built for speed and power-user ergonomics.",
    problem:
      "Enterprise users needed to monitor long-running background jobs, search massive record logs, and triage system errors through a slow, unoptimized legacy interface that couldn't keep up with real workloads.",
    decisions: [
      "Designed a high-density, low-latency dashboard prioritizing fast search, status filtering, and immediate visual feedback for background operations.",
      "Prioritized keyboard navigation and accessibility standards to support power users who rely on shortcuts over pointer interaction.",
      "Established clear loading, empty, and error-recovery states as first-class UI, not afterthoughts.",
    ],
    implementation:
      "Built with TypeScript, React, and REST/GraphQL integrations, with typed data models and consistent error handling. Optimized rendering with route-level code splitting, lazy loading, asset optimization, and memoized list virtualization.",
    stack: ["TypeScript", "React", "GraphQL", "Performance", "Cypress"],
    outcome: [
      "Meaningfully reduced page load and search response times",
      "Improved task completion rates for core operational workflows",
      "Jest + Cypress coverage established for all critical paths",
    ],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Product Design",
    items: [
      "Interaction Design",
      "Visual Design",
      "Prototyping",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    title: "Application Systems",
    items: ["REST APIs", "GraphQL", "Node.js", "Python", "PostgreSQL"],
  },
  {
    title: "Product Experience",
    items: [
      "Design Systems",
      "Data Visualization",
      "Usability Testing",
      "Product Analytics",
    ],
  },
  {
    title: "Quality & Delivery",
    items: ["Jest", "Cypress", "Storybook", "GitHub Actions", "AWS", "Performance"],
  },
];

export const education = [
  {
    degree: "Master of Science in Software Engineering",
    school: "University of Houston–Clear Lake",
    date: "May 2024",
  },
  {
    degree: "Bachelor of Engineering",
    school: "Panimalar Engineering College, India",
    date: "",
  },
];

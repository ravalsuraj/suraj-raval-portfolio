import type {
  EducationItem,
  ExperienceItem,
  Highlight,
  NavItem,
  ProjectItem,
  SkillCategory,
  SkillProficiency,
  SocialLink,
} from "@/types";

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Suraj Raval",
  title: "Senior Software Engineer",
  brand: "Enterprise Payments · JavaScript · Salesforce Architecture",
  headline: "Senior Software Engineer",
  subheadline:
    "Building enterprise platforms, payment systems, CRM solutions, and developer tooling using JavaScript, Salesforce, React, Kotlin, and modern cloud technologies.",
  disciplines: [
    "JavaScript",
    "Salesforce Architecture",
    "Enterprise Platforms",
    "Payments",
  ],
  location: "Mumbai, Maharashtra, India",
  email: "suraj.raval@audibene.de",
  // GitHub Pages user-site URL. Change to your custom domain if you add one.
  url: "https://ravalsuraj.github.io",
  // Drop a real photo in /public (e.g. profile.jpg) and point this at it.
  avatar: "/profile.svg",
  avatarAlt: "Portrait of Suraj Raval",
  summary:
    "Senior Software Engineer with 12+ years of experience delivering enterprise software solutions across CRM platforms, payment systems, omnichannel communications, customer engagement systems, cloud applications, and enterprise integrations. Strong expertise in JavaScript ecosystems, Salesforce architecture, API design, full-stack application development, and technical leadership. Experienced in designing scalable systems, leading technical initiatives, and delivering complex software platforms from concept through production deployment.",
};

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/* Social / integrations (placeholders, swap hrefs when ready)         */
/* ------------------------------------------------------------------ */

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/ravalsuraj",
    handle: "@ravalsuraj",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ravalsuraj",
    handle: "in/ravalsuraj",
  },
  {
    label: "Email",
    href: "mailto:raval.suraj@gmail.com",
    handle: "raval.suraj@gmail.com",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    description: "Day-to-day building blocks across full-stack and platform work.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Lightning Web Components",
      "Apex",
      "Node.js",
      "Kotlin",
      "Java",
      "Vue.js",
    ],
  },
  {
    title: "Platforms",
    description: "Cloud, CRM, and operational tooling I ship and run on.",
    skills: ["Salesforce", "AWS", "Docker", "Git", "New Relic"],
  },
  {
    title: "Architecture",
    description: "How I reason about systems at scale.",
    skills: [
      "REST APIs",
      "System Design",
      "Event-Driven Systems",
      "Enterprise Integrations",
      "CRM Architecture",
      "Payment Platforms",
    ],
  },
  {
    title: "Domain Expertise",
    description: "Problem spaces I've delivered production systems in.",
    skills: [
      "Salesforce",
      "Payments",
      "Customer Communications",
      "CTI Systems",
      "Chatbots",
      "Omnichannel Platforms",
    ],
  },
];

export const skillProficiencies: SkillProficiency[] = [
  { name: "JavaScript / TypeScript", level: 95 },
  { name: "Salesforce (LWC / Apex)", level: 92 },
  { name: "React", level: 90 },
  { name: "System & API Design", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Kotlin / Java", level: 78 },
  { name: "Payment Platforms", level: 82 },
  { name: "Vue.js", level: 80 },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const experience: ExperienceItem[] = [
  {
    role: "Senior Salesforce Engineer",
    company: "Confidential",
    period: "Jun 2020 — Present",
    current: true,
    summary:
      "Architecting enterprise applications and a payment platform, while shipping developer tooling used by thousands of Salesforce engineers.",
    responsibilities: [
      "Architected and delivered enterprise applications using Salesforce Lightning, LWC, Apex, Flows, and React.",
      "Led development of a payment platform and web application using Kotlin and React.",
      "Designed and developed interactive analytics dashboards using D3.js and Salesforce technologies.",
      "Co-developed a Visual Studio Code extension for Salesforce developers with more than 12,000 installs.",
      "Optimized large-scale Lightning applications through advanced JavaScript architecture, browser APIs, and reusable component design.",
    ],
    stack: ["Salesforce", "LWC", "Apex", "React", "Kotlin", "D3.js", "TypeScript"],
  },
  {
    role: "Lead — Digital Applications",
    company: "AGC Networks",
    period: "Feb 2018 — Jun 2020",
    summary:
      "Led design and delivery of enterprise contact-center, CTI, and conversational platforms across telephony vendors.",
    responsibilities: [
      "Designed and delivered enterprise IVR applications across Avaya Aura, Cisco UCCX, and Cisco PCCE platforms.",
      "Built Salesforce-integrated CTI solutions using Genesys PureConnect.",
      "Designed chatbot solutions using Google Dialogflow.",
      "Developed real-time agent workspace applications using Vue.js, Node.js, WebSockets, and REST APIs.",
      "Led technical design workshops, customer engagements, deployments, UAT cycles, and production rollouts.",
    ],
    stack: ["Vue.js", "Node.js", "WebSockets", "Salesforce", "Genesys", "Dialogflow", "Avaya"],
  },
  {
    role: "Senior Project Engineer",
    company: "PaceControls LLC",
    location: "Philadelphia, Pennsylvania, USA",
    period: "Jul 2014 — Jun 2017",
    summary:
      "Built front-end architecture for cloud energy-management products and led an Android IoT HVAC controller from concept to production.",
    responsibilities: [
      "Developed front-end architecture for cloud-based energy management applications.",
      "Led development of Android-based IoT HVAC controller products from concept to deployment.",
      "Designed REST APIs and third-party integrations.",
      "Performed engineering analysis supporting energy savings projects and customer acquisitions.",
    ],
    stack: ["JavaScript", "Android", "REST APIs", "IoT", "Cloud"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projects: ProjectItem[] = [
  {
    slug: "enterprise-payment-platform",
    title: "Enterprise Payment Platform",
    tagline: "Critical business payment workflows",
    description:
      "Led development of an enterprise payment platform and associated web application used for critical business payment workflows.",
    stack: ["Kotlin", "React", "REST APIs"],
    metric: "Critical-path payments",
    featured: true,
    highlights: [
      "Designed payment orchestration and reconciliation workflows for business-critical transactions.",
      "Built the React web application and Kotlin service layer behind a clean REST contract.",
      "Made deliberate architectural decisions around idempotency, retries, and auditability.",
    ],
    architecture: [
      "Web App (React)  ──▶  API Gateway / REST",
      "        │                    │",
      "        ▼                    ▼",
      "  Auth & Session      Payment Service (Kotlin)",
      "                             │",
      "          ┌──────────────────┼───────────────────┐",
      "          ▼                  ▼                   ▼",
      "   Ledger / Reconcile   Provider Adapters   Event Stream",
    ],
  },
  {
    slug: "salesforce-vscode-extension",
    title: "Salesforce VS Code Extension",
    tagline: "Developer productivity tooling",
    description:
      "Co-developed a Salesforce developer productivity extension with 12,000+ installs.",
    stack: ["TypeScript", "VS Code Extension APIs", "Salesforce"],
    metric: "12,000+ installs",
    featured: true,
    highlights: [
      "Shipped code-generation workflows that removed repetitive boilerplate for Salesforce developers.",
      "Focused on developer experience: fast feedback, sensible defaults, low-friction commands.",
      "Maintained and iterated on a tool with a real, growing user base.",
    ],
    architecture: [
      "VS Code Editor",
      "     │  (Extension Host)",
      "     ▼",
      "Extension (TypeScript)",
      "     ├── Command Palette actions",
      "     ├── Code generators / templates",
      "     └── Salesforce CLI / Metadata API",
    ],
  },
  {
    slug: "flair-agent-workspace",
    title: "FLAIR Agent Workspace",
    tagline: "Real-time CTI customer service platform",
    description:
      "Real-time CTI-enabled customer service platform featuring modular widgets, CRM integration, telephony integration, and real-time communication.",
    stack: ["Vue.js", "Node.js", "Java", "Socket.IO", "Avaya"],
    metric: "Real-time omnichannel",
    featured: true,
    highlights: [
      "Built a modular widget architecture so the agent desktop could be composed per deployment.",
      "Integrated CRM and telephony with real-time event flow over Socket.IO.",
      "Delivered low-latency screen-pops and call control for live contact-center agents.",
    ],
    architecture: [
      "Agent Desktop (Vue.js)",
      "     │  Socket.IO (real-time)",
      "     ▼",
      "Workspace Server (Node.js)  ◀──▶  Telephony (Avaya / Java)",
      "     │",
      "     └──▶  CRM Integration (screen-pop, context)",
    ],
  },
  {
    slug: "salesforce-genesys-connector",
    title: "Salesforce Genesys Connector",
    tagline: "Custom CTI integration, no off-the-shelf adapter",
    description:
      "Custom Salesforce and Genesys integration platform built without off-the-shelf adapters.",
    stack: ["Salesforce Open CTI", "Aura", "Node.js", "Vue.js", "Genesys SDK"],
    metric: "Built from scratch",
    highlights: [
      "Implemented the Salesforce Open CTI surface directly against the Genesys SDK.",
      "Avoided vendor adapter lock-in with a maintainable, purpose-built integration.",
      "Handled call lifecycle, softphone control, and CRM context end to end.",
    ],
    architecture: [
      "Salesforce (Open CTI / Aura)",
      "     │  CTI events",
      "     ▼",
      "Connector Service (Node.js)  ◀──▶  Genesys SDK",
      "     │",
      "     └──▶  Softphone UI (Vue.js)",
    ],
  },
  {
    slug: "enterprise-chatbot-platform",
    title: "Enterprise Chatbot Platform",
    tagline: "Conversational AI for regulated industries",
    description:
      "Designed and deployed conversational AI platforms for telecom, healthcare, and enterprise clients.",
    stack: ["Google Dialogflow", "Node.js", "Salesforce", "REST APIs"],
    metric: "Multi-industry deployments",
    highlights: [
      "Designed conversational flows and intent models on Google Dialogflow.",
      "Connected bots to Salesforce and back-office systems through REST integrations.",
      "Delivered across telecom, healthcare, and enterprise contexts with differing constraints.",
    ],
    architecture: [
      "Channels (Web / Voice / Messaging)",
      "     │",
      "     ▼",
      "NLU (Dialogflow)  ──▶  Fulfillment (Node.js)",
      "                             │",
      "                             └──▶  Salesforce + REST back-ends",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education: EducationItem[] = [
  {
    degree: "Master of Science",
    field: "Systems Engineering",
    institution: "Drexel University",
    location: "Philadelphia, USA",
  },
  {
    degree: "Bachelor of Engineering",
    field: "Electronics",
    institution: "University of Mumbai",
    location: "Mumbai, India",
  },
];

/* ------------------------------------------------------------------ */
/* Highlights                                                          */
/* ------------------------------------------------------------------ */

export const highlights: Highlight[] = [
  { label: "12+ years", detail: "Professional engineering experience" },
  { label: "Master's degree", detail: "Systems Engineering, Drexel University" },
  { label: "3 years in the US", detail: "Professional experience based in Philadelphia" },
  { label: "6+ years Salesforce", detail: "Architecture and development" },
  { label: "Enterprise payments", detail: "Built business-critical payment workflows" },
  { label: "12,000+ installs", detail: "Creator of developer tooling (VS Code)" },
  { label: "Full-stack", detail: "Front-end, services, and integrations" },
];

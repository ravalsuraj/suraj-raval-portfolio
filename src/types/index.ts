export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface SkillProficiency {
  name: string;
  level: number; // 0 - 100
}

export interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  period: string;
  current?: boolean;
  summary: string;
  responsibilities: string[];
  stack?: string[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  /** lightweight ASCII / box architecture diagram lines */
  architecture: string[];
  metric?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period?: string;
}

export interface Highlight {
  label: string;
  detail: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

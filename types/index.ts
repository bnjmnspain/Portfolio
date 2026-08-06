export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "Databases"
  | "Cloud"
  | "DevOps"
  | "Testing"
  | "Architecture"
  | "AI/LLM Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 1 | 2 | 3 | 4 | 5; // proficiency, 5 = expert
  years: number;
}

export interface ExperienceEntry {
  company: string;
  position: string;
  location: string;
  start: string; // e.g. "Feb 2026"
  end: string; // e.g. "Present"
  responsibilities: string[];
  achievements: string[];
}

export interface EducationEntry {
  institution: string;
  year: string;
  degree: string;
  location: string;
  thesis?: string;
  note?: string;
  mapUrl?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  logo?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail" | "x" | "site";
}

export interface SiteConfig {
  name: string;
  jobTitle: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  githubUsername: string;
  linkedinUrl: string;
  resumeUrl: string;
  siteUrl: string;
  socials: SocialLink[];
  skills: Skill[];
  experience: ExperienceEntry[];
  certifications: Certification[];
  education: EducationEntry[];
  careerHighlights: string[];
  softSkills: string[];
}

// ---- GitHub API shapes (subset of fields we actually use) ----
export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
  archived: boolean;
}

export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

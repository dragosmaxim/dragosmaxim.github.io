export type ProjectCategory = 'data-engineering' | 'ai' | 'ml' | 'emg-signals';

export interface Profile {
  name: string;
  role: string;
  summary: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface ContactMethod {
  label: string;
  href: string;
  kind: 'email' | 'github' | 'linkedin';
  external: boolean;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ProjectVisual {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectDetails {
  overview: string;
  problemStatement: string;
  architecture: string;
  technologyStack: string[];
  engineeringDecisions: string[];
  implementationDetails: string[];
  challenges: string[];
  results: string[];
  screenshotsOrDiagrams?: ProjectVisual[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  technologies: string[];
  githubUrl?: string;
  repositoryPublic: boolean;
  image?: ProjectVisual;
  featured: boolean;
  details: ProjectDetails;
}

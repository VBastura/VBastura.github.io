export interface SummaryStrip {
  role: string;
  teamSize: string;
  timeline: string;
  tools: string;
}

export interface ProjectPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  oneLineOutcome: string;
  hoverDescription: string;
  category: 'CAD & Spaceframe' | 'Robotics & Mechanisms' | 'Mechatronics & Embedded';
  coverImage: string;
  statusBadge?: string;
  year: string;
  summaryStrip: SummaryStrip;
  photos?: ProjectPhoto[];
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Profile {
  name: string;
  headline: string;
  degree: string;
  institution: string;
  graduationYear: string;
  undergradGpa: string;
  email: string;
  phone: string;
  address: string;
  linkedin: string;
  github: string;
  location: string;
  bioSummary: string;
  extracurriculars: string[];
  skills: {
    cad: string[];
    manufacturing: string[];
    programming: string[];
    professional: string[];
  };
  experience: WorkExperienceItem[];
  resumeUrl: string;
}

export type ViewRoute = 'home' | 'gallery' | `project-${string}`;

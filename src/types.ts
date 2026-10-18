export interface SpecificationItem {
  label: string;
  value: string;
  unit?: string;
  description?: string;
}

export interface PrototypeIteration {
  version: string;
  title: string;
  whatWasBuilt: string;
  whatFailedOrUnderperformed: string;
  whatChangedAndResult: string;
  decisions: string[];
  image?: string;
  imageCaption?: string;
  testConditions?: string;
}

export interface SummaryStrip {
  role: string;
  teamSize: string;
  timeline: string;
  tools: string;
  myContribution: string;
}

export interface ProjectDownloadLink {
  label: string;
  url: string;
  type?: string;
}

export interface ProjectPhoto {
  src: string;
  alt: string;
  caption?: string;
  filename: string;
}

export interface Project {
  id: string;
  title: string;
  oneLineOutcome: string;
  cardShortDescription: string;
  hoverDescription: string;
  category: 'CAD & Spaceframe' | 'Robotics & Mechanisms' | 'Mechatronics & Embedded' | 'Data & Field Research';
  coverImage: string;
  videoEmbedUrl?: string;
  year: string;
  tools: string[];
  summaryStrip: SummaryStrip;
  objective: string;
  brainstorm: {
    paragraph: string;
    image?: string;
    imageCaption?: string;
  };
  prototypeIterations: PrototypeIteration[];
  productOutcome: {
    finalDesignAndResults: string;
    mediaUrl?: string;
    mediaCaption?: string;
    downloadLinks?: ProjectDownloadLink[];
  };
  whatILearned: string;
  photos?: ProjectPhoto[];
  // Backwards compatibility
  tagline?: string;
  shortDescription?: string;
  fullDescription?: string;
  specifications?: SpecificationItem[];
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

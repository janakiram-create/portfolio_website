export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  imageSeed: string;
  features: string[];
}

export interface TimelineItem {
  id: string;
  years: string;
  role: string;
  company: string;
  location: string;
  achievements: string[];
  type: 'internship' | 'product' | 'learning';
  skillsGained: string[];
}

export interface SkillItem {
  name: string;
  category: 'ai' | 'pm' | 'dev' | 'design';
  level: number; // 0 to 100
  label: string; // "Expert", "Advanced", etc.
  description: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericValue: number;
  label: string;
  badge: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  years: string;
  location: string;
  score: string;
}

export interface CertificateItem {
  title: string;
  provider: string;
}

export interface PublicationItem {
  title: string;
  description: string;
  type: "blog" | "article" | "podcast";
}

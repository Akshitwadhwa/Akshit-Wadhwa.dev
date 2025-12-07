import { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  imageUrl: string; // Using placeholder URL logic
  category?: string;
  status?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  current: boolean;
  description: string[];
  logo?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  imageUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon?: LucideIcon; // Optional generic icon
  color?: string; // Tailwind text color class for the icon
}
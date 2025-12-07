import { Experience, Project, NavItem, Certificate } from './types';

export const experiences: Experience[] = [
  {
    role: "Founding Frontend Engineer",
    company: "Stealth Startup",
    period: "August 2025 - Present",
    location: "United States (Remote)",
    current: true,
    description: [
      "Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.",
      "Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.",
      "Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.",
      "Enhanced user experience and interface design through implementation of consistent design systems."
    ],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=Stealth"
  },
  {
    role: "Backend Developer Intern",
    company: "Upsurge Labs",
    period: "June 2025 - July 2025",
    location: "Bangalore, India (On-Site)",
    current: false,
    description: [
      "Backend development for Bhindi.io, a flagship product of Upsurge Labs, focusing on core infrastructure and agent development.",
      "Engineered and deployed multiple high-performance agents, enhancing product capabilities and user experience.",
      "Testing agent functionality, authentication, automation, and system stability.",
      "Streamlined development workflows by optimizing internal tools."
    ],
    logo: "https://api.dicebear.com/7.x/identicon/svg?seed=Upsurge"
  }
];

export const projects: Project[] = [
  {
    title: "Unibites-A all in one for food needs",
    description: "UniBites is a modern, feature-rich Android food ordering application that brings your favorite meals right to your fingertips. Built with cutting-edge technology and designed for seamless user experience.",
    tags: ["Kotlin", "Java", "Android", "TensorFlow"],
    imageUrl: "",
    category: "Android developement",
    status: "Live"
  },
  {
    title: "Event Management Platform",
    description: "Comprehensive platform for managing events, including ticketing, scheduling, and attendee engagement.",
    tags: ["HTML", "CSS", "Javascript", "MongoDB", "Express.JS"],
    imageUrl: "",
    category: "Web Development",
    status: "Live"
  },
  {
    title: "Make all stops-- Content Dashboard",
    description: "A modern , responsive web platform designed to help creators and businesses master short-form content.",
    tags: ["HTML", "CSS", "Node.js", "Javascript", "Firebase"],
    imageUrl: "",
    category: "Data Analytics",
    status: "Live"
  },
  {
    title: "AeroConnect",
    description: "Live flight tracking with up-to-the-minute departure and arrival information",
    tags: ["React", "Vite", "Firebase", "Redis", "Docker"],
    imageUrl: "",
    category: "Solo",
    status: "Development"
  },
  {
    title: "Enercore Pvt Limited",
    description: "Internship Website For Enercore Private Limited",
    tags: ["HTML", "CSS", "JAVASCRIPT", "Arduino", "WebRTC"],
    imageUrl: "",
    category: "IoT & Hardware",
    status: "Prototype"
  },
  {
    title: "Maitre -- Astronauts Pen Pal",
    description: "A complete voice-to-voice AI psychological support system for astronauts on the International Space Station, featuring evidence-based interventions and operational assistance.",
    tags: ["Ollama", "Gemini", "Python", "Pytorch", "CloudFlare"],
    imageUrl: "",
    category: "Backend Development",
    status: "Live"
  }
];

export const certificates: Certificate[] = [
  {
    title: "3X Hacktoberfest Participant",
    issuer: "Hacktoberfest",
    date: "2025-10-10",
    imageUrl: "" 
  },
  {
    title: "Example Certificate 1",
    issuer: "Example Issuer",
    date: "2024-01-01",
    imageUrl: ""
  },
  {
    title: "Example Certificate 2",
    issuer: "Example Issuer",
    date: "2023-08-01",
    imageUrl: ""
  },
  {
    title: "SSoC Participation Certificate",
    issuer: "SSoC",
    date: "2025-10-10",
    imageUrl: ""
  }
];

export const navLinks: NavItem[] = [
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Setup', href: '#setup' },
];
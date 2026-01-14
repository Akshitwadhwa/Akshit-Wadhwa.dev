import { Experience, Project, NavItem, Certificate } from './types';

export const experiences: Experience[] = [
  {
    role: "Full stack Developer",
    company: "Enercore Pvt Limited",
    period: "May 2025- July 2025",
    location: "Noida, India (On-Site)",
    current: false,
    description: [
      "Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.",
      "Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.",
      "Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.",
      "Enhanced user experience and interface design through implementation of consistent design systems."
    ],
    logo: "/Assests/Logo/images-2.png"
  },
  {
    role: "Backend Developer Intern",
    company: "Blupine Technologies",
    period: "June 2025 - Dec 2025",
    location: "Hybrid , India",
    current: false,
    description: [
      "Backend development for Bhindi.io, a flagship product of Upsurge Labs, focusing on core infrastructure and agent development.",
      "Engineered and deployed multiple high-performance agents, enhancing product capabilities and user experience.",
      "Testing agent functionality, authentication, automation, and system stability.",
      "Streamlined development workflows by optimizing internal tools."
    ],
    logo: "/Assests/Logo/images-.png"
  }
];

export const projects: Project[] = [
  {
    title: "Unibites-A all in one for food needs",
    description: "UniBites is a modern, feature-rich Android food ordering application that brings your favorite meals right to your fingertips. Built with cutting-edge technology and designed for seamless user experience.",
    tags: ["Kotlin", "Java", "Android", "Firebase", "MongoDB"],
    github:"https://github.com/Akshitwadhwa/Unibites--A-all-in-one-for-food-needs",
    imageUrl: "",
    category: "Android developement",
    status: "Live"
  },
  {
    title: "Sign-2-Speech",
    description: "A comprehensive application for real-time sign language recognition, text-to-speech, speech-to-text, and emotion detection. ",
    tags: ["React", "Node.js", "TensorFlow", "Firebase", "Python 3.11"],
    github:"https://github.com/Akshitwadhwa/SIGN-2-SPEECH",
    imageUrl: "",
    category: "Software Development",
    status: "Live"
  },
  {
    title: "Maitre -- Astronauts Pen Pal",
    description: "A complete voice-to-voice AI psychological support system for astronauts on the International Space Station, featuring evidence-based interventions and operational assistance.",
    tags: ["Ollama", "Gemini", "Python", "Pytorch", "CloudFlare"],
    imageUrl: "",
    category: "Backend Development",
    status: "Live"
  },

  {
    title: "Event Management Platform",
    description: "Comprehensive platform for managing events, including ticketing, scheduling, and attendee engagement.",
    tags: ["HTML", "CSS", "Javascript", "MongoDB", "Express.JS"],
    imageUrl: "",
    github:"",
    category: "Web Development",
    status: "Live"
  },
  {
    title: "Make all stops-- Content Dashboard",
    description: "A modern , responsive web platform designed to help creators and businesses master short-form content.",
    tags: ["HTML", "CSS", "Node.js", "Javascript", "Firebase"],
    imageUrl: "",
    github:"",
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
    github: "",
    category: "IoT & Hardware",
    status: "Prototype"
  }

];

export const certificates: Certificate[] = [
  {
    title: "3X Hacktoberfest Participant",
    issuer: "Hacktoberfest",
    date: "2025-10-10",
    imageUrl: " "
  },
  {
    title: "Enercore Completion Certificate",
    issuer: "Enercore Private Limited",
    date: "2025-07-010",
    imageUrl: "/Assests/Logo/Certificate-1.png"
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
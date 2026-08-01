import { Experience, Project, NavItem, Certificate } from './types';
import enercoreLogo from './Assests/Logo/images-2.png';
import hacktoberfestLogo from './Assests/Logo/Hacktoberfest.png';
import certificateOneLogo from './Assests/Logo/Certificate-1.png';
import maitriProjectImage from './Assests/Projects/Maitri-Astro Pen Pal.png';
import signToSpeechProjectImage from './Assests/Projects/SignToSpeech.png';
import spendWiseProjectImage from './Assests/Projects/SpendWise.png';
import retroGrooveProjectImage from './Assests/Projects/RetroGroove.png';

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
    logo: enercoreLogo
  },
  {
    role: "Backend Developer Intern",
    company: "Blupine Technologies",
    period: "June 2025 - Dec 2025",
    location: "Hybrid , India",
    current: false,
    description: [
      "Engineered and deployed multiple high-performance agents, enhancing product capabilities and user experience.",
      "Testing agent functionality, authentication, automation, and system stability.",
      "Streamlined development workflows by optimizing internal tools."
    ],
    logo: enercoreLogo
  }
];

export const projects: Project[] = [
  {
    title: "Maitre -- Astronauts Pen Pal",
    description: "A complete voice-to-voice AI psychological support system for astronauts on the International Space Station, featuring evidence-based interventions and operational assistance.",
    tags: ["Ollama", "Gemini", "Python", "Pytorch", "CloudFlare"],
    github:"https://github.com/Akshitwadhwa/Maitri-Astros-Pen-Pal",
    imageUrl: maitriProjectImage,
    category: "AI & Machine Learning",
    status: "Live"
  },
  
  {
    title: "Sign-2-Speech",
    description: "A comprehensive application for real-time sign language recognition, text-to-speech, speech-to-text, and emotion detection. ",
    tags: ["React", "Node.js", "TensorFlow", "Firebase", "Python 3.11"],
    github:"https://github.com/Akshitwadhwa/SIGN-2-SPEECH",
    imageUrl: signToSpeechProjectImage,
    category: "Software Development",
    status: "Live"
  },
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
    title: "SpendWise - Your Own Expense Tracker",
    description: " finance tracker app built with Flutter.Master Your Money - Track your expenses across different categories with an intuitive and modern UI.",
    tags: ["Flutter", "Dart", "Firebase", "Provider", "SQLite" , "REST API"],
    imageUrl: spendWiseProjectImage,
    github:"https://github.com/Akshitwadhwa/Spendwise",
    category: "Mobile Development",
    status: "Live"
  },
  {
    title: "RetroGroove-Focus",
    description: "A Retro-Themed Focus Timer & Lofi Player to Boost Productivity and Relaxation. Now with integrated Spotify support for seamless music streaming. Find your flow with analog aesthetics and digital productivity.",
    tags: ["React", "Vite", "Tailwind CSS", "Firebase", "Audio APIs", "Spotify API"],
    imageUrl: retroGrooveProjectImage,
    github:"https://github.com/Akshitwadhwa/RetroGroove-Focus", 
    category: "Vibe & Productivity",
    status: "Live"

  },
  {
        title: "Sign-2-Speech",
        description: "A comprehensive application for real-time sign language recognition, text-to-speech, speech-to-text, and emotion detection. ",
        tags: ["React", "Node.js", "TensorFlow", "Firebase", "Python 3.11"],
        github:"https://github.com/Akshitwadhwa/SIGN-2-SPEECH",
        imageUrl: signToSpeechProjectImage,
        category: "Software Development",
        status: "Live",
        hostedLink: "", // Add the hosted link here, e.g., "https://sign2speech.example.com"
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
  

];

export const certificates: Certificate[] = [
  {
    title: "3X Hacktoberfest Participant",
    issuer: "Hacktoberfest",
    date: "2025-10-10",
    imageUrl: hacktoberfestLogo,
    certificateUrl: "https://hacktoberfest.com/certificates"
  },
  {
    title: "Enercore Completion Certificate",
    issuer: "Enercore Private Limited",
    date: "2025-07-010",
    imageUrl: certificateOneLogo,
    certificateUrl: "https://drive.google.com/file/d/1w63ZZkYC0jS6-Wns94ETyPFDEFqoEJLr/view?usp=sharing"
  },
  {
    title: "Example Certificate 2",
    issuer: "Example Issuer",
    date: "2023-08-01",
    imageUrl: "",
    certificateUrl: "https://example.com/certificate2"
  },
  {
    title: "SSoC Participation Certificate",
    issuer: "SSoC",
    date: "2025-10-10",
    imageUrl: "",
    certificateUrl: "https://ssoc.dev/certificates"
  }
];

export const navLinks: NavItem[] = [
  { label: 'Work', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Open Source', href: '/open-source' },
  { label: 'Stack', href: '/stack' },
  { label: 'Uses', href: '/uses' },
];

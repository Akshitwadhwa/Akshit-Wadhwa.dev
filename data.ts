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
    title: "BudgetGurugram",
    description: "Local-first editorial guide to affordable places, workspaces, events, and services in Gurugram — with MapLibre maps, live OpenStreetMap nearby pins, weather-aware tips, and auto-refreshed public events.",
    tags: ["JavaScript", "MapLibre", "OpenStreetMap", "Vercel", "GitHub Actions"],
    github: "https://github.com/Akshitwadhwa/budgetgurugram",
    link: "https://budgetgurugram.vercel.app",
    imageUrl: "",
    category: "Local Discovery",
    status: "Live"
  },
  {
    title: "Pitwall Copilot",
    description: "F1 pit-wall communication intelligence that turns driver/engineer radio into race-ready insights — team selection, cinematic cockpit UI, and concise pit commands with local fallback when the API is offline.",
    tags: ["React", "JavaScript", "Vite", "Hugging Face", "Vercel"],
    github: "https://github.com/Akshitwadhwa/Pitwall-Copilot",
    link: "https://pitwall-copilot.vercel.app",
    imageUrl: "",
    category: "F1 / AI",
    status: "Live"
  },
  {
    title: "Note-Pilot AI",
    description: "Full-stack academic workspace for timetables, notes, Google Classroom sync, PDF analysis, RAG over course handouts, AI study packs, and quizzes — React + Express + PostgreSQL.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI", "Supabase"],
    github: "https://github.com/Akshitwadhwa/Note-Pilot-Ai",
    imageUrl: "",
    category: "EdTech / Full Stack",
    status: "Live"
  },
  {
    title: "CareGraph AI",
    description: "Multimodal clinical decision support that grounds answers in local medical PDFs — text RAG, Gemini Vision lab-report understanding, FAISS retrieval, and a FastAPI + React UI.",
    tags: ["Python", "LangChain", "Gemini", "FAISS", "FastAPI", "React"],
    github: "https://github.com/Akshitwadhwa/Caregraph-Ai",
    imageUrl: "",
    category: "AI & Healthcare",
    status: "Live"
  },
  {
    title: "PitWolf",
    description: "F1 race-strategy engine that learns overtakes from historical data, models 2026 energy deployment, and replays completed races to recommend ATTACK, SAVE, DELAY, or BOX with explainable reasons.",
    tags: ["JavaScript", "Python", "Telemetry", "ML"],
    github: "https://github.com/Akshitwadhwa/PitWolf",
    imageUrl: "",
    category: "F1 Strategy / ML",
    status: "Development"
  },
  {
    title: "Trend Scout",
    description: "Free-first, human-in-the-loop X content workflow: discovers verified tech stories via GitHub Actions, builds a trend inbox, and drafts posts with Hermes/Telegram for manual review — never auto-posts.",
    tags: ["Python", "GitHub Actions", "Ollama", "Telegram"],
    github: "https://github.com/Akshitwadhwa/Trend-Scout",
    imageUrl: "",
    category: "Automation / AI",
    status: "Live"
  },
  {
    title: "Maitri — Astronauts' Pen Pal",
    description: "Voice-to-voice AI psychological support system for astronauts on the ISS, with evidence-based interventions, operational assistance, and offline Llama chat via Ollama.",
    tags: ["Ollama", "Python", "Gemini", "Pytorch"],
    github: "https://github.com/Akshitwadhwa/Maitri-Astros-Pen-Pal",
    imageUrl: maitriProjectImage,
    category: "AI & Machine Learning",
    status: "Live"
  },
  {
    title: "Sign-2-Speech",
    description: "Real-time sign language recognition, speech-to-sign, text-to-speech, and emotion detection — CNN webcam detection with a React frontend and Flask API backend.",
    tags: ["React", "Node.js", "TensorFlow", "Firebase", "Python"],
    github: "https://github.com/Akshitwadhwa/SIGN-2-SPEECH",
    imageUrl: signToSpeechProjectImage,
    category: "AI / Accessibility",
    status: "Live"
  },
  {
    title: "SpendWise",
    description: "AI-powered Flutter finance tracker for expenses across categories, with Firebase, Provider, SQLite, and REST APIs behind a modern mobile UI.",
    tags: ["Flutter", "Dart", "Firebase", "Provider", "SQLite"],
    imageUrl: spendWiseProjectImage,
    github: "https://github.com/Akshitwadhwa/Spendwise",
    category: "Mobile Development",
    status: "Live"
  },
  {
    title: "RetroGroove Focus",
    description: "Retro-themed focus timer and lofi player with Spotify integration — analog aesthetics meets digital productivity.",
    tags: ["React", "Vite", "Tailwind CSS", "Firebase", "Spotify API"],
    imageUrl: retroGrooveProjectImage,
    github: "https://github.com/Akshitwadhwa/RetroGroove-Focus",
    link: "https://retro-groove-focus.vercel.app",
    category: "Productivity",
    status: "Live"
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

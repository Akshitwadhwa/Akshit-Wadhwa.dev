import React, { useState } from 'react';
import { FileText, Send, Github, Linkedin, Twitter, Mail, Database, Terminal, Layers, Coffee, Code, Globe, Award, Settings, Cpu, ArrowRight } from 'lucide-react';
import { MatrixText } from '../MatrixText';
import { Section } from '../Section';
import { ProjectCard } from '../ProjectCard';
import { PixelAvatar } from '../PixelAvatar';
import { F1Reveal } from '../F1Reveal';
import { TechStack } from '../TechStack';
import { GitHubActivity } from '../GitHubActivity';
import { Badge, SocialLink, SkillBadge, ListItem } from '../Shared';
import { projects } from '../../data';

interface HomeViewProps {
  onNavigateToGears: () => void;
  onNavigateToWork: () => void;
  onNavigateToProjects: () => void;
  onNavigateToCertificates: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateToGears, onNavigateToWork, onNavigateToProjects, onNavigateToCertificates }) => {
  const [contentRevealed, setContentRevealed] = useState(false);

  // Only show first 2 projects on home
  const featuredProjects = projects.slice(0, 2);

  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <Section id="hero" className="min-h-[75vh] flex flex-col justify-center !pb-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
           <div className="order-2 md:order-1 flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-400">
                 <span className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                 </span>
                 Available for new opportunities
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-neutral-900 dark:text-white leading-tight">
                 Hi, I'm <MatrixText text="Akshit Wadhwa" className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-400" />
              </h1>
              
              <h2 className="text-neutral-900 dark:text-neutral-100 font-semibold border-b-2 border-emerald-500/30 pb-0.5">
                 A Full Stack Web Developer and <span className="text-neutral-900 dark:text-neutral-100 font-semibold border-b-2 border-emerald-500/30 pb-0.5">DevOps Engineer</span>
              </h2>
              
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mb-10 mx-auto md:mx-0 text-lg">
                I build interactive web apps using <Badge>TypeScript</Badge>, <Badge>React</Badge>, <Badge>Next.js</Badge>, and <Badge>Bun</Badge>. With a focus on <strong className="text-neutral-900 dark:text-white">UI</strong> design. Enthusiastic about <strong className="text-neutral-900 dark:text-white">Software Development </strong>, driven by a keen eye for Saas based Application
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-12">
                <a href="#" className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl">
                  <FileText size={18} className="group-hover:-translate-y-0.5 transition-transform" /> Resume / CV
                </a>
                <a href="mailto:contact@akshit.dev" className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-xl font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md">
                  <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /> Get in touch
                </a>
              </div>

              <div className="flex gap-6 justify-center md:justify-start text-neutral-500 dark:text-neutral-400">
                <SocialLink href="#" icon={Twitter} />
                <SocialLink href="www.linkedin.com/in/akshit-wadhwa-56b65b320" icon={Linkedin} />
                <SocialLink href="https://github.com/Akshitwadhwa" icon={Github} />
                <SocialLink href="#" icon={Mail} />
              </div>
           </div>
           
           <div className="order-1 md:order-2 shrink-0 relative z-10">
              <PixelAvatar />
           </div>
        </div>
      </Section>

      {/* F1 Animation Transition */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-20">
         <F1Reveal onPass={() => setContentRevealed(true)} />
      </div>

      {/* Tech Stack Section (Revealed by F1) */}
      <div className={`transition-all duration-1000 ease-in-out transform ${contentRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <Section id="stack" title="Tech Stack" subtitle="Technologies" className="!pt-4">
           <div className="mt-8">
             <TechStack />
           </div>
        </Section>
      </div>

      {/* Projects Section */}
      <Section id="projects" title="Projects" subtitle="Featured">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-8">
           {featuredProjects.map((project, idx) => (
             <ProjectCard key={idx} project={project} />
           ))}
        </div>
        <div className="flex justify-center">
            <button 
                onClick={onNavigateToProjects}
                className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-xl font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all border border-neutral-200 dark:border-neutral-800 shadow-sm"
            >
                View All Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" title="About Me" subtitle="Personal">
         <div className="bg-white dark:bg-neutral-900/50 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row gap-8 items-center shadow-sm">
            <div className="w-32 h-32 bg-yellow-400 shrink-0 rounded-2xl overflow-hidden border-4 border-neutral-100 dark:border-neutral-800 shadow-lg">
               <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Akshit" alt="Akshit" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
               <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">Akshit Wadhwa</h3>
               <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                  I'm a Full Stack web developer and DevOps engineer focused on building scalable web applications. I love exploring new technologies and contributing to open source.
               </p>
               <div className="flex flex-wrap gap-3">
                  <SkillBadge icon={Cpu} name="React" />
                  <SkillBadge icon={Layers} name="Next.js" />
                  <SkillBadge icon={Terminal} name="DevOps" />
                  <SkillBadge icon={Database} name="Postgres" />
                  <SkillBadge icon={Coffee} name="Java" />
               </div>
            </div>
         </div>
      </Section>

      {/* GitHub Activity */}
      <Section id="activity" title="GitHub Activity" subtitle="Contributions">
         <GitHubActivity username="Akshitwadhwa" />
      </Section>

      {/* Setup Section */}
      <Section id="setup" title="Setup" subtitle="Development">
         <div className="mb-10">
            <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">Development Setup</h4>
            <div className="space-y-4">
                <ListItem 
                  title="Gears Used" 
                  subtitle="Productivity Tools/these are the essential gears I use." 
                  icon={Settings} 
                  onClick={onNavigateToGears}
                />
                <ListItem 
                  title="VS Code" 
                  subtitle="VS Code setup including extensions and themes I use." 
                  icon={Code} 
                />
            </div>
         </div>

         <div>
            <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">Journey</h4>
            <div className="space-y-4">
                <ListItem 
                  title="My Journey" 
                  subtitle="Overview of my learning and career journey." 
                  icon={Globe} 
                  onClick={onNavigateToWork}
                />
                <ListItem 
                  title="Certificates & Achievements" 
                  subtitle="A curated list of certificates and achievements." 
                  icon={Award}
                  onClick={onNavigateToCertificates}
                />
            </div>
         </div>
      </Section>
    </main>
  );
};
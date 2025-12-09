import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Image as ImageIcon, Globe, ArrowRight, Code, Database, Cpu, Layout, Smartphone, Layers, Server, Terminal, Zap, Box } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  // Helper to map tags to icons with colors
  const getTechIcon = (tag: string) => {
    const t = tag.toLowerCase();
    
    // React ecosystem
    if (t.includes('react')) return <Cpu size={18} className="text-blue-500" />;
    if (t.includes('next')) return <Layers size={18} className="text-neutral-900 dark:text-white" />;
    if (t.includes('vite')) return <Zap size={18} className="text-purple-500" />;
    
    // Backend & Runtime
    if (t.includes('node')) return <Server size={18} className="text-green-600" />;
    if (t.includes('express')) return <Server size={18} className="text-neutral-700 dark:text-neutral-300" />;
    if (t.includes('bun')) return <Server size={18} className="text-orange-500" />;
    
    // Databases
    if (t.includes('mongo')) return <Database size={18} className="text-green-500" />;
    if (t.includes('firebase')) return <Database size={18} className="text-yellow-500" />;
    if (t.includes('redis')) return <Database size={18} className="text-red-500" />;
    if (t.includes('sql') || t.includes('postgres') || t.includes('mysql')) return <Database size={18} className="text-blue-600" />;
    if (t.includes('appwrite')) return <Database size={18} className="text-pink-500" />;
    if (t.includes('data')) return <Database size={18} className="text-indigo-500" />;
    
    // Mobile
    if (t.includes('android') || t.includes('kotlin')) return <Smartphone size={18} className="text-green-600" />;
    if (t.includes('flutter')) return <Smartphone size={18} className="text-blue-400" />;
    if (t.includes('swift') || t.includes('ios')) return <Smartphone size={18} className="text-orange-500" />;
    
    // Frontend
    if (t.includes('html')) return <Layout size={18} className="text-orange-600" />;
    if (t.includes('css')) return <Layout size={18} className="text-blue-500" />;
    if (t.includes('tailwind')) return <Layout size={18} className="text-cyan-500" />;
    if (t.includes('javascript')) return <Code size={18} className="text-yellow-500" />;
    if (t.includes('typescript')) return <Code size={18} className="text-blue-600" />;
    
    // Languages & AI
    if (t.includes('python')) return <Terminal size={18} className="text-blue-500" />;
    if (t.includes('java')) return <Code size={18} className="text-red-600" />;
    if (t.includes('ai') || t.includes('gemini') || t.includes('ollama')) return <Cpu size={18} className="text-purple-600" />;
    if (t.includes('tensor') || t.includes('torch') || t.includes('pytorch')) return <Cpu size={18} className="text-orange-600" />;
    
    // DevOps & Cloud
    if (t.includes('docker')) return <Box size={18} className="text-blue-600" />;
    if (t.includes('cloud') || t.includes('aws') || t.includes('azure') || t.includes('gcp')) return <Globe size={18} className="text-blue-500" />;
    if (t.includes('webrtc')) return <Globe size={18} className="text-green-600" />;
    if (t.includes('arduino')) return <Cpu size={18} className="text-teal-500" />;
    
    // Fallback with first letter
    return <span className="text-xs font-bold text-neutral-600 dark:text-neutral-400">{tag.charAt(0).toUpperCase()}</span>;
  };

  return (
    <div className="group relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
      {/* Header Image Section with Overlay Buttons */}
      <div className="h-48 w-full relative bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden group-hover:scale-[1.01] transition-transform duration-500">
         {project.imageUrl ? (
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
         ) : (
            <div className="flex flex-col items-center text-neutral-400">
                <ImageIcon size={40} strokeWidth={1.5} />
            </div>
         )}
         
         {/* Floating Action Buttons */}
         <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-full text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm border border-neutral-200/50 dark:border-neutral-700/50"
                title="View Source on GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md rounded-full text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm border border-neutral-200/50 dark:border-neutral-700/50"
                title="View Live Demo"
              >
                <ExternalLink size={18} />
              </a>
            )}
         </div>
         
         {/* Category Badge */}
         {project.category && (
            <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-[10px] font-medium tracking-wide border border-white/10">
                {project.category}
            </div>
         )}
      </div>
      
      {/* Content Body */}
      <div className="p-6 flex flex-col flex-1">
        
        <div className="mb-5">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-tight mb-2 line-clamp-1 group-hover:text-emerald-500 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Technologies Section */}
        <div className="mb-6 mt-auto">
            <h4 className="text-[10px] font-bold text-neutral-400 dark:text-neutral-600 mb-3 uppercase tracking-wider">Technologies</h4>
            <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700/50 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:shadow-md hover:scale-110 transition-all duration-300 relative group/icon cursor-default"
                >
                  {getTechIcon(tag)}
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 dark:bg-neutral-800 text-white text-[11px] rounded-lg opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-xl font-medium border border-neutral-700">
                    {tag}
                    <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900 dark:border-t-neutral-800"></span>
                  </span>
                </div>
            ))}
            </div>
        </div>

        {/* Footer Row */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800/50">
            <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${project.status === 'Live' ? 'bg-emerald-400' : 'bg-amber-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${project.status === 'Live' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                </span>
                <span className={`text-xs font-medium ${project.status === 'Live' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}`}>
                    {project.status === 'Live' ? 'Operational' : project.status || 'Development'}
                </span>
            </div>

            <button className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group/btn">
                Details <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
        </div>

      </div>
    </div>
  );
};
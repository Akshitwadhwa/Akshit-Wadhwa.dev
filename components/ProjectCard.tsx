import React from 'react';
import { Project } from '../types';
import { Github, ExternalLink, Image as ImageIcon, Globe, ArrowRight, Code, Database, Cpu, Layout, Smartphone, Layers, Server, Terminal, Zap, Box } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  // Helper to map tags to icons
  const getTechIcon = (tag: string) => {
    const t = tag.toLowerCase();
    if (t.includes('react')) return <Cpu size={16} />;
    if (t.includes('next')) return <Layers size={16} />;
    if (t.includes('node') || t.includes('express') || t.includes('bun')) return <Server size={16} />;
    if (t.includes('data') || t.includes('mongo') || t.includes('firebase') || t.includes('redis') || t.includes('sql') || t.includes('appwrite')) return <Database size={16} />;
    if (t.includes('android') || t.includes('kotlin') || t.includes('flutter') || t.includes('swift')) return <Smartphone size={16} />;
    if (t.includes('html') || t.includes('css') || t.includes('tailwind')) return <Layout size={16} />;
    if (t.includes('python') || t.includes('ai') || t.includes('tensor') || t.includes('torch')) return <Terminal size={16} />;
    if (t.includes('vite')) return <Zap size={16} />;
    if (t.includes('docker') || t.includes('cloud')) return <Box size={16} />;
    // Fallback
    return <span className="text-[10px] font-bold">{tag.charAt(0)}</span>;
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
                  className="flex items-center justify-center w-9 h-9 rounded-xl bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/50 text-neutral-500 dark:text-neutral-400 hover:border-emerald-500/30 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-200 relative group/icon cursor-default"
                >
                  {getTechIcon(tag)}
                  {/* Tooltip */}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-800 text-white text-[10px] rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg font-medium">
                    {tag}
                    <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800"></span>
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
import React from 'react';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data';

export const ProjectsView: React.FC = () => {
  return (
    <main className="flex-1 pt-32 pb-20 max-w-6xl mx-auto px-4 md:px-8 w-full animate-fade-in min-h-screen">
      
      {/* Centered Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Projects</h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl">
          My projects and work across different technologies and domains.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 mb-12"></div>

      {/* List Container */}
      <div>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-8">
            All Projects <span className="text-neutral-500 font-normal text-base ml-2">({projects.length} projects)</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
           {projects.map((project, idx) => (
             <ProjectCard key={idx} project={project} />
           ))}
        </div>
      </div>

    </main>
  );
};
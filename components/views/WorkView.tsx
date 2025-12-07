import React from 'react';
import { Cat } from 'lucide-react';
import { ExperienceCard } from '../ExperienceCard';
import { experiences } from '../../data';

export const WorkView: React.FC = () => {
  return (
    <main className="flex-1 pt-32 pb-20 max-w-4xl mx-auto px-4 md:px-8 w-full animate-fade-in min-h-screen">
      
      {/* Centered Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="mb-6">
            <Cat className="w-12 h-12 text-white" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Work Experience</h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
          My work experiences across different companies and roles.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 mb-12"></div>

      {/* List Container */}
      <div>
        <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-8">
            All Experiences <span className="text-neutral-500 font-normal text-base ml-2">({experiences.length} experiences)</span>
        </h2>
        
        <div className="space-y-12">
           {experiences.map((exp, idx) => (
             <ExperienceCard key={idx} experience={exp} />
           ))}
        </div>
      </div>

    </main>
  );
};
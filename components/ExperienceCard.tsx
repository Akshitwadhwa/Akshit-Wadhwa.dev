import React from 'react';
import { Experience } from '../types';
import { Globe, MapPin } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="mb-8 w-full">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        
        {/* Logo Section */}
        <div className="shrink-0">
           <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden shadow-lg">
              {experience.logo ? (
                <img src={experience.logo} alt={experience.company} className="w-full h-full object-contain p-1" />
              ) : (
                <span className="text-3xl font-bold text-neutral-500">{experience.company.charAt(0)}</span>
              )}
           </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
           {/* Header Row */}
           <div className="flex flex-col md:flex-row md:items-start justify-between mb-1 gap-2 md:gap-0">
              <div className="flex items-center gap-3 flex-wrap">
                 <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{experience.role}</h3>
                 {experience.current && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
                      Working
                    </span>
                  )}
              </div>
              <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400 whitespace-nowrap">
                {experience.period}
              </span>
           </div>

           {/* Sub-header Row */}
           <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 md:gap-0">
              <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 font-medium">
                 {experience.company}
              </div>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-500 mt-1 md:mt-0">
                 <MapPin size={12} />
                 {experience.location}
              </div>
           </div>

           {/* Description Bullets */}
           <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
             {experience.description.map((point, index) => (
               <li key={index} className="flex items-start">
                 <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0"></span>
                 <span>{point}</span>
               </li>
             ))}
           </ul>
        </div>
      </div>
    </div>
  );
};
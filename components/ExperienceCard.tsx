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
           <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden">
              {experience.logo ? (
                <img src={experience.logo} alt={experience.company} className="w-full h-full object-cover" />
              ) : (
                <span className="text-2xl font-bold text-neutral-500">{experience.company.charAt(0)}</span>
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
                 <div className="flex gap-2 ml-1">
                    <a href="#" className="hover:text-white transition-colors"><Globe size={14} /></a>
                    <a href="#" className="hover:text-white transition-colors"><span className="sr-only">LinkedIn</span><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                    <a href="#" className="hover:text-white transition-colors"><span className="sr-only">Twitter</span><svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                 </div>
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
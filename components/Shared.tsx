import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Badge: React.FC<{children: React.ReactNode}> = ({children}) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 mx-1 font-mono border border-neutral-200 dark:border-neutral-700 align-middle">
    {children}
  </span>
);

export const SocialLink: React.FC<{href: string, icon: any}> = ({href, icon: Icon}) => (
  <a href={href} className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors transform hover:scale-110 duration-200">
    <Icon size={24} strokeWidth={1.5} />
  </a>
);

export const SkillBadge: React.FC<{icon: any, name: string}> = ({icon: Icon, name}) => (
  <span className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-xs font-medium text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
     <Icon size={14} /> {name}
  </span>
);

export const ListItem: React.FC<{title: string, subtitle: string, icon: any, onClick?: () => void}> = ({title, subtitle, icon: Icon, onClick}) => (
  <div 
    onClick={onClick} 
    className={`flex items-center justify-between p-5 rounded-2xl bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-white dark:hover:bg-neutral-900 transition-all duration-300 group shadow-sm hover:shadow-md ${onClick ? 'cursor-pointer active:scale-[0.99]' : ''}`}
  >
     <div className="flex items-center gap-5">
       <div className="w-12 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center shrink-0 text-neutral-500 dark:text-neutral-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
          <Icon size={24} />
       </div>
       <div>
          <h4 className="text-base font-bold text-neutral-900 dark:text-white mb-0.5">{title}</h4>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{subtitle}</p>
       </div>
     </div>
     {onClick && (
       <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all text-neutral-400 dark:text-neutral-600">
         <ChevronRight size={20} />
       </div>
     )}
  </div>
);
import React from 'react';
import { Github } from 'lucide-react';

interface GitHubActivityProps {
  username?: string;
}

export const GitHubActivity: React.FC<GitHubActivityProps> = ({ username = 'Akshitwadhwa' }) => {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 bg-white dark:bg-neutral-900/50 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
            <Github className="w-5 h-5 text-white dark:text-neutral-900" />
          </div>
          <div>
            <h3 className="text-base font-bold text-neutral-900 dark:text-white">@{username}</h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Last 12 months activity</p>
          </div>
        </div>
        <a 
          href={`https://github.com/${username}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-lg text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2"
        >
          <Github size={16} /> View Profile
        </a>
      </div>
      <div className="w-full overflow-x-auto">
        <img 
          src={`https://ghchart.rshah.org/409ba5/${username}`}
          alt="GitHub Contribution Graph"
          className="w-full rounded-lg"
          style={{ minWidth: '700px' }}
        />
      </div>
      <div className="mt-4 flex items-center justify-center gap-6 text-xs text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-emerald-200 dark:bg-emerald-900"></span>
          <span>Less</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-sm bg-emerald-300 dark:bg-emerald-700"></span>
          <span className="w-3 h-3 rounded-sm bg-emerald-400 dark:bg-emerald-600"></span>
          <span className="w-3 h-3 rounded-sm bg-emerald-500 dark:bg-emerald-500"></span>
          <span className="w-3 h-3 rounded-sm bg-emerald-600 dark:bg-emerald-400"></span>
        </div>
        <div className="flex items-center gap-2">
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

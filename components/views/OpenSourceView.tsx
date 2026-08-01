import React from 'react';
import { ArrowUpRight, Github, GitPullRequest, HeartHandshake } from 'lucide-react';

const contributions = [
  {
    title: 'Hacktoberfest',
    description: 'Three-time participant, contributing to the open-source community through seasonal collaboration.',
    href: 'https://hacktoberfest.com/',
  },
  {
    title: 'GitHub Profile',
    description: 'Explore public repositories, experiments, project source code, and ongoing work.',
    href: 'https://github.com/Akshitwadhwa',
  },
];

export const OpenSourceView: React.FC = () => (
  <main className="flex-1 pt-32 pb-20 max-w-5xl mx-auto px-4 md:px-8 w-full animate-fade-in min-h-screen">
    <div className="flex flex-col items-center text-center mb-16">
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
        <GitPullRequest size={28} />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Open Source</h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl">
        Contributions, public code, and the projects I build in the open.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contributions.map((contribution) => (
        <a key={contribution.title} href={contribution.href} target="_blank" rel="noopener noreferrer" className="group rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-7 hover:border-emerald-500/50 transition-colors shadow-sm">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200">
              {contribution.title === 'GitHub Profile' ? <Github size={24} /> : <HeartHandshake size={24} />}
            </div>
            <ArrowUpRight className="text-neutral-400 group-hover:text-emerald-500 transition-colors" />
          </div>
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{contribution.title}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{contribution.description}</p>
        </a>
      ))}
    </div>

    <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-12">
      This page is ready for your pull requests, issues, merged contributions, and featured repositories.
    </p>
  </main>
);

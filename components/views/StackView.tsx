import React from 'react';
import { TechStack } from '../TechStack';

export const StackView: React.FC = () => (
  <main className="flex-1 pt-32 pb-20 max-w-6xl mx-auto px-4 md:px-8 w-full animate-fade-in min-h-screen">
    <div className="flex flex-col items-center text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Tech Stack</h1>
      <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-2xl">
        The tools and platforms I use to design, build, and ship software.
      </p>
    </div>
    <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 mb-12" />
    <TechStack />
  </main>
);

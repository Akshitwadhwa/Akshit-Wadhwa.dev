import React from 'react';
import { ArrowLeft, Settings } from 'lucide-react';
import { Gears } from '../Gears';

interface GearsViewProps {
  onBack: () => void;
}

export const GearsView: React.FC<GearsViewProps> = ({ onBack }) => {
  return (
    <main className="flex-1 pt-24 pb-12 max-w-7xl mx-auto px-4 md:px-8 w-full animate-fade-in">
      <button 
        onClick={onBack} 
        className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-8 px-4 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900/50 w-fit"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
        <span className="font-medium">Back to Home</span>
      </button>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Gears</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">My gears and tools I use to get my work done.</p>
        <div className="mt-8 flex justify-center">
           <div className="w-12 h-12 text-emerald-500 animate-bounce">
              <Settings size={48} strokeWidth={1.5} />
           </div>
        </div>
      </div>

      <Gears />
    </main>
  );
};
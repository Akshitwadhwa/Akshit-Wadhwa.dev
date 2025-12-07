import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { CertificateCard } from '../CertificateCard';
import { certificates } from '../../data';

interface CertificatesViewProps {
  onBack: () => void;
}

export const CertificatesView: React.FC<CertificatesViewProps> = ({ onBack }) => {
  return (
    <main className="flex-1 pt-24 pb-20 max-w-6xl mx-auto px-4 md:px-8 w-full animate-fade-in min-h-screen">
      
      {/* Back Button */}
      <button 
        onClick={onBack} 
        className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-12 px-4 py-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900/50 w-fit"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
        <span className="font-medium">Back</span>
      </button>

      {/* Centered Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">Certificates & Achievements</h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
          A curated list of my certificates and notable achievements.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-neutral-200 dark:bg-neutral-800 mb-12"></div>
      
      {/* Info Text */}
      <div className="mb-12 text-center">
         <p className="text-neutral-500 text-sm max-w-2xl mx-auto">
           Add certificates (PNG/JPEG) to public/certificates or register them in data.ts. Files placed in the directory are auto-discovered and displayed here.
         </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
           {certificates.map((cert, idx) => (
             <CertificateCard key={idx} certificate={cert} />
           ))}
      </div>

    </main>
  );
};
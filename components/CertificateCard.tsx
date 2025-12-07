import React from 'react';
import { Certificate } from '../types';
import { Image as ImageIcon, ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="group flex flex-col gap-3">
      {/* Image Container */}
      <div className="aspect-[4/3] w-full bg-neutral-900 border border-neutral-800 relative flex items-center justify-center overflow-hidden group-hover:border-neutral-700 transition-colors">
        {certificate.imageUrl ? (
          <img 
            src={certificate.imageUrl} 
            alt={certificate.title} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
          />
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="p-3 border border-blue-400/30 bg-blue-500/10 rounded">
                <span className="text-blue-400 font-bold text-xl">?</span>
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
           <ExternalLink className="text-white drop-shadow-lg" size={24} />
        </div>
      </div>

      {/* Details */}
      <div>
        <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-emerald-400 transition-colors">
          {certificate.title}
        </h3>
        <p className="text-neutral-500 text-sm font-medium">
          {certificate.issuer} <span className="mx-1">•</span> {certificate.date}
        </p>
      </div>
    </div>
  );
};
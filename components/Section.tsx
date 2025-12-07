import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 max-w-5xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-10 animate-fade-in">
          {subtitle && <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2 block">{subtitle}</span>}
          {title && <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">{title}</h2>}
        </div>
      )}
      <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        {children}
      </div>
    </section>
  );
};
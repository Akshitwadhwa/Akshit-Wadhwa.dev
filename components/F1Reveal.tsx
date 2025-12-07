import React, { useState, useEffect, useRef } from 'react';

interface F1RevealProps {
  onPass: () => void;
}

export const F1Reveal: React.FC<F1RevealProps> = ({ onPass }) => {
  const [triggered, setTriggered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !triggered) {
          setTriggered(true);
          // Trigger the content reveal halfway through the car animation
          setTimeout(() => {
            onPass();
          }, 600);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [triggered, onPass]);

  return (
    <div ref={containerRef} className="relative h-24 w-full overflow-visible flex items-center my-2 select-none pointer-events-none">
      {/* Track lines background */}
      <div className="absolute w-full h-full flex flex-col justify-center gap-8 opacity-20">
        <div className="w-full h-[1px] bg-neutral-400 dark:bg-neutral-700 dashed"></div>
      </div>

      {/* Car Container */}
      <div className={`absolute left-0 z-20 ${triggered ? 'animate-drive' : 'opacity-0'}`}>
        {/* Smoke Particles */}
        <div className="absolute top-4 -left-10 flex">
          {[...Array(8)].map((_, i) => (
             <div 
                key={i}
                className="w-6 h-6 bg-neutral-400/50 dark:bg-neutral-600/50 rounded-full absolute"
                style={{
                  animation: triggered ? `puff 1s ease-out forwards ${i * 0.1}s` : 'none',
                  left: `-${i * 10}px`,
                  top: `${(i % 2) * 5}px`
                }}
             />
          ))}
        </div>
        
        {/* F1 Car SVG */}
        <svg 
            viewBox="0 0 220 60" 
            className="w-48 md:w-64 h-auto text-red-600 dark:text-red-500 drop-shadow-lg transform -scale-x-100"
        >
          <defs>
            <linearGradient id="carBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
          </defs>
          {/* Main Body */}
          <path d="M10,45 L210,45 L200,25 L60,25 L50,15 L20,15 L10,30 Z" fill="url(#carBody)" />
          {/* Cockpit */}
          <path d="M90,25 L130,25 L125,15 L95,15 Z" fill="#1f2937" />
          {/* Front Wing */}
          <path d="M200,35 L220,35 L220,45 L190,45 Z" fill="#1f2937" />
          {/* Rear Wing */}
          <rect x="0" y="5" width="30" height="40" rx="2" fill="#1f2937" />
          <rect x="5" y="20" width="20" height="5" fill="#ef4444" />
          {/* Wheels */}
          <circle cx="50" cy="45" r="14" fill="#0f0f0f" stroke="#333" strokeWidth="2" />
          <circle cx="50" cy="45" r="5" fill="#333" />
          
          <circle cx="180" cy="45" r="14" fill="#0f0f0f" stroke="#333" strokeWidth="2" />
          <circle cx="180" cy="45" r="5" fill="#333" />
          
          {/* Shine */}
          <path d="M30,20 L45,20" stroke="white" strokeWidth="1" opacity="0.5" />
          <path d="M70,30 L180,30" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
};
import React from 'react';
import profilePhoto from '../Assests/Profile.jpeg';

export const PixelAvatar: React.FC = () => {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto md:mx-0 group">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative w-full h-full rounded-full border-4 border-neutral-100 dark:border-neutral-800 bg-neutral-200 dark:bg-neutral-800 overflow-hidden shadow-xl">
            <img 
                src={profilePhoto} 
                alt="Akshit Wadhwa" 
                className="w-full h-full object-cover object-[28%_20%] transform group-hover:scale-110 transition-transform duration-300"
            />
        </div>
        <div className="absolute bottom-1 right-1 w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-lg border-2 border-neutral-50 dark:border-neutral-950">
            🎧
        </div>
    </div>
  );
};
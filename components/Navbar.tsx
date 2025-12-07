import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  currentView: 'home' | 'gears' | 'work' | 'projects' | 'certificates';
  setCurrentView: (view: 'home' | 'gears' | 'work' | 'projects' | 'certificates') => void;
  navLinks: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, currentView, setCurrentView, navLinks }) => {
  
  const handleNavClick = (e: React.MouseEvent, href: string, label: string) => {
    e.preventDefault();
    if (label === 'Work') {
        setCurrentView('work');
    } else if (label === 'Projects') {
        setCurrentView('projects');
    } else {
        if (currentView !== 'home') {
            setCurrentView('home');
            // Allow state update to render home before scrolling
            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.querySelector(href);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800 h-16 flex items-center transition-colors duration-300">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => setCurrentView('home')}
        >
          <div className="w-8 h-8 bg-yellow-400 rounded-lg border-2 border-neutral-900 overflow-hidden shadow-sm">
            <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Akshit" alt="Icon" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold font-mono text-sm hidden sm:block tracking-tight text-neutral-900 dark:text-white">
            AKSHIT<span className="text-emerald-500">.DEV</span>
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.label)}
                  className={`text-sm font-medium transition-colors ${
                    (currentView === 'work' && link.label === 'Work') || (currentView === 'projects' && link.label === 'Projects')
                      ? 'text-emerald-500' 
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
          </div>
          
          <div className="h-4 w-[1px] bg-neutral-300 dark:bg-neutral-800 hidden md:block"></div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors border border-transparent dark:border-neutral-800"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
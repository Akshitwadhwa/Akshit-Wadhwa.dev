import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { NavItem } from '../types';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  navLinks: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, navLinks }) => {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800 h-16 flex items-center transition-colors duration-300">
      <div className="max-w-5xl mx-auto w-full px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-400 rounded-lg border-2 border-neutral-900 overflow-hidden shadow-sm">
            <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Akshit" alt="Icon" className="w-full h-full object-cover" />
          </div>
          <span className="font-bold font-mono text-sm hidden sm:block tracking-tight text-neutral-900 dark:text-white">
            AKSHIT<span className="text-emerald-500">.DEV</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <NavLink
                  key={link.label} 
                  to={link.href}
                  className={({ isActive }) => `text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-emerald-500'
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </NavLink>
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

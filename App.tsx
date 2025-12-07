import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { GearsView } from './components/views/GearsView';
import { WorkView } from './components/views/WorkView';
import { ProjectsView } from './components/views/ProjectsView';
import { CertificatesView } from './components/views/CertificatesView';
import { navLinks } from './data';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'gears' | 'work' | 'projects' | 'certificates'>('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-500/30 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      
      <Navbar 
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        currentView={currentView}
        setCurrentView={setCurrentView}
        navLinks={navLinks}
      />

      {currentView === 'home' && (
        <>
          <HomeView 
            onNavigateToGears={() => setCurrentView('gears')} 
            onNavigateToWork={() => setCurrentView('work')}
            onNavigateToProjects={() => setCurrentView('projects')}
            onNavigateToCertificates={() => setCurrentView('certificates')}
          />
          <Footer />
        </>
      )}
      
      {currentView === 'gears' && (
        <GearsView onBack={() => setCurrentView('home')} />
      )}

      {currentView === 'work' && (
        <WorkView />
      )}

      {currentView === 'projects' && (
        <ProjectsView />
      )}

      {currentView === 'certificates' && (
        <CertificatesView onBack={() => setCurrentView('home')} />
      )}
      
    </div>
  );
};

export default App;
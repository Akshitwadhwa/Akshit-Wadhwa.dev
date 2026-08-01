import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { GearsView } from './components/views/GearsView';
import { WorkView } from './components/views/WorkView';
import { ProjectsView } from './components/views/ProjectsView';
import { CertificatesView } from './components/views/CertificatesView';
import { OpenSourceView } from './components/views/OpenSourceView';
import { StackView } from './components/views/StackView';
import { SplashScreen } from './components/SplashScreen';
import { navLinks } from './data';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set dark mode immediately
    document.documentElement.classList.add('dark');
    // Mark as ready to show splash screen
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll to top when the shareable URL changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Show splash screen on first visit
  if (!isReady || showSplash) {
    return isReady ? <SplashScreen onComplete={() => setShowSplash(false)} /> : null;
  }
  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald-500/30 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      
      <Navbar 
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        navLinks={navLinks}
      />

      <Routes>
        <Route path="/" element={<HomeView onNavigateToGears={() => navigate('/uses')} onNavigateToWork={() => navigate('/experience')} onNavigateToProjects={() => navigate('/projects')} onNavigateToCertificates={() => navigate('/certificates')} />} />
        <Route path="/experience" element={<WorkView />} />
        <Route path="/projects" element={<ProjectsView />} />
        <Route path="/open-source" element={<OpenSourceView />} />
        <Route path="/stack" element={<StackView />} />
        <Route path="/uses" element={<GearsView onBack={() => navigate('/')} />} />
        <Route path="/certificates" element={<CertificatesView onBack={() => navigate('/')} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      
    </div>
  );
};

export default App;

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

const SPLASH_SEEN_KEY = 'portfolio-splash-seen';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Set dark mode immediately
    document.documentElement.classList.add('dark');
    // Show splash once per browser session (skips refreshes; returns on a new visit)
    const hasSeenSplash = sessionStorage.getItem(SPLASH_SEEN_KEY) === '1';
    setShowSplash(!hasSeenSplash);
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

  const handleSplashComplete = () => {
    sessionStorage.setItem(SPLASH_SEEN_KEY, '1');
    setShowSplash(false);
  };

  // Show splash screen on first visit in this session
  if (!isReady || showSplash) {
    return isReady ? <SplashScreen onComplete={handleSplashComplete} /> : null;
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

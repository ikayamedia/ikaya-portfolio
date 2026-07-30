import { useEffect, useState } from 'react';
import { Project, Theme } from './types';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import CaseDetailsModal from './components/CaseDetailsModal';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Sync theme with HTML document class list
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Section observer to handle active navigation indicators during page scroll
  useEffect(() => {
    if (!loaderComplete) return;

    const sections = ['hero-section', 'work', 'services', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for accuracy

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map section section id to link id
            if (sectionId === 'hero-section') {
              setActiveSection('hero');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loaderComplete]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      {/* 1. Cinematic Preloader Screen */}
      <Loader onComplete={() => setLoaderComplete(true)} />

      {/* Main Container rendered when loader completes */}
      {loaderComplete && (
        <div id="app-root-container" className="min-h-screen bg-[#fcfcfc] dark:bg-[#121212] text-[#1a1a1a] dark:text-[#fcfcfc] transition-colors duration-500 ease-out flex flex-col font-sans overflow-x-hidden selection:bg-neutral-800 dark:selection:bg-neutral-100 selection:text-white dark:selection:text-neutral-900 border-2 sm:border-4 md:border-8 border-white dark:border-[#1a1a1a]">
          
          {/* 2. Interactive Trailing Custom Cursor */}
          <CustomCursor />

          {/* 3. Header Navigation & Branding bar */}
          <Navbar
            theme={theme}
            onThemeToggle={handleThemeToggle}
            activeSection={activeSection}
          />

          {/* 4. Swiss Grid Hero Greeting Section */}
          <Hero />

          {/* 5. Infinite Sliding Marquee Separator */}
          <Marquee />

          {/* 6. Selected Case Studies Portfolio Grid */}
          <Work onSelectProject={(project) => setSelectedProject(project)} />

          {/* 7. Accordion Capabilities & Service Grid */}
          <Services />

          {/* 8. Editorial Studio About Story */}
          <About />

          {/* 9. Contact Inquiry Form & Footer */}
          <Contact />

          {/* 10. Immersive presentation modal overlay for cases */}
          <CaseDetailsModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />

        </div>
      )}
    </>
  );
}

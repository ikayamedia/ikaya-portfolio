import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  onThemeToggle: () => void;
  activeSection: string;
}

export default function Navbar({ theme, onThemeToggle, activeSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Work', id: 'work' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 text-xs border-b border-neutral-100 dark:border-neutral-900 ${
          isScrolled 
            ? 'bg-[#fcfcfc]/95 dark:bg-[#121212]/95 backdrop-blur-md py-3 shadow-xs' 
            : 'bg-transparent py-5'
        }`}
      >
        <div id="navbar-container" className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <button
            id="navbar-brand-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group text-left cursor-pointer"
          >
            <span className="font-sans font-bold text-xl sm:text-2xl tracking-tighter uppercase text-neutral-900 dark:text-neutral-50 transition-colors">
              IKAYA MEDIA
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav id="navbar-desktop-nav" className="hidden md:flex items-center gap-6 lg:gap-12 font-sans">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative py-1 text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-neutral-900 dark:text-neutral-50'
                      : 'text-neutral-900/40 dark:text-neutral-50/40 hover:text-neutral-900 dark:hover:text-neutral-50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      id={`nav-link-dot-${item.id}`}
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1px] bg-neutral-900 dark:bg-neutral-100"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions Menu */}
          <div id="navbar-actions" className="flex items-center gap-4">

            {/* Talk Button */}
            <button
              id="navbar-cta-btn"
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex items-center gap-1.5 px-5 py-2 border border-neutral-900 dark:border-neutral-50 hover:bg-neutral-900 hover:text-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-950 text-neutral-900 dark:text-neutral-50 transition-all cursor-pointer rounded-none uppercase font-bold text-[10px] tracking-[0.2em]"
            >
              Inquire
              <ArrowUpRight size={11} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-none bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-30 md:hidden bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-900 pt-24 px-6 pb-12 flex flex-col justify-between"
          >
            {/* Navigation items list */}
            <div id="mobile-menu-list" className="flex flex-col gap-6 mt-6">
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500 font-mono tracking-widest uppercase">
                Navigation Directory
              </span>
              {menuItems.map((item, idx) => (
                <motion.button
                  id={`mobile-nav-link-${item.id}`}
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-3xl font-sans font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-500 tracking-tight"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Metadata Footer */}
            <div id="mobile-menu-footer" className="border-t border-neutral-200 dark:border-neutral-900 pt-6 font-mono text-[10px] text-neutral-400 dark:text-neutral-500 flex flex-col gap-4">
              <div className="flex justify-between">
                <span>IKAYA MEDIA ©2026</span>
                <span>BERLIN // KYIV</span>
              </div>
              <button
                id="mobile-cta-btn"
                onClick={() => scrollToSection('contact')}
                className="w-full flex items-center justify-between p-3 border border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 text-xs font-semibold uppercase tracking-widest"
              >
                Inquire Now
                <ArrowUpRight size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

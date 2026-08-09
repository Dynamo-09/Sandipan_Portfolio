import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -40% 0px' }
    );

    const sections = ['expertise', 'about', 'career', 'skills', 'certifications', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 w-full glass-card z-50 shadow-sm transition-all duration-300 border-b-0 bg-white/40 dark:bg-slate-900/40"
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="font-headline-md text-[24px] font-bold text-on-surface dark:text-slate-100 tracking-tight italic">
          Sandipan Bhattacharya
        </div>
        
        <div className="hidden md:flex items-center gap-stack-lg">
          {['Profile', 'About', 'Career', 'Skills', 'Certifications', 'Contact'].map((item) => {
            const hash = item === 'Profile' ? '#expertise' : `#${item.toLowerCase()}`;
            const isActive = activeSection === hash.substring(1);
            return (
              <a 
                key={item}
                href={hash} 
                className={`nav-link font-label-md text-label-md transition-colors duration-200 cursor-pointer pb-1 ${isActive ? 'active text-primary dark:text-slate-100' : 'text-on-secondary-fixed-variant dark:text-slate-400 hover:text-primary dark:hover:text-slate-100'}`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-stack-md">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

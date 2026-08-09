import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsGrid } from './components/SkillsGrid';
import { Certifications } from './components/Certifications';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ExperienceTimeline />
          <SkillsGrid />
          <Certifications />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

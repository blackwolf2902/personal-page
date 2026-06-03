import React from 'react';
import { ThemeProvider } from './context/ThemeContext.js';
import { ToastProvider } from './context/ToastContext.js';
import BackgroundPattern from './components/BackgroundPattern/BackgroundPattern.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import ScrollProgress from './components/ScrollProgress/ScrollProgress.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import TechStack from './components/TechStack/TechStack.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import Achievements from './components/Achievements/Achievements.jsx';
import GitHubActivity from './components/GitHubActivity/GitHubActivity.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import FloatingCTA from './components/FloatingCTA/FloatingCTA.jsx';
import BackToTop from './components/BackToTop/BackToTop.jsx';

const ENABLE_BG_PATTERN = true;

export default function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen relative">
          <ScrollProgress />
          <BackgroundPattern enabled={ENABLE_BG_PATTERN} type="dots" />
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <TechStack />
            <Projects />
            <Experience />
            <Education />
            <Achievements />
            <GitHubActivity />
            <Contact />
            <Footer />
          </div>
          <FloatingCTA />
          <BackToTop />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

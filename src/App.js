import React from 'react';
import { ThemeProvider } from './context/ThemeContext.js';
import BackgroundPattern from './components/BackgroundPattern/BackgroundPattern.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import TechStack from './components/TechStack/TechStack.jsx';
import Projects from './components/Projects/Projects.jsx';
import Experience from './components/Experience/Experience.jsx';
import Education from './components/Education/Education.jsx';
import Achievements from './components/Achievements/Achievements.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

const ENABLE_BG_PATTERN = true;

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
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
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
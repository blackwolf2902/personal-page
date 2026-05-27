import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, ChevronDown, Terminal } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection.jsx';
import { profile } from '../../data/profile.js';

const roles = [
  'Python Full Stack Developer',
  'Machine Learning Engineer',
  'AI Solutions Builder',
  'Computer Vision Specialist',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <AnimatedSection>
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Terminal className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)] text-sm font-mono">
              System Ready
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="accent-text">{profile.name}</span>
          </h1>

          <div className="text-xl md:text-2xl text-[var(--color-muted-foreground)] mb-2 min-h-[2rem]">
            <span className="accent-text">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-[var(--color-accent)] ml-1 animate-pulse" />
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] mb-10 max-w-2xl mx-auto leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="accent-button group flex items-center justify-center"
            >
              View My Work
              <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button flex items-center justify-center"
            >
              <Download className="mr-2 w-4 h-4" />
              View Resume
            </a>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="animate-bounce cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-[var(--color-accent)] mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
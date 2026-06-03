import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    return localStorage.getItem('cta_dismissed') === 'true';
  });

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        setVisible(rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = (e) => {
    e.stopPropagation();
    setDismissed(true);
    localStorage.setItem('cta_dismissed', 'true');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const show = visible && !dismissed;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed left-6 bottom-8 z-40"
        >
          <button
            onClick={scrollToContact}
            className="glass-card flex items-center gap-2 px-4 py-3 cursor-pointer hover:border-[var(--color-accent)] group relative"
          >
            <MessageCircle className="w-5 h-5 text-[var(--color-accent)]" />
            <span className="text-sm font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors">
              Let's Talk
            </span>
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[var(--color-card)] border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-accent-light)] cursor-pointer"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3 text-[var(--color-muted-foreground)]" />
            </button>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

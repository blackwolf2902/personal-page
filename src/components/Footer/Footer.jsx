import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';
import { profile } from '../../data/profile.js';

export default function Footer() {
  return (
    <footer className="py-8 bg-[var(--color-card)] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 text-sm text-[var(--color-muted-foreground)]">
            <span>&copy; {new Date().getFullYear()} {profile.name}</span>
            <span className="flex items-center">
              Built with <Heart className="w-3.5 h-3.5 mx-1 text-red-500" /> using React & Tailwind
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-[var(--color-accent-light)] text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-[var(--color-accent-light)] text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
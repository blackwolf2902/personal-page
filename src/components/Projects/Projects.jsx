import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import GlassCard from '../common/GlassCard.jsx';
import { projects } from '../../data/projects.js';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(
    () => activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projects" className="py-20 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Featured Projects"
            subtitle="Innovative AI and ML projects showcasing cutting-edge technologies"
          />
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[var(--color-accent)] text-white'
                    : 'bg-[var(--color-card)] text-[var(--color-muted-foreground)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <GlassCard
                  hover={true}
                  className={`overflow-hidden ${
                    project.featured ? 'border-[var(--color-accent)]/50' : ''
                  }`}
                >
                  <div className="relative overflow-hidden h-48">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-[var(--color-muted)] flex items-center justify-center">
                        <ExternalLink className="w-12 h-12 text-[var(--color-muted-foreground)]" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-[var(--color-card)]/60" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold text-[var(--color-foreground)]">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="accent-badge text-xs">Featured</span>
                      )}
                      {project.patent && (
                        <span className="bg-orange-500 text-white px-3 py-0.5 rounded-full text-xs font-bold">
                          Patent Filed
                        </span>
                      )}
                    </div>

                    <p className="text-[var(--color-muted-foreground)] mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[var(--color-accent-light)] text-[var(--color-accent)] rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors text-sm"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import { experiences } from '../../data/experiences.js';

function TimelineEntry({ exp, index }) {
  const [expanded, setExpanded] = useState(false);
  const displayResponsibilities = expanded
    ? exp.responsibilities
    : exp.responsibilities.slice(0, 2);

  return (
    <div className="relative pl-8 md:pl-12">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)] md:left-5" />
      <div className="absolute left-0 md:left-5 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-[var(--color-accent)] border-2 border-[var(--color-background)] z-10" />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-medium text-[var(--color-accent)]">
            {exp.period}
          </span>
          <span className="px-2 py-0.5 bg-[var(--color-accent-light)] text-[var(--color-accent)] rounded-full text-xs font-medium">
            {exp.type}
          </span>
        </div>
        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-1">
          {exp.title}
        </h3>
        <div className="flex items-center text-sm text-[var(--color-muted-foreground)] mb-3">
          <span className="font-semibold text-[var(--color-accent)]">{exp.company}</span>
          <span className="mx-2">&bull;</span>
          <MapPin className="w-3.5 h-3.5 mr-1" />
          <span>{exp.location}</span>
        </div>
        <ul className="space-y-2 text-[var(--color-muted-foreground)] text-sm leading-relaxed">
          {displayResponsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-[var(--color-accent)] mr-2 mt-1 flex-shrink-0">&#8226;</span>
              {resp}
            </li>
          ))}
        </ul>
        {exp.responsibilities.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-[var(--color-accent)] text-sm font-medium cursor-pointer hover:underline flex items-center gap-1"
          >
            {expanded ? 'Show less' : `Show ${exp.responsibilities.length - 2} more`}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Experience"
            subtitle="My professional journey so far"
          />
        </AnimatedSection>

        <AnimatedSection variants={staggerContainer}>
          <div className="relative">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <TimelineEntry exp={exp} index={index} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

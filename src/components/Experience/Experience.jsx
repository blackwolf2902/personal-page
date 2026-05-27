import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import GlassCard from '../common/GlassCard.jsx';
import { experiences } from '../../data/experiences.js';

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
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <GlassCard hover={true} className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-[var(--color-accent)] text-sm">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="mx-2 text-[var(--color-muted-foreground)]">&bull;</span>
                        <span className="text-[var(--color-muted-foreground)]">{exp.location}</span>
                      </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-[var(--color-foreground)] text-sm font-medium">
                        {exp.period}
                      </div>
                      <div className="text-[var(--color-accent)] text-xs font-medium">
                        {exp.type}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-[var(--color-muted-foreground)] text-sm leading-relaxed">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[var(--color-accent)] mr-2 mt-1 flex-shrink-0">&#8226;</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
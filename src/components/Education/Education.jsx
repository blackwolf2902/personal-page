import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import GlassCard from '../common/GlassCard.jsx';
import { education } from '../../data/education.js';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Education"
            subtitle="My academic background"
          />
        </AnimatedSection>

        <AnimatedSection variants={staggerContainer}>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div key={index} variants={fadeUpVariants}>
                <GlassCard hover={true} className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-[var(--color-foreground)]">
                          {edu.degree}
                        </h3>
                        <span className="text-sm text-[var(--color-accent)] font-medium mt-1 md:mt-0">
                          {edu.period}
                        </span>
                      </div>
                      <div className="flex items-center text-[var(--color-muted-foreground)] mb-3 text-sm">
                        <MapPin className="w-3.5 h-3.5 mr-1" />
                        <span className="font-medium">{edu.institution}</span>
                        <span className="mx-2">&bull;</span>
                        <span>{edu.location}</span>
                      </div>
                      {edu.cgpa && (
                        <div className="inline-block px-3 py-1 bg-[var(--color-accent-light)] text-[var(--color-accent)] rounded-full text-sm font-medium mb-3">
                          CGPA: {edu.cgpa}
                        </div>
                      )}
                      {edu.percentage && (
                        <div className="inline-block px-3 py-1 bg-[var(--color-accent-light)] text-[var(--color-accent)] rounded-full text-sm font-medium mb-3">
                          Percentage: {edu.percentage}
                        </div>
                      )}
                      <ul className="space-y-1.5 text-[var(--color-muted-foreground)] text-sm">
                        {edu.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[var(--color-accent)] mr-2 mt-1 flex-shrink-0">&#8226;</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import GlassCard from '../common/GlassCard.jsx';
import { achievements, certifications } from '../../data/achievements.js';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Achievements & Certifications"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection variants={staggerContainer}>
            <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
              Major Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div key={item.id} variants={fadeUpVariants}>
                  <GlassCard hover={true} className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-foreground)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[var(--color-accent)] text-xs font-medium mb-1">
                        {item.date}
                      </p>
                      <p className="text-[var(--color-muted-foreground)] text-sm">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection variants={staggerContainer}>
            <h3 className="text-2xl font-bold text-[var(--color-foreground)] mb-6">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((item, index) => (
                <motion.div key={item.id} variants={fadeUpVariants}>
                  <GlassCard hover={true} className="p-4 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--color-foreground)] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[var(--color-accent)] text-xs font-medium mb-1">
                        {item.issuer} &bull; {item.date}
                      </p>
                      <p className="text-[var(--color-muted-foreground)] text-sm">
                        {item.description}
                      </p>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import GlassCard from '../common/GlassCard.jsx';
import { profile } from '../../data/profile.js';
import { aboutText, stats } from '../../data/about.js';

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="About Me"
            subtitle="Get to know me better"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection variants={fadeUpVariants}>
            <div className="space-y-6 text-[var(--color-foreground)] text-lg leading-relaxed">
              {aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center text-[var(--color-accent)]">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-[var(--color-muted-foreground)]">
                    {profile.location}
                  </span>
                </div>
                <div className="flex items-center text-[var(--color-accent)]">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-[var(--color-muted-foreground)]">
                    Patent Holder
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variants={staggerContainer}>
            <motion.div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <GlassCard key={stat.id} hover={true} className="p-6 text-center">
                  <div className="text-3xl font-bold text-[var(--color-accent)] mb-1">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">
                    {stat.label}
                  </div>
                </GlassCard>
              ))}
            </motion.div>
          </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
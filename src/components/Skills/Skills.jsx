import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Brain, Database, Wrench } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import GlassCard from '../common/GlassCard.jsx';
import { skills, skillCategories } from '../../data/skills.js';

const categoryIcons = {
  Languages: Code,
  Frameworks: Server,
  'AI/ML': Brain,
  Database: Database,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Technical Skills"
            subtitle="Technologies and frameworks I use to build innovative solutions"
          />
        </AnimatedSection>

        {skillCategories.map((category, catIndex) => {
          const Icon = categoryIcons[category.name] || Code;
          return (
            <AnimatedSection
              key={category.name}
              variants={staggerContainer}
              className="mb-12"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center mr-3">
                  <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeUpVariants}
                  >
                    <GlassCard hover={true} className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-[var(--color-foreground)]">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full bg-[var(--color-muted)] rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-2 rounded-full skill-progress"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-[var(--color-muted-foreground)] mt-1">
                        <span>Proficiency</span>
                        <span>{skill.level}%</span>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
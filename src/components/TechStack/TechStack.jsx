import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import GlassCard from '../common/GlassCard.jsx';
import { techStack } from '../../data/techStack.js';

const ICON_SUFFIXES = ['original', 'plain', 'original-wordmark', 'plain-wordmark'];

function TechIcon({ name, icon, color }) {
  const [suffixIdx, setSuffixIdx] = useState(0);

  if (!icon || suffixIdx >= ICON_SUFFIXES.length) {
    return (
      <div className="tech-icon relative flex flex-col items-center p-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: color + '18', border: `2px solid ${color}30` }}
        >
          <span
            className="text-xs font-bold"
            style={{ color }}
          >
            {name.slice(0, 4).toUpperCase()}
          </span>
        </div>
        <span className="text-xs text-[var(--color-muted-foreground)] mt-2 font-medium text-center">
          {name}
        </span>
      </div>
    );
  }

  const suffix = ICON_SUFFIXES[suffixIdx];
  const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-${suffix}.svg`;

  return (
    <div className="tech-icon relative flex flex-col items-center p-4">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[var(--color-muted)]">
        <img
          src={iconUrl}
          alt={name}
          className="w-8 h-8 object-contain"
          onError={() => setSuffixIdx((i) => i + 1)}
        />
      </div>
      <span className="text-xs text-[var(--color-muted-foreground)] mt-2 font-medium text-center">
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="techstack" className="py-20 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Tech Stack"
            subtitle="Tools and technologies I work with daily"
          />
        </AnimatedSection>

        <div className="space-y-12">
          {techStack.map((category) => (
            <AnimatedSection key={category.category} variants={staggerContainer}>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-4 px-2">
                {category.category}
              </h3>
              <GlassCard hover={false} className="p-4">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {category.items.map((tech, index) => (
                    <motion.div key={tech.name} variants={fadeUpVariants}>
                      <TechIcon name={tech.name} icon={tech.icon} color={tech.color} />
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
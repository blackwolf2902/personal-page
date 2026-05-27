import React from 'react';

export default function SectionHeading({ title, subtitle, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="accent-text">{title}</span>
      </h2>
      <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto mb-4" />
      {subtitle && (
        <p className="text-[var(--color-muted-foreground)] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
import React from 'react';

const PATTERNS = {
  dots:   { w: 16, h: 16,  child: <circle cx="2" cy="2" r="1.5" fill="currentColor" /> },
  grid:   { w: 24, h: 24,  child: <rect width="24" height="24" fill="none" stroke="currentColor" strokeWidth="0.75" /> },
  plus:   { w: 48, h: 48,  child: <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="1.25" fill="none" /> },
  diagonal:{ w: 32, h: 32, child: <line x1="0" y1="32" x2="32" y2="0" stroke="currentColor" strokeWidth="0.75" /> },
};

export default function BackgroundPattern({ enabled = true, type = 'dots' }) {
  if (!enabled) return null;

  const cfg = PATTERNS[type] || PATTERNS.dots;

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ zIndex: 0 }} aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full"
        style={{
          opacity: 0.4,
          color: 'var(--color-muted-foreground)',
          maskImage:
            'radial-gradient(ellipse 100% 90% at 50% 0%, black 45%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 100% 90% at 50% 0%, black 45%, transparent 75%)',
        }}
      >
        <defs>
          <pattern
            id="bg-pattern"
            width={cfg.w}
            height={cfg.h}
            patternUnits="userSpaceOnUse"
          >
            {cfg.child}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-pattern)" />
      </svg>
    </div>
  );
}

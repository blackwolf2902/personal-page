import React from 'react';

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`glass-card ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
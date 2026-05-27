import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import AnimatedSection, { staggerContainer, fadeUpVariants } from '../common/AnimatedSection.jsx';
import SectionHeading from '../common/SectionHeading.jsx';
import GlassCard from '../common/GlassCard.jsx';
import { socialLinks } from '../../data/socialLinks.js';

const iconMap = {
  Mail, Phone, Linkedin, Github,
};

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('message', formState.message);

      await fetch('https://formspree.io/f/xeedpdpv', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-[var(--color-muted)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading
            title="Let's Connect"
            subtitle="Ready to collaborate on innovative projects? Feel free to reach out!"
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection variants={staggerContainer}>
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => {
                const Icon = iconMap[link.icon];
                return (
                  <motion.div key={link.label} variants={fadeUpVariants}>
                    <a
                      href={link.href}
                      target={link.icon === 'Mail' || link.icon === 'Phone' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                    >
                      <GlassCard hover={true} className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center flex-shrink-0">
                          {Icon && <Icon className="w-5 h-5 text-[var(--color-accent)]" />}
                        </div>
                        <div>
                          <div className="font-medium text-[var(--color-foreground)] text-sm">
                            {link.value}
                          </div>
                          <div className="text-xs text-[var(--color-muted-foreground)]">
                            {link.label === 'Email' ? 'Drop me a line' :
                             link.label === 'Phone' ? 'Call me directly' :
                             link.label === 'LinkedIn' ? "Let's connect professionally" :
                             link.label === 'GitHub' ? 'Check out my code' :
                             'Connect with me'}
                          </div>
                        </div>
                      </GlassCard>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection variants={staggerContainer}>
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-4">
              Send a Message
            </h3>
            <GlassCard hover={false} className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="glass-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="glass-input"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    className="glass-input resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="accent-button w-full flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {status === 'loading' ? 'Sending...' :
                   status === 'success' ? 'Sent Successfully!' :
                   status === 'error' ? 'Error - Try Again' :
                   'Send Message'}
                </button>
              </form>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
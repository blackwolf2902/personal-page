import React, { useState, useRef, useEffect } from 'react';
import { profile } from '../../data/profile.js';
import { aboutText } from '../../data/about.js';
import { skillCategories } from '../../data/skills.js';

const COMMANDS = {
  help: () => [
    { type: 'output', text: 'Available commands:' },
    { type: 'output', text: '  whoami     - Who am I?' },
    { type: 'output', text: '  ls skills  - List my skill categories' },
    { type: 'output', text: '  cat about  - Read about me' },
    { type: 'output', text: '  contact    - Get my email' },
    { type: 'output', text: '  github     - Open my GitHub profile' },
    { type: 'output', text: '  clear      - Clear terminal' },
  ],
  whoami: () => [
    { type: 'output', text: `${profile.name} — ${profile.title}` },
    { type: 'output', text: profile.tagline },
  ],
  'ls skills': () => {
    const lines = skillCategories.map((c) => `  ${c.name}/ — ${c.skills.length} skills`);
    return [{ type: 'output', text: 'Skill Categories:' }, ...lines.map((l) => ({ type: 'output', text: l }))];
  },
  'cat about': () => aboutText.map((p) => ({ type: 'output', text: p })),
  contact: () => [{ type: 'output', text: `Email: ${profile.email}` }, { type: 'output', text: `Phone: ${profile.phone}` }],
  github: () => {
    window.open(profile.github, '_blank');
    return [{ type: 'output', text: 'Opening GitHub profile...' }];
  },
};

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome! Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState('');
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    const newEntries = [{ type: 'input', text: `$ ${trimmed}` }];

    if (trimmed === 'clear') {
      setHistory([{ type: 'output', text: 'Terminal cleared. Type "help" for commands.' }]);
      setInput('');
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      newEntries.push(...handler());
    } else {
      newEntries.push({ type: 'error', text: `Command not found: ${trimmed}. Type "help" for available commands.` });
    }

    setHistory((prev) => [...prev, ...newEntries]);
    setInput('');
  };

  return (
    <div
      className="w-full max-w-2xl mx-auto mt-8 rounded-xl overflow-hidden cursor-text"
      style={{
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
      }}
      onClick={focusInput}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-[var(--color-border)] bg-[var(--color-muted)]">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-xs text-[var(--color-muted-foreground)] ml-2 font-mono">terminal</span>
      </div>

      {/* Scrollable history */}
      <div
        ref={terminalRef}
        className="p-4 h-40 overflow-y-auto font-mono text-sm"
      >
        {history.map((entry, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap break-words ${
              entry.type === 'input'
                ? 'text-[var(--color-accent)]'
                : entry.type === 'error'
                ? 'text-red-400'
                : 'text-[var(--color-foreground)] opacity-80'
            }`}
          >
            {entry.text}
          </div>
        ))}
      </div>

      {/* Input area - always visible, not scrollable */}
      <div className="px-4 py-2">
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-[var(--color-accent)] mr-2 font-mono text-sm">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-[var(--color-foreground)] font-mono text-sm"
            aria-label="Terminal input"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}

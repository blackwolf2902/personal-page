# Arumugam N - Personal Portfolio

Modern glassmorphism portfolio with light/dark theme support, built with React, Tailwind CSS, and Framer Motion.

**Live:** [arumugam.qzz.io](https://arumugam.qzz.io/)

---

## Project Structure

```
src/
├── App.js                          # Main layout - import sections here
├── index.js                        # Entry point
├── index.css                       # CSS variables, theme tokens, glass utilities
│
├── context/
│   └── ThemeContext.js             # Theme persistence (localStorage + system pref)
│
├── hooks/
│   └── useScrollSection.js         # Scroll-spy for navbar active state
│
├── components/
│   ├── Navbar/Navbar.jsx           # Glass nav + mobile slide-in drawer
│   ├── ThemeToggle/ThemeToggle.jsx # Sun/Moon toggle with animation
│   ├── Hero/Hero.jsx               # Gradient mesh bg + typing animation
│   ├── About/About.jsx             # Bio + stat cards
│   ├── Skills/Skills.jsx           # Categorized skills with progress bars
│   ├── TechStack/TechStack.jsx     # Visual tech icon grid
│   ├── Projects/Projects.jsx       # Project cards (bento-style)
│   ├── Experience/Experience.jsx   # Work experience timeline
│   ├── Education/Education.jsx     # Academic background
│   ├── Achievements/Achievements.jsx # Awards + certifications
│   ├── StatsCounter/StatsCounter.jsx # Animated count-up numbers
│   ├── Contact/Contact.jsx         # Contact form + links
│   ├── Footer/Footer.jsx           # Minimal footer
│   └── common/                     # Reusable components
│       ├── AnimatedSection.jsx
│       ├── SectionHeading.jsx
│       └── GlassCard.jsx
│
└── data/                           # Edit these files to update content
    ├── profile.js                  # Name, title, social links
    ├── about.js                    # Bio text + stats
    ├── skills.js                   # Skills with levels and categories
    ├── techStack.js                # Tech stack icons and names
    ├── projects.js                 # Project listings
    ├── experiences.js              # Work experience
    ├── education.js                # Education history
    ├── achievements.js             # Achievements + certifications
    └── socialLinks.js              # Contact links
```

---

## Features

- **Light/Dark theme** — auto-detects system preference, manual toggle with persistence
- **Glassmorphism design** — frosted glass cards, backdrop blur, smooth transitions
- **Awwwards-inspired animations** — section reveal, stagger cards, count-up counters, typing effect
- **Fully responsive** — mobile-first with slide-in drawer navigation
- **Scalable data layer** — add a skill, project, or experience by editing one data file
- **Contact form** — powered by Formspree (no backend needed)
- **GitHub Pages deployment** — with custom domain via CNAME

---

## Quick Start

```bash
git clone https://github.com/blackwolf2902/personal-page.git
cd frontend
yarn install
yarn start
```

Runs on `http://localhost:3000`.

---

## How to Add/Update Content

All content lives in `src/data/`. Just edit the relevant file and redeploy.

### Add a New Skill

Edit `src/data/skills.js`:

```js
{
  name: "Rust",
  category: "Languages",
  level: 60,
  color: "from-orange-400 to-orange-600",
},
```

### Add a New Tech Stack Icon

Edit `src/data/techStack.js`. Use icon names from [devicon](https://devicon.dev/):

```js
{ name: "Kubernetes", icon: "kubernetes", color: "#326CE5" },
```

### Add a Project

Edit `src/data/projects.js`:

```js
{
  id: 6,
  title: "New Project",
  description: "Description here",
  tech: ["Python", "React"],
  github: "https://github.com/username/repo",
  image: "/images/project.png",
  featured: false,
  patent: false,
},
```

### Add Experience / Education

Edit `src/data/experiences.js` or `src/data/education.js`.

### Update Resume

Replace `public/resume.pdf` with your updated PDF, then rebuild and redeploy.

---

## Theme Customization

All theme colors are CSS custom properties in `src/index.css`.

### Light Theme

```css
:root {
  --color-background: #fafafa;
  --color-foreground: #09090b;
  --color-accent: #2563eb;
  --color-gradient-start: #2563eb;
  --color-gradient-end: #7c3aed;
}
```

### Dark Theme

```css
[data-theme="dark"] {
  --color-background: #09090b;
  --color-foreground: #fafafa;
  --color-accent: #60a5fa;
  --color-gradient-start: #06b6d4;
  --color-gradient-end: #a855f7;
}
```

---

## Contact Form

Uses [Formspree](https://formspree.io) for handling form submissions. To set up:

1. Create a free account at formspree.io
2. Create a form endpoint
3. Update the URL in `src/components/Contact/Contact.jsx`:

```js
await fetch('https://formspree.io/f/YOUR_FORM_ID', { ... })
```

---

## Deployment (GitHub Pages)

```bash
yarn build
yarn deploy
```

The site is served at `https://arumugam.qzz.io` via CNAME configuration.

### First-time setup

1. Go to GitHub repo → Settings → Pages
2. Set source to `gh-pages` branch
3. Add `arumugam.qzz.io` as custom domain (handled by CNAME file in `public/`)

---

## Connect

- **Email:** nmaru2904@gmail.com
- **LinkedIn:** [arumugam-nallasivan](https://www.linkedin.com/in/arumugam-nallasivan/)
- **GitHub:** [blackwolf2902](https://github.com/blackwolf2902)

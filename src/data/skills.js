export const skills = [
  {
    name: "Python",
    category: "Languages",
    level: 90,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "JavaScript",
    category: "Languages",
    level: 75,
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "HTML/CSS",
    category: "Languages",
    level: 100,
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Django",
    category: "Frameworks",
    level: 90,
    color: "from-green-400 to-green-600",
  },
  {
    name: "Flask",
    category: "Frameworks",
    level: 85,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "React",
    category: "Frameworks",
    level: 80,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Machine Learning",
    category: "AI/ML",
    level: 80,
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "TensorFlow",
    category: "AI/ML",
    level: 75,
    color: "from-orange-400 to-red-500",
  },
  {
    name: "PyTorch",
    category: "AI/ML",
    level: 70,
    color: "from-red-400 to-red-600",
  },
  {
    name: "OpenCV",
    category: "AI/ML",
    level: 75,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Computer Vision",
    category: "AI/ML",
    level: 70,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Generative AI",
    category: "AI/ML",
    level: 70,
    color: "from-violet-400 to-violet-600",
  },
  {
    name: "AI Assisted Tools (Claude, Codex, etc.)",
    category: "AI/ML",
    level: 85,
    color: "from-violet-400 to-violet-600",
  },
  {
    name: "SQL",
    category: "Database",
    level: 85,
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: 50,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Git",
    category: "Tools",
    level: 100,
    color: "from-orange-400 to-red-500",
  },
  {
    name: "Docker",
    category: "Tools",
    level: 70,
    color: "from-blue-400 to-cyan-500",
  },
];

export const skillCategories = [
  { name: "Languages", skills: skills.filter(s => s.category === "Languages") },
  { name: "Frameworks", skills: skills.filter(s => s.category === "Frameworks") },
  { name: "AI/ML", skills: skills.filter(s => s.category === "AI/ML") },
  { name: "Database", skills: skills.filter(s => s.category === "Database") },
  { name: "Tools", skills: skills.filter(s => s.category === "Tools") },
];
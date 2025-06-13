import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code,
  Database,
  Brain,
  GitBranch,
  Mail,
  ExternalLink,
  Download,
  Terminal,
  Cpu,
  Zap,
  Globe,
  Github,
  Linkedin,
  ChevronDown,
  Server,
  Cloud,
  BarChart3,
  Award,
  MapPin,
  Phone,
  Bot,
  Notebook,
  FolderCode,
  Camera,
  Leaf
} from 'lucide-react';
import './App.css'; // Import your CSS file

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', icon: Code, level: 90, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Django/Flask', icon: Server, level: 90, color: 'from-green-400 to-green-600' },
    { name: 'Machine Learning', icon: Brain, level: 80, color: 'from-purple-400 to-purple-600' },
    { name: 'OpenCV/Computer Vision', icon: Camera, level: 70, color: 'from-blue-400 to-blue-600' },
    { name: 'TensorFlow/PyTorch', icon: Cpu, level: 75, color: 'from-red-400 to-red-600' },
    { name: 'SQL/MongoDB', icon: Database, level: 80, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Front-End Development', icon: FolderCode, level: 100, color: 'from-pink-400 to-pink-600' },
    { name: 'Git/Version Control', icon: GitBranch, level: 85, color: 'from-orange-400 to-orange-600' }
  ];

  const projects = [
    {
      title: 'MedBot - AI Medicinal Plant Detection',
      description: 'Autonomous robot using NVIDIA Jetson Nano to identify medicinal plants in remote areas with real-time image classification and deep learning techniques.',
      tech: ['Python', 'TensorFlow', 'Jetson SDK', 'OpenCV', 'Computer Vision'],
      github: '#',
      demo: '#',
      image: 'images/pm-bot.png',
      featured: true,
      patent: true
    },
    {
      title: 'Voice Cloning AI System',
      description: 'Advanced voice cloning interface using TortoiseTTS library with machine learning techniques to transform and clone voices with high fidelity.',
      tech: ['Python', 'TortoiseTTS', 'JupyterLab', 'Audio Processing'],
      github: 'https://github.com/blackwolf2902/Voice-Cloning-AI',
      demo: '#',
      image: 'images/voice-ai.jpg',
    },
    {
      title: 'Org-Assist Chatbot',
      description: 'Intelligent organizational assistant web application with NLP capabilities for information queries and complaint management through conversational AI.',
      tech: ['Python', 'MongoDB', 'NLP', 'Flask', 'Natural Language Processing'],
      github: 'https://github.com/blackwolf2902/Org-Assist',
      demo: '#',
      image: 'images/orgAssist.png',
      featured: true
    },
    {
      title: 'Heritage Monument Detection',
      description: 'Machine Learning web application using Streamlit and YOLOv8 for detecting heritage monuments from satellite images with high accuracy.',
      tech: ['Python', 'YOLOv8', 'Streamlit', 'Computer Vision', 'Satellite Imagery'],
      github: 'https://github.com/blackwolf2902/Heritage-Monument-Detection',
      demo: '#',
      image: 'images/hm-bot.png'
    }
  ];

  const experiences = [
    {
      title: 'Python Full Stack Developer',
      company: 'Qspiders Campus Connect',
      location: 'Chennai, Tamil Nadu',
      period: 'January 2025 - May 2025',
      type: 'Internship',
      responsibilities: [
        'Developed real-time web applications using Python, Django, HTML, CSS and JavaScript',
        'Created RESTful APIs and integrated frontend-backend components for dynamic functionality',
        'Gained hands-on experience with MySQL, version control (Git) and deployment practices'
      ]
    },
    {
      title: 'Machine Learning Intern',
      company: 'Quantanics Private Limited',
      location: 'Madurai, Tamil Nadu',
      period: 'January 2024 - March 2024',
      type: 'Internship',
      responsibilities: [
        'Collaborated with 3 interns and senior developers to implement ML solutions',
        'Led development of Heritage Monument detection web-app using Streamlit and YOLOv8',
        'Worked on autonomous robot creation using NVIDIA Jetson Nano for medicinal plant identification'
      ]
    }
  ];

  const achievements = [
    {
      title: 'First Prize - Srishti International Project Exhibition',
      date: 'March 2023',
      icon: Award,
      description: 'Won first place for innovative MedBot project at international exhibition'
    },
    {
      title: 'First Prize - Internal Hackathon',
      date: 'October 2023',
      icon: Award,
      description: 'Software Domain winner at Francis Xavier Engineering College hackathon'
    },
    {
      title: 'Published Patent',
      date: 'January 2024',
      icon: Award,
      description: '"MedBot: An AI-integrated Rover for Medicinal Plant Detection"'
    }
  ];

  const certifications = [
    {
      title: 'Natural Language Processing Fundamentals',
      issuer: 'NPTEL',
      date: 'October 2023',
      description: 'Completed comprehensive NLP course covering tokenization, sentiment analysis, and model building'
    },
    {
      title: 'AI Bot Development',
      issuer: 'NeubAItics Pvt. Ltd.',
      date: 'November 2022',
      description: 'Hands-on workshop on chatbot architecture, design, and web integration'
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            >
              &lt;Arumugam.N /&gt;
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors duration-300 hover:text-cyan-400 ${activeSection === item.toLowerCase() ? 'text-cyan-400' : 'text-gray-300'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/90"></div>

        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Terminal className="text-cyan-400 w-6 h-6" />
              <span className="text-cyan-400 text-sm font-mono">System Ready</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
                Arumugam N
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-2">
              Python Full Stack Developer
            </div>
            <div className="text-lg text-cyan-400 font-mono">
              &amp; Machine Learning Engineer
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building intelligent AI solutions, crafting scalable web applications,
            and developing innovative robotics projects with Python and Machine Learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              View My Work
              <ExternalLink className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="..."
            >
              <button className="border border-cyan-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25">
                <Download className="inline mr-2 w-4 h-4" />
                View Resume

              </button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="w-8 h-8 text-cyan-400 mx-auto" />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Computer Science & Business Systems graduate from Francis Xavier Engineering College
                  with a CGPA of 8.6. My expertise lies in developing innovative AI solutions and building robust
                  web applications using Python and modern frameworks.
                </p>
                <p>
                  My journey includes creating autonomous robots for medicinal plant detection, developing voice
                  cloning systems, and building intelligent chatbots. I've successfully led teams in hackathons,
                  published patents, and gained recognition at international exhibitions.
                </p>
                <p>
                  Currently, I'm expanding my full-stack development skills while working on cutting-edge projects
                  that combine AI, computer vision, and web technologies to solve real-world problems.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center text-cyan-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">Tirunelveli, Tamil Nadu</span>
                  </div>
                  <div className="flex items-center text-cyan-400">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="text-gray-300">Patent Holder</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Code, title: '5+', subtitle: 'Projects Completed' },
                { icon: Brain, title: '3+', subtitle: 'AI Models Deployed' },
                { icon: Award, title: '3', subtitle: 'Major Awards Won' },
                { icon: Notebook, title: '8.6', subtitle: 'CGPA Achieved' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.title}</div>
                  <div className="text-sm text-gray-400">{stat.subtitle}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Technologies and frameworks I use to bring innovative ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Innovative AI and ML projects showcasing my expertise in cutting-edge technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group bg-gray-800/50 rounded-xl overflow-hidden border backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 ${project.featured ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-cyan-500/20'
                  }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-600 px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                  {project.patent && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1 rounded-full text-xs font-bold">
                      Patent Filed
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    {/* <a
                                            href={project.demo}
                                            className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Demo
                                        </a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-8 rounded-xl border border-cyan-500/20 backdrop-blur-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center text-cyan-400 mb-1">
                      <span className="font-semibold">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-300 font-medium">{exp.period}</div>
                    <div className="text-cyan-400 text-sm">{exp.type}</div>
                  </div>
                </div>
                <ul className="text-gray-300 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Achievements & Certifications
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Major Achievements</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20"
                  >
                    <achievement.icon className="w-8 h-8 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{achievement.title}</h4>
                      <p className="text-cyan-400 text-sm font-medium mb-2">{achievement.date}</p>
                      <p className="text-gray-300 text-sm">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20"
                  >
                    <Award className="w-8 h-8 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{cert.title}</h4>
                      <p className="text-cyan-400 text-sm font-medium mb-2">{cert.issuer} - {cert.date}</p>
                      <p className="text-gray-300 text-sm">{cert.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-300 text-lg">
              I am always eager to learn and grow, constantly seeking new challenges and opportunities to innovate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to collaborate on innovative projects? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:nmaru2904@gmail.com"
                    className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        nmaru2904@gmail.com
                      </div>
                      <div className="text-gray-400 text-sm">Drop me a line</div>
                    </div>
                  </a>
                  <a
                    href="tel:+918903148273"
                    className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <Phone className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        +91 89031 48273
                      </div>
                      <div className="text-gray-400 text-sm">Call me directly</div>
                    </div>
                  </a>
                  <a
                    href="https://linkedin.com/in/arumugam-nallasivan"
                    className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-gray-400 text-sm">Let's connect professionally</div>
                    </div>
                  </a>
                  <a
                    href="https://github.com/blackwolf2902"
                    className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-cyan-400 mr-4" />
                    <div>
                      <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-gray-400 text-sm">Check out my code</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-white placeholder-gray-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCode,
  FaNpm,
  FaSass,
  FaBootstrap,
  FaDocker
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiTypescript,
  SiPostman,
  SiVercel,
  SiRedux
} from 'react-icons/si';
import styles from './Skills.module.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    {
      name: 'React.js',
      icon: <FaReact />,
      description: 'Building interactive UIs with hooks, context, and modern patterns.',
      level: 95,
      category: 'Frontend',
      color: '#61DAFB'
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs />,
      description: 'SSR, SSG, and API routes for production-grade React applications.',
      level: 90,
      category: 'Frontend',
      color: '#000000'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      description: 'Type-safe development for maintainable and scalable codebases.',
      level: 88,
      category: 'Frontend',
      color: '#3178C6'
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare />,
      description: 'ES6+, async programming, and modern JavaScript features.',
      level: 95,
      category: 'Frontend',
      color: '#F7DF1E'
    },
    {
      name: 'HTML5 & CSS3',
      icon: <FaHtml5 />,
      description: 'Semantic markup and modern CSS for responsive designs.',
      level: 98,
      category: 'Frontend',
      color: '#E34F26'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      description: 'Utility-first CSS framework for rapid UI development.',
      level: 92,
      category: 'Frontend',
      color: '#06B6D4'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      description: 'Building scalable backend services and RESTful APIs.',
      level: 90,
      category: 'Backend',
      color: '#339933'
    },
    {
      name: 'Express.js',
      icon: <SiExpress />,
      description: 'Fast, minimalist web framework for Node.js applications.',
      level: 88,
      category: 'Backend',
      color: '#000000'
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb />,
      description: 'NoSQL database design, aggregation, and optimization.',
      level: 85,
      category: 'Database',
      color: '#47A248'
    },
    {
      name: 'SQL',
      icon: <FaDatabase />,
      description: 'Relational database design and complex query optimization.',
      level: 80,
      category: 'Database',
      color: '#4479A1'
    },
    {
      name: 'Git & GitHub',
      icon: <FaGitAlt />,
      description: 'Version control, branching strategies, and team collaboration.',
      level: 93,
      category: 'Tools',
      color: '#F05032'
    },
    {
      name: 'Figma',
      icon: <FaFigma />,
      description: 'UI/UX design, prototyping, and design system creation.',
      level: 78,
      category: 'Design',
      color: '#F24E1E'
    },
    {
      name: 'Redux',
      icon: <SiRedux />,
      description: 'State management for complex React applications.',
      level: 85,
      category: 'Frontend',
      color: '#764ABC'
    },
    {
      name: 'Postman',
      icon: <SiPostman />,
      description: 'API testing, documentation, and collaboration.',
      level: 90,
      category: 'Tools',
      color: '#FF6C37'
    },
    {
      name: 'Vercel',
      icon: <SiVercel />,
      description: 'Deployment and hosting for modern web applications.',
      level: 88,
      category: 'Tools',
      color: '#000000'
    },
    {
      name: 'Docker',
      icon: <FaDocker />,
      description: 'Containerization for consistent development environments.',
      level: 75,
      category: 'Tools',
      color: '#2496ED'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Design', 'Tools'];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className={styles.skillsSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>What I Know</span>
          <h2 className={styles.title}>Skills & Technologies</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionDescription}>
            A comprehensive toolkit of modern technologies I use to build exceptional digital experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className={styles.categoryFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryBtn} ${
                activeCategory === category ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={activeCategory}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div 
                className={styles.skillIconWrapper}
                style={{ 
                  background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)` 
                }}
              >
                <div 
                  className={styles.skillIcon}
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
              </div>
              
              <div className={styles.skillContent}>
                <div className={styles.skillHeader}>
                  <h4 className={styles.skillName}>{skill.name}</h4>
                  <span 
                    className={styles.categoryBadge}
                    style={{ 
                      background: `${skill.color}20`,
                      color: skill.color 
                    }}
                  >
                    {skill.category}
                  </span>
                </div>
                
                <p className={styles.skillDescription}>{skill.description}</p>
                
                <div className={styles.progressContainer}>
                  <div className={styles.progressInfo}>
                    <span className={styles.proficiencyLabel}>Proficiency</span>
                    <span className={styles.progressPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <motion.div
                      className={styles.progressFill}
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` 
                      }}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.3 + index * 0.05 }}
                    />
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div 
                className={styles.hoverGlow}
                style={{ background: `${skill.color}15` }}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          className={styles.techSummary}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className={styles.summaryCard}>
            <div className={styles.summaryIcon}>
              <FaCode />
            </div>
            <div className={styles.summaryContent}>
              <h3>Full-Stack Expertise</h3>
              <p>
                Proficient in the complete development cycle - from design to deployment. 
                I leverage modern frameworks and best practices to deliver production-ready 
                applications that scale.
              </p>
            </div>
          </div>
          
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h4>16+</h4>
              <p>Technologies</p>
            </div>
            <div className={styles.statCard}>
              <h4>6</h4>
              <p>Categories</p>
            </div>
            <div className={styles.statCard}>
              <h4>90%</h4>
              <p>Avg. Proficiency</p>
            </div>
            <div className={styles.statCard}>
              <h4>∞</h4>
              <p>Learning More</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>
    </section>
  );
};

export default Skills;
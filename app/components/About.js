'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaLightbulb, 
  FaRocket, 
  FaUsers, 
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeart,
  FaCode
} from 'react-icons/fa';
import styles from './About.module.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React & Next.js', level: 92 },
    { name: 'Node.js & Express', level: 88 },
    { name: 'MongoDB & SQL', level: 85 },
    { name: 'UI/UX Design', level: 80 },
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation First',
      description: 'Always exploring cutting-edge technologies and methodologies to deliver exceptional solutions.',
    },
    {
      icon: <FaRocket />,
      title: 'Quality Driven',
      description: 'Writing clean, maintainable code with focus on performance and best practices.',
    },
    {
      icon: <FaUsers />,
      title: 'Client-Centric',
      description: 'Building strong relationships through clear communication and understanding client needs.',
    },
    {
      icon: <FaHeart />,
      title: 'Passionate',
      description: 'Genuinely love what I do and committed to continuous learning and improvement.',
    },
  ];

  return (
    <section id="about" className={styles.aboutSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Get To Know More</span>
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.titleUnderline}></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className={styles.contentGrid}>
          {/* Left Side - Story & Info */}
          <motion.div
            className={styles.leftContent}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Personal Info Cards */}
            <motion.div className={styles.infoCards} variants={itemVariants}>
              <div className={styles.infoCard}>
                <FaMapMarkerAlt className={styles.infoIcon} />
                <div>
                  <h4>Location</h4>
                  <p>Anupgarh, Rajasthan</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <FaCalendarAlt className={styles.infoIcon} />
                <div>
                  <h4>Experience</h4>
                  <p>3+ Years</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <FaGraduationCap className={styles.infoIcon} />
                <div>
                  <h4>Education</h4>
                  <p>B.Tech in CSE</p>
                </div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div className={styles.story} variants={itemVariants}>
              <h3>My Journey</h3>
              <p>
                I started my development journey with a curiosity about how websites work. 
                That curiosity transformed into a passion for creating digital experiences 
                that solve real-world problems.
              </p>
              <p>
                Based in Anupgarh, India, I've had the privilege of working with diverse 
                clients globally, turning their visions into reality. My expertise lies in 
                the MERN stack, where I combine powerful backend architecture with intuitive 
                frontend design.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or mentoring aspiring developers. I believe in 
                lifelong learning and staying ahead of industry trends.
              </p>
            </motion.div>

            {/* Skills Progress Bars */}
            <motion.div className={styles.skillsSection} variants={itemVariants}>
              <h3>Technical Expertise</h3>
              {skills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillHeader}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <motion.div
                      className={styles.skillProgress}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Values */}
          <motion.div
            className={styles.rightContent}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className={styles.valuesGrid} variants={itemVariants}>
              <h3 className={styles.valuesTitle}>What Drives Me</h3>
              <div className={styles.valuesCards}>
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className={styles.valueCard}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotateZ: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={styles.valueIcon}>{value.icon}</div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Fact Box */}
            <motion.div className={styles.funFact} variants={itemVariants}>
              <div className={styles.funFactIcon}>
                <FaCode />
              </div>
              <div className={styles.funFactContent}>
                <h4>Fun Fact</h4>
                <p>
                  I've consumed over <strong>500+ cups of coffee</strong> while debugging 
                  code, and I consider it a crucial part of my development stack! ☕
                </p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div className={styles.ctaBox} variants={itemVariants}>
              <h3>Let's Build Something Amazing</h3>
              <p>
                I'm always excited to work on innovative projects and collaborate 
                with passionate people. Let's turn your ideas into reality!
              </p>
              <div className={styles.ctaButtons}>
                <a href="#contact" className={styles.btnPrimary}>
                  Get In Touch
                </a>
                <a href="/resume.pdf" className={styles.btnSecondary} download>
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className={styles.decorativeCircle1}></div>
      <div className={styles.decorativeCircle2}></div>
    </section>
  );
};

export default About;
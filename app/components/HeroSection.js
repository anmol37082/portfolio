'use client';

import { useState, useEffect, useCallback } from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const [greeting, setGreeting] = useState('Hello');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'grab',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1,
          },
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* Animated Background Gradient */}
      <div className={styles.gradientBg}></div>

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className={styles.particles}
      />

      {/* Floating Elements */}
      <div className={styles.floatingShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <div className={styles.heroContainer}>
        {/* Hero Content */}
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.badge} variants={itemVariants}>
            <span className={styles.badgeDot}></span>
            Available for Freelance
          </motion.div>

          <motion.h1 variants={itemVariants}>
            {greeting}, I'm <span className={styles.name}>Anmol</span>
            <span className={styles.wave}>👋</span>
          </motion.h1>

          <motion.h2 variants={itemVariants}>
            <ReactTyped
              strings={[
                'MERN Stack Developer',
                'Full-Stack Engineer',
                'UI/UX Enthusiast',
                'Problem Solver',
                'Tech Innovator',
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className={styles.typedRole}
              showCursor={true}
              cursorChar="|"
            />
          </motion.h2>

          <motion.p variants={itemVariants} className={styles.description}>
            I craft exceptional digital experiences through clean code and innovative design.
            Specializing in building scalable web applications that make a difference.
          </motion.p>

          <motion.div className={styles.stats} variants={itemVariants}>
            <div className={styles.stat}>
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.stat}>
              <h3>50+</h3>
              <p>Projects Done</p>
            </div>
            <div className={styles.stat}>
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </motion.div>

          <motion.div className={styles.heroButtons} variants={itemVariants}>
            <a href="#projects" className={`${styles.btn} ${styles.primary}`}>
              View Projects
            </a>
            <a href="#contact" className={`${styles.btn} ${styles.secondary}`}>
              Hire Me
            </a>
            <a href="/resume.pdf" className={`${styles.btn} ${styles.download}`} download>
              <FaDownload /> Resume
            </a>
          </motion.div>

          <motion.div className={styles.heroSocials} variants={itemVariants}>
            <a
              href="https://github.com/anmol37082"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/anmol"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:singanmol714@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.glowEffect}></div>
            <img src="/profile.png" alt="Anmol - Full Stack Developer" />
            <div className={styles.techStack}>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      {!isMobile && (
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={scrollToProjects}
        >
          <span>Explore My Work</span>
          <FaArrowDown className={styles.arrowIcon} />
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
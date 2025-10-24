'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${sticky ? styles.sticky : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo} onClick={scrollToTop}>
          <span className={styles.logoText}>Anmol</span>
          <span className={styles.logoDot}>.</span>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className={styles.rightActions}>
          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <a href="/resume.pdf" download className={styles.downloadBtn}>
              Download CV
            </a>
            <a href="#contact" className={styles.hireBtn}>
              Hire Me
            </a>
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {/* Social Icons (Desktop) */}
          <div className={styles.socialIcons}>
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
            <a 
              href="https://twitter.com/anmol" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>

          {/* Hamburger Menu */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(false)}
      >
        <nav className={styles.mobileNav} onClick={(e) => e.stopPropagation()}>
          <a href="#home" onClick={handleNavClick}>Home</a>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
          
          <div className={styles.mobileActions}>
            <a href="/resume.pdf" download className={styles.downloadBtn} onClick={handleNavClick}>
              Download CV
            </a>
            <a href="#contact" className={styles.hireBtn} onClick={handleNavClick}>
              Hire Me
            </a>
          </div>

          <div className={styles.mobileSocial}>
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
            <a 
              href="https://twitter.com/anmol" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
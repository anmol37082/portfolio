"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaHeart
} from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Awards', href: '#awards' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/anmol37082',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/anmol37082',
      color: '#0077B5'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/anmol',
      color: '#1DA1F2'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:singanmol714@gmail.com',
      color: '#EA4335'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <motion.div
          className={styles.mainContent}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div className={styles.brandSection} variants={itemVariants}>
            <h3 className={styles.brandName}>Anmol Singh</h3>
            <p className={styles.brandTagline}>
              MERN Stack Developer & Full-Stack Enthusiast
            </p>
            <p className={styles.brandDescription}>
              Building innovative web solutions with modern technologies.
              Passionate about creating exceptional user experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className={styles.linksSection} variants={itemVariants}>
            <h4>Quick Links</h4>
            <div className={styles.linksGrid}>
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className={styles.contactSection} variants={itemVariants}>
            <h4>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaEnvelope />
                <a href="mailto:singanmol714@gmail.com">singanmol714@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <FaPhone />
                <a href="tel:+919982667732">+91 9982667732</a>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div className={styles.socialSection} variants={itemVariants}>
            <h4>Follow Me</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ '--social-color': social.color }}
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className={styles.bottomBar}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className={styles.copyright}>
            <p>
              © {currentYear} Anmol Singh. All rights reserved.
            </p>
            <p className={styles.madeWith}>
              Made with <FaHeart className={styles.heart} /> using Next.js & React
            </p>
          </div>

          <div className={styles.bottomLinks}>
            <a href="#privacy" className={styles.bottomLink}>Privacy Policy</a>
            <span className={styles.separator}>•</span>
            <a href="#terms" className={styles.bottomLink}>Terms of Service</a>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className={styles.backToTop}
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowUp />
      </motion.button>

      {/* Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
      </div>
    </footer>
  );
};

export default Footer;

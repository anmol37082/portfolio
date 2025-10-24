"use client";

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner
} from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [errors, setErrors] = useState({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate API call (replace with your actual API endpoint)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'Anupgarh, Rajasthan, India',
      link: null
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'singanmol714@gmail.com',
      link: 'mailto:singanmol714@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+91 9982667732',
      link: 'tel:+919982667732'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/anmol37082',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/anmol37082',
      color: '#0077B5'
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/anmol',
      color: '#1DA1F2'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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

  return (
    <section id="contact" className={styles.contactSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Let's Connect</span>
          <h2 className={styles.title}>Get In Touch</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionDescription}>
            Have a project in mind or just want to chat? I'd love to hear from you.
            Drop me a message and I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Contact Info */}
          <motion.div
            className={styles.contactInfo}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div className={styles.infoHeader} variants={itemVariants}>
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these channels</p>
            </motion.div>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                className={styles.infoCard}
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <div className={styles.infoContent}>
                  <h4>{item.title}</h4>
                  {item.link ? (
                    <a href={item.link}>{item.content}</a>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}

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

          {/* Contact Form */}
          <motion.div
            className={styles.contactForm}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.formHeader}>
              <h3>Send Me a Message</h3>
              <p>I'll respond within 24 hours</p>
            </div>

            {formStatus.submitted && (
              <motion.div
                className={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <FaCheckCircle />
                <p>Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={errors.name ? styles.error : ''}
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">
                    Email Address <span>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={errors.email ? styles.error : ''}
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">
                  Subject <span>*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={errors.subject ? styles.error : ''}
                />
                {errors.subject && (
                  <span className={styles.errorMessage}>{errors.subject}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">
                  Message <span>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className={errors.message ? styles.error : ''}
                ></textarea>
                {errors.message && (
                  <span className={styles.errorMessage}>{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={formStatus.submitting}
              >
                {formStatus.submitting ? (
                  <>
                    <FaSpinner className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Availability Badge */}
            <motion.div className={styles.availabilityBadge} variants={itemVariants}>
              <div className={styles.statusDot}></div>
              <div>
                <h4>Available for Freelance</h4>
                <p>Open to new opportunities and collaborations</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
      </div>
    </section>
  );
};

export default Contact;
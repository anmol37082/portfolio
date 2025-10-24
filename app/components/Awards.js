"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTrophy, FaCalendarAlt, FaAward, FaMedal } from 'react-icons/fa';
import styles from './Awards.module.css';

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      id: 1,
      title: "Hackathon Winner 2024",
      organization: "Sharda College, Anupgarh",
      date: "Dec 2024",
      description: "Led a team to build a real-time food ordering app in 24 hours using MERN stack.",
      icon: <FaTrophy />,
      category: "Competition"
    },
    {
      id: 2,
      title: "Best Full-Stack Project Award",
      organization: "The Skill Boost, Chandigarh",
      date: "Apr 2025",
      description: "Recognized for building an interactive restaurant management system using React, Node, and MongoDB.",
      icon: <FaAward />,
      category: "Project Excellence"
    },
    {
      id: 3,
      title: "MERN Stack Excellence Certificate",
      organization: "CodeAcademy Online",
      date: "Mar 2025",
      description: "Completed advanced MERN stack development course with distinction.",
      icon: <FaMedal />,
      category: "Certification"
    },
    {
      id: 4,
      title: "Top Performer in Web Development",
      organization: "TechFest 2024",
      date: "Nov 2024",
      description: "Ranked among top 5% participants in web development challenge.",
      icon: <FaAward />,
      category: "Achievement"
    },
    {
      id: 5,
      title: "Open Source Contributor",
      organization: "GitHub Community",
      date: "Ongoing",
      description: "Active contributor to open source MERN stack projects and libraries.",
      icon: <FaTrophy />,
      category: "Community"
    },
    {
      id: 6,
      title: "Scholarship Recipient",
      organization: "Digital India Initiative",
      date: "Jan 2025",
      description: "Received scholarship for excellence in full-stack development skills.",
      icon: <FaMedal />,
      category: "Academic"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="awards" className={styles.awardsSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Recognition & Achievements</span>
          <h2 className={styles.title}>Awards & Honors</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionDescription}>
            Celebrating milestones and recognition received throughout my journey in web development and technology.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <motion.div
          className={styles.awardsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {awards.map((award) => (
            <motion.div
              key={award.id}
              className={styles.awardCard}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {award.icon}
                </div>
                <div className={styles.category}>
                  {award.category}
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <div className={styles.organization}>{award.organization}</div>

                <div className={styles.date}>
                  <FaCalendarAlt />
                  <span>{award.date}</span>
                </div>

                <p className={styles.description}>{award.description}</p>
              </div>

              <div className={styles.cardGlow}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>
    </section>
  );
};

export default Awards;

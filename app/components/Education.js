'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaCalendarAlt, FaAward } from 'react-icons/fa';
import styles from './Education.module.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const educationData = [
    {
      degree: 'Bachelor of Science (Computer Science)',
      institution: 'Sharda College, Anupgarh',
      duration: '2022 – 2025',
      highlights: 'Learned core programming, database management, and web technologies. Developed multiple React + Express projects as part of coursework.',
      type: 'degree'
    },
    {
      degree: 'MERN Stack Development Course',
      institution: 'The Skill Boost, Chandigarh',
      duration: '2024',
      highlights: 'Completed full MERN training including CRUD apps, authentication, and deployment on Render/Vercel.',
      type: 'certification'
    }
  ];

  return (
    <section id="education" className={styles.educationSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Academic Background</span>
          <h2 className={styles.title}>Education</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionDescription}>
            My educational journey and certifications that shaped my technical expertise.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className={styles.educationTimeline}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className={styles.educationCard}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className={styles.cardIcon}>
                {item.type === 'degree' ? <FaGraduationCap /> : <FaAward />}
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.degree}>{item.degree}</h3>
                <div className={styles.institution}>
                  <FaSchool className={styles.icon} />
                  <span>{item.institution}</span>
                </div>
                <div className={styles.duration}>
                  <FaCalendarAlt className={styles.icon} />
                  <span>{item.duration}</span>
                </div>
                <p className={styles.highlights}>{item.highlights}</p>
              </div>

              {/* Timeline Connector */}
              {index < educationData.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
      </div>
    </section>
  );
};

export default Education;

"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCalendarAlt, FaTag, FaArrowRight } from 'react-icons/fa';
import styles from './Blogs.module.css';

const Blogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const blogs = [
    {
      id: 1,
      title: "How to Build a MERN Stack App from Scratch",
      excerpt: "Step-by-step guide to building a complete full-stack web application using MERN technologies.",
      date: "Oct 2025",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      thumbnail: null // Optional thumbnail
    },
    {
      id: 2,
      title: "Mastering React Hooks: A Complete Guide",
      excerpt: "Learn how to use React Hooks effectively to manage state and side effects in your applications.",
      date: "Sep 2025",
      tags: ["React", "JavaScript", "Hooks"],
      link: "#",
      thumbnail: null
    },
    {
      id: 3,
      title: "Optimizing Performance in Next.js Applications",
      excerpt: "Tips and techniques to improve the performance of your Next.js apps for better user experience.",
      date: "Aug 2025",
      tags: ["Next.js", "Performance", "React"],
      link: "#",
      thumbnail: null
    },
    {
      id: 4,
      title: "Building Responsive UIs with CSS Grid and Flexbox",
      excerpt: "A comprehensive guide to creating flexible and responsive layouts using modern CSS techniques.",
      date: "Jul 2025",
      tags: ["CSS", "Responsive Design", "Frontend"],
      link: "#",
      thumbnail: null
    },
    {
      id: 5,
      title: "Introduction to TypeScript for React Developers",
      excerpt: "Get started with TypeScript in your React projects and improve code quality and maintainability.",
      date: "Jun 2025",
      tags: ["TypeScript", "React", "JavaScript"],
      link: "#",
      thumbnail: null
    },
    {
      id: 6,
      title: "Deploying MERN Apps to Production",
      excerpt: "Best practices for deploying your MERN stack applications to production environments.",
      date: "May 2025",
      tags: ["Deployment", "MERN", "Production"],
      link: "#",
      thumbnail: null
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
    <section id="blogs" className={styles.blogsSection} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.subtitle}>Latest Insights</span>
          <h2 className={styles.title}>Blog & Articles</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.sectionDescription}>
            Sharing my thoughts, tutorials, and insights on web development, technology, and best practices.
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <motion.div
          className={styles.blogsGrid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              className={styles.blogCard}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {blog.thumbnail && (
                <div className={styles.thumbnail}>
                  <img src={blog.thumbnail} alt={blog.title} />
                </div>
              )}

              <div className={styles.cardContent}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>

                <div className={styles.blogMeta}>
                  <div className={styles.date}>
                    <FaCalendarAlt />
                    <span>{blog.date}</span>
                  </div>

                  <div className={styles.tags}>
                    <FaTag />
                    <div className={styles.tagList}>
                      {blog.tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <a href={blog.link} className={styles.readMore}>
                  Read More
                  <FaArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
      </div>
    </section>
  );
};

export default Blogs;

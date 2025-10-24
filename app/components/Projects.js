"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Online Taxi Booking App",
    description: "A full-featured MERN stack app with admin panel, Google Maps API & real-time ride tracking.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/anmol37082/online-taxi",
    demo: "https://online-taxi.vercel.app/",
    category: "MERN"
  },
  {
    title: "E-commerce Website",
    description: "A responsive e-commerce platform with payment integration and user authentication.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["React", "Next.js", "Stripe", "Firebase"],
    github: "https://github.com/example/ecommerce",
    demo: "https://ecommerce-demo.vercel.app/",
    category: "Frontend"
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management with JWT authentication and role-based access.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/example/task-api",
    demo: "https://task-api.herokuapp.com/",
    category: "Backend"
  }
];

const categories = ["All", "MERN", "Frontend", "Backend"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>
          A selection of my favorite full-stack and front-end projects.
        </p>

        <div className={styles.filterButtons}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`${styles.filterButton} ${
                filter === category ? styles.active : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} />
              <div className={styles.overlay}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.badge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnPrimary}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

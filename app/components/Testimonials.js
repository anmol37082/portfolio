import styles from './Testimonials.module.css';

const testimonials = [
  {
    feedback: "Anmol is a dedicated and creative developer. His attention to detail and clean React code impressed me throughout the project.",
    name: "Durv Rathee",
    position: "Instructor at The Skill Boost",
    rating: 5
  },
  {
    feedback: "He delivered our MERN-based food delivery app on time and with amazing UI design. Definitely recommend for full-stack work.",
    name: "Client",
    position: "From Upwork",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles.cards}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.feedback}>"{testimonial.feedback}"</p>
            <div className={styles.info}>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.position}</p>
              <div className={styles.rating}>
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

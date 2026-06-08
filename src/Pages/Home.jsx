import styles from "./Home.module.css";
import { reviews, teamMembers } from "./Reviews.js";
export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Real Estate Photo & Video Editing Team</h1>
          <p>
            Backed by 8+ years of industry experience, we have a team of skilled
            and experienced professionals with strong hands-on expertise in real
            estate photo editing. We work closely with our clients to understand
            their unique requirements and deliver high-quality results that
            exceed expectations. Our commitment to quality, attention to detail,
            and competitive pricing helps us consistently achieve high levels of
            client satisfaction.
          </p>
        </div>
      </section>

      {/* Client Reviews */}
      <section className={styles.reviewsSection}>
        <h2>What Our Clients Say</h2>

        <div className={styles.reviewGrid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <p>"{review.review}"</p>
              <h4>{review.name}</h4>
              <span>{review.company}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <p>
          A dedicated group of creative professionals delivering exceptional
          real estate photo and video editing solutions.
        </p>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

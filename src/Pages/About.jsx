import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <h1>About Us</h1>
        <p>
          Founded in 2015, our company was built with a simple mission: to
          deliver high-quality photo and video editing solutions within
          industry-standard turnaround times while ensuring complete client
          satisfaction. What started as a small team of passionate editors has
          grown into a strong network of more than 50 skilled editing
          professionals.
        </p>

        <p>
          Over the years, we have partnered with real estate photographers,
          agencies, and businesses worldwide, helping them enhance their visual
          content with precision and consistency. Our commitment to quality,
          reliability, and on-time delivery has earned the trust of clients who
          depend on us for their editing needs.
        </p>

        <p>
          Today, we continue to focus on delivering professionally edited photos
          and videos that meet our clients' expectations, maintain high quality
          standards, and are completed within the agreed timeline.
        </p>
      </section>

      <section className={styles.storySection}>
        <div className={styles.content}>
          <h2>Our Story</h2>
          <p>
            Our journey began with a simple goal: to provide high-quality photo
            editing solutions that help clients create a lasting impression.
            Over the years, we have worked with clients from around the world,
            consistently delivering professional results with attention to
            detail and fast turnaround times.
          </p>

          <p>
            We believe every image tells a story. Our experienced team combines
            creativity, technical expertise, and industry knowledge to ensure
            every photo meets the highest quality standards.
          </p>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <h3>8+</h3>
          <p>Years of Experience</p>
        </div>

        <div className={styles.statCard}>
          <h3>500+</h3>
          <p>Happy Clients</p>
        </div>

        <div className={styles.statCard}>
          <h3>50K+</h3>
          <p>Images Delivered</p>
        </div>

        <div className={styles.statCard}>
          <h3>24hrs</h3>
          <p>Average Turnaround</p>
        </div>
      </section>

      <section className={styles.teamSection}>
        <h2>Why Clients Choose Us</h2>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h3>Experienced Team</h3>
            <p>
              Skilled editors with hands-on experience in real estate and
              commercial photo editing.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Quality Focused</h3>
            <p>
              Every image undergoes a thorough quality check before delivery.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Affordable Pricing</h3>
            <p>
              Premium editing quality at competitive rates that fit your
              business needs.
            </p>
          </div>

          <div className={styles.featureCard}>
            <h3>Client Satisfaction</h3>
            <p>
              We work closely with clients to ensure every requirement is met.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

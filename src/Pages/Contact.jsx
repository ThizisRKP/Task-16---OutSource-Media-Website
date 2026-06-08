import styles from "./Contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGlobeAmericas } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>Get In Touch</h2>

          <div className={styles.infoCard}>
            <h3>Email</h3>
            <div id={styles.Email}>
              <MdEmail className={styles.icon} style={{color:"red"}}/>
              <p>outsourcemedia@gmail.com</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3>Phone</h3>
            <div id={styles.Phone}>
              <FaPhoneAlt className={styles.icon} className={styles.icon} style={{color:"blue"}} />
              <p>+1 (123) 456-7890</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3>Working Hours</h3>
            <div id={styles.workingHours}>
              <BsClockFill className={styles.icon} className={styles.icon} style={{color:"grey"}}/>
              <p>Monday - Saturday</p>
            </div>
          </div>

          <div className={styles.infoCard}>
            <h3>Location</h3>
            <div id={styles.location}>
              <FaGlobeAmericas className={styles.icon} className={styles.icon} style={{color:"green"}} />
              <p>Serving Clients Worldwide</p>
            </div>
          </div>
        </div>

        <div className={styles.contactFormContainer}>
          <h2>Send a Message</h2>

          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" required />

            <input type="email" placeholder="Your Email" required />

            <input type="text" placeholder="Subject" required />

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

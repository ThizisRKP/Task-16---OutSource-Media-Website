import styles from "./Pricing.module.css";
import pricingData from "./PricingData";
export default function Pricing() {
  return (
    <div className={styles.pricingContainer}>
      <div className={styles.pricingGrid}>
        {pricingData.map((item, index) => (
          <div key={index} className={styles.priceCard}>
            <h2>{item.service}</h2>

            <div className={styles.price}>{item.price}</div>
            <h3>Bonus services</h3>
            <p>{item.description}</p>

            <button>Get Quote</button>
          </div>
        ))}
      </div>
    </div>
  );
}

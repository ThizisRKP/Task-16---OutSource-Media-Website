import { useState } from "react";
import styles from "./Services.module.css";
import services from "./Services.js";

export default function Services() {
  const itemsPerPage = 3;

  const [page, setPage] = useState(1);

  const [imageIndexes, setImageIndexes] = useState({});

  const totalPages = Math.ceil(services.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;

  const currentServices = services.slice(startIndex, startIndex + itemsPerPage); 

  const nextImage = (serviceTitle, totalImages) => {
    setImageIndexes((prev) => ({
      ...prev,
      [serviceTitle]: ((prev[serviceTitle] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (serviceTitle, totalImages) => {
    setImageIndexes((prev) => ({
      ...prev,
      [serviceTitle]:
        ((prev[serviceTitle] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <div className={styles.servicesContainer}>
      <h1>Our Services</h1>

      <div className={styles.servicesGrid}>
        {currentServices.map((service, index) => {
          const currentImage = imageIndexes[service.title] || 0;

          return (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.imageWrapper}>
                <button
                  className={`${styles.arrowBtn} ${styles.leftArrow}`}
                  onClick={() =>
                    prevImage(service.title, service.images.length)
                  }
                >
                  ❮
                </button>

                {service.type === "video" ? (
                  <video
                    key={`${service.title}-${currentImage}`}
                    className={styles.serviceImage}
                    controls
                  >
                    <source
                      src={service.images[currentImage]}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={service.images[currentImage]}
                    alt={service.title}
                    className={styles.serviceImage}
                  />
                )}

                <button
                  className={`${styles.arrowBtn} ${styles.rightArrow}`}
                  onClick={() =>
                    nextImage(service.title, service.images.length)
                  }
                >
                  ❯
                </button>
              </div>

              <div className={styles.imageCounter}>
                {currentImage + 1} / {service.images.length}
              </div>

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              {service.types && (
                <ul>
                  {service.types.map((type, idx) => (
                    <li key={idx}>{type}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.pagination}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import styles from "./OurServices.module.css";

const services = [
  {
    title: "Venue",
    description:
      "Discover the perfect venue for your special occasion, from elegant banquet halls to beautiful outdoor spaces.",
  },
  {
    title: "Catering",
    description:
      "Delight your guests with delicious menus, thoughtful presentation, and catering arrangements for every occasion.",
  },
  {
    title: "Decoration",
    description:
      "Transform your event with beautiful floral arrangements, creative themes, and stunning decorative details.",
  },
  {
    title: "Photography",
    description:
      "Capture the special moments of your celebration with memorable event photography and coverage.",
  },
  {
    title: "Entertainment",
    description:
      "Make your celebration unforgettable with music, DJs, performances, and entertainment for your guests.",
  },
];

export default function OurServices() {
  return (
    <section
      id="services"
      className={styles.servicesSection}
      aria-labelledby="services-heading"
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>WHAT WE OFFER</p>

          <h2
            id="services-heading"
            className={styles.heading}
          >
            Our Services
          </h2>

          <p className={styles.intro}>
            From selecting the perfect venue to planning every
            little detail, we bring all your event needs together
            under one roof. Our team works to make every occasion
            special, seamless, and memorable.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article
              key={service.title}
              className={styles.serviceCard}
            >
              <div
                className={styles.iconContainer}
                aria-hidden="true"
              />

              <h3 className={styles.serviceTitle}>
                {service.title}
              </h3>

              <p className={styles.serviceDescription}>
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


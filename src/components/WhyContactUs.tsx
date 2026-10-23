"use client";

import styles from "./WhyContactUs.module.css";

export default function WhyContactUs() {
  return (
    <section
      id="why-contact-us"
      className={styles.section}
    >
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Why Contact Us
        </h2>

        <p className={styles.description}>
          At Maadhav Events & Caterers, we believe every
          celebration deserves to be extraordinary. From
          weddings and birthdays to corporate gatherings
          and special occasions, our team brings thoughtful
          planning, beautiful decorations, and exceptional
          catering together to make your event memorable.
          We take care of the details so you can focus on
          enjoying every special moment with your guests.
        </p>
      </div>
    </section>
  );
}

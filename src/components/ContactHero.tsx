"Use Client";


import Image from "next/image";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.contactHero}>
      <Image
        src="/contact-us-bg.png"
        alt="Maadhav Event and Caterers contact page background"
        fill
        priority
        sizes="100vw"
        className={styles.backgroundImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.heading}>Contact Us</h1>

        <p className={styles.description}>
          Have an event in mind? We would love to hear from you.
          Get in touch with our team to plan a memorable
          celebration tailored to your needs.
        </p>
      </div>
    </section>
  );
}

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
          Event Management<br></br>
          That Understands You
        </h2>

        <p className={styles.description}>
          An event is more than a venue, a menu or a beautifully decorated space. It is about bringing people together and creating an experience that means something.
          As an event management company serving Kolkata and Burdwan, Maadhav Events understands your expectations first. Whether you need complete event management or assistance with specific services, we work around your requirements.
          From coordinating décor and catering to arranging manpower and logistics, our goal is to make your event a success while keeping your priorities at the centre of every decision.
        </p>
      </div>
    </section>
  );
}

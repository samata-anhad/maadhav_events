"Use Client";
import Image from "next/image";
import Link from "next/link";

import styles from "./CtaSection.module.css";

export default function CTASection() {
  return (
    <section
      className={styles.ctaSection}
      aria-labelledby="cta-heading"
    >
      <div className={styles.container}>
        {/* Left column: content and CTA button */}
        <div className={styles.ctaContent}>
          {/* <p className={styles.eyebrow}>
            LET'S CELEBRATE TOGETHER
          </p> */}

          <h2
            id="cta-heading"
            className={styles.heading}
          >
            Let's Make Your Event Unforgettable
          </h2>

          <p className={styles.description}>
            Every celebration deserves something special.
            From beautiful decorations to thoughtful planning,
            our team brings your ideas to life and helps create
            moments you and your guests will remember forever.
          </p>

          <Link
            href="#quote"
            className={styles.ctaButton}
          >
            Book Your Event
          </Link>
        </div>

        {/* Right column: event image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/cta-event.png"
            alt="Beautifully arranged event celebration"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className={styles.ctaImage}
          />
        </div>
      </div>
    </section>
  );
}

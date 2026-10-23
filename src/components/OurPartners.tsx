"Use Client";

import Image from "next/image";
import styles from "./OurPartners.module.css";

const partners = Array.from({ length: 15 }, (_, index) => index + 1);

export default function OurPartners() {
  return (
    <section
      className={styles.partnersSection}
      aria-label="Our partners"
    >
      <div className={styles.container}>
        <div className={styles.partnersGrid}>
          {partners.map((partner) => (
            <div
              key={partner}
              className={styles.partnerItem}
            >
              <Image
                src="/partner-logo.png"
                alt=""
                width={180}
                height={90}
                className={styles.partnerLogo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

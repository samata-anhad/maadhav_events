"Use Client";

import styles from "./GalleryHero.module.css";

export default function GalleryHero() {
  return (
    <section
      className={styles.galleryHero}
      aria-labelledby="gallery-heading"
    >
      <div className={styles.heroContent}>
        <h1 id="gallery-heading">Our Gallery</h1>

        <p>
          Explore the beautiful moments, stunning decorations,
          and memorable events created by Maadhav Event & Caterers.
        </p>
      </div>
    </section>
  );
}

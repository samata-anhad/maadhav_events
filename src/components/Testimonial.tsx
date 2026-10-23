
"use client";

import Image from "next/image";
import type { WheelEvent } from "react";

import styles from "./Testimonial.module.css";

const testimonials = [
  {
    title: "A Beautiful Wedding",
    image: "/client.png",
    alt: "Wedding celebration setup",
    description:
      "The entire celebration felt beautiful and well organised. From the decorations to the arrangements, every detail helped make our special day memorable.",
  },
  {
    title: "A Wonderful Birthday",
    image: "/client.png",
    alt: "Birthday party celebration",
    description:
      "Everything came together exactly as we hoped. The atmosphere was wonderful, our guests enjoyed the celebration, and the arrangements made the day extra special.",
  },
  {
    title: "A Successful Corporate Event",
    image: "/client.png",
    alt: "Corporate event setup",
    description:
      "The event setup looked professional and inviting. The arrangements helped everything run smoothly and created a welcoming experience for our guests.",
  },
  {
    title: "An Anniversary to Remember",
    image: "/client.png",
    alt: "Anniversary celebration",
    description:
      "The decorations and overall ambience made our anniversary feel truly special. It was a lovely celebration filled with moments we will always remember.",
  },
  {
    title: "A Memorable Engagement",
    image: "/client.png",
    alt: "Engagement celebration",
    description:
      "The celebration looked beautiful, and the arrangements created the perfect atmosphere for our family and friends to enjoy this important occasion.",
  },
  {
    title: "Exceptional Catering",
    image: "/client.png",
    alt: "Event catering arrangement",
    description:
      "The presentation and arrangements added a special touch to our gathering. Our guests enjoyed the occasion, and the overall experience was delightful.",
  },
];

export default function Testimonials() {
  function handleWheel(event: WheelEvent<HTMLDivElement>) {
    const carousel = event.currentTarget;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    const delta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    const canScroll =
      delta > 0
        ? carousel.scrollLeft < maxScroll
        : carousel.scrollLeft > 0;

    if (maxScroll > 0 && canScroll) {
      event.preventDefault();
      carousel.scrollLeft += delta;
    }
  }

  return (
    <section
      id="testimonials"
      className={styles.testimonialsSection}
      aria-labelledby="testimonials-heading"
    >
      <div className={styles.container}>
        {/* Centered section heading and introduction */}
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>
            CLIENT STORIES
          </p>

          <h2
            id="testimonials-heading"
            className={styles.heading}
          >
            Experiences Of Our Clients
          </h2>

          <p className={styles.intro}>
            Every celebration has a story worth sharing.
            Discover the experiences behind memorable events
            and the little details that make special occasions
            truly unforgettable.
          </p>
        </header>

        {/* Horizontally scrolling testimonial cards */}
        <div
          className={styles.testimonialCarousel}
          onWheel={handleWheel}
          aria-label="Client testimonial cards"
          tabIndex={0}
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.title}
              className={styles.testimonialCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  fill
                  sizes="(max-width: 575px) 82vw, (max-width: 991px) 42vw, 350px"
                  className={styles.testimonialImage}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardHeading}>
                  {testimonial.title}
                </h3>

                <p className={styles.cardDescription}>
                  {testimonial.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

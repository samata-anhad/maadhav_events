"use client";

import Image from "next/image";
import styles from "./EventsWeDo.module.css";

const events = [
  {
    name: "Weddings",
    image: "/wedding.png",
  },
  {
    name: "Soulful Events",
    image: "/soulful-events.png",
  },
  {
    name: "Corporate Events",
    image: "/corporate-events.png",
  },
  {
    name: "Anniversaries",
    image: "/anniversery.png",
  },
  {
    name: "Birthday Parties",
    image: "/birthday-parties.png",
  },
  {
    name: "Personal Event",
    image: "/personal-events.png",
  },
  {
    name: "Weddings",
    image: "/wedding.png",
  },
  {
    name: "Soulful Events",
    image: "/soulful-events.png",
  },
  {
    name: "Corporate Events",
    image: "/corporate-events.png",
  },
];

export default function EventsWeDo() {
  function handleWheel(
    event: React.WheelEvent<HTMLDivElement>
  ) {
    const carousel = event.currentTarget;

    const maxScroll =
      carousel.scrollWidth - carousel.clientWidth;

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
      id="events"
      className={styles.eventsSection}
      aria-labelledby="events-heading"
    >
      <div className={styles.content}>
        {/* Heading at the top left */}
        <div className={styles.sectionIntro}>
          <h4
            id="events-heading"
            className={styles.heading}
          >
            Events, We Do
          </h4>
        </div>

        {/* Horizontal event carousel */}
        <div
          className={styles.carousel}
          onWheel={handleWheel}
          aria-label="Explore the events we organise"
          tabIndex={0}
        >
          {events.map((event) => (
            <article
              key={event.name}
              className={styles.eventItem}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={event.image}
                  alt={event.name}
                  width={170}
                  height={170}
                  className={styles.eventImage}
                  sizes="(max-width: 575px) 120px, 170px"
                />
              </div>

              <h3 className={styles.eventName}>
                {event.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

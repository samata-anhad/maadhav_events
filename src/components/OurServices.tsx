"use client";

import Image from "next/image";
import styles from "./OurServices.module.css";

const services = [
  {
    title: "Wedding & Traditional Event Management",
    description:
      "From Marwari weddings to other traditional weddings, we bring together arrangements that respect your traditions, heritage and preferences.",
    icon: "/icons/Ornate Gradient Wedding Mandap Icon 1.svg",
    alt: "Wedding event management",
  },
  {
    title: "Religious Event Management",
    description:
      "We help organise religious celebrations such as Bhagwat, Kirtan and other religious gatherings with thoughtful coordination, attention to detail and an understanding of the occasion.",
    icon: "/icons/Intricate White Ganesha Mandap Line Art 1.svg",
    alt: "Religious event management",
  },
  {
    title: "Corporate Event Management",
    description:
      "Bring your professional gatherings together with organised planning and coordinated execution. We provide event management support for corporate clients, with arrangements tailored to the nature and scale of the event.",
    icon: "/icons/Gradient Conference Stage Line Art 1.svg",
    alt: "Corporate event management",
  },
  {
    title: "Birthday & Private Party Planning",
    description:
      "From birthdays and family celebrations to bachelor parties, we help organise occasions that reflect the host's preferences, guest requirements and budget.",
    icon: "/icons/Elegant Gradient Birthday Stage Arch 1.svg",
    alt: "Birthday and private party planning",
  },
  {
    title: "Catering",
    description:
      "Food is an essential part of many celebrations. Our catering services focus especially on pure vegetarian cuisine, including traditional Indian dishes and Indianised versions of international favourites.",
    icon: "/icons/Gradient Conference Stage Line Art 1.svg",
    alt: "Catering services",
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
        <header className={styles.sectionHeader}>
          <h2
            id="services-heading"
            className={styles.heading}
          >
            OUR EVENT MANAGEMENT SERVICES
          </h2>

          <p className={styles.intro}>
            One Event Partner. Multiple Ways to Make It Happen.
          </p>
        </header>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <article
              key={service.title}
              className={styles.serviceCard}
            >
              <div className={styles.iconContainer}>
                <Image
                  src={service.icon}
                  alt={service.alt}
                  width={64}
                  height={64}
                  className={styles.serviceIcon}
                />
              </div>

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

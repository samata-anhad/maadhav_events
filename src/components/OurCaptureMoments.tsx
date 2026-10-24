
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./OurCaptureMoments.module.css";

type EventCategory =
  | "All"
  | "Wedding"
  | "Birthday"
  | "Corporate"
  | "Anniversary"
  | "Social Events";

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: Exclude<EventCategory, "All">;
  layout: "square" | "tall";
};

const filters: EventCategory[] = [
  "All",
  "Wedding",
  "Birthday",
  "Corporate",
  "Anniversary",
  "Social Events",
];

const galleryImages: GalleryImage[] = [
  
  {
    id: 1,
    src: "/capture-wedding-small.png",
    alt: "Wedding stage decorated with red flowers and a sofa",
    category: "Wedding",
    layout: "square",
  },
  {
    id: 2,
    src: "/capture-wedding-s.png",
    alt: "Red wedding stage with floral decorations",
    category: "Wedding",
    layout: "square",
  },
  {
    id: 3,
    src: "/capture-wedding-large.png",
    alt: "Floral wedding stage with a red carpet",
    category: "Wedding",
    layout: "tall",
  },
  {
    id: 4,
    src: "/capture-wedding-small.png",
    alt: "Wedding stage decorated with red flowers and a sofa",
    category: "Wedding",
    layout: "square",
  },
  {
    id: 5,
    src: "/capture-wedding-s.png",
    alt: "Red wedding stage with floral decorations",
    category: "Wedding",
    layout: "square",
  },
  {
    id: 6,
    src: "/capture-wedding-large.png",
    alt: "Floral wedding stage with a red carpet",
    category: "Wedding",
    layout: "tall",
  },
   {
    id: 7,
    src: "/capture-wedding-small.png",
    alt: "Wedding stage decorated with red flowers and a sofa",
    category: "Wedding",
    layout: "square",
  },
  {
    id: 8,
    src: "/capture-wedding-s.png",
    alt: "Red wedding stage with floral decorations",
    category: "Wedding",
    layout: "square",
  },
  
  {
    id: 9,
    src: "/capture-wedding-small.png",
    alt: "Wedding stage decorated with red flowers and a sofa",
    category: "Wedding",
    layout: "square",
  },
  {
    id: 10,
    src: "/capture-wedding-s.png",
    alt: "Red wedding stage with floral decorations",
    category: "Wedding",
    layout: "square",
  },
  
 
   
];

export default function OurCaptureMoments() {
  const [activeFilter, setActiveFilter] =
    useState<EventCategory>("All");

  const filteredImages =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeFilter
        );

  return (
    <section className={styles.captureSection}>
      <div className={styles.container}>
        {/* Section Heading */}
        <div className={styles.heading}>
          <p className={styles.subtitle}>Sweet Memories</p>

          <h2 className={styles.title}>
            Our Capture Moments
          </h2>
        </div>

        {/* Category Filters */}
        <div
          className={styles.filterWrapper}
          role="group"
          aria-label="Filter gallery by event category"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === filter ? styles.selected : ""
              }`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Image Gallery */}
        <div className={styles.gallery}>
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`${styles.galleryItem} ${
                image.layout === "tall"
                  ? styles.tallImage
                  : styles.squareImage
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className={styles.emptyMessage}>
            No images available in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}

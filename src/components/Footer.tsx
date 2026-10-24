
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Events We Do", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const recentPosts = [
  {
    date: "October 12, 2026",
    title: "Ideas for Your Perfect Celebration",
    image: "/footer-post-1.png",
    href: "/blog/perfect-celebration",
  },
  {
    date: "October 05, 2026",
    title: "Planning a Memorable Event",
    image: "/footer-post-1.png",
    href: "/blog/memorable-event",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main footer columns */}
        <div className={styles.footerMain}>
          {/* Left side: 80% */}
          <div className={styles.footerLeft}>
            {/* Logo, description and social icons */}
            <div className={styles.brandSection}>
              <Link href="/" className={styles.logoLink}>
                <Image
                  src="/logo.png"
                  alt="Maadhav Event & Caterers"
                  width={180}
                  height={65}
                  className={styles.logo}
                />
              </Link>

              <p className={styles.description}>
                Maadhav Event & Caterers offers complete event
                solutions under one roof. From weddings and
                birthdays to corporate events, we help make
                every occasion memorable.
              </p>

              <div className={styles.socialLinks}>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className={styles.socialLink}
                >
                  <Image
                    src="/facebook.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className={styles.socialLink}
                >
                  <Image
                    src="/instagram.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className={styles.socialLink}
                >
                  <Image
                    src="/whatsapp.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                </a>
              </div>
            </div>

            {/* Three information columns */}
            <div className={styles.footerInfo}>
              {/* Contact information */}
              <div className={styles.infoColumn}>
                <h3 className={styles.columnHeading}>
                  Contact Info
                </h3>

                <h4 className={styles.subHeading}>
                  Mobile Number
                </h4>

                <ul className={styles.contactList}>
                  <li>
                    <a href="tel:9830086559">9830086559</a>
                  </li>
                  <li>
                    <a href="tel:8910534646">8910534646</a>
                  </li>
                  <li>
                    <a href="tel:8637836102">8637836102</a>
                  </li>
                </ul>

                <h4 className={styles.subHeading}>
                  Address
                </h4>

                <p className={styles.address}>
                  441 Canal Street, Kolkata 48,
                  4th Floor, West Bengal, India.
                </p>
              </div>

              {/* Quick links */}
              <div className={styles.infoColumn}>
                <h3 className={styles.columnHeading}>
                  Quick Links
                </h3>

                <ul className={styles.quickLinks}>
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent posts */}
              <div className={styles.infoColumn}>
                <h3 className={styles.columnHeading}>
                  Recent Posts
                </h3>

                <div className={styles.recentPosts}>
                  {recentPosts.map((post) => (
                    <article
                      className={styles.recentPost}
                      key={post.title}
                    >
                      <Link
                        href={post.href}
                        className={styles.postImageLink}
                      >
                        <Image
                          src={post.image}
                          alt=""
                          width={80}
                          height={80}
                          className={styles.postImage}
                        />
                      </Link>

                      <div className={styles.postContent}>
                        <p className={styles.postDate}>
                          {post.date}
                        </p>

                        <Link
                          href={post.href}
                          className={styles.postTitle}
                        >
                          {post.title}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side: 20% */}
          <div className={styles.footerRight}>
            <Image
              src="/footer-event.png"
              alt="Event decoration"
              width={320}
              height={500}
              className={styles.footerImage}
            />
          </div>
        </div>

        {/* Copyright and developer credit */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2026 Maadhav Event & Caterers.
          </p>

          <p className={styles.poweredBy}>
            Powered with{" "}
            <span className={styles.heart}>♥</span>
            {" "}By{" "}
            <a
              href="https://www.anhadtechnocrafts.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anhad Technocrafts
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import styles from "./SiteNavbar.module.css";

export default function SiteNavbar() {
  const pathname = usePathname();

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        {/* Website Logo */}
        <Navbar.Brand
          as={Link}
          href="/"
          className={styles.brand}
        >
          <Image
            src="/logo.png"
            alt="Maadhav Web App logo"
            width={160}
            height={55}
            className={styles.logo}
            priority
          />
        </Navbar.Brand>

        {/* Mobile Menu Toggle */}
        <Navbar.Toggle
          aria-controls="main-navigation"
          className={styles.toggle}
        />

        {/* Navigation Links */}
        <Navbar.Collapse id="main-navigation">
          <Nav className={styles.nav}>
            <Nav.Link
              as={Link}
              href="/"
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/services"
              className={`${styles.navLink} ${
                pathname === "/services" ? styles.active : ""
              }`}
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/gallery"
              className={`${styles.navLink} ${
                pathname === "/gallery" ? styles.active : ""
              }`}
            >
              Gallery
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/corporate-events"
              className={`${styles.navLink} ${
                pathname === "/corporate-events" ? styles.active : ""
              }`}
            >
              Corporate Events
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/contact"
              className={`${styles.navLink} ${
                pathname === "/contact" ? styles.active : ""
              }`}
            >
              Contact
            </Nav.Link>

            {/* Call-to-Action Button */}
            <Button
              as={Link}
              href="/contact"
              variant="primary"
              className={styles.ctaButton}
            >
              Book Your Event
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

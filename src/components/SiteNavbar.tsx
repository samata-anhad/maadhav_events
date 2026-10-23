
"use client";

import Image from "next/image";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import styles from "./SiteNavbar.module.css";

export default function SiteNavbar() {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="/" className={styles.brand}>
          <Image
            src="/logo.png"
            alt="Maadhav Web App logo"
            width={160}
            height={55}
            className={styles.logo}
            priority
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navigation"
          className={styles.toggle}
        />

        <Navbar.Collapse id="main-navigation">
          <Nav className={styles.nav}>
            <Nav.Link href="#home" className={styles.navLink}>
              Home
            </Nav.Link>

            <Nav.Link href="#about" className={styles.navLink}>
              About
            </Nav.Link>

            <Nav.Link href="#services" className={styles.navLink}>
              Services
            </Nav.Link>

            <Nav.Link href="#contact" className={styles.navLink}>
              Contact
            </Nav.Link>

            <Button
              href="#contact"
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

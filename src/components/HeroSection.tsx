

"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./HeroSection.module.css";


export default function HeroSection() {
  return (
    <section id="home" className={styles.hero}>
      <Container className={styles.container}>
        <Row className="align-items-center g-4">
          {/* Left side: Hero content */}
          <Col lg={7}>
            {/* <div className={styles.heroContent}>
              <p className={styles.eyebrow}>
                MAADHAV EVENTS & CATERERS
              </p>

              <h1 className={styles.title}>
                Make Every
                <br />
                Celebration
                <br />
                <span>Unforgettable.</span>
              </h1>

              <p className={styles.description}>
                From beautiful weddings to memorable celebrations,
                we bring your vision to life with thoughtful planning,
                stunning decorations, and exceptional catering.
              </p>
            </div> */}
          </Col>

          {/* Right side: Quote form */}
          <Col lg={5}>
            <div className={styles.quoteCard}>
              <h2 className={styles.formTitle}>
                Book Your Date
              </h2>

              {/* <p className={styles.formDescription}>
                Tell us about your event. Let’s make it special.
              </p> */}

              <Form>
                <Form.Group
                  className={styles.formGroup}
                  controlId="customerName"
                >
                  <Form.Label className={styles.formLabel}>
                    Your Name
                  </Form.Label>

                  <Form.Control
                    className={styles.formControl}
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </Form.Group>

                <Form.Group
                  className={styles.formGroup}
                  controlId="eventType"
                >
                  <Form.Label className={styles.formLabel}>
                    Event Type
                  </Form.Label>

                  <Form.Select
                    className={styles.formControl}
                    name="event"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select your event
                    </option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">
                      Corporate Event
                    </option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group
                  className={styles.formGroup}
                  controlId="mobileNumber"
                >
                  <Form.Label className={styles.formLabel}>
                    Mobile Number
                  </Form.Label>

                  <Form.Control
                    className={styles.formControl}
                    type="tel"
                    name="mobile"
                    placeholder="Enter your 10 digit mobile number"
                    autoComplete="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    required
                  />
                </Form.Group>

                <Button
                  type="button"
                  variant="primary"
                  className={styles.submitButton}
                >
                  Get a Quote
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

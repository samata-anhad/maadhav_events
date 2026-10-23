
"use client";

import { useState, type FormEvent } from "react";
import styles from "./SmallCtaSection.module.css";

export default function SmallCTASection() {
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // The form UI is ready. Connect an API or form service
    // here when you want to receive actual quote requests.
    setMessage(
      "Your details are ready. Connect a submission service to send your quote request."
    );
  }

  return (
    <section
      className={styles.quoteSection}
      aria-label="Request an event quote"
    >
      <div className={styles.container}>
        <form
          className={styles.quoteForm}
          onSubmit={handleSubmit}
        >
          <div className={styles.fieldGroup}>
            <label
              htmlFor="event-type"
              className={styles.visuallyHidden}
            >
              Event Type
            </label>

            <select
              id="event-type"
              name="eventType"
              className={styles.inputField}
              value={eventType}
              onChange={(event) => {
                setEventType(event.target.value);
                setMessage("");
              }}
              required
            >
              <option value="" disabled>
                Event Type
              </option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday Party</option>
              <option value="Corporate">Corporate Event</option>
              <option value="Engagement">Engagement</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.fieldGroup}>
            <label
              htmlFor="event-date"
              className={styles.visuallyHidden}
            >
              Date
            </label>

            <input
              id="event-date"
              name="eventDate"
              type="date"
              className={styles.inputField}
              value={eventDate}
              min={new Date().toLocaleDateString("en-CA")}
              onChange={(event) => {
                setEventDate(event.target.value);
                setMessage("");
              }}
              aria-label="Event date"
              required
            />
          </div>

          <button
            type="submit"
            className={styles.quoteButton}
          >
            Get A Quote
          </button>
        </form>

        {message && (
          <p className={styles.formMessage} role="status">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

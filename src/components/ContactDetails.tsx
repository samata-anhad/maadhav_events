
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ContactDetails.module.css";

export default function ContactDetails() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        event: "",
        message: "",
    });

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        console.log("Contact form data:", formData);

        alert("Thank you! Your message has been submitted.");

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            event: "",
            message: "",
        });
    }

    return (
        <section className={styles.contactDetails}>
            <div className={styles.container}>
                <div className={styles.contactGrid}>
                    {/* Left column: Contact form */}
                    <div className={styles.formColumn}>
                        <div className={styles.formContent}>
                            <h2 className={styles.formHeading}>Get Us</h2>

                            <p className={styles.formDescription}>
                                Have an event in mind? Tell us about your plans.
                                Our team will help you create a memorable
                                experience tailored to your needs.
                            </p>

                            <form
                                className={styles.contactForm}
                                onSubmit={handleSubmit}
                            >
                                {/* First Name and Last Name */}
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            aria-label="First Name"
                                            autoComplete="given-name"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            aria-label="Last Name"
                                            autoComplete="family-name"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email and Mobile Number */}
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            aria-label="Email Address"
                                            autoComplete="email"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <input
                                            id="mobile"
                                            name="mobile"
                                            type="tel"
                                            placeholder="Mobile Number"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            aria-label="Mobile Number"
                                            autoComplete="tel"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Event - Required */}
                                <div className={styles.formGroup}>
                                    <select
                                        id="event"
                                        name="event"
                                        value={formData.event}
                                        onChange={handleChange}
                                        aria-label="Select Event"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Event
                                        </option>

                                        <option value="Wedding">Wedding</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Engagement">Engagement</option>
                                        <option value="Anniversary">Anniversary</option>
                                        <option value="Corporate Event">
                                            Corporate Event
                                        </option>
                                        <option value="Catering">Catering</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Message - Optional */}
                                <div className={styles.formGroup}>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        aria-label="Your Message"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                >
                                    <span>Send Message</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right column: Contact Information */}
                    <aside className={styles.infoColumn}>
                        <div className={styles.infoContent}>
                            {/* Address */}
                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoHeading}>Address</h3>

                                <p className={styles.infoText}>
                                    441 Canal Street,
                                    <br />
                                    Kolkata 48, 4th Floor,
                                    <br />
                                    West Bengal, India.
                                </p>
                            </div>

                            {/* Mobile Numbers */}
                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoHeading}>
                                    Mobile Number
                                </h3>

                                <div className={styles.phoneList}>
                                    <a href="tel:9830086559">9830086559</a>
                                    <a href="tel:8910534646">8910534646</a>
                                    <a href="tel:8637836102">8637836102</a>
                                </div>
                            </div>

                            {/* Office Timings */}
                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoHeading}>
                                    Office Timings
                                </h3>

                                <p className={styles.infoText}>
                                    Monday – Saturday
                                    <br />
                                    10:00 AM – 7:00 PM
                                </p>
                            </div>

                            {/* Social Media */}
                            <div className={styles.infoBlock}>
                                <h3 className={styles.infoHeading}>
                                    Stay Connected
                                </h3>

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
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

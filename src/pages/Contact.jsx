import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <main className="contact section">
      <div className="contact-brand">
        <p className="eyebrow">GET IN TOUCH</p>

        <h1>
          Contact <em>Dr. Singhi's</em>
        </h1>

        <p>
          Established in 1996, with in-house production facilities.
        </p>
      </div>

      <div className="contact-details">
        <h2>We'd love to hear from you</h2>

        <p>
          <Phone />
          <a href="tel:+919530541113">+91 9530541113</a>
        </p>

        <p>
          <Mail />
          <a href="mailto:info@drsinghis.com">
            info@drsinghis.com
          </a>
        </p>

        <p>
          <MapPin />
          <span>Chandigarh, India</span>
        </p>

        <p>Unit-I, Yamunanagar, Haryana</p>
        <p>Unit-II, Sunam, Punjab</p>

        <a
          className="primary-cta"
          href="https://wa.me/918091909991"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
    </main>
  );
}
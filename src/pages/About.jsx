import React from 'react';

const facilities = [
  {
    number: '01',
    title: 'Unit I',
    location: 'Yamunanagar, Haryana',
    description:
      'Our manufacturing facility in Yamunanagar supports our focus on consistent production and quality.',
  },
  {
    number: '02',
    title: 'Unit II',
    location: 'Sunam, Punjab',
    description:
      'Our second unit in Sunam helps us support our operations and serve our customers.',
  },
];

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <p className="eyebrow centered">OUR STORY · SINCE 1996</p>

        <h1>
          Rooted in tradition.
          <br />
          <em>Made for everyday wellness.</em>
        </h1>

        <p className="section-intro">
          For nearly three decades, Dr. Singhi’s has focused on bringing
          Ayurvedic wellness products into everyday life, with care for the
          process, the product, and the people we serve.
        </p>
      </section>

      {/* Our Journey */}
      <section className="about-story section">
        <div className="about-story-label">
          <span className="about-number">01 / OUR JOURNEY</span>
          <span className="about-label-line" />
        </div>

        <div className="about-story-copy">
          <h2>
            A legacy built on <em>care and commitment.</em>
          </h2>

          <p>
            Established in 1996, Dr. Singhi’s brings together the heritage of
            Ayurveda and a practical approach to wellness. Our journey is
            shaped by a commitment to thoughtful manufacturing, dependable
            processes, and products created for everyday use.
          </p>

          <p>
            With our own production facilities, we stay closely involved in
            the work behind our products—from the manufacturing process to
            the care we put into serving our customers.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="about-values">
        <div className="section about-values-inner">
          <p className="eyebrow centered">WHAT GUIDES US</p>

          <h2 className="centered">
            Our approach to <em>wellness</em>
          </h2>

          <div className="about-values-grid">
            <article className="about-value-card">
              <span className="about-value-icon" aria-hidden="true">
                ✳
              </span>

              <h3>Ayurvedic Heritage</h3>

              <p>
                Inspired by the long-standing tradition of Ayurveda and its
                place in everyday wellness.
              </p>
            </article>

            <article className="about-value-card">
              <span className="about-value-icon" aria-hidden="true">
                ◇
              </span>

              <h3>In-house Production</h3>

              <p>
                Our own facilities help us stay involved in the manufacturing
                process and its day-to-day operations.
              </p>
            </article>

            <article className="about-value-card">
              <span className="about-value-icon" aria-hidden="true">
                ♡
              </span>

              <h3>Customer Commitment</h3>

              <p>
                We value the trust of our customers and aim to build lasting
                relationships through dependable service.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="about-facilities section">
        <p className="eyebrow centered">OUR PRESENCE</p>

        <h2 className="centered">
          Built around <em>our facilities</em>
        </h2>

        <p className="section-intro">
          Our manufacturing operations span two locations in North India.
        </p>

        <div className="about-facilities-grid">
          {facilities.map((facility) => (
            <article
              className="about-facility-card"
              key={facility.number}
            >
              <span className="about-facility-number">
                {facility.number}
              </span>

              <div>
                <h3>{facility.title}</h3>

                <p className="about-facility-location">
                  {facility.location}
                </p>

                <p>{facility.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <div className="section about-cta-inner">
          <div>
            <p className="eyebrow">GET TO KNOW US</p>

            <h2>
              Let’s talk about <em>wellness.</em>
            </h2>

            <p>
              Have a question about Dr. Singhi’s or our products? We’d be glad
              to hear from you.
            </p>
          </div>

          <a className="about-cta-button" href="/contact">
            Contact Us <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
import React, { useEffect, useState } from 'react';
import {
  Leaf,
  Factory,
  Heart,
  ArrowRight,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles.css';

import productImage from '../assets/refit-forte.png';

import stocleanGImage from '../assets/products/stoclean-g.jpeg';
import acticlearImage from '../assets/products/acticlear.jpeg';
import ayurkamaImage from '../assets/products/ayurkama.jpeg';
import actiskanImage from '../assets/products/actiskan.jpeg';
import dynacareTonicImage from '../assets/products/dynacare-tonic.jpeg';
import femolivDsImage from '../assets/products/femoliv-ds.jpeg';
import immunoskanImage from '../assets/products/immuno-skan.jpeg';
import kristoneImage from '../assets/products/kristone.jpeg';
import relivitImage from '../assets/products/relivit.jpeg';
import supercountImage from '../assets/products/supercount.jpeg';
import urifitImage from '../assets/products/urifit.JPG';
import wumacareTonicImage from '../assets/products/wumacare-tonic.JPG';
import zingImage from '../assets/products/zing.JPG';

import kesar from '../assets/Kesar.jpeg';
import ashwagandha from '../assets/Ashwagandha.jpeg';
import sidhMakardhwaj from '../assets/Sidh-Makardhawaj.jpeg';
import kaliMirch from '../assets/Kali-Mirch.jpeg';
import shatavari from '../assets/Satavari.jpeg';
import chandraprabha from '../assets/Chandraprabha-Vati.png';
import lohBhasam from '../assets/Loh-Bhasam.jpeg';
import abhrakBhasam from '../assets/Abhrak-Bhasam.jpeg';
import trivangBhasam from '../assets/Trivang-Bhasam.jpeg';
import bharmi from '../assets/Bharmi.jpeg';
import arjuna from '../assets/Arjuna.jpeg';
import shankhpushpi from '../assets/Shankhpushpi.jpeg';

const WHATSAPP_NUMBER = '918091909991';

const ingredients = [
  { name: 'Kesar', image: kesar },
  { name: 'Ashwagandha', image: ashwagandha },
  { name: 'Sidh Makardhwaj', image: sidhMakardhwaj },
  { name: 'Kali Mirch', image: kaliMirch },
  { name: 'Shatavari', image: shatavari },
  { name: 'Chandraprabha Vati', image: chandraprabha },
  { name: 'Loh Bhasam', image: lohBhasam },
  { name: 'Abhrak Bhasam', image: abhrakBhasam },
  { name: 'Trivang Bhasam', image: trivangBhasam },
  { name: 'Bharmi', image: bharmi },
  { name: 'Arjuna', image: arjuna },
  { name: 'Shankhpushpi', image: shankhpushpi },
];

const featuredProducts = [
  {
    name: 'REFIT FORTE',
    category: 'Featured Product',
    image: productImage,
    search: 'REFIT FORTE',
  },
  {
    name: 'STOCLEAN-G',
    category: 'Product Collection',
    image: stocleanGImage,
    search: 'stoclean',
  },
  {
    name: 'Acticlear',
    category: 'Product Collection',
    image: acticlearImage,
    search: 'Acticlear',
  },
  {
    name: 'Ayurkama',
    category: 'Product Collection',
    image: ayurkamaImage,
    search: 'Ayurkama',
  },
  {
    name: 'Actiskan',
    category: 'Product Collection',
    image: actiskanImage,
    search: 'Actiskan',
  },
  {
    name: 'Dynacare',
    category: 'Product Collection',
    image: dynacareTonicImage,
    search: 'Dynacare',
  },
  {
    name: 'Femoliv',
    category: 'Product Collection',
    image: femolivDsImage,
    search: 'Femoliv',
  },
  {
    name: 'Immunoskan',
    category: 'Product Collection',
    image: immunoskanImage,
    search: 'Immunoskan',
  },
  {
    name: 'Kristone',
    category: 'Product Collection',
    image: kristoneImage,
    search: 'Kristone',
  },
  {
    name: 'Relivit',
    category: 'Product Collection',
    image: relivitImage,
    search: 'Relivit',
  },
  {
    name: 'Supercount',
    category: 'Product Collection',
    image: supercountImage,
    search: 'Supercount',
  },
  {
    name: 'Urifit',
    category: 'Product Collection',
    image: urifitImage,
    search: 'Urifit',
  },
  {
    name: 'Wumacare',
    category: 'Product Collection',
    image: wumacareTonicImage,
    search: 'Wumacare',
  },
  {
    name: 'Zing',
    category: 'Product Collection',
    image: zingImage,
    search: 'Zing',
  },
];

const homeFeaturedProducts = [
  featuredProducts[0],
  featuredProducts[1],
  featuredProducts[2],
  featuredProducts[3],
];

function Home() {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentProduct = featuredProducts[activeProduct];

  const whatsappMessage = encodeURIComponent(
    "Hello Dr. Singhi's, I would like to know more about your Ayurvedic products."
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveProduct((current) => (current + 1) % featuredProducts.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPreviousProduct = () => {
    setActiveProduct(
      (current) =>
        (current - 1 + featuredProducts.length) % featuredProducts.length
    );
  };

  const showNextProduct = () => {
    setActiveProduct((current) => (current + 1) % featuredProducts.length);
  };

  return (
    <main className="home-page premium-home">

      {/* HERO */}
      <section className="home-hero home-hero-with-slideshow premium-hero">
        <div className="home-hero-content premium-hero-content">
          <div className="premium-eyebrow">
            <span className="premium-eyebrow-line" />
            AYURVEDIC HEALTHCARE
          </div>

          <h1 className="premium-hero-title">
            Rooted in Tradition.
            <br />
            <em>Focused on Wellness.</em>
          </h1>

          <p className="home-hero-description">
            Discover Dr. Singhi's range of Ayurvedic healthcare products,
            inspired by traditional knowledge and a commitment to quality.
          </p>

          <div className="home-hero-actions">
            <Link to="/products" className="btn btn-primary">
              Explore Products <ArrowRight size={18} />
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <MessageCircle size={17} />
              Get in Touch
            </a>
          </div>

          <div className="premium-hero-note">
            <span className="premium-hero-note-icon">
              <Leaf size={19} />
            </span>
            <span>
              <strong>Inspired by Ayurvedic Tradition</strong>
              <small>Discover the Dr. Singhi's product range</small>
            </span>
          </div>
        </div>

        {/* PRODUCT SLIDESHOW */}
        <div
          className="home-hero-showcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          aria-label="Featured Dr. Singhi's products"
        >
          <div className="home-showcase-topline">
            <span className="home-showcase-dot" />
            <span>EXPLORE OUR COLLECTION</span>
          </div>

          <div className="home-showcase-stage">
            <div className="home-showcase-orbit home-showcase-orbit-one" />
            <div className="home-showcase-orbit home-showcase-orbit-two" />
            <div className="home-showcase-glow" />

            <div
              className="home-showcase-product"
              key={currentProduct.name}
            >
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="home-showcase-image"
              />
            </div>

            <span className="home-showcase-floating-leaf home-showcase-leaf-one">
              <Leaf size={24} />
            </span>

            <span className="home-showcase-floating-leaf home-showcase-leaf-two">
              <Leaf size={18} />
            </span>
          </div>

          <div className="home-showcase-info" aria-live="polite">
            <div>
              <p className="home-showcase-category">
                {currentProduct.category}
              </p>
              <h2>{currentProduct.name}</h2>
            </div>

            <Link
              to={`/products?search=${encodeURIComponent(currentProduct.search)}`}
              className="home-showcase-explore"
              aria-label={`Explore ${currentProduct.name}`}
            >
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="home-showcase-controls">
            <button
              type="button"
              onClick={showPreviousProduct}
              aria-label="Previous product"
              className="home-showcase-arrow"
            >
              <ChevronLeft size={19} />
            </button>

            <div className="home-showcase-indicators" aria-label="Slide position">
              {featuredProducts.map((product, index) => (
                <button
                  type="button"
                  key={product.name}
                  className={`home-showcase-indicator${
                    index === activeProduct ? ' active' : ''
                  }`}
                  onClick={() => setActiveProduct(index)}
                  aria-label={`Show ${product.name}`}
                  aria-current={index === activeProduct ? 'true' : undefined}
                />
              ))}
            </div>

            <span className="home-showcase-count">
              {String(activeProduct + 1).padStart(2, '0')} /{' '}
              {String(featuredProducts.length).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={showNextProduct}
              aria-label="Next product"
              className="home-showcase-arrow"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>
      </section>

      {/* BRAND HIGHLIGHTS */}
      <section className="home-highlights premium-highlights">
      <div className="home-highlight">
  <div className="home-highlight-icon">
    <Leaf size={25} />
  </div>
  <div>
    <h3>Ayurvedic Heritage</h3>
    <p>Inspired by traditional Ayurvedic knowledge.</p>
  </div>
</div>

<div className="home-highlight">
  <div className="home-highlight-icon">
    <Sparkles size={25} />
  </div>
  <div>
    <h3>A Diverse Product Range</h3>
    <p>Discover the Dr. Singhi's collection.</p>
  </div>
</div>

<div className="home-highlight">
  <div className="home-highlight-icon">
    <Heart size={25} />
  </div>
  <div>
    <h3>Since 1996</h3>
    <p>A journey rooted in Ayurvedic tradition.</p>
  </div>
</div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="home-product-collection section-padding">
        <div className="section-heading">
          <p className="eyebrow centered">EXPLORE DR. SINGHI'S</p>
          <h2>
            Discover Our <em>Products</em>
          </h2>
          <p className="section-intro">
            Explore a selection from our Ayurvedic healthcare product range.
          </p>
        </div>

        <div className="home-featured-grid">
          {homeFeaturedProducts.map((product) => (
            <article className="home-product-card" key={product.name}>
              <Link
                to={`/products?search=${encodeURIComponent(product.search)}`}
                className="home-product-card-image"
                aria-label={`View ${product.name}`}
              >
                <img src={product.image} alt={product.name} loading="lazy" />
              </Link>

              <div className="home-product-card-content">
                <p className="home-product-card-label">DR. SINGHI'S</p>
                <h3>{product.name}</h3>

                <Link
                  to={`/products?search=${encodeURIComponent(product.search)}`}
                  className="home-product-card-link"
                >
                  View Product <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="home-collection-action">
          <Link to="/products" className="btn btn-primary">
            Explore All Products <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* INGREDIENTS CAROUSEL */}
      <section className="home-ingredients ingredients section-padding">
        <div className="section-heading">
          <p className="eyebrow centered">INSPIRED BY TRADITION</p>
          <h2>
            Key Ingredients, <em>Rooted in Nature</em>
          </h2>
          <p className="section-intro">
            Explore ingredients associated with Ayurvedic traditions.
            Refer to individual product details for formulation information.
          </p>
        </div>

        <div className="ingredient-marquee">
          <div className="ingredient-track">
            {[...ingredients, ...ingredients].map((item, index) => (
              <article
                className="ingredient-card"
                key={`${item.name}-${index}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading={index < ingredients.length ? 'eager' : 'lazy'}
                />
              </article>
            ))}
          </div>
        </div>

        <p className="home-ingredients-note">
          Ingredient information may vary by product. Please refer to
          individual product details for the applicable formulation.
        </p>
      </section>

      {/* COMPANY HERITAGE */}
      <section className="home-about section-padding premium-heritage">
        <div className="home-about-content">
          <p className="eyebrow">OUR JOURNEY</p>

          <h2>
            A Legacy of Ayurveda
            <br />
            <em>Since 1996</em>
          </h2>

          <p>
            Dr. Singhi's brings together an appreciation for Ayurvedic
            traditions and a commitment to its product range.
          </p>

          <p>
            Discover our company, our products and the story behind
            the Dr. Singhi's name.
          </p>

          <Link to="/about" className="btn btn-primary">
            Discover Our Story <ArrowRight size={18} />
          </Link>
        </div>

        <div className="home-about-stats">
          <div className="home-stat-card">
            <span className="home-stat-number">1996</span>
            <span className="home-stat-label">Established</span>
          </div>

          <div className="home-stat-card">
            <span className="home-stat-number">02</span>
            <span className="home-stat-label">Production Units</span>
          </div>

          <div className="home-stat-card">
            <span className="home-stat-number">30+</span>
            <span className="home-stat-label">Products in Our Range</span>
          </div>
        </div>
      </section>

      {/* FINAL ENQUIRY CTA */}
      <section className="home-contact-cta premium-contact-cta">
        <div className="home-contact-content">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>
            Get to Know
            <br />
            <em>Dr. Singhi's</em>
          </h2>

          <p>
            Have questions about our products? Connect with our team
            for product information and enquiries.
          </p>

          <div className="home-contact-actions">
            <Link to="/products" className="btn btn-light">
              Explore Products <ArrowRight size={18} />
            </Link>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary home-whatsapp-btn"
            >
              <MessageCircle size={19} />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
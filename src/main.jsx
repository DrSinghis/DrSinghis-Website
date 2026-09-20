import React from 'react';
import { createRoot } from 'react-dom/client';
import { Leaf, Dumbbell, Zap, ShieldCheck, FlaskConical, Users, Heart, Phone, Mail, MapPin, ArrowRight, Menu, Factory } from 'lucide-react';
import './styles.css';
import productImage from './assets/refit-forte.png';
import kesarImage from './assets/Kesar.jpeg';
import ashwagandhaImage from './assets/Ashwagandha.jpeg';
import makardhwajImage from './assets/Sidh-Makardhawaj.jpeg';
import kaliMirchImage from './assets/Kali-Mirch.jpeg';
import shatavariImage from './assets/Satavari.jpeg';
import logoImage from './assets/dr-singhis-logo.png';
import chandraprabhaImage from './assets/Chandraprabha-Vati.png';
import lohBhasamImage from './assets/Loh-Bhasam.jpeg';
import abhrakBhasamImage from './assets/Abhrak-Bhasam.jpeg';
import trivangBhasamImage from './assets/Trivang-Bhasam.jpeg';
import bharmiImage from './assets/Bharmi.jpeg';
import arjunaImage from './assets/Arjuna.jpeg';
import shankhpushpiImage from './assets/Shankhpushpi.jpeg';


const benefits = [
  { icon: Dumbbell, title: 'Enhances Stamina\n& Endurance', text: 'Helps you stay active throughout the day' },
  { icon: Heart, title: 'Supports Strength\n& Vitality', text: 'Promotes overall well-being' },
  { icon: Zap, title: 'Improves Energy\nPerformance', text: 'Keeps you energized naturally' },
  { icon: Leaf, title: 'Ayurvedic\n& Natural', text: 'A thoughtfully crafted herbal formulation' },
];
const ingredients = [
  { name: 'Kesar', note: 'Traditional botanical', image: kesarImage },
  { name: 'Ashwagandha', note: 'Herbal ingredient', image: ashwagandhaImage },
  { name: 'Sidh Makardhawaj', note: 'Traditional ingredient', image: makardhwajImage },
  { name: 'Kali Mirch', note: 'Black pepper', image: kaliMirchImage },
  { name: 'Shatavari', note: 'Herbal ingredient', image: shatavariImage },
  { name: 'Chandraprabha Vati', note: 'Urinary Wellness', image: chandraprabhaImage },
  { name: 'Loh Bhasam', note: 'Strength & Vitality', image: lohBhasamImage },
  { name: 'Abhrak Bhasam', note: 'Immunity & Rejuvenation', image: abhrakBhasamImage },
  { name: 'Trivang Bhasam', note: 'Complete Wellness', image: trivangBhasamImage },
  { name: 'Bharmi', note: 'Memory & Focus', image: bharmiImage },
  { name: 'Arjuna', note: 'Heart Health', image: arjunaImage },
  { name: 'Shankhpushpi', note: 'Mental Clarity', image: shankhpushpiImage },
];

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Dr. Singhi's home">
      <img
        className="brand-logo"
        src={logoImage}
        alt="Dr. Singhi's"
      />
    </a>
  );
}
function App() {
  return (
    <>
      <header className="site-header">
        <Logo />
        <nav className="nav">
          <a href="#home">Home</a><a href="#about">About Us</a><a href="#product">Our Products</a><a href="#benefits">Benefits</a><a href="#contact">Contact</a>
        </nav>
<a
  className="header-cta"
  href="https://wa.me/918091909991"
  target="_blank"
  rel="noopener noreferrer"
>
  Order Now <ArrowRight size={16}/>
</a>        <button className="mobile-menu" aria-label="Menu" onClick={() => document.querySelector('.nav').classList.toggle('nav-open')}><Menu /></button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">ANCIENT WISDOM <Leaf size={18}/> MODERN LIFE</p>
<h1><span className="refit-text">REFIT</span> <em>FOR</em><br/><em>A STRONGER YOU</em></h1>            <div className="mini-benefits">
              <div><Leaf/><span>Natural<br/>Ingredients</span></div>
              <div><Dumbbell/><span>Boosts<br/>Strength & Stamina</span></div>
              <div><Users/><span>For Men<br/>& Women</span></div>
              <div><Zap/><span>Everyday<br/>Energy</span></div>
            </div>
            <a className="primary-cta" href="#product">Discover the Power of Ayurveda <ArrowRight size={18}/></a>
          </div>
          <div className="hero-product">
  {productImage ? (
    <img
      src={productImage}
      alt="Dr. Singhi's Refit Forte Ayurvedic supplement bottle with botanical ingredients"
    />
  ) : (
    <div className="image-placeholder">REFIT FORTE</div>
  )}
</div>
        </section>

        <section className="benefit-band" id="benefits">
          {benefits.map(({icon: Icon, title, text}) => <article className="benefit" key={title}>
            <Icon className="benefit-icon"/><h3>{title.split('\n').map((line,i)=><React.Fragment key={i}>{i>0&&<br/>}{line}</React.Fragment>)}</h3><p>{text}</p>
          </article>)}
        </section>

        <section className="ingredients section" id="product">
          <p className="eyebrow centered">INSPIRED BY TRADITION</p>
          <h2>POWERED BY <em>NATURE</em></h2>
          <p className="section-intro">A thoughtful blend of time tested Ayurvedic ingredients</p>
          <div className="ingredient-marquee">
  <div className="ingredient-track">
    {[...ingredients, ...ingredients].map((item, index) => (
      <article className="ingredient-card" key={`${item.name}-${index}`}>
        <img src={item.image} alt={item.name} />
      </article>
    ))}
  </div>
</div>
        </section>

        <section className="about" id="about">
          <div className="about-copy"><p className="eyebrow">OUR COMMITMENT</p><h2>WHY CHOOSE<br/><em>DR. SINGHI'S?</em></h2><p>Rooted in Ayurvedic tradition, Dr. Singhi's  is committed to bringing thoughtfully formulated wellness products to everyday life.</p></div>
          <div className="trust-grid">
            <div><Leaf/><strong>80+<br/>Products</strong></div>
            <div><FlaskConical/><strong>Quality<br/>Focused</strong></div>
            <div><Factory/><strong>In House<br/>Production</strong></div>
            <div><Heart/><strong>Result Oriented<br/>Formulations</strong></div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-brand"><Logo/><p>Established in 1996 with In-house production facility<br/>Providing high quality and efficient Products.</p></div>
          <div className="contact-details"><h2>Get in Touch</h2>
            <p><Phone/> <a href="tel:+919355641113">+91 9530541113</a></p>
            <p><Mail/> <a href="mailto:info@drsinghis.com">info@drsinghis.com</a></p>
            <p><MapPin/> <span>Chandigarh, India<br/></span></p>
            <p><span>Unit-I, Yamunanagar, Haryana</span></p>
            <p><span>Unit-II, Sunam, Punjab</span></p>
          </div>
          <div className="contact-motto"><Leaf/><p>When Body & Soul Combined with Ayurveda<br/><em>Becomes Life.</em></p></div>
        </section>
      </main>
      <footer><span>© 1996 Dr. Singhi's . All Rights Reserved.</span><span>Safe <i/> Natural <i/> Trusted</span></footer>
    </>
  );
}
createRoot(document.getElementById('root')).render(<App />);

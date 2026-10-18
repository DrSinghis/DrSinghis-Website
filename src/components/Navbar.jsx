import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '../assets/dr-singhis-logo.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      {/* Company Logo */}
      <Link
        to="/"
        className="brand"
        aria-label="Dr. Singhi's Home"
        onClick={closeMenu}
      >
        <img
          className="brand-logo"
          src={logoImage}
          alt="Dr. Singhi's"
        />
      </Link>

      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/products" onClick={closeMenu}>
          Products
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </nav>

      {/* WhatsApp Contact Button */}
      <a
        className="header-cta"
        href="https://wa.me/918091909991"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get in Touch <ArrowRight size={16} />
      </a>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu"
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
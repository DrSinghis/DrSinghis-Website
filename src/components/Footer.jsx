import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <span>
        © {new Date().getFullYear()} Dr. Singhi's. All Rights Reserved.
      </span>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <span>
        Safe <i /> Natural <i /> Trusted
      </span>
    </footer>
  );
}
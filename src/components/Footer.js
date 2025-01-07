import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Welcome to My Pokémon App, your number one source for all things Pokémon.
            We're dedicated to providing you the best of Pokémon information, customer service, and uniqueness.
          </p>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email:support@99.com</p>
          <p>Phone: +91 7724966694</p>
          <p>Address: 123 Pokémon Street, Poké City, PK 12345</p>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <p>Instagram</p>
          <p>Whatsaap</p>
          <p>facebook</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 My Pokémon App. All Rights Reserved.</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/details">Details</a></li>
            <li><a href="/cardadded">Added Cards</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

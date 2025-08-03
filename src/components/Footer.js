import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-info">
        <h3>Contact Information</h3>
        <p>📍 Arshakunyats 73/3, Yerevan</p>
        <p>📧 <a href="mailto:shinpoghosyan@gmail.com">shinpoghosyan@gmail.com</a></p>
        <p>📞 <a href="tel:+37495160100">+(374) 95-160-100</a></p>
      </div>

      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <img src="/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="/icons/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

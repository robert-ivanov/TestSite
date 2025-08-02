import React from 'react';
import { Link } from 'react-router-dom';

const ContactPreview = () => (
  <section className="section-container">
    <h2>Contact Us</h2>
    <p>Have questions or need assistance? Reach out to our team anytime.</p>
    <Link to="/contact" className="more-button">More</Link>
  </section>
);

export default ContactPreview;

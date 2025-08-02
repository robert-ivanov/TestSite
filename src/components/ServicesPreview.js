import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => (
  <section className="section-container">
    <h2>Our Services</h2>
    <p>Explore the wide range of services we offer for your construction needs.</p>
    <Link to="/services" className="more-button">More</Link>
  </section>
);

export default ServicesPreview;

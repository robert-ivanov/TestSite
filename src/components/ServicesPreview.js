import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPreview.css';
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';

const ServicesPreview = () => (
  <section className="services-full-section no-gap">
    <div className="section-container">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>Explore the wide range of services we offer for your construction needs.</p>
      </div>
    </div>

    <div className="section-container services-inner">
      <div className="services-grid">
        <div className="service-block">
          <img src={service1} alt="Residential Construction" />
          <div className="service-overlay">Residential Construction</div>
        </div>
        <div className="service-block">
          <img src={service2} alt="Commercial Projects" />
          <div className="service-overlay">Commercial Projects</div>
        </div>
        <div className="service-block">
          <img src={service3} alt="Renovation & Remodeling" />
          <div className="service-overlay">Renovation & Remodeling</div>
        </div>
      </div>
    </div>
    <div className="services-header">

        <Link to="/services" className="more-button">More</Link>
      </div>
  </section>
);

export default ServicesPreview;

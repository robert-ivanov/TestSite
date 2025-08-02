import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.css';
import aboutImg from '../assets/about-preview.jpg';
const AboutSection = () => {
  return (
<section>
  <div className="section-container">
    <img src={aboutImg} alt="About Us" className="about-image-full" />

  </div>
  <div className="about-text">
    <h2>About Our Company</h2>
    <p>We are a construction company providing modern infrastructure solutions and high-quality materials.</p>
    <Link to="/about" className="more-button">Learn More</Link>
  </div>
</section>

  );
};

export default AboutSection;

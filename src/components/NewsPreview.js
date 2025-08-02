import React from 'react';
import { Link } from 'react-router-dom';

const NewsPreview = () => (
  <section className="section-container">
    <h2>Latest News</h2>
    <p>Stay updated with our recent projects, achievements, and industry news.</p>
    <Link to="/news" className="more-button">More</Link>
  </section>
);

export default NewsPreview;

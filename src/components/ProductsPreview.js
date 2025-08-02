import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPreview = () => (
  <section className="section-container">
    <h2>Construction Products</h2>
    <p>Discover high-quality building materials and tools in our product line.</p>
    <Link to="/products" className="more-button">More</Link>
  </section>
);

export default ProductsPreview;

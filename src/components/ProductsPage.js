import React from 'react';
import './ProductsPage.css';

const productsList = [
  {
    name: "High-Quality Cement",
    description: "Durable cement options suitable for all structural and decorative needs."
  },
  {
    name: "Bricks & Blocks",
    description: "Variety of bricks and concrete blocks for residential and industrial use."
  },
  {
    name: "Reinforcement Steel",
    description: "Rebar and mesh steel supplies for enhanced building integrity."
  },
  {
    name: "Construction Equipment",
    description: "Modern machinery and tools available for short-term or long-term rental."
  },
  {
    name: "Waterproofing Materials",
    description: "Products to ensure moisture resistance and foundation protection."
  },
  {
    name: "Insulation & Panels",
    description: "Thermal and sound insulation products for walls, roofs, and floors."
  }
];

const ProductsPage = () => (
  <section className="products-page">
    <div className="products-header">
      <h2>Construction Products</h2>
      <p>
        Explore our comprehensive inventory of reliable construction materials and tools. 
        Quality-tested and ready for delivery to your site.
      </p>
    </div>

    <div className="products-list">
      {productsList.map((product, index) => (
        <div className="product-item" key={index}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ProductsPage;

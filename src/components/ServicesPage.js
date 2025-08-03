import React from 'react';
import './ServicesPage.css';

const servicesList = [
  {
    title: "Architecture & Design",
    description: "Innovative and sustainable designs tailored to meet modern construction standards and client visions."
  },
  {
    title: "Project Planning",
    description: "Detailed planning services including budgeting, timeline management, and feasibility studies."
  },
  {
    title: "Engineering Solutions",
    description: "Structural, mechanical, and electrical engineering services ensuring safe and efficient infrastructure."
  },
  {
    title: "Construction & Contracting",
    description: "Full-service construction from groundwork to final finishes, managed by certified professionals."
  },
  {
    title: "Material Supply",
    description: "High-quality construction materials delivered on time to meet all project specifications."
  },
  {
    title: "Consulting & Management",
    description: "Expert guidance and supervision for large-scale projects and public/private sector developments."
  }
];

const ServicesPage = () => (
  <section className="services-page">
    <div className="services-header">
      <h2>All Our Services</h2>
      <p>
        From idea to execution — we deliver complete construction solutions. Explore the wide range 
        of services that support both private and commercial clients.
      </p>
    </div>

    <div className="services-list">
      {servicesList.map((service, index) => (
        <div className="service-item" key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesPage;

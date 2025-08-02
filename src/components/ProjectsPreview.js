import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPreview = () => (
  <section className="section-containerk">
    <h2>Our Projects</h2>
    <p>Take a quick look at our featured construction projects across the region.</p>
    <Link to="/projects" className="more-button">More</Link>
  </section>
);

export default ProjectsPreview;

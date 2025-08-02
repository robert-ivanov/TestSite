import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projectData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  img: `/projects/project${i + 1}.jpg`,
  title: `Project ${i + 1}`,
  desc: `This is a short description for project ${i + 1}`
}));

const Projects = () => {
  return (
    <section className="projects">
      <h2>Our Projects</h2>
      <div className="project-grid">
        {projectData.map((proj) => (
          <Link to={`/project/${proj.id}`} key={proj.id} className="project-card">
            <img src={proj.img} alt={proj.title} />
            <div className="hover-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;

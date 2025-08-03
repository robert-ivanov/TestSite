import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

import project1 from '../assets/projects/project1.jpg';
import project2 from '../assets/projects/project2.jpg';
import project3 from '../assets/projects/project3.jpg';
import project4 from '../assets/projects/project4.jpg';
import project5 from '../assets/projects/project5.jpg';
import project6 from '../assets/projects/project6.jpg';
import project7 from '../assets/projects/project7.jpg';
import project8 from '../assets/projects/project8.jpg';
import project9 from '../assets/projects/project9.jpg';
import project10 from '../assets/projects/project10.jpg';

const images = [
  project1, project2, project3, project4, project5,
  project6, project7, project8, project9, project10
];

const projectData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  img: images[i],
  title: `Project ${i + 1}`,
  desc: `This is a short description for project ${i + 1}`
}));

const Projects = () => {
  return (
    <section className="projects">
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

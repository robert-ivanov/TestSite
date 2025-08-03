import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Projects.css'; // if you have shared button styles here

const projectData = Array.from({ length: 10 }, (_, i) => ({
  id: `${i + 1}`,
  img: require(`../assets/projects/project${i + 1}.jpg`),
  title: `Project ${i + 1}`,
  desc: `This is a detailed description of project ${i + 1}. Here you can display more content about the project.`
}));

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id === id);

  if (!project) return <p>Project not found</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2>{project.title}</h2>
      <img
        src={project.img}
        alt={project.title}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '1rem' }}
      />
      <p style={{ marginBottom: '2rem' }}>{project.desc}</p>
      <Link to="/projects" className="more-button">
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;

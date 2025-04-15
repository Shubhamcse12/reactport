// Projects.jsx
import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from './ProjectModal';
import projectData from './projectData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === 'All'
      ? projectData
      : projectData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="filter-buttons">
        {['All', 'Web', 'Android'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-button ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
            <button onClick={() => setSelectedProject(project)} className="view-link">
              View Project →
            </button>
          </div>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;

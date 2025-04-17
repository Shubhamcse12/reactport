import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-banner">
          <img src={project.image} alt={project.title} />
          <div className="banner-overlay" />
          <div className="banner-text">
            <h2>{project.title}</h2>
            <div className="category-tag">{project.category}</div>
            <div className="modal-links">
              {project.live && <a href={project.live} target="_blank" rel="noreferrer">🔗 Live Demo</a>}
              {project.source && <a href={project.source} target="_blank" rel="noreferrer">💻 GitHub</a>}
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>📌 Project Overview</h3>
            <p>{project.overview}</p>
          </div>

          {project.challenge && (
            <div className="modal-section">
              <h3>🚧 The Challenge</h3>
              <p>{project.challenge}</p>
            </div>
          )}

          {project.solution && (
            <div className="modal-section">
              <h3>✅ The Solution</h3>
              <p>{project.solution}</p>
            </div>
          )}

          {project.tech && (
            <div className="modal-section">
              <h3>🧰 Technology Stack</h3>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div className="modal-section">
              <h3>🖼️ Project Gallery</h3>
              <div className="image-slider">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Project screenshot ${i + 1}`}
                    className="slider-image"
                  />
                ))}
              </div>
            </div>
          )}

          {project.video && (
            <div className="modal-section">
              <h3>🎥 Demo Video</h3>
              <div className="video-container">
                <iframe
                  src={project.video}
                  title="Project Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        <button className="modal-close" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default ProjectModal;

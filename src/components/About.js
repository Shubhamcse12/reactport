import React from 'react';
import './About.css';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        {/* Left: Text Content */}
        <div className="about-text">
          <p>
            I'm a full-stack developer with <strong>2+ years of experience</strong> building responsive web apps and native Android applications. I focus on delivering <strong>scalable, real-world solutions</strong> through clean, maintainable code.
          </p>
          <p>
            I've collaborated with  startups  to transform ideas into intuitive digital experiences.
          </p>
          <a href="/Shubham Kumar - Resume.pdf" download className="resume-link" aria-label="Download Resume">
            <FiDownload className="icon" /> Download Resume
          </a>
        </div>

        {/* Right: Stats */}
        <div className="about-stats">
          <div className="stat-box">
            <h3>2+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box">
            <h3>3K+</h3>
            <p>GitHub Commits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// Skills.jsx
import React from 'react';
import './Skills.css';

const skills = {
  frontend: [
    { name: 'React.js', percent: 90 },
    { name: 'Vue.js', percent: 85 },
    { name: 'CSS/SASS', percent: 95 },
  ],
  backend: [
    { name: 'Node.js', percent: 88 },
    { name: 'Python', percent: 82 },
    { name: 'SQL', percent: 90 },
  ],
};

const SkillBar = ({ name, percent }) => (
  <div className="skill-bar">
    <div className="label">
      <span>{name}</span>
      <span>{percent}%</span>
    </div>
    <div className="bar-bg">
      <div className="bar-fill" style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills & Technologies</h2>
      <div className="skills-grid">
        <div className="skills-column">
          <h3>Frontend Development</h3>
          {skills.frontend.map((skill, idx) => (
            <SkillBar key={idx} name={skill.name} percent={skill.percent} />
          ))}
        </div>
        <div className="skills-column">
          <h3>Backend Development</h3>
          {skills.backend.map((skill, idx) => (
            <SkillBar key={idx} name={skill.name} percent={skill.percent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

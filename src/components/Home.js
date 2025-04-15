import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-text">
        <h1>Hi, I'm SHUBHAM KUMAR<br /><span>Full Stack Developer</span></h1>
        <p>
          Crafting beautiful web experiences and powerful mobile applications with passion and precision.
        </p>
        <div className="home-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Get in Touch</a>
        </div>
      </div>

      <div className="home-image">
        <img src="/images/hero-dev.jpg" alt="Developer Illustration" />
      </div>
    </section>
  );
};

export default Home;

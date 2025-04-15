// Footer.jsx
import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <img src="/images/logo.jpg" alt="Shubham Logo" className="footer-logo-img" />
            <h2 className="footer-logo-text">SHUBHAM KUMAR</h2>
          </div>
          <p>Building beautiful digital experiences with passion and precision.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://github.com/Shubhamcse12"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shubhamcse12/"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer-bottom">
        <p>© 2025 SHUBHAM KUMAR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

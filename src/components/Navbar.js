import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsSun, BsMoon } from 'react-icons/bs'; // Sun & Moon icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const [theme, setTheme] = useState('light');

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   document.body.className = newTheme; // apply class to body
  //   localStorage.setItem('theme', newTheme); // optional: persist theme
  // };

  // // Load saved theme on mount
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme') || 'light';
  //   setTheme(savedTheme);
  //   document.body.className = savedTheme;
  // }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.jpg" alt="Shubham Logo" className="logo-img" />
        SHUBHAM KUMAR
      </div>

      <div className="right-controls">
        {/* <div className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <BsMoon /> : <BsSun />}
        </div> */}

        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#contact" onClick={handleLinkClick} className="contact-button">Contact Me</a></li>
      </ul>
    </nav>
  );
}

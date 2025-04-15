// Contact.jsx
import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-grid">
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your email" />
          </label>
          <label>
            Message
            <textarea placeholder="Your message" rows="5"></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <strong>Location</strong>
              <p>Bihar, INDIA</p>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <div>
              <strong>Email</strong>
              <p>shubhamcse12@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone />
            <div>
              <strong>Phone</strong>
              <p>6206371634</p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Shubhamcse12"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shubhamcse12/"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

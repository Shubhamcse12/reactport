import React, { useRef } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Something went wrong. Please try again.');
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <div className="contact-grid">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label>
            Name
            <input type="text" name="user_name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="user_email" placeholder="Your email" required />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Your message" rows="5" required></textarea>
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

import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './ContactMe.css';

const ContactMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className={`contact-section ${isVisible ? 'visible' : ''}`} id="contact">
      <div className="section-glow top-glow"></div>
      
      <div className="contact-container">
        <h2 className="section-title font-orbitron text-glow-blue text-center">
          <span>Contact Me</span>
        </h2>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info init-hidden fade-in-up delay-1">
            <div className="info-card">
              <div className="info-header">
                <h3 className="font-rajdhani">Get In Touch</h3>
                <p>Have a project idea or question? Reach out through any of these channels:</p>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-details">
                    <h4>Email</h4>
                    <a href="mailto:info@lucaverse.ai">info@lucaverse.ai</a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <FaLinkedin />
                  </div>
                  <div className="method-details">
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/luciano-aguilera-366b56103/" target="_blank" rel="noopener noreferrer">
                      Luciano Aguilera
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <FaGithub />
                  </div>
                  <div className="method-details">
                    <h4>GitHub</h4>
                    <a href="https://github.com/lucianoaf8" target="_blank" rel="noopener noreferrer">
                      @lucianoaf8
                    </a>
                  </div>
                </div>
                
              </div>
              
              
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container init-hidden fade-in-up delay-2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Message subject"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-submit-btn">
                <span className="btn-text">Send Message</span>
                <span className="btn-icon">
                  <FaEnvelope />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

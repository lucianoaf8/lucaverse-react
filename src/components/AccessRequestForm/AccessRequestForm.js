// src/components/AccessRequestForm/AccessRequestForm.js
import React, { useState, useEffect, useRef } from 'react';
import './AccessRequestForm.css';

const AccessRequestForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: ''
  });
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.reason); // Reason maps to "message" in Worker
    data.append('website', ''); // Honeypot field (should stay empty)

    try {
      const response = await fetch('https://formerformfarmer.lucianoaf8.workers.dev/', {
        method: 'POST',
        body: data,
      });

      if (response.redirected) {
        window.location.href = response.url; // Redirect on success
      } else {
        alert('Something went wrong submitting your request.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred. Please try again later.');
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="access-form-overlay">
      <div className="access-form-container" ref={formRef}>
        <div className="form-header">
          <h2 className="font-orbitron text-xl text-[color:var(--neon-blue)] text-glow-blue">
            Request Access
          </h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="access-request-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Why do you want access?</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              rows="3"
              required
              placeholder="Briefly explain why you'd like to enter the Lucaverse..."
            />
          </div>

          {/* Hidden honeypot */}
          <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessRequestForm;

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
  
  // Handle clicks outside the form to close it
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
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Access request submitted. We will contact you soon!');
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
          
          <button type="submit" className="submit-button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccessRequestForm;
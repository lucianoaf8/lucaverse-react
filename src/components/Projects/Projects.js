import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Placeholder project data - reduced to 3 projects
  const projects = [
    {
      id: 1,
      title: "Neuromorphic AI Interface",
      description: "A cutting-edge interface for AI systems using neuromorphic computing principles for enhanced interaction.",
      technologies: ["React", "TensorFlow.js", "WebGL"],
      image: "/assets/placeholders/project1.jpg",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Quantum Data Visualization",
      description: "Interactive visualization platform for quantum computing datasets with real-time processing capabilities.",
      technologies: ["Three.js", "D3.js", "Python"],
      image: "/assets/placeholders/project2.jpg",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Neural Network Composer",
      description: "AI-powered music composition tool that generates unique soundscapes based on neural network patterns.",
      technologies: ["WebAudio API", "Machine Learning", "Node.js"],
      image: "/assets/placeholders/project3.jpg",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section
      className={`projects-section ${isVisible ? 'visible' : ''}`}
      id="projects"
      style={{ position: 'relative' }}
    >
      {/* Move the separator further DOWN below the hero section by increasing top value */}
      <div
        className="section-glow top-glow"
        style={{ top: '140px', position: 'absolute' }}
      ></div>
      <div className="projects-container">
        <h2 className="section-title font-orbitron text-glow-blue text-center">
          <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card init-hidden fade-in-up delay-${index + 1}`}
            >
              <div className="project-image-container">
                <div className="project-image-placeholder">
                  <span className="placeholder-text">{project.title.charAt(0)}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title font-rajdhani">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" aria-label="View GitHub Repository">
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a href={project.demo} className="project-link" aria-label="View Live Demo">
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta init-hidden fade-in-up delay-6">
          <p className="cta-text font-rajdhani">Want to see more of my work?</p>
          <button className="nav-cta-button cta-secondary">
            Explore Full Portfolio
          </button>
        </div>
      </div>
      <div className="section-glow bottom-glow"></div>
    </section>
  );
};

export default Projects;

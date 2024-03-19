import React from 'react';
import './ProjectsSection.css'; // Ensure the CSS file is linked
import projectDetails from '../data/projectDetails';
import Project1 from '../assets/Projet1.jpg';
import Project2 from '../assets/Projet2.jpg';
import Project3 from '../assets/Projet3.jpg';
import Project4 from '../assets/Projet4.jpg';

function ProjectsSection({ projectDetails }) {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-grid">
        {projectDetails.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <div className="project-content"> {/* New container for text content */}
              <p className="project-description">{project.description}</p>
              <p className="project-techstack">{project.techstack}</p>
              <div className="project-links">
                <a href={project.previewLink}>View Project</a>
                <a href={project.githubLink}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

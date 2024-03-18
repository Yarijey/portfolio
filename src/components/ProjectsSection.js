import React from 'react';
import './ProjectsSection.css'; // Ensure the CSS file is linked

function ProjectsSection({ projectDetails }) {
  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projectDetails.map((project) => (
          <div className="project-card" key={project.title}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.techstack}</p>
            <a href={project.previewLink}>View Project</a>
            <a href={project.githubLink}>GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

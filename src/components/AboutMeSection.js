import React from 'react';
import './AboutMeSection.css'; // Ensure the CSS file is linked

function AboutMeSection() {
  return (
    <section className="about-me-section">
      <div className="about-title">
        <h1>ABOUT<br/>ME</h1>
      </div>
      <div className="about-content">
        <h2>Welcome! I'm a graphic designer and full-stack web developer...</h2>
        <p>My design philosophy centers on minimalism—creating sleek...</p>
        <p>Travel has broadened my horizons, exposing me to various cultures...</p>
        <p>As I stand at the threshold of my career, I'm eager to merge my passion...</p>
        <p>In my spare time, I find solace in poetry, an outlet that nurtures my creativity...</p>
        <a href="#projects" className="projects-button">Projects</a>
      </div>
    </section>
  );
}

export default AboutMeSection;

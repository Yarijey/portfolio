import React from 'react';
import './AboutMeSection.css'; // Ensure the CSS file is linked

function AboutMeSection() {
  return (
    <section id="about" className="about-me-section">
      <div className="about-title">
        <h1>ABOUT<br/>ME</h1>
      </div>
      <div className="about-content">
        <h2> Welcome! I'm a graphic designer and full-stack web developer with a diploma from Concordia University, where I honed my skills to blend aesthetics with functionality. </h2>
        <p>My design philosophy centers on minimalism—creating sleek, accessible, and user-friendly digital experiences. Travel has broadened my horizons, exposing me to various cultures that have subtly influenced my design sensibility and communication approach, reflecting a global mindset and a knack for linguistic versatility.</p>
        <p>As I stand at the threshold of my career, I'm eager to merge my passion for technology and design within an innovative startup setting. My goal is to contribute to an environment that not only disrupts the status quo but also champions solutions that promise a safer and more just future. While my journey is just beginning, my commitment is to be part of a pioneering team dedicated to creating impactful technologies that pave the way for a more sustainable world.</p>
        <p>In my spare time, I find solace in poetry, an outlet that nurtures my creativity and empathy. My journey is one of continuous learning and exploration, driven by a commitment to excellence and a desire to contribute meaningfully to our world. Let's connect and create impactful, thoughtful digital experiences together.</p>
        <a href="#projects" className="projects-button">Projects</a>
      </div>
    </section>
  );
}

export default AboutMeSection;

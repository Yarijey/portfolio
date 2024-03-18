import React from 'react';
import './TechnologiesSection.css'; // Link to the CSS file for styling

function TechnologiesSection() {
  return (
    <section className="technologies-section">
      <div className="design-skills">
        <p>Design Software: Adobe Creative Suite (Photoshop, Illustrator, InDesign), Figma</p>
        <p>Web Design Tools: Adobe XD, Webflow, WordPress</p>
        <p>Typography: Understanding of font families, kerning, leading</p>
        <p>Print Design: Knowledge of print processes and file preparation</p>
        <p>UX/UI Design: Principles of user experience and user interface design</p>
        <p>Animation: Frame by frame animation</p>
        <p>Photography: Basic photography skills and photo editing</p>
        <p>Collaboration Tools: Slack, Trello, Asana</p>
      </div>
      <div className="dev-skills">
        <p>Frontend: HTML, CSS, JavaScript, React.js</p>
        <p>Backend: Node.js, Express</p>
        <p>Database: MongoDB</p>
        <p>Version Control: Git, GitHub</p>
        <p>Tools and IDEs: Visual Studio Code</p>
        <p>Other Skills: RESTful APIs</p>
      </div>
    </section>
  );
}

export default TechnologiesSection;

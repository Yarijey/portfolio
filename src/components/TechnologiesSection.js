import React from 'react';
import './TechnologiesSection.css'; 

function TechnologiesSection() {
  return (
    <section id="technologies" className="technologies-section section">
      <div className="dev-skills">
        <p> HTML, CSS</p>
        <p> JavaScript, React.js</p>
        <p> Node.js, Express</p>
        <p> MongoDB</p>
        <p> Git, GitHub</p>
        <p> Visual Studio Code</p>
        <p> RESTful APIs</p>
      </div>
      <div className="design-skills">
        <p> Adobe Creative Suite. </p>
        <p> Adobe XD, Figma, Webflow, WordPress.</p>
        <p> Understanding of font families, kerning, leading.</p>
        <p> Knowledge of print processes and file preparation.</p>
        <p> Principles of user experience and user interface design.</p>
        <p> Frame by frame stop motion animation.</p>
        <p> Basic photography skills and photo editing.</p>
        <p> Slack, Trello, Asana.</p>
      </div>
    </section>
  );
}

export default TechnologiesSection;

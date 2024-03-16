import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Ensure you have your HeroSection CSS ready

function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="hero-section">
      <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
        <a href="#hero" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* LinkedIn Button */}
      <a href="https://www.linkedin.com" className="linkedin-button">LinkedIn</a>

      {/* Customized Text and Subtitle */}
      <div className="home-text">
        <h1>HO<br/>ME</h1>
        <p>Welcome to my<br/>portfolio <a href="#projects" className="projects-link">Projects</a></p>
      </div>

      {/* Image */}
      <img src="path/to/your/image.jpg" alt="Your Description" className="landscape-photo" />
    </header>
  );
}

export default HeroSection;

import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Linking CSS to this JS file.

function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false); // State to handle scroll behavior for navbar transparency.

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Changes navbar state based on scroll position.
    };

    window.addEventListener('scroll', handleScroll); // Adds an event listener for scroll.

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleans up the event listener.
    };
  }, []);

  return (
    <header className="hero-section"> {/* Refers to .hero-section in CSS for styling */}
      <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}> {/* Applies styles based on scroll position */}
        {/* Nav links with class "nav-link" will use the global styles */}
        <a href="#hero" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      {/* LinkedIn Button with specific styling */}
      <a href="https://www.linkedin.com" className="linkedin-button">LinkedIn</a>

      {/* Section for large text and a link to the projects section */}
      <div className="home-text">
        <h1>HO<br/>ME</h1> {/* Uses global h1 styles */}
        <p>Welcome to my<br/>portfolio <a href="#projects" className="projects-link">Projects</a></p> {/* Uses global p and .projects-link styles */}
      </div>

      {/* Image with specific positioning */}
      <img src="path/to/your/image.jpg" alt="Your Description" className="landscape-photo" />
    </header>
  );
}

export default HeroSection;


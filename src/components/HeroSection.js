import React, { useState, useEffect } from 'react';
import './HeroSection.css'; 
import heroImage from '../assets/heroImage.jpg';

function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false); // State to handle scroll behavior for navbar transparency.

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Changes navbar state based on scroll position.
    };

    window.addEventListener('scroll', handleScroll); // event listener for scroll.

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleans up the event listener.
    };
  }, []);

  return (
    <header id="home" className="hero-section section"> 

      
      <div className="home-text">
        <h1>HO<br/>ME</h1> 
        <p>Welcome to my portfolio - <a href="#projects" className="projects-link">Projects </a></p> 
      </div>

      {/* Image with specific positioning */}
      <img src={heroImage} alt="Nasa-hubble-space-telescope" className="landscape-photo" />
    </header>
  );
}

export default HeroSection;


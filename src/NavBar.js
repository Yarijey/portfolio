// src/NavBar.js

import React, { useState, useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
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
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <h1>Yarijey Portfolio</h1>
      <div className="nav-menu">
        <a href="#home" className="nav-item">HOME</a>
        <a href="#about" className="nav-item">ABOUT ME</a>
        <a href="#technologies" className="nav-item">TECHNOLOGIES</a>
        <a href="#projects" className="nav-item">PROJECTS</a>
        <a href="#contact" className="nav-item">CONTACT</a>
      </div>
      <a href="https://ca.linkedin.com/in/yarijeytecher" className="nav-item special">LINKEDIN</a>
    </nav>
  );
};

export default NavBar;


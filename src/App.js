import React from 'react';
import './App.css';
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import projectDetails from './data/projectDetails';

function App() {
  return (
    <>
      <nav>
        {/* Navigation links will go here */}
        Some nav links here
      </nav>
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* About Me Section */}
        <AboutMeSection />

        {/* Technologies Section */}
        <TechnologiesSection />

        {/* Projects Section */}
        <ProjectsSection projectDetails={projectDetails} />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  );
}

export default App;


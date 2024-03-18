import React from 'react';
import './App.css';
import NavBar from './NavBar';
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import projectDetails from './data/projectDetails';

function App() {
  return (
    <>
      <NavBar /> {/* NavBar is placed here so it renders on top of all pages */}
      <main>
        <HeroSection /> {/* HeroSection is your home page */}
        <AboutMeSection />
        <TechnologiesSection />
        <ProjectsSection projectDetails={projectDetails} />
        <ContactSection />
      </main>
    </>
  );
}

export default App;

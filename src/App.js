import { ReactDOM } from "react-dom/client";
import './App.css';
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import TechnologiesSection from "./components/TechnologiesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import projectDetails from './data/projectDetails';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
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
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  </>
);

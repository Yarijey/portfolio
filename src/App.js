import { ReactDOM } from "react-dom/client";
import './App.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <nav>
      {/* Navigation links will go here */}
      Some nav links here
    </nav>
    <main>
      {/* Hero Section */}
      <section id="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm [Your Name] - [Your Profession]</p>
      </section>

      {/* About Me Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>Information about yourself</p>
      </section>

      {/* Technologies Section */}
      <section id="technologies">
        <h2>Technologies I Use</h2>
        <p>Details about the technologies you use</p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>My Projects</h2>
        <p>Details of your projects</p>
      </section>

      {/* Contact Section */}
      <footer id="contact">
        <h2>Contact Me</h2>
        <p>How people can reach you</p>
      </footer>
    </main>
  </>
);

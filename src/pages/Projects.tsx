import React from "react";
import SpotlightCard from "../components/SpotlightCard";
import Footer from "../components/Footer";
import "../css/Projects.css";
import ai_icon from "../icons/ai_icon.svg";
import innovation_icon from "../icons/innovation_icon.svg";
import liberty_icon from "../icons/liberty_icon.svg";

const Projects: React.FC = () => {
  {/*const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    // ... more items
  ];*/}
  return (
    <div className="projects-page">
      {/* Sayfa Başlığı */}
      <header className="projects-page-header">
        <h1 className="projects-page-title">Projects</h1>
        <p className="projects-subtitle">Software Engineer & Innovator</p>
      </header>

      {/* Spotlight Kartlar */}
      <div className="project-cards">
        <SpotlightCard
          className="projects-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 12, y: 12 }}
        >
          <div className="card-content">
            <img src={ai_icon} alt="AI Icon" className="card-icon" />
            <h3>AI Solutions</h3>
            <p>
              Building intelligent systems and smart automation tools to empower
              businesses and modern workflows.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="projects-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 32, y: 32 }}
        >
          <div className="card-content">
            <img
              src={innovation_icon}
              alt="Innovation Icon"
              className="card-icon"
            />
            <h3>Innovation</h3>
            <p>
              Creating forward-thinking solutions, experimenting with new
              technologies, and pushing boundaries of software development.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="projects-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 24, y: 24 }}
        >
          <div className="card-content">
            <img src={liberty_icon} alt="Liberty Icon" className="card-icon" />
            <h3>Liberty</h3>
            <p>
              Advocating open-source, ethical coding practices, and freedom of
              choice in tech solutions.
            </p>
          </div>
        </SpotlightCard>
      </div>
      {/* Footer */}
      <div style={{ position: "relative", zIndex: 1, paddingBottom: "0rem" }}>
        {/* Navbar, RotatingText, SpotlightCards vs */}
        <Footer />
      </div>
    </div>
  );
};

export default Projects;

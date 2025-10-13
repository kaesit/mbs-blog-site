import React from "react";
import SpotlightCard from "../components/SpotlightCard";
import Footer from "../components/Footer";
import "../css/About.css";
import ai_icon from "../icons/ai_icon.svg";
import innovation_icon from "../icons/innovation_icon.svg";
import liberty_icon from "../icons/liberty_icon.svg";

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Sayfa Başlığı */}
      <header className="about-header">
        <h1 className="about-title">Esad Abdullah Kösedağ</h1>
        <p className="about-subtitle">Software Engineer</p>
      </header>

      {/* Spotlight Kartlar */}
      <div className="about-cards">
        <SpotlightCard
          className="custom-spotlight-card"
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
          className="custom-spotlight-card"
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
          className="custom-spotlight-card"
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

export default About;

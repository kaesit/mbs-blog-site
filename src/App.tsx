import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import RotatingText from "./components/RotatingText";
import SpotlightCard from "./components/SpotlightCard";
import ai_icon from "./icons/ai_icon.svg";
import Aurora from "./components/Aurora";
import Silk from "./components/Silk";
import innovation_icon from "./icons/technology_icon.svg";
import liberty_icon from "./icons/liberty_icon.svg";
import ai_variation from "./icons/ai-generate-variation-spark.svg";
import FAQComponent from "./components/Faq";

const ProjectTags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className="project-tags">
    {tags.map((t) => (
      <span key={t} className="tech-tag">
        {t}
      </span>
    ))}
  </div>
);

const App: React.FC = () => {
  return (
    <>
      {/* Background gradient 
      
      <Aurora
          colorStops={["#0095ff", "#e7ef15", "#ff1616"]}
          blend={0.5}
          amplitude={1.0}
          speed={1.0}
        />

        "#0095ff", "#00eaff", "#0072fd"
          "#0095ff", "#e7ef15", "#ff1616"
      
      
      */}
      <div className="background-gradient">

        

        <Silk
          speed={3}
          scale={1}
          color="#191d5e"
          noiseIntensity={1.1}
          rotation={0}
          
        />
      </div>

      {/* Hero section */}
      <div className="hero-container">
        <h1 className="titleOfMainPage">
          <span>Mbs is</span>
        </h1>

        <RotatingText
          texts={[
            "Protecting Reality",
            "Engineering Tomorrow",
            "Developing Yourself",
            "Shaping the Future",
          ]}
          mainClassName="rotating-text"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-150%" }}
          staggerDuration={0.03}
          splitLevelClassName="overflow-hidden"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2400}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "12px",
            marginTop: "24px",
          }}
        >
          <button className="join-us-button">Join Us</button>
          <button className="learn-more-button">Learn More</button>
        </div>
      </div>

      {/* Spotlight cards */}
      <div className="cards-grid">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(87, 160, 248, 0.75)"
          position={{ x: 12, y: 12 }}
        >
          <span>
            <img src={ai_icon} alt="AI" />
            <h3>AI Solutions</h3>
            <pre>
              <code>
                Production-ready computer vision pipelines (object detection,
                segmentation, OCR) and model deployment for embedded & cloud
                platforms. Focus: latency, robustness and explainability.
              </code>
            </pre>
            <div className="card-details">
              <div>
                <strong>Selected project</strong>
                <div>Retail shelf-monitoring — 98% accuracy (prod)</div>
              </div>
              <div>
                <strong>Impact</strong>
                <div>Reduced audit time by 70%</div>
              </div>
            </div>
            <ProjectTags
              tags={["PyTorch", "ONNX", "Edge-Deploy", "CI/CD", "Quantization"]}
            />
            <div className="card-buttons">
              <a className="spotlight-index-button" href="/projects/vision">
                Case Study
              </a>
              <a className="ghost-button" href="https://github.com/kaesit">
                Code
              </a>
            </div>
          </span>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(248, 243, 87, 0.75)"
          position={{ x: 32, y: 32 }}
        >
          <span>
            <img src={innovation_icon} alt="Innovation" />
            <h3>Innovation</h3>
            <pre>
              <code>
                Rapid prototyping and proof-of-concept work that turns novel
                ideas into product-ready features. I ship experiments fast and
                measure signal with strong telemetry.
              </code>
            </pre>
            <div className="card-details">
              <div>
                <strong>Notable</strong>
                <div>
                  Adaptive recommendation engine used in beta by partners
                </div>
              </div>
              <div>
                <strong>Approach</strong>
                <div>A/B, instrumentation, safe rollouts</div>
              </div>
            </div>
            <ProjectTags
              tags={[
                "Go/TS",
                "Kubernetes",
                "Feature Flags",
                "MLOps",
                "A/B Testing",
              ]}
            />
            <div className="card-buttons">
              <a className="spotlight-index-button" href="/projects/innovation">
                Read Story
              </a>
              <a className="ghost-button" href="https://github.com/kaesit">
                Repo
              </a>
            </div>
          </span>
        </SpotlightCard>

        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(248, 87, 146, 0.75)"
          position={{ x: 24, y: 24 }}
        >
          <span>
            <img src={liberty_icon} alt="Liberty" />
            <h3>Liberty</h3>
            <pre>
              <code>
                Privacy-aware interfaces, audit-friendly designs and transparent
                models. I build with human agency, explainability and minimum
                necessary data in mind.
              </code>
            </pre>
            <div className="card-details">
              <div>
                <strong>Focus</strong>
                <div>Consent-first UX, model cards, audit logs</div>
              </div>
              <div>
                <strong>Outcome</strong>
                <div>Increased user trust in pilot cohort</div>
              </div>
            </div>
            <ProjectTags
              tags={[
                "Privacy by Design",
                "TypeScript",
                "Accessible UX",
                "Policy",
              ]}
            />
            <div className="card-buttons">
              <a className="spotlight-index-button" href="/writing/ethics">
                Read Writing
              </a>
              <a className="ghost-button" href="mailto:hello@mbs.example">
                Contact
              </a>
            </div>
          </span>
        </SpotlightCard>
      </div>

      <div className="cards-grid">
        <FAQComponent />
      </div>
      {/* Footer */}

      <Footer />
    </>
  );
};

export default App;

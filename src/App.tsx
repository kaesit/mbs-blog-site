import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";

// Icons
import Footer from "./components/Footer";
import FAQComponent from "./components/Faq";
import ai_icon from "./icons/ai_icon.svg";
import innovation_icon from "./icons/technology_icon.svg";
import liberty_icon from "./icons/liberty_icon.svg";

gsap.registerPlugin(useGSAP);

/* --- 1. CLEAN AURORA --- */
const AuroraBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Smoother, slower animation for a cleaner vibe
      gsap.utils.toArray(".aurora-blob").forEach((blob: any) => {
        gsap.to(blob, {
          x: "random(-50, 50)",
          y: "random(-50, 50)",
          scale: "random(0.9, 1.1)",
          duration: "random(10, 20)", // Slower duration = less frantic
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <div className="aurora-container" ref={containerRef}>
      <div
        className="aurora-blob"
        style={{
          background: "#3b82f6",
          width: "50vw",
          height: "50vw",
          top: "-10%",
          left: "-10%",
          opacity: 0.3,
        }}
      />
      <div
        className="aurora-blob"
        style={{
          background: "#3b82f6",
          width: "40vw",
          height: "40vw",
          top: "20%",
          right: "-10%",
          opacity: 0.25,
        }}
      />
      <div
        className="aurora-blob"
        style={{
          background: "#48ec63",
          width: "45vw",
          height: "45vw",
          bottom: "-10%",
          left: "20%",
          opacity: 0.2,
        }}
      />
    </div>
  );
};

/* --- 2. IMPACT ROTATING TEXT --- */
const RotatingText = ({ words }: { words: string[] }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // Get the height dynamically or assume logic based on CSS (1em height usually)
      const tl = gsap.timeline({ repeat: -1 });

      words.forEach((_, index) => {
        // Calculate percentage move: -100% * index
        const yPercent = index * 100;

        tl.to(track, {
          y: `-${yPercent}%`,
          duration: 0.8,
          ease: "power3.inOut", // Stronger ease for "Impact" feel
        }).to({}, { duration: 2 }); // Hold
      });

      // Reset loop
      tl.to(track, { y: 0, duration: 0.8, ease: "power3.inOut" });
    },
    { scope: trackRef }
  );

  return (
    <div className="rotating-text-wrapper">
      <div ref={trackRef} style={{ display: "flex", flexDirection: "column" }}>
        {words.map((word, i) => (
          <span className="rotating-word" key={i}>
            {word}
          </span>
        ))}
        {/* Duplicate first word for seamless loop illusion if desired, but simplified here */}
      </div>
    </div>
  );
};

/* --- 3. CLEAN SPOTLIGHT CARD --- */
const SpotlightCard = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className="spotlight-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <div className="spotlight-overlay" />
      <div className="card-content">{children}</div>
    </div>
  );
};

/* --- MAIN COMPONENT --- */
const App: React.FC = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    // Intro Animation
    tl.from(".static-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    })
      .from(
        ".rotating-text-wrapper",
        { y: 50, opacity: 0, duration: 1 },
        "-=0.8"
      )
      .from(
        ".cta-button",
        { y: 20, opacity: 0, stagger: 0.1, duration: 0.8 },
        "-=0.6"
      )
      .from(
        ".spotlight-card",
        { y: 100, opacity: 0, stagger: 0.2, duration: 1, ease: "power2.out" },
        "-=0.4"
      );
  });

  return (
    <>
      <AuroraBackground />

      <div className="hero-container">
        <div className="hero-title-wrapper">
          <h1 className="static-title">MBS IS</h1>
          <RotatingText words={["FUTURE", "REALITY", "GROWTH", "SPEED"]} />
        </div>

        <div className="hero-buttons">
          <button className="cta-button primary">Join the Team</button>
          <button className="cta-button secondary">View Work</button>
        </div>
      </div>

      <div className="cards-section">
        <div className="section-header">Selected Expertise</div>

        <div className="cards-grid">
          {/* Card 1: AI */}
          <SpotlightCard>
            <div className="card-icon-wrapper">
              <img src={ai_icon} alt="AI" />
            </div>
            <h3 className="card-title">AI Solutions</h3>
            <p className="card-description">
              Production-ready computer vision pipelines and robust model
              deployment for embedded & cloud platforms.
            </p>
            <div className="card-stats">
              <div className="stat-item">
                <strong>98% Accuracy</strong>
                <span>Retail shelf-monitoring production</span>
              </div>
            </div>
            <div className="tags-container">
              <span className="tag">PyTorch</span>
              <span className="tag">Edge Deploy</span>
            </div>
            <div className="card-links">
              <a href="/projects/vision" className="text-link">
                View Case Study →
              </a>
            </div>
          </SpotlightCard>

          {/* Card 2: Innovation */}
          <SpotlightCard>
            <div className="card-icon-wrapper">
              <img src={innovation_icon} alt="Innovation" />
            </div>
            <h3 className="card-title">Innovation</h3>
            <p className="card-description">
              Rapid prototyping that turns novel ideas into product-ready
              features using data-driven experiments.
            </p>
            <div className="card-stats">
              <div className="stat-item">
                <strong>Adaptive Engine</strong>
                <span>Used in beta by key partners</span>
              </div>
            </div>
            <div className="tags-container">
              <span className="tag">Go / TS</span>
              <span className="tag">MLOps</span>
            </div>
            <div className="card-links">
              <a href="/projects/innovation" className="text-link">
                Read Story →
              </a>
            </div>
          </SpotlightCard>

          {/* Card 3: Liberty */}
          <SpotlightCard>
            <div className="card-icon-wrapper">
              <img src={liberty_icon} alt="Liberty" />
            </div>
            <h3 className="card-title">Liberty</h3>
            <p className="card-description">
              Privacy-aware interfaces and transparent models built with human
              agency at the core.
            </p>
            <div className="card-stats">
              <div className="stat-item">
                <strong>Consent First</strong>
                <span>Increased user trust metric</span>
              </div>
            </div>
            <div className="tags-container">
              <span className="tag">Privacy by Design</span>
              <span className="tag">UX</span>
            </div>
            <div className="card-links">
              <a href="/writing/ethics" className="text-link">
                Read Writing →
              </a>
            </div>
          </SpotlightCard>
        </div>

        <center>
          <div style={{ marginTop: "2rem" }}>
            <FAQComponent />
          </div>
        </center>
      </div>

      <Footer />
    </>
  );
};

export default App;

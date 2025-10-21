import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import RotatingText from "./components/RotatingText";
import SpotlightCard from "./components/SpotlightCard";
import ai_icon from "./icons/ai_icon.svg";
import innovation_icon from "./icons/innovation_icon.svg";
import liberty_icon from "./icons/liberty_icon.svg";
import Aurora from "./components/Aurora";

function InlineLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden style={{ display: "block" }}>
      <rect x="6" y="18" width="88" height="64" rx="10" fill="none" stroke="#6facee" strokeWidth="5" />
      <path d="M22 70 L40 32 L60 70 L78 32" fill="none" stroke="#93E19E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  return (
    <>
      {/* Background: keep your existing gradient but enable aurora slightly */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: window.innerWidth < 900 ? "180rem" : "75rem",
          background: "linear-gradient(180deg, #18191c 0%, #161b22 50%, #161a20 100%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Lightweight aurora — compatible with your existing Aurora component */}
        <Aurora
          colorStops={["#3a86ff", "#2ec4b6", "#ff6b6b"]}
          blend={0.18}
          amplitude={0.45}
          speed={1.0}
        />
      </div>


      {/* RotatingText hero — kept in the flow so your existing DOM is not broken */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "12vh",
          zIndex: 1,
          position: "relative",
          gap: "0.6rem",
          padding: "2rem 1rem",
          flexWrap: "wrap",
        }}
      >
        <h1 className="titleOfMainPage" style={{ margin: 0, display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <span style={{ color: "#D7DEDF" }}>MBS is</span>
        </h1>

        <RotatingText
          texts={["Rewriting Reality", "Engineering Tomorrow", "Beyond Algorithms", "Dreaming in Binary"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-150%" }}
          staggerDuration={0.03}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2400}
        />
      </div>

      {/* Cards grid — preserved original structure and content to avoid breaking existing layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          width: "100%",
          marginTop: "8rem",
          gap: "2rem",
          justifyContent: "center",
          padding: "0 4rem",
          boxSizing: "border-box"}}
      >
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(60, 36, 147, 0.25)" position={{ x: 12, y: 12 }}>
          <span style={{ display: "block", gap: "1rem" }}>
            <img style={{ width: "48px", height: "48px" }} src={ai_icon} alt="AI" />
            <h3>AI Solutions</h3>
            <pre>
              <code>
                AI solutions empower industries with smart automation,
                predictive insights, and scalable tools for future-ready growth.
              </code>
            </pre>
            <button className="spotlight-button">
              <a style={{ textDecoration: "none", color: "#D7DEDF" }} href="https://github.com/kaesit">Learn More</a>
            </button>
          </span>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(60, 36, 147, 0.25)" position={{ x: 32, y: 32 }}>
          <span style={{ display: "block", gap: "1rem" }}>
            <img style={{ width: "48px", height: "48px" }} src={innovation_icon} alt="Innovation" />
            <h3>Innovation</h3>
            <pre>
              <code>
                Innovation drives progress through bold ideas, advanced
                research, and transformative technologies shaping tomorrow's
                world.
              </code>
            </pre>
            <button className="spotlight-button">
              <a style={{ textDecoration: "none", color: "#D7DEDF" }} href="https://github.com/kaesit">Learn More</a>
            </button>
          </span>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(60, 36, 147, 0.25)" position={{ x: 24, y: 24 }}>
          <span style={{ display: "block", gap: "1rem" }}>
            <img style={{ width: "48px", height: "48px" }} src={liberty_icon} alt="Liberty" />
            <h3>Liberty</h3>
            <pre>
              <code>
                Liberty in tech ensures open access, creative freedom, and
                ethical choices, securing human agency in digital evolution.
              </code>
            </pre>
            <button className="spotlight-button">
              <a style={{ textDecoration: "none", color: "#D7DEDF" }} href="https://github.com/kaesit">Learn More</a>
            </button>
          </span>
        </SpotlightCard>
      </div>

      {/* Duplicate block preserved to avoid breaking contracts/pages expecting it — but slightly compacted visually */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          width: "100%",
          marginTop: "4rem",
          gap: "2rem",
          justifyContent: "center",
          padding: "0 4rem",
          boxSizing: "border-box",
        }}
      >
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(60, 36, 147, 0.25)" position={{ x: 12, y: 12 }}>
          <span style={{ display: "block", gap: "1rem" }}>
            <img style={{ width: "48px", height: "48px" }} src={ai_icon} alt="AI" />
            <h3>AI Solutions</h3>
            <pre>
              <code>
                AI solutions empower industries with smart automation,
                predictive insights, and scalable tools for future-ready growth.
              </code>
            </pre>
            <button className="spotlight-button">
              <a style={{ textDecoration: "none", color: "#D7DEDF" }} href="https://github.com/kaesit">Learn More</a>
            </button>
          </span>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(60, 36, 147, 0.25)" position={{ x: 32, y: 32 }}>
          <span style={{ display: "block", gap: "1rem" }}>
            <img style={{ width: "48px", height: "48px" }} src={innovation_icon} alt="Innovation" />
            <h3>Innovation</h3>
            <pre>
              <code>
                Innovation drives progress through bold ideas, advanced
                research, and transformative technologies shaping tomorrow's
                world.
              </code>
            </pre>
            <button className="spotlight-button">
              <a style={{ textDecoration: "none", color: "#D7DEDF" }} href="https://github.com/kaesit">Learn More</a>
            </button>
          </span>
        </SpotlightCard>

        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(60, 36, 147, 0.25)" position={{ x: 24, y: 24 }}>
          <span style={{ display: "block", gap: "1rem" }}>
            <img style={{ width: "48px", height: "48px" }} src={liberty_icon} alt="Liberty" />
            <h3>Liberty</h3>
            <pre>
              <code>
                Liberty in tech ensures open access, creative freedom, and
                ethical choices, securing human agency in digital evolution.
              </code>
            </pre>
            <button className="spotlight-button">
              <a style={{ textDecoration: "none", color: "#D7DEDF" }} href="https://github.com/kaesit">Learn More</a>
            </button>
          </span>
        </SpotlightCard>
      </div>

      <div style={{ position: "relative", zIndex: 1, paddingBottom: "0rem" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;

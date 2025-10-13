import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import RotatingText from "./components/RotatingText";
import SpotlightCard from "./components/SpotlightCard";
import ai_icon from "./icons/ai_icon.svg";
import innovation_icon from "./icons/innovation_icon.svg";
import liberty_icon from "./icons/liberty_icon.svg";
import Aurora from "./components/Aurora";

function App() {
  
  return (
    <>
      {/* LetterGlitch tam ortada arka planda */}
      <div
        style={{
          position: "absolute",
          top: 0,
          background: "linear-gradient(180deg, #0d1a2f 0%, #1a2a44 50%, #2b3e5a 100%)",
          left: 0,
          width: "100%",
          height: window.innerWidth < 900 ? "180rem" : "75rem",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* 363ED6 #6facee */}
        {/*<LetterGlitch
          glitchSpeed={20}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={["#93E19E", "#ADAECD", "#ff6f76"]}
          characters="MBSLIBERTYTECHLIFESYSTEMORDERFREEDOMINNOVATIONFUTURE"
        />*/}
        {/*<Aurora
          colorStops={["#4fe838", "#2c7df6", "#ee101b"]}
          blend={0.2}
          amplitude={0.5}
          speed={1.5}
        />*/}
      </div>

      {/* Navbar en üstte */}

      {/* RotatingText de ortalanabilir ama şu an normal DOM akışında */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: "12vh",
          zIndex: 1, // LetterGlitch’in üzerinde
          position: "relative",
        }}
      >
        <h1 className="titleOfMainPage">MBS is</h1>
        <RotatingText
          texts={["Innovative", "Free", "Future", "Dynamic"]}
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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          width: "100%",
          marginTop: "8rem",
          gap: "2rem", // ✅ adds space between cards
          justifyContent: "center", // optional, centers them horizontally
          padding: "0 4rem", // ✅ adds left/right spacing
          boxSizing: "border-box", // makes sure padding doesn’t overflow
        }}
      >
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 12, y: 12 }}
        >
          <span
            style={{
              display: "block",
              gap: "1rem",
            }}
          >
            <img
              style={{
                width: "48px",
                height: "48px",
              }}
              src={ai_icon}
              alt=""
            />
            <h3>AI Solutions</h3>
            <pre>
              <code>
                AI solutions empower industries with smart automation,
                predictive insights, and scalable tools for future-ready growth.
              </code>
            </pre>
            <button className="spotlight-button">
              <a
                style={{
                  textDecoration: "none",
                  color: "#D7DEDF",
                }}
                href="https://github.com/kaesit"
              >
                Learn More
              </a>
            </button>
          </span>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 32, y: 32 }}
        >
          <span
            style={{
              display: "block",
              gap: "1rem",
            }}
          >
            <img
              style={{
                width: "48px",
                height: "48px",
              }}
              src={innovation_icon}
              alt=""
            />
            <h3>Innovation</h3>
            <pre>
              <code>
                Innovation drives progress through bold ideas, advanced
                research, and transformative technologies shaping tomorrow's
                world.
              </code>
            </pre>
            <button className="spotlight-button">
              <a
                style={{
                  textDecoration: "none",
                  color: "#D7DEDF",
                }}
                href="https://github.com/kaesit"
              >
                Learn More
              </a>
            </button>
          </span>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 24, y: 24 }}
        >
          <span
            style={{
              display: "block",
              gap: "1rem",
            }}
          >
            <img
              style={{
                width: "48px",
                height: "48px",
              }}
              src={liberty_icon}
              alt=""
            />
            <h3>Liberty</h3>
            <pre>
              <code>
                Liberty in tech ensures open access, creative freedom, and
                ethical choices, securing human agency in digital evolution.
              </code>
            </pre>
            <button className="spotlight-button">
              <a
                style={{
                  textDecoration: "none",
                  color: "#D7DEDF",
                }}
                href="https://github.com/kaesit"
              >
                Learn More
              </a>
            </button>
          </span>
        </SpotlightCard>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          width: "100%",
          marginTop: "8rem",
          gap: "2rem", // ✅ adds space between cards
          justifyContent: "center", // optional, centers them horizontally
          padding: "0 4rem", // ✅ adds left/right spacing
          boxSizing: "border-box", // makes sure padding doesn’t overflow
        }}
      >
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 12, y: 12 }}
        >
          <span
            style={{
              display: "block",
              gap: "1rem",
            }}
          >
            <img
              style={{
                width: "48px",
                height: "48px",
              }}
              src={ai_icon}
              alt=""
            />
            <h3>AI Solutions</h3>
            <pre>
              <code>
                AI solutions empower industries with smart automation,
                predictive insights, and scalable tools for future-ready growth.
              </code>
            </pre>
            <button className="spotlight-button">
              <a
                style={{
                  textDecoration: "none",
                  color: "#D7DEDF",
                }}
                href="https://github.com/kaesit"
              >
                Learn More
              </a>
            </button>
          </span>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 32, y: 32 }}
        >
          <span
            style={{
              display: "block",
              gap: "1rem",
            }}
          >
            <img
              style={{
                width: "48px",
                height: "48px",
              }}
              src={innovation_icon}
              alt=""
            />
            <h3>Innovation</h3>
            <pre>
              <code>
                Innovation drives progress through bold ideas, advanced
                research, and transformative technologies shaping tomorrow's
                world.
              </code>
            </pre>
            <button className="spotlight-button">
              <a
                style={{
                  textDecoration: "none",
                  color: "#D7DEDF",
                }}
                href="https://github.com/kaesit"
              >
                Learn More
              </a>
            </button>
          </span>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(60, 36, 147, 0.25)"
          position={{ x: 24, y: 24 }}
        >
          <span
            style={{
              display: "block",
              gap: "1rem",
            }}
          >
            <img
              style={{
                width: "48px",
                height: "48px",
              }}
              src={liberty_icon}
              alt=""
            />
            <h3>Liberty</h3>
            <pre>
              <code>
                Liberty in tech ensures open access, creative freedom, and
                ethical choices, securing human agency in digital evolution.
              </code>
            </pre>
            <button className="spotlight-button">
              <a
                style={{
                  textDecoration: "none",
                  color: "#D7DEDF",
                }}
                href="https://github.com/kaesit"
              >
                Learn More
              </a>
            </button>
          </span>
        </SpotlightCard>
      </div>

      <div style={{ position: "relative", zIndex: 1, paddingBottom: "0rem" }}>
        {/* Navbar, RotatingText, SpotlightCards vs */}
        <Footer />
      </div>
    </>
  );
}

export default App;

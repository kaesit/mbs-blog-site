import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
import "./index.css";
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
          left: "25%",
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
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !overlayRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    overlayRef.current.style.setProperty("--x", `${x}px`);
    overlayRef.current.style.setProperty("--y", `${y}px`);

    gsap.to(cardRef.current, {
      rotateX: (y / rect.height - 0.5) * -6,
      rotateY: (x / rect.width - 0.5) * 6,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      y: 0,
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      y: -8,
      scale: 1.01,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className="
        relative group cursor-pointer
        rounded-3xl p-8
        bg-white/[0.04]
        border border-white/10
        backdrop-blur-xl
        transition-colors
        overflow-hidden
      "
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Spotlight */}
      <div
        ref={overlayRef}
        className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
        "
        style={{
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(135, 241, 99, 0.15), transparent 40%)",
        }}
      />

      <div
        className="
          absolute inset-0 rounded-3xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-500
          ring-1 ring-inset ring-indigo-400/20
        "
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-6">{children}</div>
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
        ".spotlight-main-card",
        { y: 100, opacity: 0, stagger: 0.2, duration: 1, ease: "power2.out" },
        "-=0.4"
      );
  });

  return (
    <>
      {/*<AuroraBackground />*/}

      <div className="hero-container">
        <div className="hero-title-wrapper">
          <h1 className="static-title titleOfMainPage">MBS IS</h1>
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
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <img src={ai_icon} alt="AI" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI Solutions</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Production-ready computer vision pipelines and robust model
              deployment for embedded & cloud platforms.
            </p>

            <div className="rounded-xl bg-white/5 p-4">
              <strong className="text-white block">98% Accuracy</strong>
              <span className="text-sm text-gray-400">
                Retail shelf-monitoring production
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm">
                PyTorch
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm">
                Edge Deploy
              </span>
            </div>

            <a
              href="/projects/vision"
              className="text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              View Case Study →
            </a>
          </SpotlightCard>

          {/* Card 2: Innovation */}
          <SpotlightCard>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <img src={ai_icon} alt="AI" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI Solutions</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Production-ready computer vision pipelines and robust model
              deployment for embedded & cloud platforms.
            </p>

            <div className="rounded-xl bg-white/5 p-4">
              <strong className="text-white block">98% Accuracy</strong>
              <span className="text-sm text-gray-400">
                Retail shelf-monitoring production
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm">
                PyTorch
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm">
                Edge Deploy
              </span>
            </div>

            <a
              href="/projects/vision"
              className="text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              View Case Study →
            </a>
          </SpotlightCard>

          {/* Card 3: Liberty */}
          <SpotlightCard>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <img src={ai_icon} alt="AI" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI Solutions</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Production-ready computer vision pipelines and robust model
              deployment for embedded & cloud platforms.
            </p>

            <div className="rounded-xl bg-white/5 p-4">
              <strong className="text-white block">98% Accuracy</strong>
              <span className="text-sm text-gray-400">
                Retail shelf-monitoring production
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm">
                PyTorch
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm">
                Edge Deploy
              </span>
            </div>

            <a
              href="/projects/vision"
              className="text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              View Case Study →
            </a>
          </SpotlightCard>
          <SpotlightCard>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <img src={ai_icon} alt="AI" className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">AI Solutions</h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Production-ready computer vision pipelines and robust model
              deployment for embedded & cloud platforms.
            </p>

            <div className="rounded-xl bg-white/5 p-4">
              <strong className="text-white block">98% Accuracy</strong>
              <span className="text-sm text-gray-400">
                Retail shelf-monitoring production
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm">
                PyTorch
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-sm">
                Edge Deploy
              </span>
            </div>

            <a
              href="/projects/vision"
              className="text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              View Case Study →
            </a>
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

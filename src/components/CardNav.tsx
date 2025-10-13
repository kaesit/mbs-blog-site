import React, { useLayoutEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from "react-icons/go";
import "../css/CardNav.css";
import { Avatar } from "@mui/material";
import CustomAvatarMenu from "./CustomAvatarMenu";



type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  className = "",
  ease = "power3.out",
  menuColor,
  buttonBgColor,
  buttonTextColor,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // ✅ Düzeltilmiş height hesaplama fonksiyonu
  const calculateHeight = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const topBarHeight = 60;
    const padding = 32; // Top ve bottom padding

    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
      if (contentEl) {
        // Geçici olarak görünür yap ve yüksekliği ölç
        const originalStyles = {
          visibility: contentEl.style.visibility,
          position: contentEl.style.position,
          height: contentEl.style.height,
          opacity: contentEl.style.opacity,
          transform: contentEl.style.transform,
        };

        // Ölçüm için geçici stil değişiklikleri
        gsap.set(contentEl, {
          visibility: "visible",
          position: "static",
          height: "auto",
          opacity: 1,
          y: 0,
        });

        // Force reflow
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        contentEl.offsetHeight && null;

        const contentHeight = contentEl.scrollHeight;

        // Orijinal stilleri geri yükle
        gsap.set(contentEl, originalStyles);

        return topBarHeight + contentHeight + padding;
      }
    } else {
      // Desktop için sabit yükseklik (kartlar yan yana)
      const cardHeight = 160; // Ortalama kart yüksekliği
      return topBarHeight + cardHeight + padding;
    }

    return 260;
  }, []);

  // ✅ Düzeltilmiş timeline oluşturma
  const createTimeline = useCallback(() => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight(),
      duration: 0.4,
      ease,
      onComplete: () => {
        // Animation tamamlandığında overflow'u visible yap
        gsap.set(navEl, { overflow: "visible" });
      },
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      "-=0.1"
    );

    return tl;
  }, [calculateHeight, ease]);

  // ✅ Dependency array düzeltildi
  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [createTimeline, items]);

  // ✅ Resize handler düzeltildi
  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      // Debounce resize events
      const resizeTimeout = setTimeout(() => {
        if (isExpanded && tlRef.current) {
          const newHeight = calculateHeight();

          // Mevcut timeline'ı durdur
          tlRef.current.kill();

          // Yeni height'ı direkt set et
          gsap.set(navRef.current, { height: newHeight, overflow: "visible" });

          // Yeni timeline oluştur ve tamamlanmış state'e getir
          const newTl = createTimeline();
          if (newTl) {
            newTl.progress(1);
            tlRef.current = newTl;
          }
        } else {
          // Kapalı durumda yeni timeline oluştur
          tlRef.current?.kill();

          const newTl = createTimeline();
          if (newTl) {
            tlRef.current = newTl;
          }
        }
      }, 100);

      return () => clearTimeout(resizeTimeout);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpanded, calculateHeight, createTimeline]);

  // ✅ Toggle menu fonksiyonu düzeltildi
  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;

    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);

      // Yeni height hesapla ve timeline'ı güncelle
      const newHeight = calculateHeight();
      if (tl.vars && typeof tl.vars === "object") {
        (tl.vars as any).height = newHeight;
      }

      tl.play(0);
    } else {
      setIsHamburgerOpen(false);

      tl.eventCallback("onReverseComplete", () => {
        setIsExpanded(false);
        // Reverse tamamlandığında overflow'u hidden yap
        if (navRef.current) {
          gsap.set(navRef.current, { overflow: "hidden" });
        }
      });

      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""}`}
        style={{}}
      >
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            tabIndex={0}
            style={{ color: menuColor || "#000" }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleMenu();
              }
            }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            <img src={logo} alt={logoAlt} className="logo" />
          </div>

          <div className="card-nav-cta">
            <button
              type="button"
              className="card-nav-cta-button"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
            >
              <a className="home-link-a" href="/">
                Home
              </a>
            </button>
            <CustomAvatarMenu />
          </div>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 4).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight
                      className="nav-card-link-icon"
                      aria-hidden="true"
                    />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;

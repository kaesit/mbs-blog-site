import React from "react";
import "../css/Footer.css";

const Footer: React.FC = () => {
  return (
    <center>
      <footer className="footer-container">
        <div className="footer-content">
          {/* Sol kısım */}
          <div className="footer-section" id="footer-brand-section">
            <img src="../MbsLogo.png" alt="" className="footer-brand-logo" />
            <h4 className="footer-title">MBS Liberty Tech</h4>
            <p className="footer-text">
              Building innovative solutions with freedom, order, and creativity.
            </p>
          </div>

          {/* Orta linkler */}
          <div className="footer-section" id="footer-link-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="https://github.com/kaesit">Blogs</a>
              </li>
              <li>
                <a href="https://github.com/kaesit">Contact</a>
              </li>
            </ul>
          </div>

          {/* Sosyal medya */}
          <div className="footer-section" id="footer-social-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-socials">
              <ul className="footer-links">
                <li>
                  <a href="https://github.com/kaesit">Github</a>
                </li>
                <li>
                  <a href="https://linkedin.com">LinkedIn</a>
                </li>
                <li>
                  <a href="https://instagram.com">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Alt copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Esad Abdullah Kösedağ. All rights
            reserved.
          </p>
        </div>
      </footer>
    </center>
  );
};

export default Footer;

export {};

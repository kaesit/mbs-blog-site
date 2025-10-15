import React from "react";
import "../css/BlogContentPage.css";
import SpotlightCard from "../components/SpotlightCard";
import Footer from "../components/Footer";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Masonry from "@mui/lab/Masonry";
import { Paper } from "@mui/material";

import image from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpeg";
import image5 from "../img/image5.png";
import image6 from "../img/image6.jpg";
import image7 from "../img/image7.jpg";
import image8 from "../img/image8.jpg";
import image9 from "../img/image9.jpg";
import image10 from "../img/image10.png";

// Custom MUI Components
{
  /*color: "#58A6F0",*/
}
const BlogTitle = styled(Typography)({
  fontFamily: "VVDS Fifties Exp SBold Italic",
  fontWeight: 800,
  fontSize: "3.5rem",
  color: "#58f0b5",
  marginBottom: "1.3rem",
});

const BlogText = styled(Typography)({
  fontFamily:
    'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  fontSize: "1.1rem",
  lineHeight: 1.8,
  color: "#d7dedf",
});

const BlogAvatar = styled(Avatar)({
  width: 50,
  height: 50,
  border: "1px solid #58f0b5",
  borderRadius: "0.75rem",
});

const SectionTitle = styled(Typography)({
  fontFamily: "Lekton",
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "#58f0b5",
  margin: "2rem 0 1rem 0",
});
const MediaImage = styled("img")({
  width: "100%",
  borderRadius: "1rem",
});

const ActionButton = styled(Button)({
  backgroundColor: "#4dbb91",
  color: "#fff",
  borderRadius: "0.75rem",
  textTransform: "none",
  fontWeight: 600,
  fontFamily: "VVDS Fifties Exp SBold",

  "&:hover": {
    backgroundColor: "#73b099ff",
  },
});

const BlogContentPage: React.FC = () => {
  const mediaImages = [
    image,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <div className="blog-content-page">
      {/* Başlık */}
      <header className="blog-content-header">
        <BlogTitle>Vigor of liberated software</BlogTitle>
        <div className="blog-author-meta">
          <BlogAvatar alt="Author" src={image} />
          <Typography className="author-name">
            <a href="/profilepage">Esad Abdullah Kösedağ</a>
          </Typography>
          <Typography className="blog-date">Sept 17, 2025</Typography>
        </div>
      </header>

      {/* Blog İçerik */}
      <SpotlightCard
        className="blog-main-spotlight"
        spotlightColor="rgba(60, 36, 147, 0.15)"
        position={{ x: 10, y: 10 }}
      >
        <div className="blog-content-text">
          <BlogText>
            Liberated software is more than just free software—it's a movement
            that empowers users to explore, modify, and shape their digital
            tools. By breaking free from proprietary constraints, liberated
            software promotes freedom, collaboration, and innovation. In this
            post, we’ll explore how liberated software transforms the tech
            landscape, providing a vital foundation for creativity and growth.
          </BlogText>

          <SectionTitle>Introduction</SectionTitle>
          <BlogText>
            The term “liberated software” goes beyond free access. It’s about
            offering users the **freedom** to control their digital
            environments. Unlike proprietary software, which locks users into
            rigid, commercial models, liberated software allows full access to
            source code, making it possible to study, modify, and redistribute.
            This freedom creates a dynamic ecosystem where innovation thrives,
            and collaboration between developers and users becomes the norm.
          </BlogText>

          <SectionTitle>Key Features</SectionTitle>
          <BlogText>
            -Liberated software has a profound impact on both individual users
            and the broader tech community. Some key features include:
            <br />- **Rapid Advancements**: Open-source projects evolve quickly,
            with global contributions pushing the software forward faster than
            proprietary alternatives.
            <br />- **Customization**: Users can tailor the software to meet
            their needs, ensuring it’s flexible and adaptable for various use
            cases.
            <br />- **Security and Transparency**: With open code,
            vulnerabilities can be detected and fixed by the community, offering
            an additional layer of security.
            <br />- **Ethical Considerations**: Open-source projects often
            prioritize user rights and privacy over corporate profits, providing
            a more ethical alternative to many proprietary solutions.
          </BlogText>

          <SectionTitle>References</SectionTitle>
          <BlogText>
            Here are some essential resources to learn more about liberated
            software:
            <br />
            1. **MDN Web Docs** – Comprehensive documentation on web
            technologies and development practices.
            <br />
            2. **Material UI Documentation** – Official guide to building modern
            web applications with Material UI.
            <br />
            3. **CSS-Tricks Tutorials** – Learn practical CSS and design
            techniques that are widely used in modern web development.
          </BlogText>

          <SectionTitle>Media</SectionTitle>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={2}>
            {mediaImages.map((src, idx) => (
              <Paper
                key={idx}
                elevation={3}
                sx={{
                  borderRadius: "1rem",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px) scale(1.03)",
                    boxShadow: "0 12px 25px rgba(0,0,0,0.4)",
                  },
                }}
              >
                <img
                  src={src}
                  alt={`img-${idx}`}
                  style={{ width: "100%", display: "block" }}
                />
              </Paper>
            ))}
          </Masonry>

          <ActionButton>Read More</ActionButton>
        </div>
      </SpotlightCard>

      <SpotlightCard
        className="blog-more-section-spotlight"
        spotlightColor="rgba(60, 36, 147, 0.15)"
        position={{ x: 10, y: 10 }}
      >
        <div className="blog-content-text">
          {/*<div className="little-news-cards">
            <img src={image10} alt="" />
          </div>
          <div className="little-news-cards">
            <img src={image10} alt="" />
          </div>
          <div className="little-news-cards">
            <img src={image10} alt="" />
          </div>
          <div className="little-news-cards">
            <img src={image10} alt="" />
          </div>
          <div className="little-news-cards">
            <img src={image10} alt="" />
          </div>*/}
          <SectionTitle>References</SectionTitle>
          <BlogText>
            Here are some essential resources to learn more about liberated
            software:
            <br />
            1. **MDN Web Docs** – Comprehensive documentation on web
            technologies and development practices.
            <br />
            2. **Material UI Documentation** – Official guide to building modern
            web applications with Material UI.
            <br />
            3. **CSS-Tricks Tutorials** – Learn practical CSS and design
            techniques that are widely used in modern web development.
          </BlogText>
        </div>
      </SpotlightCard>

      {/* Footer */}
      <div
        className="footer-wrapper"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Navbar, RotatingText, SpotlightCards vs */}
        <Footer />
      </div>
    </div>
  );
};

export default BlogContentPage;

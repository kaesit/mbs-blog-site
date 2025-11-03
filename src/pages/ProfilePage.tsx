import React from "react";
import "../css/ProfilePage.css";
import SpotlightCard from "../components/SpotlightCard";
import Footer from "../components/Footer";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import GlareHover from "../components/GlareHover";

import image from "../img/image14.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpeg";
import image5 from "../img/image5.png";
import image6 from "../img/image6.jpg";
import image7 from "../img/image7.jpg";
import image8 from "../img/image8.jpg";
import image9 from "../img/image9.jpg";

import project_icon from "../icons/project_icon.svg";
import article_icon from "../icons/article_icon.svg";
import all_icon from "../icons/all_icon.svg";
import blog_icon from "../icons/blog_icon.svg";
import video_icon from "../icons/video_icon.svg";






const BlogTitle = styled(Typography)({
  fontFamily: "Lekton",
  fontWeight: 800,
  fontSize: "2.5rem",
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
  backgroundColor: "transparent",
  color: "#fff",
  borderRadius: "0.75rem",
  textTransform: "none",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  fontWeight: 600,
  fontFamily:
    'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  "&:hover": {
    backgroundColor: "#49afee9c",
  },

});

const ProfilePage: React.FC = () => {
  return (
    <div className="profile-page">
      {/* Başlık */}
      <div className="profile-owner">
        <BlogAvatar alt="Author" src={image} />
        <Typography className="profile-name">
          <a href="/profilepage">Esad Abdullah Kösedağ</a>
        </Typography>
        <Typography className="blog-date">Oct 13, 2025</Typography>
      </div>


      <div className="filter_section">
        <div>
          <ActionButton variant="contained"><img style={{width:"15px", height:"15px", marginRight: "8px"}} src={all_icon} alt="" />All</ActionButton>
        </div>
        <div>
          <ActionButton variant="contained"><img style={{width:"15px", height:"15px", marginRight: "8px"}} src={video_icon} alt="" />Videos</ActionButton>
        </div>
        <div>
          <ActionButton variant="contained"><img style={{width:"15px", height:"15px", marginRight: "8px"}} src={blog_icon} alt="" />Blogs</ActionButton>
        </div>
        <div>
          <ActionButton variant="contained"><img style={{width:"15px", height:"15px", marginRight: "8px"}} src={project_icon} alt="" />Projects</ActionButton>
        </div>
        <div>
          <ActionButton variant="contained"><img style={{width:"15px", height:"15px", marginRight: "8px"}} src={article_icon} alt="" />Articles</ActionButton>
        </div>
      </div>
      {/* Blog İçerik */}
      <div className="grid_container">
        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ffffff"
          glareOpacity={0.6}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={600}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image} alt="" />
        </GlareHover>
        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ffffff"
          glareOpacity={0.6}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={600}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image2} alt="" />
        </GlareHover>

        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ffffff"
          glareOpacity={0.6}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={600}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image3} alt="" />
        </GlareHover>
        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={500}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image4} alt="" />
        </GlareHover>
        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ffffff"
          glareOpacity={0.6}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={500}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image5} alt="" />
        </GlareHover>
        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ffffff"
          glareOpacity={0.6}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={500}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image6} alt="" />
        </GlareHover>
        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ffffff"
          glareOpacity={0.6}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={500}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image7} alt="" />
        </GlareHover>
        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ffffff"
          glareOpacity={0.6}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={500}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image8} alt="" />
        </GlareHover>
        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ff0303ff"
          glareOpacity={0.6}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={600}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image9} alt="" />
        </GlareHover>
        <GlareHover
          width="270px"
          height="270px"
          glareColor="#ffffff"
          glareOpacity={0.6}
          glareAngle={-30}
          glareSize={400}
          transitionDuration={600}
          playOnce={false}
        >
          <img style={{ width: "100%", height: "100%" }} src={image9} alt="" />
        </GlareHover>
      </div>

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

export default ProfilePage;

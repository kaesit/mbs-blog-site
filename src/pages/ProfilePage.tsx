import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import project_icon from "../icons/project_icon.svg";
import article_icon from "../icons/article_icon.svg";
import all_icon from "../icons/all_icon.svg";
import { ReactComponent as AllIcon } from "../icons/all_icon.svg";
import blog_icon from "../icons/blog_icon.svg";
import video_icon from "../icons/video_icon.svg";
import menu_icon from "../icons/menu_icons.svg";
import image from "../img/image14.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpeg";
import image5 from "../img/image5.png";
import image6 from "../img/image6.jpg";
import image7 from "../img/image7.jpg";
import image8 from "../img/image8.jpg";
import image9 from "../img/image9.jpg";
import image10 from "../img/image10.png";

// --- MOCK DATA & ASSETS ---
const AVATAR_IMG =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80";

// Farklı resimlerden oluşan bir dizi
const BLOG_IMAGES = [
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

// --- STYLED COMPONENTS ---

const PageContainer = styled("div")({
  backgroundColor: "#0a0a0a", // Dark background
  minHeight: "100vh",
  color: "#ffffff",
  fontFamily: '"Cascadia Code", "Courier New", monospace',
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const CustomMenu = styled(Menu)(() => ({
  "& .MuiPaper-root": {
    background: "#161a20",
    color: "#d7dedf",
    fontFamily: "Lekton", // Fallback will occur if font not loaded
    fontWeight: "700",
    borderRadius: "0.75rem",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow:
      "0 8px 24px rgba(0, 0, 0, 0.4), 0 0 12px rgba(147, 185, 225, 0.2)",
    minWidth: 200,
    padding: "0.5rem 0",
  },
}));

const CustomMenuItem = styled(MenuItem)(() => ({
  fontWeight: "700",
  fontFamily: '"Cascadia Code", monospace',
  "&:hover": {
    backgroundColor: "rgba(147,185,225,0.15)",
    color: "#58f0b5",
  },
}));

const ActionButton = styled(Button)({
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: "#fff",
  borderRadius: "0.75rem",
  textTransform: "none",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  fontWeight: 600,
  padding: "8px 16px",
  fontFamily: '"Cascadia Code", monospace',
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#34dfa5",
    borderColor: "#34dfa5",
    backgroundColor: "rgba(52, 223, 165, 0.1)",
  },
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const BlogAvatar = styled(Avatar)({
  width: 80,
  height: 80,
  border: "2px solid #58f0b5",
  borderRadius: "0.75rem",
  marginBottom: "1rem",
});

const GlareCardContainer = styled("div")({
  position: "relative",
  width: "100%", // Responsive olması için width %100 yapıldı
  height: "270px",
  borderRadius: "12px",
  overflow: "hidden",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 30px rgba(88, 240, 181, 0.2)",
    borderColor: "#58f0b5",
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
});

const CardContent = styled("div")({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "1rem",
  background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

// --- SUB-COMPONENTS ---

// 1. Mock Footer
const Footer = () => (
  <div
    style={{
      marginTop: "4rem",
      padding: "2rem",
      borderTop: "1px solid #333",
      width: "100%",
      textAlign: "center",
      color: "#666",
    }}
  >
    <Typography variant="body2">
      © 2025 Esad Abdullah Kösedağ. All rights reserved.
    </Typography>
  </div>
);

// 2. GlareHover Component (Simplified)
const GlareHover: React.FC<{
  children: React.ReactNode;
  [key: string]: any;
}> = ({ children }) => {
  return <GlareCardContainer>{children}</GlareCardContainer>;
};

// 3. Project Tags
const ProjectTags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div
    style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "8px" }}
  >
    {tags.slice(0, 3).map((t) => (
      <span
        key={t}
        style={{
          fontSize: "0.65rem",
          background: "rgba(88, 240, 181, 0.2)",
          color: "#58f0b5",
          padding: "2px 6px",
          borderRadius: "4px",
        }}
      >
        {t}
      </span>
    ))}
  </div>
);

// --- MAIN COMPONENT ---

const ProfilePage: React.FC = () => {
  // State for the "More Option" menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Kart verileri (Mock Data)
  const posts = [
    {
      id: 1,
      title: "Is AI taking over?",
      date: "13.11.2025",
      tags: ["PyTorch", "ONNX"],
    },
    {
      id: 2,
      title: "Computer Vision Advances",
      date: "10.11.2025",
      tags: ["Blockchain", "Solidity"],
    },
    {
      id: 3,
      title: "Framer vs Figma",
      date: "08.11.2025",
      tags: ["Frontend", "JS"],
    },
    {
      id: 4,
      title: "Pythonic code",
      date: "05.11.2025",
      tags: ["Physics", "Qubit"],
    },
    {
      id: 5,
      title: "AI Trends",
      date: "01.11.2025",
      tags: ["Security", "Network"],
    },
    {
      id: 6,
      title: "Cloud Architecture",
      date: "28.10.2025",
      tags: ["AWS", "Azure"],
    },
    {
      id: 7,
      title: "Art of designing UI",
      date: "25.10.2025",
      tags: ["Flutter", "Dart"],
    },
    {
      id: 8,
      title: "Python and Cpp for OpenGL",
      date: "20.10.2025",
      tags: ["Python", "Pandas"],
    },
  ];

  return (
    <PageContainer>
      {/* 1. Header Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5rem",
          marginBottom: "3rem",
        }}
      >
        <BlogAvatar alt="Author" src={AVATAR_IMG} />
        <Typography
          variant="h5"
          style={{ fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}
        >
          Esad Abdullah Kösedağ
        </Typography>
        <Typography variant="body2" style={{ color: "#888" }}>
          Oct 13, 2025
        </Typography>
      </div>

      {/* 2. Filter Section */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <ActionButton variant="contained">
          <img
            className="action-btn-icon"
            style={{ width: "15px", height: "15px", marginRight: "8px" }}
            src={all_icon}
            alt=""
          />{" "}
          All
        </ActionButton>
        <ActionButton variant="contained">
          <img
            className="action-btn-icon"
            style={{ width: "15px", height: "15px", marginRight: "8px" }}
            src={video_icon}
            alt=""
          />{" "}
          Videos
        </ActionButton>
        <ActionButton variant="contained">
          <img
            className="action-btn-icon"
            style={{ width: "15px", height: "15px", marginRight: "8px" }}
            src={blog_icon}
            alt=""
          />{" "}
          Blogs
        </ActionButton>
        <ActionButton variant="contained">
          <img
            className="action-btn-icon"
            style={{ width: "15px", height: "15px", marginRight: "8px" }}
            src={project_icon}
            alt=""
          />{" "}
          Projects
        </ActionButton>
        <ActionButton variant="contained">
          <img
            className="action-btn-icon"
            style={{ width: "15px", height: "15px", marginRight: "8px" }}
            src={article_icon}
            alt=""
          />{" "}
          Articles
        </ActionButton>

        {/* More Option Button */}
        <div style={{ position: "relative" }}>
          <ActionButton variant="contained" onClick={handleClick}>
            <img
              className="action-btn-icon"
              style={{ width: "15px", height: "15px", marginRight: "8px" }}
              src={menu_icon}
              alt=""
            />{" "}
            More Option
          </ActionButton>

          <CustomMenu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <CustomMenuItem onClick={handleClose}>
              <LoginRoundedIcon
                fontSize="small"
                style={{ marginRight: "8px" }}
              />
              <Typography
                variant="body2"
                sx={{ fontFamily: "inherit", fontWeight: "bold" }}
              >
                Sign In
              </Typography>
            </CustomMenuItem>
            <CustomMenuItem onClick={handleClose}>
              <AccountCircle fontSize="small" style={{ marginRight: "8px" }} />
              <Typography
                variant="body2"
                sx={{ fontFamily: "inherit", fontWeight: "bold" }}
              >
                Profile
              </Typography>
            </CustomMenuItem>
            <CustomMenuItem onClick={handleClose}>
              <Settings fontSize="small" style={{ marginRight: "8px" }} />
              <Typography
                variant="body2"
                sx={{ fontFamily: "inherit", fontWeight: "bold" }}
              >
                Settings
              </Typography>
            </CustomMenuItem>
            <Divider style={{ background: "rgba(255,255,255,0.1)" }} />
            <CustomMenuItem onClick={handleClose}>
              <Logout fontSize="small" style={{ marginRight: "8px" }} />
              <Typography
                variant="body2"
                sx={{ fontFamily: "inherit", fontWeight: "bold" }}
              >
                Logout
              </Typography>
            </CustomMenuItem>
          </CustomMenu>
        </div>
      </div>

      {/* 3. Grid Container */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
          gap: "24px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Mock verileri ve Resim Dizisini Eşleştirme */}
        {posts.map((post, index) => (
          <GlareHover key={post.id}>
            {/* Modulo (%) operatörü ile resimler döngüye girer, resim sayısı az olsa bile hata vermez */}
            <img
              src={BLOG_IMAGES[index % BLOG_IMAGES.length]}
              alt={post.title}
            />
            <CardContent>
              <Typography
                variant="body2"
                style={{ color: "#fff", fontWeight: "bold" }}
              >
                {post.title}
              </Typography>
              <Typography variant="caption" style={{ color: "#aaa" }}>
                {post.date}
              </Typography>
              <ProjectTags tags={post.tags} />
            </CardContent>
          </GlareHover>
        ))}
      </div>

      <Footer />
    </PageContainer>
  );
};

export default ProfilePage;

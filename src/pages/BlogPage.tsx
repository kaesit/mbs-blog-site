import React, { useEffect, useState } from "react";
import SpotlightCard from "../components/SpotlightCard";
import "../css/BlogPage.css";
import logo from "../logo.svg";
import Footer from "../components/Footer";
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


import { Skeleton, Avatar, Typography } from "@mui/material";

interface BlogPost {
  id: number;
  img?: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
}

const BlogPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  // Simülasyon: API'den veri çekiyormuş gibi 2s delay
  useEffect(() => {
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          img: image,
          title: "Building Future with AI",
          excerpt:
            "You're gonna experince how we shape the future of all industries with AI solutions.",
          author: "Esad A. Kösedağ",
          date: "14 Eylül 2025",
        },
        {
          id: 2,
          img: image2,
          title: "Vigor of liberated software",
          excerpt:
            "Liberty and its advantages in computer science and open source technologies",
          author: "Esad A. Kösedağ",
          date: "10 Eylül 2025",
        },
        {
          id: 3,
          img: image3,
          title: "How to choose correct computer science lectures?",
          excerpt:
            "Optimize your college life with choosing correct computer science lectures by your interest.",
          author: "Esad A. Kösedağ",
          date: "10 Eylül 2025",
        },
        {
          id: 4,
          img: image4,
          title: "AI Powered Game Engine Tools",
          excerpt:
            "AI powered game engine tools and new game production methods are really changing the game development but at same time stories are evolving backwards.",
          author: "Esad A. Kösedağ",
          date: "10 Eylül 2025",
        },
        {
          id: 5,
          img: image5,
          title: "Software Techonlogies in Space and Aviation Industry",
          excerpt:
            "Tesla's new optimus robots are gonna help us to colonize mars.",
          author: "Esad A. Kösedağ",
          date: "10 Eylül 2025",
        },
        {
          id: 6,
          img: image6,
          title: "New AI model Naomi by MBS Technologies has released!!!",
          excerpt:
            "Tesla's new optimus robots are gonna help us to colonize mars.",
          author: "Esad A. Kösedağ",
          date: "10 Eylül 2025",
        },
        {
          id: 7,
          img: image7,
          title: "Human and Human Being",
          excerpt:
            "Being human is same with being a human being?",
          author: "Esad A. Kösedağ",
          date: "10 Eylül 2025",
        },
        {
          id: 8,
          img: image8,
          title: "How can we improve our innovative thinking by using AI Tools in a minimal way?",
          excerpt:
            "A blog about improving oour thinking style.",
          author: "Esad A. Kösedağ",
          date: "10 Eylül 2025",
        },
        {
          id: 9,
          img: image9,
          title: "The Matrix Virus of this era?",
          excerpt:
            "How Matrix and machoistic productions are damaged our society?",
          author: "Esad A. Kösedağ",
          date: "10 Eylül 2025",
        },
        {
          id: 10,
          img: image10,
          title: "Interuniversal Fungal Civilization",
          excerpt:
            "A brain storm about aliens.",
          author: "Esad A. Kösedağ",
          date: "10 Eylül 2025",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1 ><p className="blog-title">Blog</p></h1>
      </header>

      <div className="blog-list">
        {loading
          ? [1, 2, 3].map((s) => (
              <SpotlightCard
                key={s}
                className="blog-card"
                spotlightColor="rgba(60, 36, 147, 0.25)"

              >
                <div className="blog-skeleton">
                  <Skeleton variant="text" width="30%" height={36} />
                  <Skeleton variant="text" width="35%" height={24} />
                  <Skeleton variant="text" width="30%" height={24} />
                  <div className="blog-meta">
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="text" width="40%" height={20} />
                  </div>
                </div>
              </SpotlightCard>
            ))
          : posts.map((post) => (
              <SpotlightCard
                key={post.id}
                className="blog-card"
                spotlightColor="rgba(60, 36, 147, 0.25)"
              >
                <div className="blog-content">
                  <img className="blog-image" src={post.img} alt="" />
                  <h2 className="blog-post-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <Avatar
                      alt={post.author}
                      src={logo}
                      className="blog-avatar"
                    />
                    <div>
                      <Typography className="blog-author">
                        <a href="/about">{post.author}</a>
                      </Typography>
                      <Typography className="blog-date">{post.date}</Typography>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
      </div>
      <div className="footer-wrapper" style={{ position: "relative", zIndex: 1 }}>
        {/* Navbar, RotatingText, SpotlightCards vs */}
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;

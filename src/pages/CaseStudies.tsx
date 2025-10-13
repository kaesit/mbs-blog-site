import React, { useEffect, useState } from "react";
import SpotlightCard from "../components/SpotlightCard";
import "../css/CaseStudies.css";
import Footer from "../components/Footer";
import image from "../img/image11.jpg";
import image2 from "../img/image12.jpg";
import image3 from "../img/image13.jpg";
import image4 from "../img/image14.jpg";
import image5 from "../img/image15.jpg";


import { Skeleton, Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";


interface BlogPost {
  id: number;
  img?: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  author_image?: string;
}

const BlogAvatar = styled(Avatar)({
  width: 35,
  height: 35,
  border: "1px solid #34dfa5",
  borderRadius: "0.75rem",
});


const CaseStudies: React.FC = () => {
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
          author_image:image,
          date: "14 Eylül 2025",
        },
        {
          id: 2,
          img: image2,
          title: "Emotion recognition by emotion and attention processing",
          excerpt:
            "Liberty and its advantages in computer science and open source technologies",
          author: "Esad A. Kösedağ",
          author_image:image2, 
          date: "10 Eylül 2025",
        },
        {
          id: 3,
          img: image3,
          title: "Early Daignosis of cancer by using Computer Vision",
          excerpt:
            "Optimize your college life with choosing correct computer science lectures by your interest.",
          author: "Esad A. Kösedağ",
          author_image:image3,
          date: "10 Eylül 2025",
        },
        {
          id: 4,
          img: image4,
          title: "Audio processing in Python",
          excerpt:
            "AI powered game engine tools and new game production methods are really changing the game development but at same time stories are evolving backwards.",
          author: "Esad A. Kösedağ",
          author_image:image4,
          date: "10 Eylül 2025",
        },
        {
          id: 5,
          img: image5,
          title: "Software Techonlogies in Space and Aviation Industry",
          excerpt:
            "Tesla's new optimus robots are gonna help us to colonize mars.",
          author: "Esad A. Kösedağ",
          author_image:image5,
          date: "10 Eylül 2025",
        },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1 className="blog-title">Case Studies 0 </h1>
      </header>

      <div className="blog-list">
        {loading
          ? [1, 2, 3].map((s) => (
              <SpotlightCard
                key={s}
                className="blog-card"
                spotlightColor="rgba(60, 36, 147, 0.25)"
                position={{ x: 12, y: 12 }}
              >
                <div className="blog-skeleton">
                  <Skeleton variant="text" width="80%" height={36} />
                  <Skeleton variant="text" width="95%" height={24} />
                  <Skeleton variant="text" width="90%" height={24} />
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
                position={{ x: 12, y: 12 }}
              >
                <div className="blog-content">
                  <img className="blog-image" src={post.img} alt="" />
                  <h2 className="blog-post-title">{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-meta">
                    <BlogAvatar alt="Author" src={post.author_image} />
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

export default CaseStudies;

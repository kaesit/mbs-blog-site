import React from "react";
import "./index.css";
import logo from "./logo.svg";
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardNav from "./components/CardNav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";
import reportWebVitals from "./reportWebVitals";
import Signup from "./pages/Signup";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import BlogContentPage from "./pages/BlogContentPage";
import CaseStudies from "./pages/CaseStudies";
import ProfilePage from "./pages/ProfilePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

{
  /* COLORS #8B1E1E A02C2C #00B7C2 #1A3C5D #001F54 */
}

const items = [
  {
    label: "About",
    bgColor: "#A02C2C",
    textColor: "#E0F0FF",
    links: [
      {
        label: "Me",
        href: "/about",
        ariaLabel: "About Careers",
      },
    ],
  },
  {
    label: "Projects",
    bgColor: "#258C8F",
    textColor: "#E0F0FF",
    links: [
      {
        label: "Featured",
        href: "/projects",
        ariaLabel: "Featured Projects",
      },
      {
        label: "Case Studies",
        href: "https://github.com/kaesit",
        ariaLabel: "Project Case Studies",
      },
    ],
  },
  {
    label: "Contact",
    bgColor: "#1F4F7A",
    textColor: "#E0F0FF",
    links: [
      {
        label: "Contact Form",
        href: "/contact",
        ariaLabel: "Contact Us",
      },
      {
        label: "Email",
        href: "https://github.com/kaesit",
        ariaLabel: "Email us",
      },
      {
        label: "Instagram",
        href: "https://github.com/kaesit",
        ariaLabel: "Instagram",
      },
      {
        label: "LinkedIn",
        href: "https://github.com/kaesit",
        ariaLabel: "LinkedIn",
      },
    ],
  },
  {
    label: "Blogs",
    bgColor: "#002D7A",
    textColor: "#E0F0FF",
    links: [
      {
        label: "Newest Blogs",
        href: "/blog",
        ariaLabel: "Newest Blogs",
      },
      {
        label: "Movie & Show Critics",
        href: "https://github.com/kaesit",
        ariaLabel: "Movies & Shows",
      },
      {
        label: "Technology Blogs",
        href: "https://github.com/kaesit",
        ariaLabel: "Technology",
      },
    ],
  },
];

root.render(
  <React.StrictMode>
    <Router>
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        menuColor="#f5f5f5"
        buttonBgColor="transparent"
        buttonTextColor="#f5f5f5"
      />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogcontentpage" element={<BlogContentPage />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/profilepage" element={<ProfilePage />} />

      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

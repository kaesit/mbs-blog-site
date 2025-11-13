import React from "react";
import "./index.css";
// import logo from "./logo.svg"; // <-- No longer needed here
import App from "./App";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CardNav from "./components/CardNav"; // <-- No longer needed here
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

// --- Import the new components ---
import MainLayout from "./layouts/MainLayout"; // (Or wherever you saved it)
import NotFoundPage from "./pages/NotFoundPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// { /* The 'items' array has been moved to MainLayout.tsx */ }

root.render(
  <React.StrictMode>
    <Router>
      {/* CardNav has been removed from here */}

      <Routes>
        {/* 1. Routes WITH the Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogcontentpage" element={<BlogContentPage />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/profilepage" element={<ProfilePage />} />
        </Route>

        {/* 2. Routes WITHOUT the Navbar */}
        {/* Auth pages typically don't have the main nav */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* 3. The 404 Page (matches any unknown path) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

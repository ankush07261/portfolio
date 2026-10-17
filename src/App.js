import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";
import ShootingStars from "./components/ShootingStars";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-XBVFST0ZNZ", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <div className="App">
      <ShootingStars />
      <Router>
        <ScrollToTop />
        <AnalyticsTracker />
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

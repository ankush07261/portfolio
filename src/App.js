import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Blogs from "./pages/Blogs";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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

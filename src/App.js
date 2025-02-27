import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import "./css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <React.Fragment>
          <Navbar />
        </React.Fragment>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* <footer
        style={{ height: "1.2px", width: "100%", background: "transparent", textAlign:"right", padding: "2rem" }}
      >
        &copy; 2024 Ankush Hegde
      </footer> */}
    </div>
  );
}

export default App;

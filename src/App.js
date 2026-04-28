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
        <Navbar />
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </Router>
    </div>
  );
}

export default App;

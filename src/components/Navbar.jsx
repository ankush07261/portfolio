import React, { useRef, useState, useEffect } from "react";
import "../css/navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import profileImage from "../assets/images/profilepicture.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef();

  const [activeSection, setActiveSection] = useState("home");

  const showNav = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  const routes = [
    {
      id: "home",
      title: "Home",
      border: "2px solid #EEEEEE ",
    },
    {
      id: "aboutme",
      title: "About me",
      border: "2px solid #EEEEEE ",
    },
    {
      id: "experience",
      title: "Experience",
      border: "2px solid #EEEEEE ",
    },
    {
      id: "projects",
      title: "Projects",
      border: "2px solid #EEEEEE ",
    },
    {
      id: "skills",
      title: "Skills",
      border: "2px solid #EEEEEE ",
    },
    {
      id: "contact",
      title: "Contact me",
      border: "2px solid #EEEEEE ",
    },
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    routes.forEach((route) => {
      const section = document.getElementById(route.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (navRef.current.classList.contains("responsiveNav")) {
      showNav();
    }
  };

  return (
    <>
      <div className="navbar" id="navbar">
        <p onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
          {activeSection !== "home" && (
            <img src={profileImage} alt="dp" className="profile-image-navbar" />
          )}
          {"   "}
          Ankush Hegde
        </p>

        <div className="navbar-nav" id="navbar-nav" ref={navRef}>
          {routes.map((route, index) => (
            <span
              key={index}
              className="nav-elements"
              style={{
                borderBottom:
                  route.id === activeSection ? route.border : "2px solid transparent",
                textShadow:
                  route.id === activeSection ? "0px 4px 6px black" : null,
                cursor: "pointer",
              }}
              onClick={() => scrollToSection(route.id)}
            >
              {route.title}
            </span>
          ))}
          <button className="menu btn-close" onClick={showNav}>
            <CloseIcon />
          </button>
        </div>
        <button className="menu btn-open" onClick={showNav}>
          <MenuIcon />
        </button>
      </div>
    </>
  );
}

export default Navbar;

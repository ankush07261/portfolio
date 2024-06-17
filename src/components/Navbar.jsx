import React, { useRef, useState } from "react";
import "../css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import profileImage from "../assets/images/profilepicture.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const location = useLocation();
  const navRef = useRef();

  const [active, setActive] = useState(location.pathname);

  const showNav = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  const routes = [
    {
      path: "/",
      title: "Home",
      bg: "yellow",
      border: "2px solid yellow ",
      nabg: "yellowgreen",
    },
    {
      path: "/about-me",
      title: "About me",
      bg: "yellow",
      border: "2px solid yellow ",
      nabg: "yellowgreen",
    },
    {
      path: "/experience",
      title: "Experience",
      bg: "yellow",
      border: "2px solid yellow ",
      nabg: "yellowgreen",
    },
    {
      path: "/projects",
      title: "Projects",
      bg: "yellow",
      border: "2px solid yellow ",
      nabg: "yellowgreen",
    },
    {
      path: "/skills",
      title: "Skills",
      bg: "yellow",
      border: "2px solid yellow ",
      nabg: "yellowgreen",
    },
    {
      path: "/contact",
      title: "Contact me",
      bg: "yellow",
      border: "2px solid yellow ",
      nabg: "yellowgreen",
    },
  ];

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="profile-container-pic">
          <img src={profileImage} alt="dp" className="profile-image-navbar" />
          <h2>Ankush Hegde</h2>
        </div>
        <div className="navbar-nav" id="navbar-nav" ref={navRef}>
          {routes.map((route, index) => (
            <Link
              to={route.path}
              className="nav-elements"
              style={{
                color: route.path === active ? route.bg : route.nabg,
                // borderBottom: route.path === active ? route.border : null,
                textShadow: route.path === active ? "0px 4px 6px black" : null,
              }}
              onClick={() => {
                setActive(route.path);
                showNav();
              }}
              key={index}
            >
              {route.title}
            </Link>
          ))}
          <button className="menu btn-close" onClick={showNav}>
            <CloseIcon />
          </button>
        </div>
        <button className="menu" onClick={showNav}>
          <MenuIcon />
        </button>
      </div>
    </>
  );
}

export default Navbar;

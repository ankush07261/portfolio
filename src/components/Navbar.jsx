import React, { useEffect, useRef, useState } from "react";
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
    { path: "/", title: "Home", bg: "yellow", nabg: "yellowgreen" },
    { path: "/about-me", title: "About me", bg: "yellow", nabg: "yellowgreen" },
    {
      path: "/experience",
      title: "Experience",
      bg: "yellow",
      nabg: "yellowgreen",
    },
    { path: "/skills", title: "Skills", bg: "yellow", nabg: "yellowgreen" },
    {
      path: "/contact",
      title: "Contact me",
      bg: "yellow",
      nabg: "yellowgreen",
    },
  ];

  return (
    <>
      <div className="navbar" id="navbar">
        <h2>
          <img src={profileImage} alt="dp" className="profile-image-navbar" />
          Ankush Hegde
        </h2>
        <div className="navbar-nav" id="navbar-nav" ref={navRef}>
          {routes.map((route, index) => (
            <Link
              to={route.path}
              className="nav-elements"
              style={{
                backgroundColor: route.path === active ? route.bg : route.nabg,
                boxShadow: route.path === active ? "0 0 1rem grey" : null,
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

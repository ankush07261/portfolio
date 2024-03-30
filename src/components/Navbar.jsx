import React, { useRef, useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import profileImage from "../assets/images/profilepicture.jpg";

function Navbar() {
  const [active, setActive] = useState("Home");

  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsiveNav");
  };

  const routes = [
    { path: "/", title: "Home", bg: "yellow", nabg: "yellowgreen" },
    { path: "/about-me", title: "About me", bg: "yellow", nabg: "yellowgreen" },
    { path: "/experience", title: "Experience", bg: "yellow", nabg: "yellowgreen" },
    { path: "/skills", title: "Skills", bg: "yellow", nabg: "yellowgreen" },
    { path: "/contact", title: "Contact me", bg: "yellow", nabg: "yellowgreen" },
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
              style={{backgroundColor: route.title === active ? route.bg  : route.nabg, boxShadow: route.title === active ? "0 0 1rem grey": null}}
              onClick={() => {
                setActive(route.title);
                showNav();
              }}
              key={index}
            >
              {route.title}
            </Link>
          ))}
          <button className="menu btn-close">
            <i class="fa fa-close" onClick={showNav}></i>
          </button>
        </div>
        <button className="menu" onClick={showNav}>
          <i class="fa fa-bars"></i>
        </button>
      </div>
    </>
  );
}

export default Navbar;

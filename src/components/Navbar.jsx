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
      bg: "#EEEEEE",
      border: "2px solid #EEEEEE ",
      nabg: "#FFD369",
    },
    {
      path: "/about-me",
      title: "About me",
      bg: "#EEEEEE",
      border: "2px solid #EEEEEE ",
      nabg: "#FFD369",
    },
    {
      path: "/experience",
      title: "Experience",
      bg: "#EEEEEE",
      border: "2px solid #EEEEEE ",
      nabg: "#FFD369",
    },
    {
      path: "/projects",
      title: "Projects",
      bg: "#EEEEEE",
      border: "2px solid #EEEEEE ",
      nabg: "#FFD369",
    },
    {
      path: "/skills",
      title: "Skills",
      bg: "#EEEEEE",
      border: "2px solid #EEEEEE ",
      nabg: "#FFD369",
    },
    {
      path: "/contact",
      title: "Contact me",
      bg: "#EEEEEE",
      border: "2px solid #EEEEEE ",
      nabg: "#FFD369",
    },
  ];

  return (
    <>
      <div className="navbar" id="navbar">
        <p>
          <img src={profileImage} alt="dp" className="profile-image-navbar" />
          {"   "}
          Ankush Hegde
        </p>
        <div className="navbar-nav" id="navbar-nav" ref={navRef}>
          {routes.map((route, index) => (
            <Link
              to={route.path}
              className="nav-elements"
              style={{
                // color: route.path === active ? route.bg : route.nabg,
                borderBottom:
                  route.path === location.pathname ? route.border : null,
                textShadow:
                  route.path === location.pathname ? "0px 4px 6px black" : null,
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

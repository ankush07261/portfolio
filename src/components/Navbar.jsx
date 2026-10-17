import React, { useState } from "react";
import "../css/navbar.css";
import { useLocation, Link } from "react-router-dom";
import profileImage from "../assets/images/profilepicture.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const routes = [
    {
      path: "/",
      title: "About me",
    },
    {
      path: "/experience",
      title: "Experience",
    },
    {
      path: "/projects",
      title: "Projects & Skills",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
    {
      path: "/contact",
      title: "Contact me",
      isButton: true,
    },
  ];

  const activePath = location.pathname;

  return (
    <>
      <div className="navbar" id="navbar">
        <Link
          to="/"
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "inherit",
          }}
          onClick={closeNav}
        >
          <p>
            {activePath !== "/" && (
              <img
                src={profileImage}
                alt="dp"
                className="profile-image-navbar"
              />
            )}
            {"   "}
            <span style={{ marginLeft: "5px" }}>Ankush Hegde</span>
          </p>
        </Link>

        <div className={`navbar-nav ${isNavOpen ? "responsiveNav" : ""}`} id="navbar-nav">
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className="nav-elements"
              style={{
                borderBottom:
                  route.path === activePath
                    ? "2px solid #EEEEEE"
                    : "2px solid transparent",
                textShadow:
                  route.path === activePath ? "0px 4px 6px black" : null,
                textDecoration: "none",
              }}
              onClick={closeNav}
            >
              {route.title}
            </Link>
          ))}
          <button className="menu btn-close" onClick={toggleNav} aria-label="Close navigation">
            <CloseIcon />
          </button>
        </div>
        <button className="menu btn-open" onClick={toggleNav} aria-label="Open navigation">
          <span className="menu-text">More</span>
          <MenuIcon />
        </button>
      </div>
    </>
  );
}

export default Navbar;

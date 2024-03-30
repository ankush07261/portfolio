import React from "react";
import "../css/home.css";
import "../css/mobileBtns.css";
import profileImage from "../assets/images/profilepicture.jpg";
import gmail from "../assets/images/socials/gmail.jpg";
import linkedin from "../assets/images/socials/linkedin.jpg";
import github from "../assets/images/socials/github.jpg";
import instagram from "../assets/images/socials/instagram.jpg";
import { Link } from "react-router-dom";

function Home() {
  const links = [
    { href: "mailto:ankushhegde30@gmail.com", img: gmail },
    { href: "https://www.linkedin.com/in/ankush-hegde-9144b3194/", img: linkedin },
    { href: "https://github.com/ankush07261", img: github },
    { href: "https://www.instagram.com/ankush_hegde____/", img: instagram },
  ];
  return (
    <div className="about-me-page">
      <div className="container">
        <div className="sub-container my-profile-image">
          <img src={profileImage} alt="dp" className="profile-image" />
          <div className="socials-container">
            {links.map((link, index) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={index}>
                <img
                  src={link.img}
                  alt="social-media"
                  className="social"
                  style={{ borderRadius: "4px" }}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className="sub-container about-me">
          <p className="me-text-primary">
            Hello there<span className="hello">👋🏻</span>,<br />
            <br />I am a{" "}
            <span className="highlight">Full-stack Web developer</span> who can
            build good interactive and responsive web applications.
            <br />
            <br />I am also interested in{" "}
            <span className="highlight">Cybersecurity</span>. <br />
            <br />
            <b>
              <a
                className="resume"
                href="https://drive.google.com/file/d/1a6TQws6-g9TCEym0-okK_gXJ5DWdl2d-/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                My resume
              </a>
            </b>
          </p>
          <Link to="/about-me" className="mobile-nav-elements">
            About me &rArr;
          </Link>
        </div>
      </div>
      <div className="web-built">
        <p>This website is built using ReactJS.</p>
      </div>
    </div>
  );
}

export default Home;

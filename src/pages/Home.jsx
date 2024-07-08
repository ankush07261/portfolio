import React from "react";
import "../css/home.css";
import "../css/mobileBtns.css";
import profileImage from "../assets/images/profilepicture.jpg";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

function Home() {
  const links = [
    { href: "mailto:ankushhegde30@gmail.com", img: <EmailIcon /> },
    {
      href: "https://www.linkedin.com/in/ankush-hegde-9144b3194/",
      img: <LinkedInIcon />,
    },
    { href: "https://github.com/ankush07261", img: <GitHubIcon /> },
    {
      href: "https://www.instagram.com/ankush_hegde____/",
      img: <InstagramIcon />,
    },
  ];
  return (
    <div className="about-me-page">
      <div className="container">
        <div className="sub-container my-profile-image">
          <img src={profileImage} alt="dp" className="profile-image" />
          <div className="socials-container">
            {links.map((link, index) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={index}>
                {link.img}
              </a>
            ))}
          </div>
        </div>
        <div className="line"></div>
        <div className="sub-container about-me">
          <p className="me-text-primary">
            Hey there folks<span className="hello">👋🏻</span>,<br />Welcome to my Portfolio Webiste.<br/>
            <br />
            I'm a <span className="highlight">cybersecurity</span> enthusiast
            and a<span className="highlight"> web developer</span> passionate
            about creating user friendly and interactive digital experiences.
            <br />
            <br />
            <b className="resume-container">
              <a
                className="resume"
                href="https://drive.google.com/file/d/1gojMeZrUdKW6jU0HD6dqO4xnRdOOsy6k/view?usp=sharing"
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
        <p>This website is built using ReactJS and MUI.</p>
      </div>
    </div>
  );
}

export default Home;

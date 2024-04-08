import React from "react";
import "../css/home.css";
import "../css/mobileBtns.css";
import profileImage from "../assets/images/profilepicture.jpg";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

function Home() {
  const links = [
    { href: "mailto:ankushhegde30@gmail.com", img: <EmailIcon sx={{scale:"1.5"}} /> },
    {
      href: "https://www.linkedin.com/in/ankush-hegde-9144b3194/",
      img: <LinkedInIcon sx={{scale:"1.5"}} />,
    },
    { href: "https://github.com/ankush07261", img: <GitHubIcon sx={{scale:"1.5"}} /> },
    {
      href: "https://www.instagram.com/ankush_hegde____/",
      img: <InstagramIcon sx={{scale:"1.5"}} />,
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
                href="https://drive.google.com/file/d/1UfjrblSlak3qC1Dk-MAxqtt4igIjrU7I/view?usp=sharing"
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
        <p>This website is built using ReactJS and MUI components.</p>
      </div>
    </div>
  );
}

export default Home;

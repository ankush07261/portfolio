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
      href: "https://leetcode.com/u/Ankush_Hegde/",
      img: (
        <svg
          fill="#eeeeee"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#eeeeee"
          className="svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>LeetCode icon</title>
            <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"></path>
          </g>
        </svg>
      ),
    },
    // {
    //   href: "https://www.instagram.com/ankush_hegde____/",
    //   img: <InstagramIcon />,
    // },
  ];
  return (
    <div className="about-me-page" id="home">
      <div className="container">
        <div className="sub-container my-profile-image">
          <div className="align">

          <div className="profile-card">
            <div className="profile-img-container">
              <img src={profileImage} alt="dp" className="profile-image" />
            </div>
            <div className="tag tag-top">
              <p>Software Development</p>
            </div>
            <div className="tag tag-bottom">
              <p>Cybersecurity</p>
            </div>
            <div className="curve-one"></div>
            <div className="curve-two"></div>
          </div>
          <div className="socials-container">
            {links.map((link, index) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={index}>
                {link.img}
              </a>
            ))}
          </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="sub-container about-me">
          <p className="me-text-primary">
            Hey there folks<span className="hello">👋🏻</span>,
            <br />
            <br />
            I'm a <span className="highlight"> Software developer</span> and a
            <span className="highlight"> Cybersecurity</span> enthusiast
            passionate about creating user friendly, interactive digital
            experiences and safeguarding an organization's software security and
            well-being.
            <br />
          </p>
          <Link to="/about-me" className="mobile-nav-elements toNext">
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

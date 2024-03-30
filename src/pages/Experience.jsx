import React, { useState } from "react";
import "../css/experience.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";
import { demoprojects, projects } from "../constants/Experience";

function MyWork() {
  const [demo, setDemo] = useState(demoprojects);
  const [project, setProject] = useState(projects);

  return (
    <>
      <div className="myWork">
        <br />
        <Link to="/contact" className="mobile-nav-elements">
          Contact me &rArr;
        </Link>

        <h2>Professional Experience: </h2>
        <br />
        <div className="projects prof-projects">
          {project.map((project, index) => (
            <div className="card" key={index}>
              <img src={project.image} alt="project pic" />
              <p>
                <h3>{project.title}</h3>
                <h4>Role: {project.role}</h4>
                <h4>Description:</h4>
                <p>{project.description}</p>
                <b>Duration:</b>
                <p>{project.duration}</p>
              </p>
            </div>
          ))}
        </div>

        <h2>Other / Demo Projects ...</h2>
        <br />
        <div className="projects">
          {demo.map((demo, index) => (
            <div className="card demo-card" key={index}>
              <img src={demo.image} alt="" />
              <p>
                <h3>{demo.title}</h3>
                <br />
                <p>{demo.description}</p>
                <br/>
                <a
                  href={demo.liveURL}
                  className="try-it"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>
                <a
                  className="github-link"
                  href={demo.gitURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link to="/contact" className="mobile-nav-elements">
        Contact me &rArr;
      </Link>
    </>
  );
}

export default MyWork;

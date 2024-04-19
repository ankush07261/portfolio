import "../css/experience.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";
import { demoprojects, projects } from "../constants/Experience";
import * as React from "react";
import { useState } from "react";

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

        <h1>Professional Experience:</h1>
        <br />
        <div className="professional-experience">
          <ul className="experience-list">
            {project.map((project, index) => (
              <li key={index}>
                <div className="timeline-div">
                  <span className="dot"></span>
                  <span className="line-exp"></span>
                </div>

                <div className="experience-card">
                  <div className="card-header">
                    <img
                      className="exp-img"
                      src={project.image}
                      alt="project pic"
                    />
                    <h3>{project.title}</h3>
                  </div>
                  <p>
                    <h4>Role: {project.role}</h4>
                    <p>{project.duration}</p>
                    <h4>Description:</h4>
                    <p>{project.description}</p>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <br />
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
                <br />
                {demo.liveURL ? (
                  <a
                    href={demo.liveURL}
                    className="try-it"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                  </a>
                ) : (
                  ""
                )}

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

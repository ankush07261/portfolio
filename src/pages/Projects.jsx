import "../css/experience.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";
import { demoprojects, projects } from "../constants/Experience";
import * as React from "react";
import { useState } from "react";

const Projects = () => {
  const [demo, setDemo] = useState(demoprojects);

  return (
    <>
      <h1>PROJECTS</h1>
      <hr />
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
      <Link to="/skills" className="mobile-nav-elements">
        My Skills &rArr;
      </Link>
    </>
  );
};

export default Projects;

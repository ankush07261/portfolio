import "../css/experience.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";
import { demoprojects, projects } from "../constants/Experience";
import * as React from "react";
import { useState } from "react";

function MyWork() {
  const [project, setProject] = useState(projects);

  return (
    <>
      <div className="myWork">
        <br />

        <h1>PROFESSIONAL EXPERIENCE</h1>
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
      </div>
      <Link to="/projects" className="mobile-nav-elements">
        Projects &rArr;
      </Link>
    </>
  );
}

export default MyWork;

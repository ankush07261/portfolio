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
      <div className="myWork" id="experience">
        <h1>WORK EXPERIENCE</h1>
        <br />
        <div className="professional-experience">
          <ul className="experience-list">
            {project.map((project, index) => (
              <li className="experience-list-li" key={index}>
                <div className="timeline-div">
                  <div className="dot"></div>
                  <div className="line-exp"></div>
                </div>

                <div className="experience-card">
                  <div className="card-header">
                    <img
                      className="exp-img"
                      src={project.image}
                      alt="project pic"
                    />
                    <h3 className="company-name"><b>{project.title}</b></h3>
                  </div>

                  {project.roles ? (
                    project.roles.map((r, rIdx) => (
                      <div
                        key={rIdx}
                        style={
                          rIdx > 0
                            ? { borderTop: "2px solid rgba(255,255,255,0.5)", marginTop: "12px", paddingTop: "12px" }
                            : {}
                        }
                      >
                        <p className="role-desc">{r.role}</p>
                        <p>
                          <b className="duration">{r.duration}</b>
                        </p>
                        <p className="job-desc">
                          {r.description.map((line, idx) => (
                            <ul className="exp-desc-ul" key={idx}>
                              <li className="exp-desc-li">{line}</li>
                            </ul>
                          ))}
                        </p>
                      </div>
                    ))
                  ) : (
                    <>
                      <p className="role-desc">{project.role}</p>
                      <p>
                        <b className="duration">{project.duration}</b>
                      </p>
                      <p className="job-desc">
                        {(Array.isArray(project.description)
                          ? project.description
                          : project.description.split("\n")
                        ).map((line, idx) => (
                          <ul className="exp-desc-ul" key={idx}>
                            <li className="exp-desc-li">{line}</li>
                          </ul>
                        ))}
                      </p>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <br />
      </div>
      <Link to="/projects" className="mobile-nav-elements toNext">
        Projects &rArr;
      </Link>
    </>
  );
}

export default MyWork;

import "../css/experience.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";
import { demoCyber, programming } from "../constants/Projects";
import * as React from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Projects = () => {
  // const [demoCyb, setDemoCyb] = useState(demoCyber);
  const [prog, setProg] = useState(programming);

  return (
    <div className="skill-exp-page" id="projects">
      <h1>PROJECTS</h1>
      <Tabs className="projects-display">
        {/* <TabList>
          <Tab>Software Dev</Tab>
          <Tab>Cybersecurity</Tab>
        </TabList> */}

        <TabPanel>
          {/* <h2 className="panel-title project-title">
            Software Development Projects
          </h2> */}
          <div className="projects">
            {prog.map((prog, index) => (
              <div className="card prog-card" key={index}>
                <img src={prog.image} alt="" />
                <p>
                  <h3>{prog.title}</h3>
                  <p>{prog.description}</p>
                  <div className="concepts">
                    {prog.concepts?.map((concept, i) => (
                      <div className="concept">{concept}</div>
                    ))}
                  </div>

                  {/* <br /> */}
                  <div className="links">
                    {prog.liveURL ? (
                      <a
                        href={prog.liveURL}
                        className="try-it"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    ) : (
                      ""
                    )}

{prog.gitURL ? (
                      <a
                        href={prog.gitURL}
                        className="github-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    ) : (
                      ""
                    )}

                    {prog.docker ? (
                      <a
                        href={prog.docker}
                        className="docker"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Docker Image
                      </a>
                    ) : (
                      ""
                    )}
                  </div>
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
        {/* <TabPanel>
          <h2 className="panel-title project-title">Cybersecurity Projects</h2>
          <div className="projects">
            {demoCyb.map((demoCyb, index) => (
              <div className="card demoCyb-card" key={index}>
                <img src={demoCyb.image} alt="" />
                <p>
                  <h3>{demoCyb.title}</h3>
                  <p>{demoCyb.description}</p>
                  <div className="concepts">
                    {demoCyb.concepts?.map((concept, i) => (
                      <div className="concept">{concept}</div>
                    ))}
                  </div>

                  <div className="links">
                    {demoCyb.liveURL ? (
                      <a
                        href={demoCyb.liveURL}
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
                      href={demoCyb.gitURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </div>
                </p>
              </div>
            ))}
          </div>
        </TabPanel> */}
      </Tabs>

      <Link to="/skills" className="mobile-nav-elements toNext">
        My Skills &rArr;
      </Link>
    </div>
  );
};

export default Projects;

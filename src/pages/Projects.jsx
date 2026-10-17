import "../css/experience.css";
import { programming } from "../constants/Projects";
import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Skills from "./Skills";

const Projects = () => {
  return (
    <div className="projects-merged">
      <div className="skill-exp-page" id="projects">
        <h1>PROJECTS</h1>
        <br></br>
        
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
              {programming.map((prog, index) => (
                <div className="card prog-card" key={index}>
                  <img src={prog.image} alt={prog.title} />
                  <div className="card-body">
                    <div className="card-text">
                      <h3>{prog.title}</h3>
                      <p className="card-description">{prog.description}</p>
                    </div>

                    <div className="card-bottom">
                      <div className="concepts">
                        {prog.concepts?.map((concept, i) => (
                          <div className="concept" key={i}>{concept}</div>
                        ))}
                      </div>

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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <Skills />
    </div>
  );
};

export default Projects;

import "../css/experience.css";
import { demoCyber, programming } from "../constants/Projects";
import * as React from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Skills from "./Skills";

const Projects = () => {
  // const [demoCyb, setDemoCyb] = useState(demoCyber);
  const [prog, setProg] = useState(programming);

  return (
    <div className="projects-merged">
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
        </Tabs>
      </div>
      <Skills />
    </div>
  );
};

export default Projects;

import "../css/experience.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";
import { demoprojects, demoCyber } from "../constants/Projects";
import * as React from "react";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Projects = () => {
  const [demoWeb, setDemoWeb] = useState(demoprojects);
  const [demoCyb, setDemoCyb] = useState(demoCyber);

  return (
    <div className="skill-exp-page">
      <h1>PROJECTS</h1>
      <br />
      <Tabs className="projects-display">
        <TabList>
          <Tab>Cybersecurity</Tab>
          <Tab>Web development</Tab>
        </TabList>

        <TabPanel>
          <h2 className="panel-title project-title">Cybersecurity projects</h2>
          <div className="projects">
            {demoCyb.map((demoCyb, index) => (
              <div className="card demoCyb-card" key={index}>
                <img src={demoCyb.image} alt="" />
                <p>
                  <h3>{demoCyb.title}</h3>
                  <p>{demoCyb.description}</p>
                  <br />
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
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="panel-title project-title">
            Web development projects
          </h2>
          <div className="projects">
            {demoWeb.map((demoWeb, index) => (
              <div className="card demoWeb-card" key={index}>
                <img src={demoWeb.image} alt="" />
                <p>
                  <h3>{demoWeb.title}</h3>
                  <p>{demoWeb.description}</p>
                  <br />
                  {demoWeb.liveURL ? (
                    <a
                      href={demoWeb.liveURL}
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
                    href={demoWeb.gitURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>

      <Link to="/skills" className="mobile-nav-elements toNext">
        My Skills &rArr;
      </Link>
    </div>
  );
};

export default Projects;

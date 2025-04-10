import React, { useState } from "react";
import "../css/skills.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";
import { webDev, cyberSecurity } from "../constants/Skills";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Skills() {
  const [webSkill, setWebSkill] = useState(webDev);
  const [cyberSkill, setCyberSkill] = useState(cyberSecurity);
  // const [othSkill, setOthSkill] = useState(others);

  return (
    <div className="skill-exp-page" id="skills">
      <div className="skill">
        <h1>MY SKILLS</h1>

        <div className="skill-container">
          <Tabs>
            <TabList>
              {/* <Tab>Programming</Tab> */}
              <Tab>Software Eng.</Tab>
              <Tab>Cybersecurity</Tab>
            </TabList>

            {/* <TabPanel>
              <h2 className="panel-title">Programming / Coding</h2>
              <div className="skill-card cyber-skills">
                {othSkill?.map((othSkill, index) => (
                  <span key={index}>{othSkill.title}</span>
                ))}
              </div>
            </TabPanel> */}
            <TabPanel>
              <h2 className="panel-title">Software Engineering</h2>
              <div className="skill-card">
                {webSkill?.map((webskill, index) => (
                  <span key={index}>{webskill.title}</span>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="panel-title">Cybersecurity</h2>
              <div className="skill-card cyber-skills">
                {cyberSkill?.map((cyberSkill, index) => (
                  <span key={index}>{cyberSkill.title}</span>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <Link to="/contact" className="mobile-nav-elements toNext">
        Contact me &rArr;
      </Link>
    </div>
  );
}

export default Skills;

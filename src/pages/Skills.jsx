import React, { useState } from "react";
import "../css/skills.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";
import { webDev, cyberSecurity, others } from "../constants/Skills";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function Skills() {
  const [webSkill, setWebSkill] = useState(webDev);
  const [cyberSkill, setCyberSkill] = useState(cyberSecurity);
  const [othSkill, setOthSkill] = useState(others);

  return (
    <div className="skill-exp-page">
      <div className="skill">
        <h1>MY SKILLS</h1>
        {/* <Box sx={{ bgcolor: "background.paper", width: 500 }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </Box> */}
        <div className="skill-container">
          <Tabs>
            <TabList>
              <Tab>Web development</Tab>
              <Tab>Cybersecurity</Tab>
              <Tab>Programming</Tab>
            </TabList>

            <TabPanel>
              <h2 className="panel-title">Web development</h2>
              <div className="skill-card">
                {webSkill.map((webskill, index) => (
                  <div className="skill-desc">
                    <h4 key={index}>{webskill.title}</h4>
                    <div class="w3-light-grey w3-round-xlarge">
                      <div
                        class="w3-container w3-blue w3-round-xlarge"
                        style={{ width: webskill.value }}
                      >
                        {webskill.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="panel-title">Cybersecurity</h2>
              <div className="skill-card cyber-skills">
                {cyberSkill.map((cybskill, index) => (
                  <div className="skill-desc">
                    <h4 key={index}>{cybskill.title}</h4>
                    <div class="w3-light-grey w3-round-xlarge">
                      <div
                        class="w3-container w3-blue w3-round-xlarge"
                        style={{ width: cybskill.value }}
                      >
                        {cybskill.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <h2 className="panel-title">Programming / Coding</h2>
              <div className="skill-card cyber-skills">
                {othSkill.map((othskill, index) => (
                  <div className="skill-desc">
                    <h4 key={index}>{othskill.title}</h4>
                    <div
                      class="w3-light-grey w3-round-xlarge"
                      style={{ backgroundColor: "black" }}
                    >
                      <div
                        class="w3-container w3-round-xlarge"
                        style={{
                          width: othskill.value,
                          backgroundColor: "#eeeeee",
                          color: "black",
                        }}
                      >
                        {othskill.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      <br />
      <Link to="/contact" className="mobile-nav-elements toExperience">
        Contact me &rArr;
      </Link>
    </div>
  );
}

export default Skills;

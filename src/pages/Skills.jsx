import React, { useState } from "react";
import "../css/skills.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";
import { webDev, cyberSecurity, others } from "../constants/Skills";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
// import { useTheme } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     "aria-controls": `full-width-tabpanel-${index}`,
//   };
// }

function Skills() {
  const [webSkill, setWebSkill] = useState(webDev);
  const [cyberSkill, setCyberSkill] = useState(cyberSecurity);
  const [othSkill, setOthSkill] = useState(others);

  // const theme = useTheme();
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };

  return (
    <>
      <div className="skill">
        <h1>MY SKILLS</h1>
        <br />
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
          <div className="webdev-skills skills">
            <h2>Web development</h2>
            <div className="skill-card">
              {webSkill.map((webskill, index) => (
                <h4 key={index}>{webskill.title}</h4>
              ))}
            </div>
          </div>
          <div className="cybsec-skills skills">
            <h2>Cybersecurity</h2>
            <div className="skill-card cyber-skills">
              {cyberSkill.map((cybskill, index) => (
                <h4 key={index}>{cybskill.title}</h4>
              ))}
            </div>
          </div>
          <div className="other-skills skills">
            <h2>Programming / Coding</h2>
            <div className="skill-card cyber-skills">
              {othSkill.map((othskill, index) => (
                <h4 key={index}>{othskill.title}</h4>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <Link to="/contact" className="mobile-nav-elements toExperience">
        Contact me &rArr;
      </Link>
    </>
  );
}

export default Skills;

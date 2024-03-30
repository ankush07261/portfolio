import React, { useState } from 'react';
import '../css/skills.css';
import '../css/mobileBtns.css';
import { Link } from 'react-router-dom';
import { webDev, cyberSecurity, others } from '../constants/Skills';

function Skills() {

  const [webSkill, setWebSkill] = useState(webDev);
  const [cyberSkill, setCyberSkill] = useState(cyberSecurity);
  const [othSkill, setOthSkill] = useState(others);

  return (
    <>
    <div className='skill'>
      <h1>MY SKILLS</h1>
      <div className="skill-container">
        <div className="webdev-skills skills">
          <h2>Web development</h2>
          <div className="skill-card" >
          {
            webSkill.map((webskill, index)=>( 
                <h3 key={index}>{webskill.title }</h3>
            ))
          } 
          </div>
        </div>
        <div className="cybsec-skills skills">
          <h2>Cybersecurity</h2>
          <div className="skill-card cyber-skills" >
          {
            cyberSkill.map((cybskill, index)=>(
                <h3 key={index}>{cybskill.title }</h3>
            ))
          }
          </div>
        </div>
        <div className="other-skills skills">
          <h2>Others &#40; intermediate &#41;</h2>
          <div className="skill-card cyber-skills" >
          {
            othSkill.map((othskill, index)=>(
                <h3 key={index}>{othskill.title }</h3>
          
            ))
          }
          </div>
        </div> 
      </div>
      </div>
      <br/>
      <Link to='/experience' className='mobile-nav-elements toExperience'>View my Experience &rArr;</Link>
    </>
  )
}

export default Skills
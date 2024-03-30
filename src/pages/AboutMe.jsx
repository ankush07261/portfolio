import React from 'react'
import '../css/aboutMe.css';
import '../css/mobileBtns.css';
import { Link } from 'react-router-dom';

function AboutMe() {
  return (
    <>
    <div className='aboutMe-container'>
      <div className="text">
        <p className='me-text'> 
            <b><a className="resume" href="https://drive.google.com/file/d/1a6TQws6-g9TCEym0-okK_gXJ5DWdl2d-/view?usp=sharing" target="_blank" rel="noreferrer"> Click here to view my resume</a></b><br /><br />
            <b>Open for: </b>Web Dev internships / freelancing.<br /><br />
            <b>Communication languages:</b> English, Kannada, Hindi and basic German.<br /><br/> 
            <i class='fas fa-map-marker-alt'>Bangalore, India</i> 
            <br /> 
            <b>Why me?</b><br />
            <ul>
              <li>
                <b>Creative Thinking:</b>
                <br />
                I implement creativity and analytical thinking to the projects i work on.
              </li>
              <li>
                <b>Staying updated:</b>
                <br />
                I stay updated with newer tech trends and love exploring innovative solutions. 
              </li>
              <li>
                <b>Collaborative spirit:</b>
                <br />
                I believe that team work makes "dream work" and enjoy working with diverse talents and perspectives.
              </li>

            </ul>
            <br/>
            <b>Education: </b><br />
            <ul>
              <li>Jyothy Institute of Technology, Bangalore<br />&#40; 2021 - 2025 &#41;<br />
                Computer Science and Engineering<br />
                GPA: 8.31
              </li>
              <li>S.N. Bhatt PU college of science and commerce<br /> &#40; 2019 - 2021 &#41;.<br/>
                Science with Computers.<br />
                GPA: 8.44
              </li>
              <li>Prarthana Education Society <br />&#40; 2009 - 2019 &#41;.<br/>
                Class 1 to class 10 in C.B.S.E. board<br />
                GPA: 8.24</li>
            </ul><br />
            <b>DoB:</b> 30/04/2003<br />

            <Link to='/skills' className='mobile-nav-elements'>View my Skills &rArr;</Link><br/><br/>
        </p>
      </div>
      </div>
      <div className="footer-container">
      </div>
    
    </>
  )
}

export default AboutMe
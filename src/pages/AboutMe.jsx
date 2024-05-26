import React from "react";
import "../css/aboutMe.css";
import "../css/mobileBtns.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <div className="aboutMe-container">
        <div className="text">
          <p className="me-text">
            <b>
              <a
                className="resume"
                href="https://drive.google.com/file/d/1UfjrblSlak3qC1Dk-MAxqtt4igIjrU7I/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Click here to view my resume
              </a>
            </b>
            <br />
            <br />
            <b>Open for: </b>Web Dev internships / freelancing.
            <br />
            <br />
            <b>Communication languages:</b> English, Kannada, Hindi and basic
            German.
            <br />
            <br />
            📍 Bangalore, India
            <br />
            <br />
            <b>Why me?</b>
            <br />
            <ul>
              <li>
                <b>&#x1F4A1; Creative Thinking:</b>
                <br />I implement creativity and analytical thinking to the
                projects i work on and add value to your company.
              </li>
              <li>
                <b>&#x1F4C8; Staying updated:</b>
                <br />I stay updated with newer tech trends and love exploring
                innovative solutions.
              </li>
              <li>
                <b>&#x1F310; Collaborative spirit:</b>
                <br />I believe that team work makes "dream work" and enjoy
                working with diverse talents and perspectives.
              </li>
            </ul>
            <br />
            <b>Education: </b>
            <br />
            <ul>
              <li>
                Jyothy Institute of Technology, Bangalore
                <br />
                &#40; 2021 - 2025 &#41;
                <br />
                Computer Science and Engineering
                <br />
                GPA: 8.31
              </li>
              <li>
                S.N. Bhatt PU college of science and commerce
                <br /> &#40; 2019 - 2021 &#41;.
                <br />
                Science with Computers.
                <br />
                GPA: 8.44
              </li>
              <li>
                Prarthana Education Society <br />
                &#40; 2009 - 2019 &#41;.
                <br />
                Class 1 to class 10 in C.B.S.E. board
                <br />
                GPA: 8.24
              </li>
            </ul>
            <br />
            <b>DoB:</b> 30/04/2003
            <br />
            <Link to="/experience" className="mobile-nav-elements">
              My Experience &rArr;
            </Link>
            <br />
            <br />
          </p>
        </div>
      </div>
      <div className="footer-container"></div>
    </>
  );
}

export default AboutMe;

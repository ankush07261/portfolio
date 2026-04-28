import React from "react";
import "../css/aboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="aboutMe-container" id="aboutme">
        <h1>ABOUT ME</h1>
        <div className="text">
          <p className="me-text">
            <p className="me-desc">
  As a skilled engineer specializing in software
  development, I have expertise in{" "}
  <span className="about-me-highlight">
    C++, Full-Stack Development
  </span>{" "}
  and <span className="about-me-highlight">AI/ML</span>, with a strong focus on{" "}
  <span className="about-me-highlight">Augmented Reality</span>. With a
  comprehensive understanding of{" "}
  <span className="about-me-highlight">
    System Design & Architecture{" "}
  </span>
  ,{" "}
  <span className="about-me-highlight">
    Object Oriented Programming{" "}
  </span>
  concepts, I am committed to delivering robust and scalable
  solutions while enhancing overall system performance and user experience.
</p>
            <br />
            {/* <br />
            <b className="desc-title">Open for: </b>Internships or freelancing
            in <b>Cybersecurity / Web dev</b>.
            <br />
            <br /> */}
            <b className="desc-title">Communication languages:</b> English,
            Kannada, Hindi and German.
            <br />
            <br />
            📍 Bangalore, India
            <br />
            <br />
            <b className="desc-title">Why me?</b>
            <br />
            <ul>
              <li>
                <b>Creative Thinking &#x1F4A1;:</b>
                <br />I implement creativity and analytical thinking to the
                projects i work on and add value to your company.
              </li>
              <li>
                <b>Staying updated &#x1F4C8;:</b>
                <br />I stay updated with newer tech trends and love exploring
                innovative solutions.
              </li>
              <li>
                <b>Collaborative spirit &#x1F310;:</b>
                <br />I believe that team work makes "dream work" and enjoy
                working with diverse talents and perspectives.
              </li>
            </ul>
            <br />
            <b className="desc-title">Education: </b>
            <br />
            <ul>
              <li>
                <b>Jyothy Institute of Technology, Bangalore</b>
                <br />
                <i> 2021 - 2025 </i>
                <br />
                Computer Science and Engineering
                <br />
                GPA: 8.41
              </li>
              <li>
                <b>S.N. Bhatt PU College, Bangalore</b>
                <br /> <i> 2019 - 2021 </i>
                <br />
                Science with Computers.
                <br />
                GPA: 8.44
              </li>
              <li>
                <b>Prarthana Central School, Bangalore</b> <br />
                <i> 2009 - 2019 </i>
                <br />
                Class 1 to class 10 in C.B.S.E. board
                <br />
                GPA: 8.26
              </li>
            </ul>
            {/* <br /> */}
            {/* <b className="desc-title">DoB:</b> 30/04/2003
            <br /> */}
          </p>
          <br />
        </div>
      </div>
      <div className="footer-container"></div>
    </>
  );
}

export default AboutMe;

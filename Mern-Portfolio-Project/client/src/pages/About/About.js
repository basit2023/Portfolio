import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-8 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="images/basitp.jpeg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Passionate and results-driven junior full-stack developer with a solid 
              foundation in MERN stack technologies. As a dynamic engineering professional,
               I bring hands-on expertise in JavaScript, Node.js, React.js, Express, 
               Bootstrap, HTML, and CSS. My journey extends beyond coding, encompassing 
               comprehensive training in DevOps from SkipQ, equipping me with the skills
               to leverage AWS services and various cutting-edge tools.
              <br/>
              What sets me apart is not just technical proficiency, but a collaborative spirit
              that thrives in team environments. Whether contributing to projects independently 
              or as part of a team, I am driven by a strong work ethic and an unwavering 
              commitment to achieving success. Join me in crafting innovative solutions and 
              driving organizational growth. Let's build the future together!
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;

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
                src="images/basitp.JPG"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Passionate and results-driven full-stack developer with a strong foundation in Next.js full stack and MERN stack technologies. As a dynamic engineering professional, I bring hands-on expertise in JavaScript, HTML, Css, React.js, Next.Js, tailwindcss, Bootstrap, Node.js, Express.js, MongoDB, and MySQL. My journey extends beyond coding, encompassing comprehensive training in DevOps from SkipQ, where I honed my skills in leveraging AWS services and various cutting-edge tools. Additionally, I have mentored and trained over 20 students in MERN stack development, contributing to their growth and technical success.
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

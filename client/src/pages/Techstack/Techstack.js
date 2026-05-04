import React from "react";
import "./Techstack.css";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { TechstackList } from "../../utils/TechstackList";
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <RubberBand>
          <h2 className="section-title">Technical <span className="gradient-text">Proficiency</span></h2>
        </RubberBand>
        <div className="techstack-grid">
          {TechstackList.map((tech) => (
            <Fade bottom key={tech._id}>
              <div className="tech-card glass">
                <tech.icon className="tech-icon" />
                <div className="tech-name">{tech.name}</div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;

import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
            contentArrowStyle={{ borderRight: "7px solid var(--timeline-card-bg)" }}
            date="Aug 2023 - Nov 2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">IT Bootcamp - Full Stack Development</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Generation Program, Lahore
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
            contentArrowStyle={{ borderRight: "7px solid var(--timeline-card-bg)" }}
            date="Mar 2023 - Jun 2023"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Junior Full Stack Bootcamp</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Datics.ai, Lahore
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
            contentArrowStyle={{ borderRight: "7px solid var(--timeline-card-bg)" }}
            date="Jan 2022 - Dec 2022"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">DevOps Trainee</h3>
            <h4 className="vertical-timeline-element-subtitle">
            SkipQ, Pakistan
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
            contentArrowStyle={{ borderRight: "7px solid var(--timeline-card-bg)" }}
            date="Nov 2017 - Aug 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BSc (Hons)</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Electrical Engineer, Namal University, Mianwali
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
            contentArrowStyle={{ borderRight: "7px solid var(--timeline-card-bg)" }}
            date="2015 - 2017"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">FSc Pre-Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">
            Governer Model School for Boys, Khar Bajaur Agency
            </h4>
          </VerticalTimelineElement>

        </VerticalTimeline>

        <h2 className="col-12 mt-5 mb-1 text-center text-uppercase">
          Certifications
        </h2>
        <hr />

        <ul className="certifications-list" style={{listStyleType: "none", paddingLeft: "20px"}}>
          <li style={{marginBottom: "10px"}}>✓ DevOps Engineer — SkipQ</li>
          <li style={{marginBottom: "10px"}}>✓ MERN Stack Development — Datics.ai / P@SHA</li>
          <li style={{marginBottom: "10px"}}>✓ Full Stack Developer — Game Train</li>
          <li style={{marginBottom: "10px"}}>✓ Full Stack Engineer Career Path — Codecademy</li>
          <li style={{marginBottom: "10px"}}>✓ DevOps Basics Learning Path — KodeKloud</li>
        </ul>
      </div>
    </>
  );
};

export default Education;

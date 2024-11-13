import React from "react";
import { SiReact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
         
            
          <VerticalTimeline lineColor="#1e1e2c">
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Dec 2023 - Current"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                House of Elaan
              </h4>
              <p>
              Worked on the ProSale Project, implementing a system with various types of administrators, each with differentiated 
              access and roles. <br/>
              Designed, developed, and completed the Client Portal for both administrators and users, streamlining communication 
              and management functions. <br/>
              Update the main website for House of Elaan, showcasing the company's offerings and enhancing the user experience.
              <br/>
              Trained and mentored numerous interns in MERN stack development, fostering new talent and sharing expertise.

              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date=" 01/01/2023 – 01/08/2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Part Time DevOps Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Wise 360 Solution
              </h4>
              <p>
              Worked as a Part-Time DevOps Engineer at Wise360, specializing in AWS cloud infrastructure 
              management and optimization.
              <br/>
              Worked extensively on Hostinger, deploying and managing multiple applications, ensuring their availability 
and performance.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Sept 2023 - Dec 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Junior Full Stack Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Game Train
              </h4>
              <p>
              Worked on Main (MERN) Technologies, ReatJs, NodeJs, ExpressJS, Mongose, including JavaScript, HTML, CSS, Bootstrap
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="2020 - 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Junior Full Stack Developer(BootCamp)
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Datics.ai
              </h4>
              <p>
              Worked on Main (MERN) Technologies, ReatJs, NodeJs, ExpressJS, Mongose, including JavaScript, HTML, CSS, Bootstrap. 
              
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "#1e1e2c" }}
              contentArrowStyle={{
                borderRight: "7px solid  white",
              }}
              date="Dec. 2021 - May 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                DevOps Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SkipQ
              </h4>
              <p>
                Worked at SkepQ as DevOps traine, where i have worked on AWS cloud and other tools and technologies that are using for DevOps enginering.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;

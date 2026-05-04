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
         
            
          <VerticalTimeline lineColor="var(--timeline-line)">
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
              contentArrowStyle={{
                borderRight: "7px solid var(--timeline-card-bg)",
              }}
              date="May 2025 - March 2026"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Full Stack & Mobile Application Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Allure Digital
              </h4>
              <p>
              Designed and developed a multi-client ERP system with advanced authentication, authorization, and RBAC. <br/>
              Built a cross-platform mobile app using React Native integrated with the ERP backend. <br/>
              Collaborated on WordPress-based web projects, optimizing performance, responsiveness, and SEO. <br/>
              Worked closely with designers and backend teams to ensure smooth API integration and data synchronization. <br/>
              Utilized MERN Stack (MongoDB, Express.js, React, Node.js) and React Native for scalable, high-performance solutions.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
              contentArrowStyle={{
                borderRight: "7px solid var(--timeline-card-bg)",
              }}
              date="Dec 2023 - Present"
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
              Led and completed major company projects including the ProSale Project with multi-role admin system. <br/>
              Designed and built a Client Portal improving management and communication efficiency. <br/>
              Enhanced company website for improved UX and engagement. <br/>
              Trained and mentored interns in MERN Stack development.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
              contentArrowStyle={{
                borderRight: "7px solid var(--timeline-card-bg)",
              }}
              date="Jan 2023 – Aug 2023"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                DevOps Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Wise 360 Solution
              </h4>
              <p>
              Managed and optimized AWS cloud infrastructure. <br/>
              Deployed and maintained multiple applications on Hostinger.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
              contentArrowStyle={{
                borderRight: "7px solid var(--timeline-card-bg)",
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
              Worked on MERN stack technologies including React.js, Node.js, Express.js, and MongoDB with JavaScript, HTML, CSS, and Bootstrap.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
              contentArrowStyle={{
                borderRight: "7px solid var(--timeline-card-bg)",
              }}
              date="Freelance"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                WordPress Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Freelance
              </h4>
              <p>
              Designed and developed custom WordPress websites with tailored functionality and SEO optimization.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
              contentArrowStyle={{
                borderRight: "7px solid var(--timeline-card-bg)",
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
              Hands-on training in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "var(--timeline-card-bg)", color: "var(--timeline-card-text)" }}
              contentArrowStyle={{
                borderRight: "7px solid var(--timeline-card-bg)",
              }}
              date="Jan 2022 – Dec 2022"
              iconStyle={{ background: "#1e1e2c", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                DevOps Trainee
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                SkipQ
              </h4>
              <p>
                Built and deployed cloud-native web applications using AWS, Docker, and Kubernetes. <br/>
                Automated CI/CD pipelines and implemented Infrastructure-as-Code (IaC).
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;

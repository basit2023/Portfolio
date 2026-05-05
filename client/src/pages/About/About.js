import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="about-card glass">
            <div className="about-img">
              <img
                src="images/basitp.jpeg"
                alt="profile_pic"
              />
            </div>
            <div className="about-content">
              <h1 className="gradient-text">About Me</h1>
              <p>
                I am Abdul Basit, a results-driven Full Stack and Mobile Application Developer focused on MERN stack development, React.js, Next.js, Node.js, Express.js, MongoDB, and React Native. I build SEO-friendly websites, business dashboards, ERP systems, service platforms, e-commerce stores, and cloud-ready applications for startups and growing companies.
                <br/><br/>
                My work combines frontend performance, backend APIs, database design, mobile app development, and DevOps practices across AWS, Docker, Kubernetes, and CI/CD. I care about fast loading pages, accessible UI, clean code, search visibility, and practical product features that help real users complete their work.
                <br/><br/>
                I have experience with multi-client ERP systems, role-based access control, admin portals, WordPress SEO optimization, and production deployments. I enjoy turning complex business requirements into simple, scalable, and maintainable digital products.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;

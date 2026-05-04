import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Abdul_Basit.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade bottom>
            <h2>Hi there, I'm</h2>
            <h1 className="gradient-text">
              <Typewriter
                options={{
                  strings: [
                    "Abdul Basit",
                    "FullStack Developer",
                    "Mobile Developer",
                    "DevOps Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="home-summary">
              Full stack developer in Pakistan building MERN stack web apps, React Native mobile apps, ERP systems, dashboards, WordPress websites, AWS cloud deployments, Docker workflows, and SEO-ready business websites.
            </p>
          </Fade>
          <Fade bottom delay={200}>
            <div className="home-buttons">
              <a
                className="btn-modern btn-hire"
                href="https://api.whatsapp.com/send?phone=923032144362"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a className="btn-modern btn-cv" href={Resume} download="Abdul_Basit.pdf">
                View Resume
              </a>
            </div>
          </Fade>
          <div className="sr-only">
            Abdul Basit portfolio, MERN stack developer, React developer, Node.js developer, React Native developer, mobile app developer, full stack engineer, DevOps engineer, AWS developer, Docker, Kubernetes, ERP software developer, WordPress SEO developer in Lahore Pakistan.
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

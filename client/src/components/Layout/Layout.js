import React from "react";
import Home from "../../pages/Home/Home";
import { Link } from "react-scroll";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <div className="navbar-modern">
        <div className="nav-logo">
          <h2 className="gradient-text" style={{margin: 0, fontWeight: 800}}>AB.</h2>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link-modern" to="home" spy={true} smooth={true} offset={-100} duration={100}>Home</Link>
          <Link className="nav-link-modern" to="about" spy={true} smooth={true} offset={-100} duration={100}>About</Link>
          <Link className="nav-link-modern" to="work" spy={true} smooth={true} offset={-100} duration={100}>Experience</Link>
          <Link className="nav-link-modern" to="education" spy={true} smooth={true} offset={-100} duration={100}>Education</Link>
          <Link className="nav-link-modern" to="techstack" spy={true} smooth={true} offset={-100} duration={100}>Skills</Link>
          <Link className="nav-link-modern" to="projects" spy={true} smooth={true} offset={-100} duration={100}>Projects</Link>
          <Link className="nav-link-modern" to="contact" spy={true} smooth={true} offset={-100} duration={100}>Contact</Link>
        </div>
      </div>
      <div className="sidebar-section">
        <Home />
      </div>
    </>
  );
};

export default Layout;

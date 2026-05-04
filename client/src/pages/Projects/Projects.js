import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="section-title">
          Top Recent <span className="gradient-text">Projects</span>
        </h2>
        <div className="row" id="ads">
          <Fade bottom cascade>
            {/* ProSale */}
            <div className="col-md-4 mb-4">
              <div className="card glass">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack & Mobile</span>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="prosale"
                  />
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5>ProSale - Sales Management</h5>
                  </div>
                  <p className="project-description">
                    Sales management platform with admin roles, reporting, customer workflows, and React Native mobile access for growing business teams.
                  </p>
                  <div className="mb-3">
                    <span className="card-detail-badge">React Native</span>
                    <span className="card-detail-badge">Node.js</span>
                    <span className="card-detail-badge">MongoDB</span>
                  </div>
                  <div className="d-flex gap-2">
                    <a className="ad-btn w-100" href="https://prosale.sale" target="_blank" rel="noreferrer">Web</a>
                    <a className="ad-btn w-100" href="https://play.google.com/store/apps/details?id=com.prosale.sale" target="_blank" rel="noreferrer">App</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Brothers Fix */}
            <div className="col-md-4 mb-4">
              <div className="card glass">
                <div className="card-image">
                  <span className="card-notify-badge">Service Platform</span>
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="brothersfix"
                  />
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5>Brothers Fix - Service App</h5>
                  </div>
                  <p className="project-description">
                    Service booking and operations app built for cleaner customer requests, team assignment, and reliable mobile-first field workflows.
                  </p>
                  <div className="mb-3">
                    <span className="card-detail-badge">React Native</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">Redux</span>
                  </div>
                  <div className="d-flex gap-2">
                    <a className="ad-btn w-100" href="https://app.brothersfix.com/" target="_blank" rel="noreferrer">View</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Peshawry Chapl */}
            <div className="col-md-4 mb-4">
              <div className="card glass">
                <div className="card-image">
                  <span className="card-notify-badge">E-commerce</span>
                  <img
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="project1"
                  />
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5>Peshawry Chapl Store</h5>
                  </div>
                  <p className="project-description">
                    MERN stack e-commerce website with product browsing, checkout flow, payment integration, and responsive shopping experience.
                  </p>
                  <div className="mb-3">
                    <span className="card-detail-badge">MERN Stack</span>
                    <span className="card-detail-badge">Stripe</span>
                  </div>
                  <a className="ad-btn" href="https://main--chimerical-marzipan-5ac1d5.netlify.app" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Web Health */}
            <div className="col-md-4 mb-4">
              <div className="card glass">
                <div className="card-image">
                  <span className="card-notify-badge">DevOps</span>
                  <img
                    src="https://images.unsplash.com/photo-1504868584819-f8eec7b600fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="project3"
                  />
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5>Web Health Monitoring</h5>
                  </div>
                  <p className="project-description">
                    AWS and Docker based monitoring project for website uptime, cloud health checks, alerts, and operational visibility.
                  </p>
                  <div className="mb-3">
                    <span className="card-detail-badge">AWS</span>
                    <span className="card-detail-badge">Docker</span>
                    <span className="card-detail-badge">DynamoDB</span>
                  </div>
                  <a className="ad-btn" href="https://github.com/basit2023/Project/tree/main/AbdulBasit/sprint__6_app" target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>

            {/* Elaan Marketing */}
            <div className="col-md-4 mb-4">
              <div className="card glass">
                <div className="card-image">
                  <span className="card-notify-badge">Real Estate</span>
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Elaan Marketing real estate website"
                  />
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5>Elaan Marketing</h5>
                  </div>
                  <p className="project-description">
                    Real estate marketing website designed for property listings, brand visibility, lead generation, responsive browsing, and SEO-focused business growth.
                  </p>
                  <div className="mb-3">
                    <span className="card-detail-badge">WordPress</span>
                    <span className="card-detail-badge">SEO</span>
                    <span className="card-detail-badge">Responsive</span>
                  </div>
                  <a className="ad-btn" href="https://elaanmarketing.com" target="_blank" rel="noreferrer">Live Website</a>
                </div>
              </div>
            </div>

            {/* Fast Site Check */}
            <div className="col-md-4 mb-4">
              <div className="card glass">
                <div className="card-image">
                  <span className="card-notify-badge">Website Tool</span>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Fast Site Check website performance and SEO tool"
                  />
                </div>
                <div className="card-body">
                  <div className="ad-title">
                    <h5>Fast Site Check</h5>
                  </div>
                  <p className="project-description">
                    Website checking platform for performance review, SEO inspection, technical health checks, speed insights, and business website optimization.
                  </p>
                  <div className="mb-3">
                    <span className="card-detail-badge">Web App</span>
                    <span className="card-detail-badge">SEO Audit</span>
                    <span className="card-detail-badge">Performance</span>
                  </div>
                  <a className="ad-btn" href="https://fastsitecheck.com" target="_blank" rel="noreferrer">Live Website</a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Projects;

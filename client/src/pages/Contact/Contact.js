import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./Contact.css";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  //handle submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }
      setLoading(true);
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      //validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
        setLoading(false);
      } else {
        toast.error(res.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <div className="contact-card glass">
          <div className="contact-img d-none d-lg-block">
            <LightSpeed>
              <img
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="contact"
              />
            </LightSpeed>
          </div>
          <div className="contact-form">
            <Rotate>
              <h6>Connect with me</h6>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/engr-abdul-basit/" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin size={35} />
                </a>
                <a href="https://github.com/basit2023/" target="_blank" rel="noopener noreferrer">
                  <BsGithub size={35} />
                </a>
                <a href="https://www.facebook.com/babarbasit.ali" target="_blank" rel="noopener noreferrer">
                  <BsFacebook size={35} />
                </a>
              </div>
              <div className="form-group">
                <input
                  aria-label="Full Name"
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  aria-label="Email Address"
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  aria-label="Your Message"
                  rows="4"
                  placeholder="Your Message"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
              </div>
              <button className="btn-submit" onClick={handleSubmit} disabled={loading}>
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </Rotate>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

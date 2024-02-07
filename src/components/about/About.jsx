import React from "react";
import "./about.css";
import ME from "../../assets/logosticker.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
// import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="This is my profile" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>16+ Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ WorldWide</small>
            </article>
            {/* 
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ completed</small>
            </article> */}
          </div>

          <p>
            Welcome to <strong>Chawla Broker</strong>, your trusted partner in crop trading.
            Specializing in rice husk production, we pride ourselves on
            delivering premium quality with a commitment to sustainability. At 
            <strong> Chawla Broker</strong>, we don't just trade; we cultivate a greener, more
            innovative future for agriculture. Join us in redefining the
            possibilities of crop trading.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

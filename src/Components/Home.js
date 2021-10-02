
import React from "react";

import Skills from "../Components/skills.js";
import Management from '../Components/Management.js';
import About from "./About.js";
import Experience from "./Experience.js";
import ProjectCard1 from "./ProjectCard1.js";
import ProjectCard2 from "./ProjectCard2.js";
import ProjectCard3 from "./ProjectCard3.js";
import ProjectCard4 from "./ProjectCard4.js";
import Contact from "./Contact.js";
import Connect from "./Connect.js";

const Home = () => {
  return (
    <>
      <section className="page-section" id="landing">
        <div className="landing-box">
          <div id="centre">ADRIAN PANTEA</div>
          <br />
          <div id="centre">
            <span>/</span>
          </div>
          <br />
          <div id="centre">JUNIOR SOFTWARE ENGINEER</div>
        </div>
      </section>

      <section className="page-section" id="about">
        <About />
        <div className="about-right">
          <Skills />
          <Management />
        </div>
      </section>

      <section
        id="about-experience-image"
        className="image-about-experience"
      ></section>

      <Experience />

      <section className="page-section" id="projects">
        <h1 id="section-title" className="owner">
          &lt; projects /&gt;
        </h1>

        <div className="project-container">
          <div className="project-card" id="project-margin">
            <ProjectCard1 />
          </div>

          <div className="project-card" id="project-margin">
            <ProjectCard2 />
          </div>

          <div className="project-card" id="project-margin">
            <ProjectCard3 />
          </div>

          <div className="project-card" id="project-margin">
            <ProjectCard4 />
          </div>
        </div>
      </section>

      <Contact />

      <Connect />

      {/* <section id="connect" className="about-section">
        <div className="left-connect-div">
          <h1 className="let-connect">or feel free to connect.</h1>
          <p className="connect-copyrights">© 2021 Adrian Pantea</p>
        </div>
        <div className="right-connect-div">
          <div id="connect-social">
            <a
              className="connect-social-links render"
              href="mailto:adrianpantea10@gmail.com"
            >
              Email
            </a>
          </div>
          <div id="connect-social">
            <a
              className="connect-social-links render"
              href="https://github.com/adrianp2021"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </div>
          <div id="connect-social">
            <a
              className="connect-social-links render"
              href="https://twitter.com/AdrianPantea4"
              rel="noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </div>
          <div id="connect-social">
            <a
              className="connect-social-links render"
              href="https://www.linkedin.com/in/adrian-pantea/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;

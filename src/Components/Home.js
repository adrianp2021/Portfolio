import React from "react";

import About from "./About.js";
import Skills from "./Skills.js";
import Management from "./Management.js";
import Experience from "./Experience.js";
import ProjectCard1 from "./ProjectCard1.js";
import ProjectCard2 from "./ProjectCard2.js";
import ProjectCard3 from "./ProjectCard3.js";
import ProjectCard4 from "./ProjectCard4.js";
import Contact from "./Contact.js";

import mac from "../images/mac.png";

const Home = () => {
  return (
    <>
      <section className="page-section" id="landing-container">
        <div className="section-box landing-box">
          <div className="landing-left-div">
            <h3>
              <span className="landing-span"></span>Hello there
            </h3>
            <h2 className="name">&lt; I am Adrian Pantea /&gt;</h2>
            <p>
              A<span id="span"> Junior Full-Stack Software Enginner</span>,
              focused on simplicity and creating amazing web applications.
            </p>
          </div>
          <img src={mac} alt="" className="img"></img>
        </div>
      </section>

      <section className="page-section" id="about-container">
        <About />
        <Skills />
        <Management />
      </section>

      <Experience />

      <section className="page-section" id="project-container">
        <div className="section-box" id="project-box">
          <h1 id="section-title" className="owner">
            &lt; projects /&gt;
          </h1>
          <div className="projects-boxes">
            <ProjectCard1 />
            <ProjectCard2 />
            <ProjectCard3 />
            <ProjectCard4 />
          </div>
        </div>
      </section>
      <Contact />
      {/* <Connect /> */}
    </>
  );
};

export default Home;

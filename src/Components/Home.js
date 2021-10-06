import React from "react";

import About from "./About.js";
import Experience from "./Experience.js";
import ProjectCard1 from "./ProjectCard1.js";
import ProjectCard2 from "./ProjectCard2.js";
import ProjectCard3 from "./ProjectCard3.js";
import ProjectCard4 from "./ProjectCard4.js";
import Contact from "./Contact.js";

import mac from "../images/mac.png";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section className="page-section" id="landing-container">
        <div className="section-box landing-box">
          <motion.div
            className="landing-left-div"
            animate="visible"
            initial="hidden"
            variants={{
              hidden: {
                scale: 0.5,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 1,
                  type: "spring",
                  stiffness: 60,
                },
              },
            }}
          >
            <h3>
              <span className="landing-span"></span>Hello there
            </h3>
            <h2 className="name">&lt; I am Adrian Pantea /&gt;</h2>
            <p>
              A<span id="span"> Junior Full-Stack Software Engineer</span>,
              focused on simplicity and creating amazing web applications.
            </p>
          </motion.div>
          <motion.img
            animate="visible"
            initial="hidden"
            variants={{
              hidden: {
                scale: 0.5,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 2,
                  type: "tween",
                  stiffness: 60,
                  damping: 15,
                },
              },
            }}
            src={mac}
            alt=""
            className="img"
          ></motion.img>
        </div>
      </section>

      <section className="page-section">
        <About />
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

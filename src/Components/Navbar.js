/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
// import { Link } from 'react-router-dom'
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import mail from "../images/email.png";

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <h1 className="owner"> &lt; AP /&gt;</h1>

      <div className="navbar-items">
        <a className="render nav-item" href="#about-container" title="about">
          about
        </a>
        <a
          className="render nav-item"
          href="#experience-container"
          title="experience"
        >
          experience
        </a>
        <a
          className="render nav-item"
          href="#project-container"
          title="projects"
        >
          projects
        </a>
        <a
          className="render nav-item"
          id="right-navbar-content"
          href="#contact-container"
          title="contact"
        >
          contact
        </a>
      </div>
      <div className="navbar-social">
        <a
          href="https://github.com/adrianp2021"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="" target="_blank" id="social-icon"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/adrian-pantea/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} id="social-icon" alt=""></img>
        </a>
        <a href="mailto:adrianpantea10@gmail.com" rel="noreferrer">
          <img src={mail} alt="" id="social-icon"></img>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

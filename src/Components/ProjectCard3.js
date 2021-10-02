import React from "react";
import pilis from "../project/pilis.jpeg";

const ProjectCard3 = () => {
  return (
    <div className="project-card">
      <div>
        <a
          href="https://whispering-coast-70189.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-image" src={pilis} alt=""></img>
        </a>
      </div>
      <div className="project-info">
        <h2>Project 3</h2>
        <div>
          <a
            href="https://whispering-coast-70189.herokuapp.com/"
            rel="noreferrer"
            target="_blank"
          >
            <h2 className="project-name">PilisTrust</h2>
          </a>
        </div>
      </div>
      <div className="project-description">
        <p>
          Full-Stack MERN app based on TrustPilot, with Greek mythology theme.
          Gods or standard users can register/login, and leave reviews based on
          their individual experience. Register/login (as well as authenticating
          the users), landing and about pages were the main areas of attention
          for me during this project.
        </p>
      </div>
      <div class="libraries">
        <p class="libraries-technologies ">Node.js</p>
        <p class="libraries-technologies ">Express</p>
        <p class="libraries-technologies ">MongoDB</p>
        <p class="libraries-technologies ">Mongoose</p>
        <p class="libraries-technologies ">React</p>
      </div>
      <div className="app-links">
        <ul>
          <li>
            <a
              href="https://github.com/adrianp2021/SEI-Project-3"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://whispering-coast-70189.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard3;

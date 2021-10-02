import React from "react";
import crumble from "../project/crumble.jpeg";

const ProjectCard4 = () => {
  return (
    <div className="project-card">
      <a
        href="https://github.com/adrianp2021/SEI-Project-4"
        target="_blank"
        rel="noreferrer"
      >
        <img className="project-image" src={crumble} alt=""></img>
      </a>
        <div className="project-info">
          <h2>Project 4</h2>
          <div>
            <a
              href="https://github.com/adrianp2021/SEI-Project-4"
              rel="noreferrer"
              target="_blank"
            >
              <h2 className="project-name">Crumble</h2>
            </a>
          </div>
        </div>
        <div className="project-description">
          <p>
            A Full-Stack dating app, which allows users to register and/or
            login, and find others who share the same interests. I built the
            Front-End with React, JavaScript, and styled it with Bulma and
            Semantic UI. I built the Back-End with an SQL database (I used Table
            Plus for database management) using Django/Python.
          </p>
        </div>
        <div className="libraries">
          <p className="libraries-technologies ">React</p>
          <p className="libraries-technologies ">Bulma</p>
          <p className="libraries-technologies ">Django</p>
          <p className="libraries-technologies ">Python</p>
          <p className="libraries-technologies ">PostgreSQL</p>
        </div>
        <div className="app-links">
          <ul>
            <li>
              <a
                href="https://github.com/adrianp2021/SEI-Project-4"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/adrianp2021/SEI-Project-4"
                rel="noreferrer"
                target="_blank"
              >
                <i class="fa fa-external-link" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
    </div>
  );
};

export default ProjectCard4;

import React from "react";
import crumble from "../project/crumble.jpeg";

const ProjectCard4 = () => {
  return (
    <div className="project-card"
  
    
    >
      <div className="project-info">
        <a
          href="https://github.com/adrianp2021/SEI-Project-4"
          rel="noreferrer"
          target="_blank"
        >
          <h2 className="project-name">Crumble</h2>
        </a>

        <p>
          A Full-Stack dating app, built with <span id="span">React</span>,{" "}
          <span id="span">Django</span>, <span id="span">Python </span>,{" "}
          <span id="span"> PostgreSQL</span> and <span id="span">Bulma </span>
          which allows users to register and/or login, and find others who share
          the same interests. I built the Front-End with React, JavaScript, and
          styled it with Bulma and Semantic UI. I built the Back-End with an SQL
          database (I used Table Plus for database management) using
          Django/Python.
        </p>

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
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
      <div >
        <a
          href="https://github.com/adrianp2021/SEI-Project-4"
          target="_blank"
          rel="noreferrer"
        >
          <div className="img-hover-zoom img-hover-zoom--colorize">
            <img src={crumble} alt="" className="project-image"></img>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard4;

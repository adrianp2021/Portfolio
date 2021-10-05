import React from "react";
import pilis from "../project/pilis.jpeg";

const ProjectCard3 = () => {
  return (
    <div className="project-card">
      <div className="project-info">
        <a
          href="https://whispering-coast-70189.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="project-name">PilisTrust</h2>
        </a>

        <p>
          Full-Stack MERN <span id="span">MongoDb</span>,
          <span id="span"> Express</span>, <span id="span">React</span> and{" "}
          <span id="span">Node.js </span> app based on TrustPilot, with Greek
          mythology theme. Gods or standard users can register/login, and leave
          reviews based on their individual experience. Register/login (as well
          as authenticating the users), landing and about pages were the main
          areas of attention for me during this project.
        </p>

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

      <div >
        <a
          href="https://whispering-coast-70189.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="img-hover-zoom img-hover-zoom--colorize">
            <img className="project-image" src={pilis} alt=""></img>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard3;

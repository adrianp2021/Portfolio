import React from "react";
import snake from "../project/snake.jpeg";

const ProjectCard1 = () => {
  return (
    <div className="project-card">
      <div>
        <a
          href="https://adrianp2021.github.io/SEI-Project-1/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-image" src={snake} alt=""></img>
        </a>
      </div>
      <div className="project-info">
        <h2>Project 1</h2>
        <div>
          <a
            href="https://adrianp2021.github.io/SEI-Project-1/"
            rel="noreferrer"
            target="_blank"
          >
            <h2>Snake</h2>
          </a>
        </div>
      </div>
      <div className="project-description">
        <p>
          Snake is a childhood classic, and recreating it provided me with the
          opportunity to cement my JavaScript skills and recreating the game was
          an excellent learning curve. The game will automatically start on the
          load page and once the snake dies, it can be brought back to life by
          pressing the Enter key. If it loses all 3 lives then it is game over.
        </p>
      </div>
      <div className="libraries">
        <p className="libraries-technologies">HTML</p>
        <p className="libraries-technologies">CSS</p>
        <p className="libraries-technologies">JavaScript</p>
      </div>
      <div className="app-links">
        <ul>
          <li>
            <a
              href="https://github.com/adrianp2021/SEI-Project-1"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://adrianp2021.github.io/SEI-Project-1/"
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

export default ProjectCard1;

import React from "react";
import snake from "../project/snake.jpeg";

const ProjectCard1 = () => {
  return (
    <div className="project-card">
      <div className="project-info">
        <a
          href="https://adrianp2021.github.io/SEI-Project-1/"
          rel="noreferrer"
          target="_blank"
        >
          <h1>Snake</h1>
        </a>

        <p>
          Snake is a childhood classic, and recreating it provided me with the
          opportunity to further cement my <span id="span">JavaScript</span>,
          <span id="span"> HTML</span> and <span id="span">CSS</span> skills and
          recreating the game was an excellent learning curve. The game will
          automatically start on the load page and once the snake dies, it can
          be brought back to life by pressing the Enter key. If it loses all 3
          lives then it is game over.
        </p>

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

      <div >
        <a
          href="https://adrianp2021.github.io/SEI-Project-1/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="img-hover-zoom img-hover-zoom--colorize">
            <img src={snake} alt="" className="project-image"></img>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard1;

import React from "react";
import drinkard from "../project/drinkard.jpeg";

const ProjectCard2 = () => {
  return (
    <div className="project-card">
      <div className="project-info">
        <a
          href="https://drinkard.netlify.app/"
          rel="noreferrer"
          target="_blank"
        >
          <h2>Drinkard</h2>
        </a>

        <p>
          DRINKARD is an application which hosts a variety of 25 cocktails. The
          aim was to get information from a Cocktail API and then building our
          application. It was built with <span id="span">HTML/CSS</span>,{" "}
          <span id="span">React.js</span>,<span id="span">Axios</span>,{" "}
          <span id="span">Bulma</span> and an external{" "}
          <span id="span"> API</span>. Once the page loads, a "Welcome to
          DRINKARD 🍸" message displays, with the glass being clickable. If the
          user clicks on the glass, it will direct him/her to the cocktails
          page.
        </p>

        <ul>
          <li>
            <a
              href="https://github.com/adrianp2021/SEI-Project-2"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://drinkard.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <a
          href="https://drinkard.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="img-hover-zoom img-hover-zoom--colorize">
            <img className="project-image" src={drinkard} alt=""></img>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard2;

import React from "react";
import drinkard from "../project/drinkard.jpeg";

const ProjectCard2 = () => {
  return (
    <div className="project-card">
      <div className="project-image">
        <a
          href="https://drinkard.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="project-image" src={drinkard} alt=""></img>
        </a>
      </div>
      <div className="project-info">
        <h2>Project 2</h2>
        <div>
          <a
            href="https://drinkard.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <h2>Drinkard</h2>
          </a>
        </div>
      </div>
      <div className="project-description">
        <p>
          DRINKARD is an application which hosts a variety of 25 cocktails. The
          aim was to get information from a Cocktail API and then building our
          application. Once the page loads, a "Welcome to DRINKARD 🍸" message
          displays, with the glass being clickable. If the user clicks on the
          glass, it will direct him/her to the cocktails page.
        </p>
      </div>
      <div class="libraries">
        <p className="libraries-technologies ">HTML/CSS</p>
        <p className="libraries-technologies ">React.js</p>
        <p className="libraries-technologies ">Axios</p>
        <p className="libraries-technologies ">Bulma</p>
        <p className="libraries-technologies ">API</p>
      </div>
      <div className="app-links">
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
    </div>
  );
};

export default ProjectCard2;

import React from "react";

import ga from "../images/ga.png";
import depinna from "../images/depinna.png";

const Experience = () => {
  return (
    <section className="page-section" id="experience-container">
      <div className="section-box" id="experience-box">
        <h2 id="section-title" className="owner">
          &lt; experience /&gt;
        </h2>

        <div className="work-experience">
        <div className="work-box">
          <img id="work-logo" src={depinna} alt=""></img>
          <h2>Multilingual Paralegal</h2>
          <p>March 2020 - March 2021</p>
          <p>
            Drafted and amended Notarial Certificates, Board Resolutions,
            Affidavits and other legal documentation in English and other
            commercially relevant foreign languages. Translated over 20
            documents per day and prepared them for legalisation, maintaining
            consistency with clients’ demands.
          </p>
        </div>

        <div className="work-box">
          <img id="work-logo" src={ga} alt=""></img>
          <h2>Software Engineering Immersive Course</h2>
          <p>May 2021 - July 2021</p>
          <p>
            A 12-week full-time bootcamp designed for a career transformation in
            tech where I learnt the fundamental skills to build Full- Stack web
            applications. Throughout the bootcamp, I also learned to work
            through the agile method, work in a team, have daily stand-ups,
            refine and plan our projects.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Experience;

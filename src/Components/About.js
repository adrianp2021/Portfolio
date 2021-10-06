import React from "react";
import Management from "./Management.js";
import Skills from "./Skills.js";



const About = () => {
  return (
    <section className="page-section" id="about-container">
      <div className="section-box" id="about-box">
        <h2 id="section-title" className="owner">
          &lt; about me /&gt;
        </h2>
        <div className="about-myself">
          <h3>I love simple code.</h3>
          <p>
            I'm Adrian, a{" "}
            <span id="span">Junior Full-Stack Software Engineer</span> based in
            London, United Kingdom.
          </p>
          <p>
            I am a Law and Software Engineering bootcamp graduate and I
            currently look for challenging opportunities. Attention to detail,
            grit, integrity and problem solving are some of my strengths.
          </p>
          <p>
            I enjoy fantasy and sci-fi movies (Lord of the Rings and Contact
            being my all-time favourites), good music, and quality time with my
            family.
          </p>
        </div>
        <div className="learn">
          <p id="span" className="underline">Currently learning:</p>
          <div className="skills-set">
            <div className="skill-box">
              <img
                className="skill"
                alt=""
                src="https://raw.githubusercontent.com/samfromaway/samfromaway/master/.github/images/nextjs.png"
              ></img>
              <p>Next.js</p>
            </div>
            <div className="skill-box">
              <img
                className="skill"
                alt=""
                src="https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png"
              ></img>
              <p>Vue.js</p>
            </div>
            <div className="skill-box">
              <img
                className="skill"
                alt=""
                src="https://bourhaouta.gallerycdn.vsassets.io/extensions/bourhaouta/tailwindshades/0.0.5/1592520164095/Microsoft.VisualStudio.Services.Icons.Default"
              ></img>
              <p>Tailwind CSS</p>
            </div>
          </div>
          <Skills />
        <Management />
        </div>
      
      </div>

    </section>
  );
};

export default About;

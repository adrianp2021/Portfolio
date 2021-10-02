import React from "react";

const About = () => {
  return (
    <div className="about-left">
      <h1 id="section-title" className="owner">
        &lt; about me /&gt;
      </h1>
      <h2>I love simple code.</h2>
      <h3>
        My name is Adrian, and I'm a Junior Software Engineer based in London,
        United Kingdom.
      </h3>

      <h3 className="about-introduction-paragraph">
        I enjoy fantasy and sci-fi movies (Lord of the Rings and Contact being
        my all-time favourites), good music, and quality time with my family.
      </h3>

      <div className="learn">
        <h2>Currently learning:</h2>
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
              src="http://assets.stickpng.com/thumbs/58482acecef1014c0b5e4a1e.png"
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
      </div>
    </div>
  );
};

export default About;

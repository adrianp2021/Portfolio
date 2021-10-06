import React from "react";

const Skills = () => {
  const logoImages = [
    {
      name: "CSS 3",
      link: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      name: "HTML 5",
      link: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
    },
    {
      name: "JavaScript",
      link: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "Bulma",
      link: "https://iconape.com/wp-content/files/df/370667/svg/370667.svg",
    },
    {
      name: "React",
      link: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png",
    },
    {
      name: "MongoDB",
      link: "https://img2.pngio.com/mongodb-logo-mongodb-inc-png-2000_1379.png",
    },
    {
      name: "Node.js",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/320px-Node.js_logo.svg.png",
    },
    {
      name: "Python",
      link: "https://img.pngio.com/python-programming-language-icon-transparent-png-svg-vector-python-png-512_512.png",
    },
    {
      name: "Sass",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",
    },
    {
      name: "Semantic UI",
      link: "https://react.semantic-ui.com/logo.png",
    },
    {
      name: "Django",
      link: "https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png",
    },
    {
      name: "PostgreSQL",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    },
  ];

  return (
    <section className="section-box">
      <div className="skills">
        <p id="span" className="underline">Programming skills:</p>
        <div className="web-development">
          {logoImages.map((image, i) => {
            return (
              <>
                <div className="skill-name" key={i}>
                  <img src={image.link} className="skill" alt="img" />
                  <p>{image.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;


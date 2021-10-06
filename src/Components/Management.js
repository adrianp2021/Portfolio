import React from "react";

const Management = () => {
  const logoImages = [
    {
      name: "npm",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png"
    },
    {
      name: "Yarn",
      link: "https://w1.pngwing.com/pngs/798/531/png-transparent-react-logo-npm-javascript-package-manager-nodejs-github-installation-yarn.png"
    },
    {
      name: "Git",
      link: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
    },
    {
      name: "Github",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
    },
    {
      name: "Slack",
      link: "https://dashboard.snapcraft.io/site_media/appmedia/2019/01/Snapcraft_256x256.png"
    },
    {
      name: "Insomnia",
      link: "https://ucarecdn.com/4595f3fd-6943-4d2f-a3fb-140f9ace4a56/-/format/auto/-/progressive/yes/-/preview/480x480/"
    },
    {
      name: "VS Code",
      link: "https://insmac.org/uploads/posts/2021-07/1625841610_code.png"
    },
    {
      name: "Trello",
      link: "http://assets.stickpng.com/images/58482beecef1014c0b5e4a36.png"
    },
    {
      name: "TablePlus",
      link: "https://tableplus.com/resources/favicons/apple-icon.png"
    }
  ];

  return (
    <section className="section-box">
      <div className="skills">
        <p id="span" className="underline">Management tools:</p>
        <div className="web-development">
          {logoImages.map((image, i) => {
            return (
              <>
                <div key={i} />
                <div className="skill-name">
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

export default Management;

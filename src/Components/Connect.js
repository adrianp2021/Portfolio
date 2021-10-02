import React from "react";

const Connect = () => {
  return (
    <section className="connect-section" id="connect">
      <div id="container">
        <div className="top-div">
          <h1 id="section-title" className="owner">
            {" "}
            &lt; connect /&gt;
          </h1>
        </div>

        <div className="connect-divs">
          <div className="left-div">
            <h2>or feel free to connect</h2>
            <p className="connect-copyrights">© 2021 Adrian Pantea</p>
          </div>

          <div className="right-div">
            <div id="connect-social">
              <a
                className="connect-social-links render"
                href="mailto:adrianpantea10@gmail.com"
              >
                email
              </a>
            </div>

            <div id="connect-social">
              <a
                className="connect-social-links render"
                href="https:github.com/adrianp2021"
                rel="noreferrer"
                target="_blank"
              >
                github
              </a>
            </div>

            <div id="connect-social">
              <a
                className="connect-social-links render"
                href="https:twitter.com/AdrianPantea4"
                rel="noreferrer"
                target="_blank"
              >
                twitter
              </a>
            </div>

            <div id="connect-social">
              <a
                className="connect-social-links render"
                href="httpwww.linkedin.com/in/adrian-pantea/"
                rel="noreferrer"
                target="_blank"
              >
                linkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;

// eslint-disable-next-line
import React from 'react'
import arrow from '../images/arrow.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import snake from '../project/snake.jpeg'
import github1 from '../images/github1.png'
import link from '../images/link.png'
import drinkard from '../project/drinkard.jpeg'
import pilis from '../project/pilis.jpeg'
import crumble from '../project/crumble.jpeg'

const Home = () => {
  return (
    <>
      <section className="is-fullheight-with-navbar page-section" id="landing">
        <div className="landing-box">
          <div className="introduction-1">
            <div className="container-hello">
              <h1 className=" is-1 hello-there">
                Hello. <br></br>
                I am
                <div className="span-glitch">
                  <span aria-hidden="true"> Adrian. </span>Adrian. <span aria-hidden="true">Adrian. </span>
                </div>

              </h1>
            </div>
            <div className="developer introduction-2">
              <img className="logo" src={arrow} alt="arrow"></img>
              <div className="description-h3">
                <h3 className="description" id="yellow">Junior Developer</h3>
                <h3 className="description">Freelance</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="social-links">
          <a href="https://github.com/adrianp2021" target="_blank" rel="noreferrer"><img class="media-links" src={github} alt="github" /></a>
          <a href="https://www.linkedin.com/in/adrian-pantea/" target="_blank" rel="noreferrer"><img class="media-links" src={linkedin} alt="linkedin"></img></a>
        </div> */}
        {/* <hr className="hr-social"></hr> */}
      </section>


      <section id="projects" class="page-section project-section">
        <header className="main-header-projects">
          <h1>My <span>projects</span></h1>
          <p>lorem ipsume30</p>
        </header>
        <div className="project-container">
          <section className="project-card" data-aos="fade-right">
            <a href="https://adrianp2021.github.io/SEI-Project-1/" target="_blank" rel="noreferrer"><img className="image-links" src={snake} alt=""></img></a>
            <div class="project-one" data-aos="fade-left">
              {/* <div className="project-right"> */}
              <h3>Project 1</h3>
              {/* </div> */}
              <div>
                <a href="https://adrianp2021.github.io/SEI-Project-1/" rel="noreferrer" target="_blank">
                  <h2 className="project-name" data-aos="fade-down">Snake</h2>
                </a>
              </div>
              <div className="project-description" data-aos="fade-up">
                <p>Snake is a childhood classic, and recreating it provided me with the opportunity to cement my JavaScript skills and recreating the game was an excellent learning curve. The game will automatically start on the load page and once the snake dies, it can be brought back to life by pressing the Enter key. If it loses all 3 lives then it is game over.
                </p>
              </div>
              <div className="libraries project-1-technologies" data-aos="fade-right">
                <p className="libraries-technologies">HTML</p>
                <p className="libraries-technologies">CSS</p>
                <p className="libraries-technologies">JavaScript</p>
              </div>
              <div class="app-links">
                <ul>
                  <li><a href="https://github.com/adrianp2021/SEI-Project-1" rel="noreferrer" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://adrianp2021.github.io/SEI-Project-1/" rel="noreferrer" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                </ul>
                {/* <a href="https://github.com/adrianp2021/SEI-Project-1" rel="noreferrer" target="_blank"><img className="links-image" alt="" src={github1}></img></a>
                <a href="https://adrianp2021.github.io/SEI-Project-1/" rel="noreferrer" target="_blank"><img className="links-image" alt="" src={link}></img></a> */}
              </div>
            </div>
          </section>
          <section className="project-card" data-aos="fade-right">
            <a href="https://drinkard.netlify.app/" target="_blank" rel="noreferrer"><img className="image-links" src={drinkard} alt=""></img></a>
            <div className="project-two">
              {/* <div className="project-right"> */}
              <h3>Project 3</h3>
              {/* </div> */}
              <div>
                <a href="https://drinkard.netlify.app/" rel="noreferrer" target="_blank">
                  <h2 className="project-name">Drinkard</h2>
                </a>
              </div>
              <div className="project-description">
                <p>DRINKARD is an application which hosts a variety of 25 cocktails. The aim was to get information from a Cocktail API and then building our application. Once the page loads, a "Welcome to DRINKARD 🍸" message displays, with the glass being clickable. If the user clicks on the glass, it will direct him/her to the cocktails page.
                </p>
              </div>
              <div class="libraries project-2-technologies">
                <p className="libraries-technologies ">HTML/CSS</p>
                <p className="libraries-technologies ">React.js</p>
                <p className="libraries-technologies ">Axios</p>
                <p className="libraries-technologies ">Bulma</p>
                <p className="libraries-technologies ">API</p>
              </div>
              <div class="app-links">
              <ul>
                  <li><a href="https://github.com/adrianp2021/SEI-Project-2" rel="noreferrer" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://drinkard.netlify.app/" rel="noreferrer" target="_blank"><i className="fa fa-external-link" aria-hidden="true"></i></a></li>
                </ul>
                {/* <a href="https://github.com/adrianp2021/SEI-Project-2" rel="noreferrer" target="_blank"><img className="links-image" alt="" src={github1}></img></a>
                <a href="https://drinkard.netlify.app/" rel="noreferrer" target="_blank"><img className="links-image" alt="" src={link}></img></a> */}
              </div>
            </div>
          </section>

          <section className="project-card" data-aos="fade-left">
            <a href="https://whispering-coast-70189.herokuapp.com/" target="_blank" rel="noreferrer"><img className="image-links" src={pilis} alt=""></img></a>
            <div className="project-three">
              {/* <div className="project-right"> */}
              <h3>Project 2</h3>
              {/* </div> */}
              <div>
                <a href="https://whispering-coast-70189.herokuapp.com/" rel="noreferrer" target="_blank">
                  <h2 className="project-name">PilisTrust</h2>
                </a>
              </div>
              <div className="project-description">
                <p>Full-Stack MERN app based on TrustPilot, with Greek mythology theme. Gods or standard users can register/login, and leave reviews based on their individual experience. Register/login (as well as authenticating the users), landing and about pages were the main areas of attention for me during this project.
                </p>
              </div>
              <div class="libraries project-3-technologies">
                <p class="libraries-technologies ">Node.js</p>
                <p class="libraries-technologies ">Express</p>
                <p class="libraries-technologies ">MongoDB</p>
                <p class="libraries-technologies ">Mongoose</p>
                <p class="libraries-technologies ">React</p>
              </div>
              <div class="app-links">
                <a href="https://github.com/adrianp2021/SEI-Project-3" rel="noreferrer" target="_blank"><img className="links-image" alt="" src={github1}></img></a>
                <a href="https://whispering-coast-70189.herokuapp.com/" rel="noreferrer" target="_blank"><img className="links-image" alt="" src={link}></img></a>
              </div>
            </div>
          </section>
          <section className="project-card" data-aos="fade-right">
            <a href="" target="_blank" rel="noreferrer"><img className="image-links" src={crumble} alt=""></img></a>
            <div className="project-four">
              {/* <div className="project-right"> */}
              <h3>Project 4</h3>
              {/* </div> */}
              <div>
                <a href="" rel="noreferrer" target="_blank">
                  <h2 className="project-name">PilisTrust</h2>
                </a>
              </div>
              <div className="project-description">
                <p>A Full-Stack dating app, which allows users to register and/or login, and find others who share the same interests. I built the Front-End with React, JavaScript, and styled it with Bulma and Semantic UI. I built the Back-End with an SQL database (I used Table Plus for database management) using Django/Python.
                </p>
              </div>
              <div class="libraries project-4-technologies">
                <p class="libraries-technologies ">React</p>
                <p class="libraries-technologies ">Bulma</p>
                <p class="libraries-technologies ">Django</p>
                <p class="libraries-technologies ">Python</p>
                <p class="libraries-technologies ">PostgreSQL</p>
              </div>
              <div class="app-links">
                <a href="https://github.com/adrianp2021/SEI-Project-4" rel="noreferrer" target="_blank"><img className="links-image" alt="" src={github1}></img></a>
                <a href="https://whispering-coast-70189.herokuapp.com/" rel="noreferrer" target="_blank"><img className="links-image" alt="" src={link}></img></a>
              </div>
            </div>
          </section>
        </div>
      </section>

    <section id="about" class="page-section about-section"></section>
    </>
  )
}

export default Home

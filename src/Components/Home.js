/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
// eslint-disable-next-line
import React, { useState } from 'react'

import snake from '../project/snake.jpeg'
import drinkard from '../project/drinkard.jpeg'
import pilis from '../project/pilis.jpeg'
import crumble from '../project/crumble.jpeg'
// import adrian from '../images/adrian.jpg'
import logo1 from '../images/triangle.png'
import logo from '../images/triangle-logo.png'
// import logo2 from '../images/triangle-logo1.png'
import css from '../images/css.png'
import html from '../images/html.png'
import js from '../images/js.png'
import bulma from '../images/bulma.png'
import react from '../images/react.png'
import mongodb from '../images/mongodb.png'
import nodejs from '../images/nodejs.png'
import python from '../images/python.png'
import sass from '../images/sass.png'
import semantic from '../images/semantic.png'
import django from '../images/django.png'
import npm from '../images/npm.png'
import yarn from '../images/yarn.png'
import git from '../images/git.png'
import github from '../images/github.png'
import slack from '../images/slack.png'
import insomnia from '../images/insomnia.png'
import vscode from '../images/vscode.png'
import trello from '../images/trello.png'
import tableplus from '../images/tableplus.png'
import next from '../images/next.png'
import ga from '../images/general.png'
import depinna from '../images/depinna.png'
import vue from '../images/vue.png'




const Home = () => {

  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    contactEmail: '',
    subject: '',
    message: ''
  })

  function handleFormChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
    console.log(formValue)
  }

  return (
    <>
      <section className="is-fullheight-with-navbar page-section" id="landing">
        <div className="landing-box">
          {/* <img className="adrian-photo" src={adrian} alt=""></img> */}
          <h2>ADRIAN PANTEA</h2>
          <p>JUNIOR WEB DEVELOPER</p>
        </div>
      </section>

      <section id="about" className="page-section about-section">
        <div>
          <div className="about-introduction-left">
            <img className="logo-about" src={logo} alt=""></img>
            <h1>about.</h1>
            <h4 className="about-introduction-paragraph">My name is Adrian, and I'm a Junior Software Engineer based in London, United Kingdom. </h4>
            <h4 className="about-introduction-paragraph">
              I enjoy fantasy and sci-fi movies (Lord of the Rings and Contact being my all-time favourites), good music, and quality time with my family.</h4>
          </div>
        </div>

        <div className="skills">
          <h1>web development skills</h1>
          <div className="skills-set">
            <img className="skill" alt="" src={css}></img>
            <img className="skill" alt="" src={html}></img>
            <img className="skill" alt="" src={js}></img>
            <img className="skill" alt="" src={bulma}></img>
            <img className="skill" alt="" src={react}></img>
            <img className="skill" alt="" src={mongodb}></img>
            <img className="skill" alt="" src={nodejs}></img>
            <img className="skill" alt="" src={python}></img>
            <img className="skill" alt="" src={sass}></img>
            <img className="skill" alt="" src={semantic}></img>
            <img className="skill" alt="" src={django}></img>
          </div>

          <h1>management tools</h1>
          <div>
            <img className="skill" alt="" src={npm}></img>
            <img className="skill" alt="" src={yarn}></img>
            <img className="skill" alt="" src={git}></img>
            <img className="skill" alt="" src={github}></img>
            <img className="skill" alt="" src={slack}></img>
            <img className="skill" alt="" src={insomnia}></img>
            <img className="skill" alt="" src={vscode}></img>
            <img className="skill" alt="" src={trello}></img>
            <img className="skill" alt="" src={tableplus}></img>
          </div>

          <h1>currently learning</h1>
          <img className="skill1" alt="" src={next}></img>
          <img className="skill1" alt="" src={vue}></img>

        </div>
      </section>

      <section id="about-experience-image" className="image-about-experience">
      </section>

      <section id="skills" className="page-section skills-section">
        <div id="experience">
          <img className="logo-about" src={logo1} alt=""></img>
          <h2 className="skills-title">experience.</h2>
          <div className="work-experience">
            <div className="de-pinna">
              <img className="logo-experience1" src={depinna} alt=""></img>
              <h2>Multilingual Paralegal</h2>
              <p>Drafted and amended Notarial Certificates, Board Resolutions, Affidavits and other legal documentation in English and other
                commercially relevant foreign languages. Translated over 20 documents per day and prepared them for legalisation, maintaining consistency with clients’ demands.</p>
            </div>
            <div className="general-assembly">
              <img className="logo-experience2" src={ga} alt=""></img>
              <h2>Software Engineering Immersive Course</h2>
              <p>May 2021 - July 2021</p>
              <p>A 12-week full-time bootcamp designed for a career transformation in tech where I learnt the fundamental skills to build Full- Stack web applications.
                Throughout the bootcamp, I also learned to work through the agile method, work in a team, have daily stand-ups, refine and plan our projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="page-section project-section">

        <div className="projects-title">
          <img className="logo-about another-about" src={logo} alt=""></img>
          <h1>projects.</h1>
        </div>

        <div className="project-container">
          <section className="project-card" data-aos="fade-right">
            <a href="https://adrianp2021.github.io/SEI-Project-1/" target="_blank" rel="noreferrer"><img className="image-links" src={snake} alt=""></img></a>
            <div className="project-one" data-aos="fade-left">
              <div className="project-number-name">
                <h3 data-aos="fade-up" className="project-number">Project 1</h3>
                <div>
                  <a href="https://adrianp2021.github.io/SEI-Project-1/" rel="noreferrer" target="_blank">
                    <h2 className="project-name" data-aos="fade-down">Snake</h2>
                  </a>
                </div>
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
              <div className="app-links">
                <ul>
                  <li><a href="https://github.com/adrianp2021/SEI-Project-1" rel="noreferrer" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://adrianp2021.github.io/SEI-Project-1/" rel="noreferrer" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                </ul>

              </div>
            </div>
          </section>
          <section className="project-card" data-aos="fade-right">
            <a href="https://drinkard.netlify.app/" target="_blank" rel="noreferrer"><img className="image-links" src={drinkard} alt=""></img></a>
            <div className="project-two" data-aos="fade-left">
              <div className="project-number-name">
                <h3 data-aos="fade-up">Project 2</h3>

                <div>
                  <a href="https://drinkard.netlify.app/" rel="noreferrer" target="_blank">
                    <h2 className="project-name" data-aos="fade-down">Drinkard</h2>
                  </a>
                </div>
              </div>
              <div className="project-description" data-aos="fade-up">
                <p>DRINKARD is an application which hosts a variety of 25 cocktails. The aim was to get information from a Cocktail API and then building our application. Once the page loads, a "Welcome to DRINKARD 🍸" message displays, with the glass being clickable. If the user clicks on the glass, it will direct him/her to the cocktails page.
                </p>
              </div>
              <div class="libraries project-2-technologies" data-aos="fade-right">
                <p className="libraries-technologies ">HTML/CSS</p>
                <p className="libraries-technologies ">React.js</p>
                <p className="libraries-technologies ">Axios</p>
                <p className="libraries-technologies ">Bulma</p>
                <p className="libraries-technologies ">API</p>
              </div>
              <div className="app-links">
                <ul>
                  <li><a href="https://github.com/adrianp2021/SEI-Project-2" rel="noreferrer" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://drinkard.netlify.app/" rel="noreferrer" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </section>
          <section className="project-card" data-aos="fade-right">
            <a href="https://whispering-coast-70189.herokuapp.com/" target="_blank" rel="noreferrer"><img className="image-links" src={pilis} alt=""></img></a>
            <div className="project-three" data-aos="fade-left">
              <div className="project-number-name">
                <h3 data-aos="fade-up">Project 3</h3>
                {/* </div> */}
                <div>
                  <a href="https://whispering-coast-70189.herokuapp.com/" rel="noreferrer" target="_blank">
                    <h2 className="project-name" data-aos="fade-down">PilisTrust</h2>
                  </a>
                </div>
              </div>
              <div className="project-description" data-aos="fade-up">
                <p>Full-Stack MERN app based on TrustPilot, with Greek mythology theme. Gods or standard users can register/login, and leave reviews based on their individual experience. Register/login (as well as authenticating the users), landing and about pages were the main areas of attention for me during this project.
                </p>
              </div>
              <div class="libraries project-3-technologies" data-aos="fade-right">
                <p class="libraries-technologies ">Node.js</p>
                <p class="libraries-technologies ">Express</p>
                <p class="libraries-technologies ">MongoDB</p>
                <p class="libraries-technologies ">Mongoose</p>
                <p class="libraries-technologies ">React</p>
              </div>
              <div className="app-links">

                <ul>
                  <li><a href="https://github.com/adrianp2021/SEI-Project-3" rel="noreferrer" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://whispering-coast-70189.herokuapp.com/" rel="noreferrer" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </section>
          <section className="project-card" data-aos="fade-right">
            <a href="" target="_blank" rel="noreferrer"><img className="image-links" src={crumble} alt=""></img></a>
            <div className="project-four" data-aos="fade-left">
              <div className="project-number-name">
                <h3 data-aos="fade-up">Project 4</h3>
                <div>
                  <a href="" rel="noreferrer" target="_blank">
                    <h2 className="project-name" data-aos="fade-down">Crumble</h2>
                  </a>
                </div>
              </div>
              <div className="project-description" data-aos="fade-up">
                <p>A Full-Stack dating app, which allows users to register and/or login, and find others who share the same interests. I built the Front-End with React, JavaScript, and styled it with Bulma and Semantic UI. I built the Back-End with an SQL database (I used Table Plus for database management) using Django/Python.
                </p>
              </div>
              <div class="libraries project-4-technologies" data-aos="fade-right">
                <p class="libraries-technologies ">React</p>
                <p class="libraries-technologies ">Bulma</p>
                <p class="libraries-technologies ">Django</p>
                <p class="libraries-technologies ">Python</p>
                <p class="libraries-technologies ">PostgreSQL</p>
              </div>
              <div className="app-links">
                <ul>
                  <li><a href="https://github.com/adrianp2021/SEI-Project-4" rel="noreferrer" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                  <li><a href="https://github.com/adrianp2021/SEI-Project-4" rel="noreferrer" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="image-sections" className="image-between-sections">
      </section>

      <section id="contact" className="page-section" >
        <div className="get-in-touch">
          <img className="logo-about" src={logo} alt=""></img>
          {/* <div className="contact-message"> */}
          <h1>get in touch.</h1>
          {/* </div> */}
          <form action="https://formspree.io/f/xdoypozv" method="POST" className="contact-form" >
            <div className="top-form">
              <input name="firstName" type="text" placeholder="First name" value={formValue.firstName} minLength="2" required=""
                aria-required="true" className="contact-form-name" onChange={handleFormChange} />
              <input name="lastName" type="text" placeholder="Last name" value={formValue.lastName} minLength="2" required=""
                aria-required="true" className="contact-form-name" onChange={handleFormChange} />
            </div>
            <input name="contactEmail" type="email" id="contactEmail" placeholder="email" value={formValue.contactEmail} required=""
              aria-required="true" className="contact-form-text" onChange={handleFormChange} />
            <input name="subject" type="text" id="contactSubject" placeholder="Subject" value={formValue.subject} className="contact-form-text" onChange={handleFormChange} required />
            <textarea name="message" id="contactMessage" placeholder="message" rows="10" cols="50" required=""
              aria-required="true" className="contact-form-text" styles="resize: none" value={formValue.message} onChange={handleFormChange} ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <section id="connect" className="about-section">
        <div className="left-connect-div">
          <img className="logo-about" src={logo1} alt=""></img>
          <h1 className="let-connect">or feel free to connect.</h1>
          <p className="connect-copyrights">© 2021 Adrian Pantea </p>
        </div>
        <div className="right-connect-div">
          <div id="connect-social"><a className="connect-social-links" href="mailto:adrianpantea10@gmail.com">Email</a></div>
          <div id="connect-social"><a className="connect-social-links" href="https://github.com/adrianp2021" rel="noreferrer" target="_blank">Github</a></div>
          <div id="connect-social"><a className="connect-social-links" href="https://twitter.com/AdrianPantea4" rel="noreferrer" target="_blank">Twitter</a></div>
          <div id="connect-social"><a className="connect-social-links" href="https://www.linkedin.com/in/adrian-pantea/" rel="noreferrer" target="_blank">LinkedIn</a></div>
        </div>
      </section>

    </>
  )
}

export default Home

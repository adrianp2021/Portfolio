import React from 'react'
import adrian from '../images/adrian1.png'

const About = () => {


  return (

    // <div>this is the about page</div>
    <>
      <section id="about" className="page-section about-section" >

        <div className="about-introduction">
          <div className="about-introduction-left">
            <h2 className="about-hello">Hello</h2>
            <h4 className="about-introduction-paragraph">My name is Adrian, and I'm a Junior Software Engineer based in London, United Kingdom. </h4>
            <h4 className="about-introduction-paragraph">
              I enjoy fantasy and sci-fi movies (Lord of the Rings and Contact being my all-time favourites), good music, and quality time with my family.</h4>
          </div>
          <div className="about-image">
          <img className="adrian-photo" src={adrian} alt=""></img>
          </div>
        </div>



      </section>

    </>
  )
}
export default About
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../images/triangle.png'

const Navbar = () => {


  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <h1 className="owner"> &lt; Adrian Pantea /&gt;</h1>
      <div className="navbar-items">
        <a className="render nav-item" href="#about" title="about">about</a>
        <a className="render nav-item" href="#experience" title="home">experience</a>
        {/* <Link to="/">
          <img src={logo} alt="logo" className="logo render nav-item"></img>
        </Link> */}
        <a className="render nav-item" href="#projects" title="projects">projects</a>
        <a className="render nav-item" id="right-navbar-content" href="#contact" title="contact">contact</a>
      </div>
    </nav>
  )
}

export default Navbar
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/triangle.png'

const Navbar = () => {


  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-item">
        <a className="nav-items render" href="#about" title="about">about</a>
        <a className="nav-items render" href="#experience" title="home">experience</a>
        <Link to="/">
          <img src={logo} alt="logo" className="logo render"></img>
        </Link>
        <a className="nav-items render" href="#projects" title="home">projects</a>
        <a className="nav-items render" id="right-navbar-content" href="#contact" title="home">contact</a>
      </div>
    </nav>
  )
}

export default Navbar
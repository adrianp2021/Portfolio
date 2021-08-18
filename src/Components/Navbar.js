/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <Link to="/">
        <p className="logo-box"><span>Adrian Pantea</span></p>
      </Link>

      <section className="navbar-end right-navbar">
        <div className="navbar-item">
          <Link to="/">
            <a className="nav-items" href="#home" title="home">HOME</a>
          </Link>
          <a className="nav-items" href="#projects" title="home">PROJECTS</a>
          <Link to="/about">
            <a className="nav-items" href="#about" title="home">ABOUT</a>
          </Link>
          <Link to="/contact">
            <a className="nav-items" id="right-navbar-content" href="#contact" title="home">CONTACT</a>
          </Link>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
import React from 'react'
import logo from '../images/title.png'
import { Link } from 'react-router-dom'

const Navbar = () => {


  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <Link to="/">
        <div className="logo-box">Adrian<span>Pantea</span></div>
      </Link>

      <section className="navbar-end right-navbar">
        <div className="navbar-item">

          <a className="nav-items" href="#home" title="home">HOME</a>

          <a className="nav-items" href="#projects" title="home">PROJECTS</a>

          <a className="nav-items" href="#about" title="home">ABOUT</a>
          <Link to="/contact">
            <a className="nav-items" id="right-navbar-content" href="#contact" title="home">CONTACT</a>
          </Link>
        </div>
      </section>
      <button role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </nav>
  )
}

export default Navbar
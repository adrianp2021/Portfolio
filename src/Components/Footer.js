import React from 'react'

const Footer = () => {


  return (

    <section id="footer" className="footer-section">
      <div className="left-footer-content">
      <h1><span>© Adrian Pantea 2021</span></h1>
      </div>

      <div className="right-footer-content">
        <a href="https://github.com/adrianp2021/SEI-Project-1" rel="noreferrer" target="_blank" id="social"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://twitter.com/AdrianPantea4" rel="noreferrer" target="_blank" id="social"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/adrian-pantea/" rel="noreferrer" target="_blank" ><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
      </div>
    </section>
  )
}

export default Footer
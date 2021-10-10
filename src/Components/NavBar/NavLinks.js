import React from "react";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  return (
    <ul>
      <motion.li
        intial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <a href="#about-container">About</a>
      </motion.li>
      
      <motion.li
        intial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <a href="#experience-container">Experience</a>
      </motion.li>
      <li
        intial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <a href="#project-container">Projects</a>
      </li>
      <motion.li
        intial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <a href="#contact-container">Contact</a>
      </motion.li>
    </ul>
  );
};

export default NavLinks;

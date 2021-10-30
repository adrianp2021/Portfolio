import React from "react";
import { motion } from "framer-motion";

const NavLinks = (props) => {

  const container = 
  {
    hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: .5,
      staggerChildren: 0.2
    }
  }
}

  return (
    <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"

      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      transition={{ duration: 0.3}}
      exit={{ opacity: 0 }}
    >
      <motion.li
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 1,
        }}
        transition={{ delay: 0.20, ease: "easeOut" }}
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <a href="#about-container">About</a>
      </motion.li>

      <motion.li
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 1,
        }}
        transition={{ delay: 0.30, ease: "easeOut" }}
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <a href="#experience-container">Experience</a>
      </motion.li>

      <motion.li
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 1,
        }}
        transition={{ delay: 0.40, ease: "easeOut" }}
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <a href="#project-container">Projects</a>
      </motion.li>

      <motion.li
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 1,
        }}
        transition={{ delay: 0.50, ease: "easeOut" }}
        onClick={() => {
          props.isMobile && props.closeMobileMenu();
        }}
      >
        <a href="#contact-container">Contact</a>
      </motion.li>
    </motion.ul>
    
  );
};

export default NavLinks;

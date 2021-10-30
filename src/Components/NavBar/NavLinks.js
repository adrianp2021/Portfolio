import React from "react";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
        transition={{ delay: 0.1, ease: "easeOut" }}
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
        transition={{ delay: 0.2, ease: "easeOut" }}
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
        transition={{ delay: 0.3, ease: "easeOut" }}
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
        transition={{ delay: 0.4, ease: "easeOut" }}
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

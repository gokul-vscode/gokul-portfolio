// import React from 'react'
import '../Navbar/Navbar.css'
// import profile from "../Assets/profile.jpg";
import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../Assets/logo1.png'
import { Link } from "react-scroll";
import { easeOut, motion } from "framer-motion";

// import logo from "../Assets/profile.jpg"; // your logo path

const Navbar = () => {
     const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <motion.nav className="portfolio-navbar" id='nav'  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: easeOut }} viewport={{ once: true, amount: 0.5 }}>
      <div className="nav-left">
        <div className="nav-logo">
         <img src={logo} alt="" /><span></span>
        </div>
      </div>

      {/* Hamburger Button */}
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Links */}
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><Link to="home" smooth={true} duration={600}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={600}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={600}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={600}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={600}>Contact</Link></li>
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <a href="#contact" className="hire-btn" >Hire Me</a>
      </div>
    </motion.nav>
    </>
  );
};

export default Navbar;

import React, { useRef } from 'react';
import '../Footer/Footer.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import { easeOut, motion } from "framer-motion";
import cv from '../../src/Assets/Gokulram-CV.pdf'
import certificate from '../../src/Assets/certificate.jpg'
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ramgokul_3103", // replace with your EmailJS Service ID
        "template_xvf6amp", // replace with your EmailJS Template ID
        form.current,
        "OJ54h2Zr-AUHDXtoe" // replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully to ramgokul637@gmail.com!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <>
      <h1 className='Contact' id="contact">Contact</h1>
      <motion.div className="contact-section-container"  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: easeOut }} viewport={{ once: true, amount: 0.5 }}>

        {/* Left Side Contact Form */}
        <div className="form-container">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            {/* IMPORTANT: add name attributes */}
            <input type="text" name="user_name" placeholder="Your Name" className="input-field" required />
            <input type="email" name="user_email" placeholder="Your Email" className="input-field" required />
            <textarea name="message" placeholder="Your Message" className="input-field textarea-field" rows="4" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        {/* Right Side Info Card */}
        <div className="info-card">
          <div className="info-item">
            <span className="icon"><FaLocationDot/></span>
            <div className="text-content">
              <p className="label1">Location</p>
              <p className="detail">Sivakasi, Tamil Nadu</p>
            </div>
          </div>

          <div className="info-item">
            <span className="icon"><CiMail /></span>
            <div className="text-content">
              <p className="label1">Email</p>
              <a href="mailto:ramgokul637@gmail.com?subject=Hello%20Gokul&body=Hi,%20I%20saw%20your%20portfolio!" rel="noopener noreferrer" target='_blank'  className="detail">ramgokul637@gmail.com</a>
            </div>
          </div>

          <div className="social-links">
            <p className="label1">Social Links</p>
            <ul>
              <li><FaGithub /> <a href="https://github.com/gokul-vscode?tab=repositories" target="_blank" rel="noreferrer noopener">GitHub</a></li>
              <li><FaLinkedin /> <a href="https://www.linkedin.com/in/pgokulram" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
              <li><FaWhatsapp /> <a href="https://wa.me/916379624525" target="_blank" rel="noreferrer noopener">WhatsApp</a></li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Scroll Button */}
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>▲</button>

      <div className="hero-section1"> 
        <p className="tagline">
          Though I'm a fresher, I bring the fire to learn fast, work smart, and grow with your team.
        </p>

        <div className="action-buttons1">
          <button className="btn btn-hire" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Hire Me</button>
          <a href={cv} download="Gokul-Resume" className="btn btn-download">Download Resume</a>
          <a href={certificate} target='_blank' rel="noopener noreferrer" className="btn btn-download">Certificate</a>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from 'react'
import '../Profile/Profile.css'
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaGithub,FaDownload  } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import Profile1 from '../../../Assets/my3.jpg'
import { easeOut, motion } from "framer-motion";
import cv from '../../../Assets/Gokulram-CV.pdf'


// import prbg from '../Assets/prbg.jpg'

const Profile = () => {
  return (
<>
<motion.div class="hero-section"  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: easeOut ,type: "spring",stiffness: 120}} viewport={{ once: true, amount: 0.5 }}>
  <div class="left-box">
    <h3>Hi,I'm <span className='gokul'>GOKUL</span></h3>
    <h4>Creative   &lt;/&gt;  -
        <span>   
            <span> CODER</span>
            <span> DESIGNER</span>
            <span> EXPLORER</span>
            <span>DEVELOPER</span>
            <span>SOLUTIONIST</span>
        </span>
    </h4>
    <p className='pr-cont'>I build fast, intuitive, and visually engaging interfaces — from initial idea to final interaction.</p>
    <h1>
        <p className='icons'><FaHtml5/><span className='icon-nm'>HTML</span></p>
        <p className='icons'><FaCss3Alt/><span className='icon-nm'>CSS</span></p>
        <p className='icons'><FaJs /><span  className='icon-nm'>JavaScript</span></p>
        <p className='icons'><FaReact /><span  className='icon-nm'>React</span></p>
        <p className='icons'><FaGithub /><span  className='icon-nm'>GitHub</span></p>
        <p className='icons'><SiDjango /><span  className='icon-nm'>Django</span></p>
    </h1>
     <a href={cv} download="Gokul-Resume" className="download-btn">
      Download CV <span className='dw-icon'>  <FaDownload /></span>
    </a>
  </div>

  <div class="right-box">
    <motion.img src={Profile1} alt="" className='profile-pic'  initial={{ x: 150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}  transition={{ duration: 1, ease: "easeOut" }} viewport={{ once: true }} />
  </div>
</motion.div>
</>
  )
}

export default Profile
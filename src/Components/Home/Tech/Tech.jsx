import React from "react";
import "./Tech.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact,FaPython,FaTools  } from "react-icons/fa";
import { SiDjango} from "react-icons/si";
import { easeOut, motion } from "framer-motion";


const Tech = () => {
  const frontendSkills = [
    { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
    { icon: <FaCss3Alt />, name: "CSS3", level: "90%" },
    { icon: <FaJsSquare />, name: "JavaScript", level: "85%" },
    { icon: <FaReact />, name: "React.js", level: "90%" },
  ];

  const backendSkills = [
    { icon: <FaPython />, name: "Python", level: "75%" },
    { icon: <SiDjango  />, name: "Django", level: "85%" },
    // { icon: <SiMysql />, name: "MySQL", level: "80%" },
    // { icon: <SiMongodb />, name: "MongoDB", level: "90%" },
  ];

  return (
    <motion.section className="tech-section" id="skills"  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: easeOut }} viewport={{ once: true, amount: 0.5 }}>
      <h2 className="tech-title"><FaTools /> Tech Stack</h2>
      <div className="tech-container">
        <div className="tech-column">
          <h3 className="tech-subtitle">Frontend</h3>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">
                {skill.icon} {skill.name}
              </span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="tech-column">
          <h3 className="tech-subtitle">Backend & Database</h3>
          {backendSkills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">
                {skill.icon} {skill.name}
              </span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Tech;

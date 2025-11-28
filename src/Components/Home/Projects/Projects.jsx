import React, { useState } from "react";
import "./Projects.css";
import todo from '../../../Assets/todo.png'
import tailor from '../../../Assets/tailor.png'
import cal from '../../../Assets/calculator.png'
import react from '../../../Assets/react.png'
import guess from '../../../Assets/guess.png'
import fullstack from '../../../Assets/fullstack.png'
import { easeOut, motion } from "framer-motion";



const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "FullStack Project - Pytho,Django",
      category: "Fullstack",
      image: fullstack,
      github:"https://github.com/gokul-vscode/frontend-fullstack",
      demo: "https://frontend-fullstack.netlify.app/",
    },
    {
      id: 2,
      title: "Todo App - React JS",
      category: "React",
      image: todo,
      github: "https://github.com/gokul-vscode/todoapp-react",
      demo: "https://todoapp-gokul.netlify.app",
    },
    {
      id: 3,
      title: "E-Commerce - HTML,CSS",
      category: "JavaScript",
      image: tailor,
      github: "https://github.com/gokul-vscode/gokul-mr.tailor",
      demo: "https://mrtailor-html.netlify.app/",
    },
    {
      id: 4,
      title: "CalCulator - React JS",
      category: "React",
      image: cal,
      github: "https://github.com/gokul-vscode/Calculator",
      demo: "https://calculator-gokul3.netlify.app",
    },
    {
      id: 5,
      title: "E Commerce - React JS",
      category: "React",
      image: react,
      github:"https://github.com/gokul-vscode/reactapp_gokul",
      demo: "https://ecomm-react-gokul.netlify.app/",
    },
    {
      id: 6,
      title: "Guess The Number - JavaScript",
      category: "JavaScript",
      image: guess,
      github:"https://github.com/gokul-vscode/reactapp_gokul",
      demo: "https://guess-the-number-1to100.netlify.app/",
    },
  ];

  // const categories = ["All", "React", "JavaScript", "Fullstack"];
  // const filteredProjects =
  //   filter === "All"
  //     ? projects
  //     : projects.filter((p) => p.category === filter);
  const categories = ["All","React", "JavaScript", "Fullstack"];
  const filteredProjects = projects.filter(
  (p) => filter === "All" || p.category === filter
);


  return (
    <motion.section className="projects-section" id="projects"  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: easeOut }} viewport={{ once: true, amount: 0.1 }}>
      <h2 className="projects-title">Mini Projects</h2>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-img" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="live">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

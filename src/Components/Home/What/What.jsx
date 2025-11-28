import React from 'react'
import '../What/What.css'
import { FiExternalLink } from "react-icons/fi";
import { easeOut, motion } from "framer-motion";

const What = () => {
     const serviceData = [
    {
      id: "01",
      title: "Web Design",
      description:
        "I break down complex user experience problems to create integrity-focused design solutions that connect billions of users across the world.",
    },
    {
      id: "02",
      title: "Front-End",
      description:
        "I specialize in building fast, responsive, and intuitive front-end web applications using React.js. My focus is on crafting smooth user experiences that scale.",
    },
    {
      id: "03",
      title: "Back-End",
      description:
        "I build robust and scalable backend systems using Node.js and Express.js, ensuring efficient data handling, security, and seamless integration with the front-end.",
    },
    {
      id: "04",
      title: "DataBase",
      description:"I specialize in designing and managing databases using MySQL, MongoDB and Firebase. My expertise includes creating efficient database schemas, optimizing queries, ensuring data integrity, and security."
    },
    
  ];

  return (
    <>
        <motion.section className="services-section" id="services"  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: easeOut }} viewport={{ once: true, amount: 0.5 }}>
      <h2 className="section-title">What I Do</h2>

      <div className="services-container">
        {serviceData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="card-number">{service.id}</div>
            <div className="card-content">
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
            <a href="#page" className="card-link">
              <FiExternalLink className="link-icon" />
            </a>
          </div>
        ))}
      </div>
    </motion.section>
    </>
  )
}

export default What
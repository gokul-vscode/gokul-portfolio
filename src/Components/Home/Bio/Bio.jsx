import React, { useState } from "react";
import "../Bio/Bio.css";
import { easeOut, motion } from "framer-motion";

const Bio = () => {

  const [activeTab, setActiveTab] = useState("bio"); // default tab

  return (
    <>
    <h1 className="About" id="about">About Me</h1>
      <motion.div className="portfolio-container"  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: easeOut }} viewport={{ once: true, amount: 0.5 }}>

        <section className="about-section">
          <div className="tabs">
            <button 
              className={`tab-button ${activeTab === "bio" ? "active" : ""}`} 
              onClick={() => setActiveTab("bio")}
            >
              Biography
            </button>

            <button 
              className={`tab-button ${activeTab === "edu" ? "active" : ""}`} 
              onClick={() => setActiveTab("edu")}
            >
              Education
            </button>
          </div>

          {/* ================= Biography Section ================= */}
          {activeTab === "bio" && (
            <motion.div className="bio-card"  initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: easeOut }} viewport={{ once: true, amount: 0.5 }}>
              <div className="bio-details">
                <div className="detail-pair">
                  <span className="label">Name</span>
                  <span className="value">GOKULRAM P</span>
                </div>

                <div className="detail-pair">
                  <span className="label">Birthday</span>
                  <span className="value">31 Mar, 2003</span>
                </div>

                <div className="detail-pair">
                  <span className="label">Age</span>
                  <span className="value">22</span>
                </div>

                <div className="detail-pair">
                  <span className="label">Address</span>
                  <span className="value">Sivakasi, Tamil Nadu</span>
                </div>

                <div className="detail-pair">
                  <span className="label">Email</span>
                  <span className="value">ramgokul637@gmail.com</span>
                </div>

                <div className="detail-pair">
                  <span className="label">Mobile No</span>
                  <span className="value">(+91) 6379624525</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= Education Section ================= */}
          {activeTab === "edu" && (
            <div className="profile-container">
              <div className="content-grid">

                {/* <div className="card">
                  <h3 className="card-title">Frontend development Internship</h3>
                  <p className="card-subtitle">Saiket systems</p>
                  <p className="card-date-location">Sep - Oct 2025</p>
                </div> */}

                <div className="card">
                  <h3 className="card-title">Fullstack Web development</h3>
                  <p className="card-subtitle">Code Purple Academy</p>
                  <p className="card-date-location">2024 – 2025</p>
                  <p className="card-location">Coimbatore, Tamil Nadu</p>
                </div>

                <div className="card">
                  <h3 className="card-title">B.Com(CA)</h3>
                  <p className="card-subtitle">Ayya Nadar Janaki Ammal College</p>
                  <p className="card-date-location">2020 – 2023</p>
                  <p className="card-location">Madurai, Tamil Nadu</p>
                </div>

                <div className="card">
                  <h3 className="card-title">M.Com(CA)</h3>
                  <p className="card-subtitle">Ayya Nadar Janaki Ammal College</p>
                  <p className="card-date-location">2023 – 2025</p>
                  <p className="card-location">Sivakasi, Tamil Nadu</p>
                </div>

                <div className="card">
                  <h3 className="card-title">HSC</h3>
                  <p className="card-subtitle">AVM Marimuthu Nadar Higher Secondary School</p>
                  <p className="card-date-location">2018 – 2020</p>
                  <p className="card-location">Sivakasi, Tamil Nadu</p>
                </div>

              </div>
            </div>
          )}
        </section>

      </motion.div>
    </>
  );
};

export default Bio;

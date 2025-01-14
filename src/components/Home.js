import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import stonk from "../components/images/stonk.webm";
import pop from "../components/images/poppred.webm";
import github from "../components/images/github.png";
import java from "../components/images/java.png";
import css from "../components/images/css-3.png";
import javascript from "../components/images/java-script.png";
import html from "../components/images/html.png";
import reactImage from "../components/images/atom.png";
import python from "../components/images/python.png";
import linkedinn from "../components/images/linkedin.png";
import email from "../components/images/email.png";

export default function Home() {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="intro-body"
        >
          <div className="heading-container">
            <div className="main-heading">Hello,</div>
            <div className="sub-heading">
              <p>I'm Omar, Welcome to my Website!</p>
            </div>
            <div className="buttons-container">
              <div className=".top-buttons-container">
                <div className="top-buttons">
                  <Link to="/projects">
                    <button className="button-projects">Projects</button>
                  </Link>
                  <Link to="/help-me">
                    <button className="button-contact">Contact</button>
                  </Link>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="social-buttons-container"
              >
                <a
                  href="https://github.com/OmarNahhass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-social"
                >
                  <img src={github} alt="Visit My GitHub" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-nahhas-840876262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-social"
                >
                  <img src={linkedinn} alt="Visit My LinkedIn" />
                </a>
                <a
                  href="mailto:omarnahhas@hotmail.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-social"
                >
                  <img src={email} alt="Email me" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="info1-headings">About Me</div>
        <div className="intro-summary">
          What's up? I'm a computer science student at the University of
          Concordia. I love learning new skills, so I tasked myself with
          developing an interactive portfolio to present an overview of who I am
          from a professional and personal standpoint. Most of my focus is
          directed towards learning Python and R, with the aim of deepening my
          expertise in Artificial Intelligence.
        </div>
        <div className="info2-headings">Featured Projects</div>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <div className="project-container">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.75 }}
              className="project"
            >
              <div className="project-title">Stock Analyzer</div>
              <video autoPlay loop muted className="project-video-home">
                <source src={stonk} type="video/webm" />
              </video>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.75 }}
              className="project"
            >
              <div className="project-title">Population Predictor</div>
              <video autoPlay loop muted className="project-video-home">
                <source src={pop} type="video/webm" />
              </video>
            </motion.div>
          </div>
        </Link>
        <div className="info3-headings">Skillset</div>
        <div className="box-container">
          <div className="box-row">
            <div className="box">
              <img src={java} alt="Java" />
            </div>
            <div className="box">
              <img src={javascript} alt="JavaScript" />
            </div>
            <div className="box">
              <img src={python} alt="Python" />
            </div>
          </div>
          <div className="box-row">
            <div className="box">
              <img src={reactImage} alt="React" />
            </div>
            <div className="box">
              <img src={html} alt="HTML" />
            </div>
            <div className="box">
              <img src={css} alt="CSS" />
            </div>
          </div>
        </div>
        <div className="quote-container">
          <blockquote className="quote">
            "The fruit of your own hard work is the sweetest." <br />
            <span>- Deepika Padukone</span>
          </blockquote>
        </div>
      </div>
    </>
  );
}

import React from "react";
import IMAGES from "../assets/images/images.js";
import AllWorks from "../components/AllWorks.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { SliderData } from "../components/SliderData";
// import scrollBar from "../assets/svgs/scroll-bar.svg";
import { motion } from "framer-motion";

function FrontPage() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
      className="home"
      id="home"
    >
      <section className="title-container">
        <div className="descrip-words">
          <p className="jt --debug coding">
            <span className="jt__row">
              <span className="jt__text">Coding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Coding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Coding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Coding.</span>
            </span>
          </p>
          <p className="jt --debug branding">
            <span className="jt__row">
              <span className="jt__text">Branding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Branding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Branding.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Branding.</span>
            </span>
          </p>

          <p className="jt --debug innovating">
            <span className="jt__row">
              <span className="jt__text">Innovating.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Innovating.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Innovating.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Innovating.</span>
            </span>
          </p>

          <p className="jt --debug designing">
            <span className="jt__row">
              <span className="jt__text">Designing.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Designing.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Designing.</span>
            </span>
            <span className="jt__row jt__row--sibling" aria-hidden="true">
              <span className="jt__text">Designing.</span>
            </span>
          </p>
        </div>
        <h1 className="name-title">
          <motion.div
            initial={{ x: -200 }}
            transition={{ duration: 0.8 }}
            animate={{ x: 0 }}
            className="lucille"
          >
            Lucille
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            transition={{ duration: 0.8 }}
            animate={{ x: 0 }}
            className="chesshire"
          >
            Chesshire
            <span className="dot">.</span>
          </motion.div>
        </h1>
        <button className="work-cta">
          <a href="#works">My Work</a>
        </button>
      </section>

      <div className="arrow bounce">
        <a className="fa fa-arrow-down fa-2x" href="#works"></a>
      </div>
      <AllWorks slides={SliderData} />
      <About />
      <Contact />
    </motion.div>
  );
}

export default FrontPage;

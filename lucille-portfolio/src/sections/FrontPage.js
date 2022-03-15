import React from "react";
import IMAGES from "../assets/images/images.js";
import AllWorks from "../components/AllWorks.js";
import About from "./About.js";
import Contact from "./Contact.js";
import { SliderData } from "../components/SliderData";
// import scrollBar from "../assets/svgs/scroll-bar.svg";
import { motion } from "framer-motion";
import Banner from "../components/Banner.js";
import Marquee from "react-fast-marquee";


const container = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: [1, 0.75, 1, 0.4],
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 3,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="descrip-words"
        >
          <motion.p variants={item} className="jt --debug coding">
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
          </motion.p>
          <motion.p variants={item} className="jt --debug branding">
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
          </motion.p>

          <motion.p variants={item} className="jt --debug designing">
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
          </motion.p>

          <motion.p variants={item} className="jt --debug innovating">
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
          </motion.p>
        </motion.div>
        {/* <motion.h1 className="name-title">
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
        </motion.h1> */}

        {/* <Marquee loop={0} gradient={false} direction="right">
          <Banner firstName="Lucille" lastName="Chesshire" />
        </Marquee> */}

        <Banner firstName="Lucille" lastName="Chesshire" />

        <button className="work-cta">
          <a href="#works">My Work</a>
        </button>
      </section>

      <div className="arrow bounce">
        <a className="fa fa-arrow-down fa-2x" href="#works"></a>
      </div>
      <AllWorks/>
      <About />
      <Contact />
    </motion.div>
  );
}

export default FrontPage;

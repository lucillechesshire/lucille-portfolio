import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import puzzle from "../assets/images/puzzles.png";

const spinInVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 2 },
    rotateY: 0,
  },
  hidden: { opacity: 0, rotateY: 180 },
};

function Contact() {
  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      variants={spinInVariants}
      id="contact"
    >
      <div className="contact-container">
        <h2>Let's Work Together!</h2>
        <img className="puzzle" src={puzzle}></img>
      </div>
      <p>
        I'm eager to help bring your ideas to life! If you are interested in
        collaborating or have any questions, please feel free to contact me.
      </p>

      <p className="email-btn">
        <a href="mailto:lucillec98@gmail.com">lucillec98@gmail.com</a>
      </p>
    </motion.section>
  );
}

export default Contact;

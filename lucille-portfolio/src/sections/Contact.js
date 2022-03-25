import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import puzzle from "../assets/images/puzzles.png";
import Particles from "../components/Particles";
import Marquee from "react-fast-marquee";

const fadeInVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
  hidden: { opacity: 0 },
};

function Contact() {
  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      variants={fadeInVariants}
      id="contact"
    >
      <Marquee
        pauseOnHover={true}
        loop={0}
        gradient={false}
        speed={60}
        className="together-marquee"
      >
        <h2>Let's Work Together!</h2>
      </Marquee>
      <div className="contact-container">
        <p>
          I'm eager to help bring your ideas to life! If you are interested in
          collaborating or have any questions, please feel free to contact me.
        </p>
        <p>
          <motion.a
            className="email-btn"
            whileHover={{
              scale: 1.1,
              rotate: -15,
              loop: 0,
              backgroundColor: "#ffffff",
              mixBlendMode: "difference",
              color: "#ff0084",
            }}
            href="mailto:lucillec98@gmail.com"
          >
            Email Me
          </motion.a>
        </p>
        {/* <img className="puzzle" src={puzzle}></img> */}
      </div>
    </motion.section>
  );
}

export default Contact;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "../components/Particles";

const fadeInVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
  hidden: { opacity: 0 },
};

const slideInVariants = {
  visible: { opacity: 1, transition: { duration: 1.4 }, x: 0 },
  hiddenRight: { opacity: 0, x: 200 },
  hiddenLeft: { opacity: 0, x: -200 },
};

function About() {
  return (
    <section
      whileInView="visible"
      initial="hidden"
      variants={fadeInVariants}
      viewport={{ amount: 0.5 }}
      id="about"
    >
      <Particles />
      <div className="all-about-me padding">
        <div className="my-tools">
          <motion.div
            whileInView="visible"
            initial="hiddenRight"
            variants={slideInVariants}
            viewport={{ amount: 0.3 }}
            className="tools-list"
          >
            <h2>My Tools</h2>
            <h3>Dev Tools</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SASS</li>
              <li>Javasript</li>
              <li>jQuery</li>
              <li>React</li>
              <li>WordPress</li>
              <li>Php</li>
            </ul>
          </motion.div>
          <motion.div
            whileInView="visible"
            initial="hiddenRight"
            variants={slideInVariants}
            viewport={{ amount: 0.3 }}
            className="design-list"
          >
            <h3>Design Tools</h3>
            <ul>
              <li>Adobe XD</li>
              <li>Invision</li>
              <li>Figma</li>
              <li>Photoshop</li>
              <li>Illustrator</li>
            </ul>
          </motion.div>
        </div>
        <div className="about-blurbs">
          <motion.div
            whileInView="visible"
            initial="hiddenLeft"
            variants={slideInVariants}
            viewport={{ amount: 0.3 }}
            className="about-skills"
          >
            <h2>Get to know me</h2>
            <p>
              I'm a front-end web developer and designer based in Vancouver. I
              pride myself in constructing clean and precise code, as well as
              possessing an innovative mind. I love seeing a creative vision
              come to life and am passionate about creating and collaborating
              with others to design the perfect digital experience!
            </p>
          </motion.div>
          <Particles />
          <motion.div
            whileInView="visible"
            initial="hiddenLeft"
            variants={slideInVariants}
            viewport={{ amount: 0.2 }}
            className="about-me"
          >
            <p>
              When I'm away from my computer, I enjoy spending time at the gym
              or socializing with friends. I have always loved to push myself
              out of my comfort zone which has impacted my life in a positive
              way. I have travelled through many countries across the world,
              which has helped me broaden my perspective and deepen my
              appreciation for life!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

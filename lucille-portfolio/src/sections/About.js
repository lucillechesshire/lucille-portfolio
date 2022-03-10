import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const toolVariants = {
  visible: { opacity: 1, transition: { duration: 1.5 }, y: 0 },
  hidden: { opacity: 1, y: -250 },
};

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <section id="about">
      <div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={toolVariants}
        className="my-tools"
      >
        <div className="line-deco"></div>
        <h2>My Tools</h2>
        <h3>Dev Tools</h3>
        <div className="tools-list">
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
        </div>
        <h3>Design Tools</h3>
        <ul>
          <li>Adobe XD</li>
          <li>Invision</li>
          <li>Figma</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
        </ul>
      </div>
      <div className="line-deco"></div>
      <div className="about-blurbs">
        <h2>Nice To Meet You</h2>
        <p className="about-skills">
          I'm a front-end web developer and designer based in Vancouver. I pride
          myself in constructing clean and precise code, as well as possessing
          an innovative mind. I love seeing a creative vision come to life and
          am passionate about creating and collaborating with others to design
          the perfect digital experience!
        </p>
        <p className="about-me">
          When I'm away from my computer, I enjoy spending time at the gym or
          socializing with friends. I have always loved to push myself out of my
          comfort zone which has impacted my life in a positive way. I have
          travelled through many countries across the world, which has helped me
          broaden my perspective and deepen my appreciation for life!
        </p>
      </div>
    </section>
  );
}

export default About;

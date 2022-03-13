import React, { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const spinInVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 2 },
    rotateY: 0,
  },
  hidden: { opacity: 0, rotateY: 180 },
};

function Contact() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={spinInVariants}
      id="contact"
    >
      <h2>Let's Work Together!</h2>
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

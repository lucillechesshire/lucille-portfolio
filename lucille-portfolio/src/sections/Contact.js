import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Marquee from "react-easy-marquee";

const fadeInVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
  hidden: { opacity: 0 },
};

function Contact() {
  const isTablet = useMediaQuery({
    query: "(min-width: 700px)",
  });
  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      variants={fadeInVariants}
      id="contact"
    >
      {/* {isTablet ? ( */}
      <Marquee duration={15000} height="7rem" className="together-marquee">
        <h2>Let's Work Together!</h2>
      </Marquee>
      {/* ) : ( */}
      {/* <h2 className="lets-work-togeth">Let's Work Together!</h2>
      )} */}

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
      </div>
    </motion.section>
  );
}

export default Contact;

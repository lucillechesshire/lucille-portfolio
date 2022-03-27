import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
function Footer() {
  return (
    <div className="footer">
      <span className="socials">
        {" "}
        <motion.a
          href="https://github.com/lucillechesshire"
          target="_blank"
          rel="noopener"
          whileHover={{
            scale: 1.2,
          }}
        >
          <FaGithub></FaGithub>
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/lucillechesshire"
          target="_blank"
          rel="noopener"
          whileHover={{
            scale: 1.2,
          }}
        >
          <FaLinkedin></FaLinkedin>
        </motion.a>
        <motion.a
          href="mailto:lucillec98@gmail.com"
          target="_blank"
          rel="noopener"
          whileHover={{
            scale: 1.2,
          }}
        >
          <FaEnvelope></FaEnvelope>
        </motion.a>
      </span>
      <p>&copy; 2022</p>
    </div>
  );
}

export default Footer;

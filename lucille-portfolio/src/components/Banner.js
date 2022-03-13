import React from "react";
import { motion } from "framer-motion";


function Banner({ firstName, lastName }) {
  return (
    <div>
      <motion.h1 className="name-title">
        <motion.div
          initial={{ x: -200 }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
          className="lucille"
        >
          {firstName}
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          transition={{ duration: 1 }}
          animate={{ x: 0 }}
          className="chesshire"
        >
          {lastName}
          <span className="dot">.</span>
        </motion.div>
      </motion.h1>
    </div>
  );
}

export default Banner;

import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
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

const slideInVariants = {
  visible: { opacity: 1, transition: { duration: 2 }, x: 0 },
  hiddenRight: { opacity: 0, x: 200 },
  hiddenLeft: { opacity: 0, x: -200 },
};

const AllWorks = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <motion.div
        whileInView="visible"
        initial="hidden"
        variants={spinInVariants}
        id="works"
      >
        <h2 className="my-projects-title">My Projects</h2>
        <FaArrowLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              <Link to={`/${slide.slug}`}>
                {index === current && (
                  <img
                    key={index}
                    className="project-img"
                    src={slide.image}
                    alt=""
                  />
                )}
              </Link>
              <Link to={`/${slide.slug}`}>
                {index === current && (
                  <h3 className="project-title">{slide.title}</h3>
                )}
              </Link>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default AllWorks;

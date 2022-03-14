import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const spinInVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 2 },
    rotateY: 0,
  },
  hidden: { opacity: 0, rotateY: 180 },
};

// const slideInVariants = {
//   visible: { opacity: 1, transition: { duration: 2 }, x: 0 },
//   hiddenRight: { opacity: 0, x: 200 },
//   hiddenLeft: { opacity: 0, x: -200 },
// };

const AllWorks = () => {
  const isTablet = useMediaQuery({
    query: "(min-width: 800px)",
  });

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    dots: true,
    speed: 300,
    slidesToShow: isTablet ? 3 : 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <motion.section
      whileInView="visible"
      initial="hidden"
      variants={spinInVariants}
      viewport={{ amount: 0.5 }}
      className="slider"
      id="works"
    >
      <h2>My Projects</h2>
      <Slider {...settings}>
        {SliderData.map((slider, index) => (
          <div className={index === imageIndex ? "slide activeSlide" : "slide"}>
            <Link to={`/${slider.slug}`} key={index}>
              <img className="project-tile" src={slider.image} />
              <h4 className="home-proj-title">{slider.title}</h4>
            </Link>
          </div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default AllWorks;

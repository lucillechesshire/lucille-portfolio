import React, { useEffect, useState } from "react";
import { allProjects } from "../components/projectData";
import { useParams } from "react-router-dom";
import { SliderData } from "../components/SliderData";
import { Link } from "react-scroll";
import { useAnimation, motion } from "framer-motion";
import InView, { useInView } from "react-intersection-observer";

const slideInVariants = {
  visible: { opacity: 1, transition: { duration: 2 }, x: 0 },
  hiddenRight: { opacity: 0, x: 200 },
  hiddenLeft: { opacity: 0, x: -200 },
};

const spinInVariants = {
  visible: {
    opacity: 1,
    transition: { duration: 2 },
    rotateY: 0,
  },
  hidden: { opacity: 0, rotateY: 180 },
};

function SingleWorks() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [isVisible, setIsVisible] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const data = SliderData.filter((item) => item.slug === slug);
    if (data !== null) {
      setProject(data[0]);
    }
    if (inView) {
      controls.start("visible");
    }
  }, [slug, controls, inView]);

  return (
    <section className="single-works" id="single-works">
      {project !== null && (
        <div>
          <section className={slug}>
            <p>{project.title}</p>
            <h2>{project.description}</h2>
            <p>{project.type}</p>
            <img className="screenshot" src={project.screenshot} />
            <div className="arrow bounce">
              <a className="fa fa-arrow-down fa-2x" href="#single-info"></a>
            </div>
          </section>
          <section className="single-info" id="single-info">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hiddenRight"
              variants={slideInVariants}
              className="overview"
            >
              <h4>Overview</h4>
              <p>{project.summary}</p>
            </motion.div>
            <div className="year-skills-components">
              <motion.div
                ref={ref}
                animate={controls}
                initial="hiddenLeft"
                variants={slideInVariants}
                className="year-skills"
              >
                <div className="year">
                  <h4>Year</h4>
                  <p>{project.year}</p>
                </div>
                <div className="skills-list">
                  <h4>Skills</h4>
                  <ul>
                    {project.skillsUsed.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                ref={ref}
                animate={controls}
                initial="hiddenRight"
                variants={slideInVariants}
                className="components-list"
              >
                <h4>Components</h4>
                <ul>
                  {project.components.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <a
              className="see-more-btn"
              href="#see-more-project"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? "See Less " : "See More"}
            </a>
            {isVisible ? <MoreInfo /> : ""}
          </section>
        </div>
      )}
    </section>
  );
}

export default SingleWorks;

function MoreInfo() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [isVisible, setIsVisible] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const data = SliderData.filter((item) => item.slug === slug);
    if (data !== null) {
      setProject(data[0]);
    }
    if (inView) {
      controls.start("visible");
    }
  }, [slug, controls, inView]);

  return (
    <div>
      {project != null && (
        <div className="see-more-project" id="see-more-project">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.5 }}
            className="design-div"
          >
            <h3>Concept and Design</h3>
            <p>{project.design}</p>
            {project.sitePics.map((project, index) => (
              <div>
                <img className="screen-pics" key={index} src={project} />
              </div>
            ))}
          </motion.div>
          <h3 className="colors-title">Color Pallette</h3>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={spinInVariants}
            className="all-color-blocks"
          >
            {project.colorBlocks.map((project, index) => (
              <div>
                <img
                  className="color-block-img"
                  key={index}
                  src={project.block}
                />
                <p className="hex">{project.hex}</p>
              </div>
            ))}
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hiddenRight"
            variants={slideInVariants}
            className="dev-div"
          >
            <h3>Development</h3>
            <p>{project.development}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

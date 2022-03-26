import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SliderData } from "../components/SliderData";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Marquee from "react-easy-marquee";
import { useMediaQuery } from "react-responsive";

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

function SingleWorks({ isOpen }) {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [isVisible, setIsVisible] = useState(null);
  useEffect(() => {
    const data = SliderData.filter((item) => item.slug === slug);
    if (data !== null) {
      setProject(data[0]);
    }
  }, [slug]);

  return (
    <motion.section
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ duration: 0.5 }}
      className="single-works"
      id="single-works"
    >
      {project !== null && (
        <div>
          <section className={`${slug} padding`} id="single-cover">
            <p className="proj-title">{project.title}</p>
            {project.link && (
              <div className="link-container">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  className="link-to-proj"
                  style={{ display: "inline-block" }}
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  Live Site
                </motion.a>
              </div>
            )}

            <h2>{project.description}</h2>
            <p>{project.type}</p>
            <div className="screenshot-container">
              <img
                className={`${slug} screenshot`}
                src={project.screenshot}
                alt="project screenshot"
              />
            </div>
            <div
              style={{ display: isOpen ? "none" : "block" }}
              className="arrow bounce"
            >
              <a className="fa fa-arrow-down fa-2x" href="#single-info"></a>
            </div>
          </section>
          <section className="single-info" id="single-info">
            <motion.div
              whileInView="visible"
              initial="hiddenRight"
              variants={slideInVariants}
              className="overview padding"
            >
              <h4>Overview</h4>

              <p>{project.summary}</p>
            </motion.div>
            <div className="year-skills-components padding">
              <motion.div
                whileInView="visible"
                initial="hiddenLeft"
                variants={slideInVariants}
                className="year-skills padding"
              >
                <div className="year padding">
                  <h4>Year</h4>
                  <p>{project.year}</p>
                </div>
                <div className="skills-list padding">
                  <h4>Skills</h4>
                  <ul>
                    {project.skillsUsed.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                whileInView="visible"
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
            <motion.span
              className="padding see-more"
              style={{ display: "inline-block", color: "#ffffff" }}
              whileHover={{
                scale: 1.1,
                color: "#ffffff",
              }}
            >
              <a
                className="see-more-btn"
                href="#see-more-project"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? "See Less " : "See More"}
              </a>
            </motion.span>
            {isVisible ? <MoreInfo /> : ""}
          </section>
        </div>
      )}
    </motion.section>
  );
}

export default SingleWorks;

function MoreInfo() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [isVisible, setIsVisible] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const isTablet = useMediaQuery({
    query: "(min-width: 700px)",
  });

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
            className="design-div padding"
          >
            <h4>Concept and Design</h4>
            <p>{project.design}</p>

            <section className={`${slug} screen-pic-container`}>
              {project.sitePics.map((project, index) => (
                <div key={index}>
                  <img
                    className="screen-pics"
                    src={project}
                    alt="project screenshot"
                  />
                </div>
              ))}
            </section>
          </motion.div>
          <h4 className="colors-title">Color Pallette</h4>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={spinInVariants}
            className="all-color-blocks"
          >
            {project.colorBlocks.map((project, index) => (
              <div key={index}>
                <img
                  className="color-block-img"
                  src={project.block}
                  alt="color pallete images"
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
            <h4 className="padding">Development</h4>
            <p className="padding">{project.development}</p>
          </motion.div>
          <div className="see-other-projects">
            {isTablet ? (
              <Marquee duration={20000} height="7rem" gradient={false}>
                <h4 className="links-to">More Projects</h4>
              </Marquee>
            ) : (
              <h4 className="links-to">More Projects</h4>
            )}
            <ul className="padding">
              {SliderData.map((project, index) => (
                <motion.li
                  whileHover={{
                    scale: 1.2,
                  }}
                  key={index}
                >
                  <motion.a
                    style={{ color: "#ffffff" }}
                    whileHover={{
                      color: "$pink",
                    }}
                    href={`/${project.slug}`}
                  >
                    {project.title}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

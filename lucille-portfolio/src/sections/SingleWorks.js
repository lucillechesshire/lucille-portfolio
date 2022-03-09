import React, { useEffect, useState } from "react";
import { allProjects } from "../components/projectData";
import { useParams } from "react-router-dom";
import { SliderData } from "../components/SliderData";
import { Link } from "react-scroll";

function SingleWorks() {
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
    <section className="single-works" id="single-works">
      {project !== null && (
        <div>
          <section className={slug}>
            <p>{project.title}</p>
            <h2>{project.description}</h2>
            <p>{project.type}</p>
            <img class="screenshot" src={project.screenshot} />
            <div className="arrow bounce">
              <a className="fa fa-arrow-down fa-2x" href="#single-info"></a>
            </div>
          </section>
          <section className="single-info" id="single-info">
            <div className="overview">
              <h4>Overview</h4>
              <p>{project.summary}</p>
            </div>
            <div className="year-skills-components">
              <div className="year-skills">
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
              </div>
              <div className="components-list">
                <h4>Components</h4>
                <ul>
                  {project.components.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              className="see-more-btn"
              href="#see-more-project"
              onClick={() => setIsVisible(!isVisible)}
            >
              See More
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

  useEffect(() => {
    const data = SliderData.filter((item) => item.slug === slug);
    if (data !== null) {
      setProject(data[0]);
    }
  }, [slug]);

  return (
    <div>
      {project != null && (
        <div className="see-more-project" id="see-more-project">
          <div className="design-div">
            <h3>Concept and Design</h3>
            <p>{project.design}</p>
            {project.sitePics.map((project, index) => (
              <div>
                <img className="screen-pics" key={index} src={project} />
              </div>
            ))}
          </div>
          <h3 className="colors-title">Color Pallette</h3>
          <div className="all-color-blocks">
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
          </div>
          <div className="dev-div">
            <h3>Development</h3>
            <p>{project.development}</p>
          </div>
        </div>
      )}
    </div>
  );
}

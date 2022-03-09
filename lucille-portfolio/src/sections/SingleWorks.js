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
    <main className="single-works" id="single-works">
      {project !== null && (
        <div>
          <h2>{project.title}</h2>
          <img src={project.image} />
          <h3>Project Summary</h3>
          <p>{project.summary}</p>
          <div className="year-and-skills">
            <h4>Year</h4>
            <p>{project.year}</p>
            <h4>Skills</h4>
            <div className="skills-list">
              <ul>
                {project.skillsUsed.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
          <h4>Components</h4>
          <div className="components-list">
            <ul>
              {project.components.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
          <a href="#see-more-project" onClick={() => setIsVisible(!isVisible)}>
            See More
          </a>
          {isVisible ? <MoreInfo /> : ""}
        </div>
      )}
    </main>
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
          <h3>Concept and Design</h3>
          <p>{project.design}</p>
          <h3>Development</h3>
          <p>{project.development}</p>
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
        </div>
      )}
    </div>
  );
}
